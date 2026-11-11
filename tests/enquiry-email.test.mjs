// Enquiry addresses and the contact email. Run with: node --test tests/*.test.mjs
// Nothing here sends mail: the email is built and inspected, and source files are read as text.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  DELIVERY_EMAIL,
  DISPLAY_EMAIL,
  ENQUIRY_FROM,
  buildContactEmail,
  cleanSubjectPart,
  escapeHtml,
  isPlainEmail,
  logSendError,
} from "../lib/contact.ts";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const read = (rel) => readFileSync(join(ROOT, rel), "utf8");
const EMAIL_RE = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.(ts|tsx|js|mjs|json)$/.test(name)) out.push(p);
  }
  return out;
}

test("the two addresses", () => {
  assert.equal(DELIVERY_EMAIL, "damian@churchtownmedia.co.uk");
  assert.equal(DISPLAY_EMAIL, "hello@seftoncoast.network");
});

test("enquiry mail is sent from the site's own verified domain", () => {
  assert.match(ENQUIRY_FROM, /<noreply@seftoncoastwildlife\.co\.uk>$/);
});

test("contact email goes to DELIVERY_EMAIL with reply-to set to the enquirer", () => {
  const mail = buildContactEmail({ name: "Pat", email: "pat@example.com", subject: "Hello", message: "Hi" });
  assert.equal(mail.to, DELIVERY_EMAIL);
  assert.equal(mail.replyTo, "pat@example.com");
  assert.equal(mail.from, ENQUIRY_FROM);
});

test("every user value in the email HTML is escaped", () => {
  const mail = buildContactEmail({
    name: '<b>Pat</b> & "co"',
    email: "pat@example.com",
    subject: "<script>alert(1)</script>",
    message: "<img src=x onerror=alert(1)> it's",
  });
  assert.ok(!mail.html.includes("<script>"));
  assert.ok(!mail.html.includes("<img"));
  assert.ok(!mail.html.includes("<b>Pat</b>"));
  assert.ok(mail.html.includes("&lt;b&gt;Pat&lt;/b&gt; &amp; &quot;co&quot;"));
  assert.ok(mail.html.includes("&lt;script&gt;alert(1)&lt;/script&gt;"));
  assert.ok(mail.html.includes("it&#39;s"));
  assert.equal(escapeHtml(`<>&"'`), "&lt;&gt;&amp;&quot;&#39;");
});

test("CR and LF are stripped from the subject line", () => {
  const mail = buildContactEmail({ name: "Pat", email: "pat@example.com", subject: "Hi\r\nBcc: x@example.com", message: "m" });
  assert.ok(!/[\r\n]/.test(mail.subject));
  assert.equal(mail.subject, "[Sefton Coast Wildlife] Hi Bcc: x@example.com");
  const noSubject = buildContactEmail({ name: "Pat\nSmith", email: "pat@example.com", message: "m" });
  assert.ok(!/[\r\n]/.test(noSubject.subject));
  assert.equal(cleanSubjectPart("a\r\n\r\nb"), "a b");
});

test("reply-to must be one plain address", () => {
  assert.ok(isPlainEmail("pat@example.com"));
  for (const bad of ["pat@example.com, eve@example.com", "Pat <pat@example.com>", "pat@example.com\nBcc: e@x.com", "pat @example.com", "a".repeat(250) + "@x.com", "", "nope"]) {
    assert.equal(isPlainEmail(bad), false, bad);
  }
  assert.throws(() => buildContactEmail({ name: "Pat", email: "a@b.com, c@d.com", message: "m" }));
});

test("a failed send is logged with the error's name and message only", () => {
  const lines = [];
  logSendError({ name: "validation_error", message: "The domain is not verified" }, (...a) => lines.push(a.join(" ")));
  assert.equal(lines.length, 1);
  assert.match(lines[0], /validation_error/);
  assert.match(lines[0], /The domain is not verified/);
  const thrown = [];
  logSendError(new TypeError("fetch failed"), (...a) => thrown.push(a.join(" ")));
  assert.match(thrown[0], /TypeError: fetch failed/);
});

test("the contact route uses the shared builder, checks the result and logs errors", () => {
  const src = read("app/api/contact/route.ts");
  assert.match(src, /from "@\/lib\/contact"/);
  assert.match(src, /const \{ error \} = await resend\.emails\.send\(buildContactEmail\(/);
  assert.match(src, /if \(error\) \{\s*logSendError\(error\)/);
  assert.deepEqual(src.match(EMAIL_RE) ?? [], [], "no hard-coded address in the route");
});

test("the builder's `to` is DELIVERY_EMAIL", () => {
  const src = read("lib/contact.ts");
  assert.match(src, /to: DELIVERY_EMAIL,/);
});

test("pages print DISPLAY_EMAIL and no other address of ours", () => {
  for (const rel of ["app/advertise/page.tsx", "app/disclosure/page.tsx", "app/privacy/page.tsx", "app/terms/page.tsx"]) {
    const src = read(rel);
    assert.match(src, /import \{[^}]*DISPLAY_EMAIL[^}]*\} from "@\/lib\/contact"/, rel);
    assert.match(src, /mailto:\$\{DISPLAY_EMAIL\}/, rel);
    assert.deepEqual(src.match(EMAIL_RE) ?? [], [], `${rel} has a hard-coded address`);
  }
  for (const rel of ["components/ContactForm.tsx", "app/contact/page.tsx", "components/Footer.tsx"]) {
    const ours = (read(rel).match(EMAIL_RE) ?? []).filter((a) => /seftoncoast|churchtownmedia/.test(a));
    assert.deepEqual(ours, [], rel);
  }
});

test("only lib/contact.ts holds our addresses in app/, lib/ and components/", () => {
  const files = ["app", "lib", "components"].flatMap((d) => walk(join(ROOT, d)));
  const offenders = [];
  for (const f of files) {
    if (/[\\/]lib[\\/]contact\.ts$/.test(f)) continue;
    const hits = (readFileSync(f, "utf8").match(EMAIL_RE) ?? []).filter((a) => /@(seftoncoast\.network|churchtownmedia\.co\.uk|seftoncoastwildlife\.co\.uk)$/i.test(a));
    if (hits.length) offenders.push(`${f}: ${hits.join(", ")}`);
  }
  assert.deepEqual(offenders, []);
});

test("no route can fall back to Resend's test sender", () => {
  const files = ["app", "lib"].flatMap((d) => walk(join(ROOT, d)));
  const offenders = files.filter((f) => readFileSync(f, "utf8").includes("resend.dev"));
  assert.deepEqual(offenders, []);
});
