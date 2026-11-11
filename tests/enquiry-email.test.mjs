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
  HONEYPOT_FIELD,
  LIMITS,
  buildContactEmail,
  parseContact,
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

const good = { name: "Pat", email: "pat@example.com", subject: "Hello", message: "Hi" };

test("name and subject are capped at 100 characters", () => {
  assert.deepEqual(LIMITS, { name: 100, subject: 100, message: 5000 });
  assert.equal(parseContact({ ...good, name: "a".repeat(100), subject: "b".repeat(100) }).kind, "ok");
  const longName = parseContact({ ...good, name: "a".repeat(101) });
  assert.equal(longName.kind, "error");
  assert.match(longName.error, /Name is too long \(max 100 characters\)/);
  const longSubject = parseContact({ ...good, subject: "b".repeat(101) });
  assert.equal(longSubject.kind, "error");
  assert.match(longSubject.error, /Subject is too long/);
  // Trimmed before the check.
  assert.equal(parseContact({ ...good, name: `  ${"a".repeat(100)}  ` }).kind, "ok");
});

test("the message is capped at 5,000 characters", () => {
  assert.equal(LIMITS.message, 5000);
  assert.equal(parseContact({ ...good, message: "m".repeat(5000) }).kind, "ok");
  const longMessage = parseContact({ ...good, message: "m".repeat(5001) });
  assert.equal(longMessage.kind, "error");
  assert.match(longMessage.error, /Message is too long \(max 5,000 characters\)/);
  // Trimmed before the check, like the other fields.
  assert.equal(parseContact({ ...good, message: `  ${"m".repeat(5000)}  ` }).kind, "ok");
});

test("required fields and the reply-to address are still checked", () => {
  assert.deepEqual(parseContact(good), { kind: "ok", input: good });
  assert.deepEqual(parseContact({ ...good, subject: undefined }), { kind: "ok", input: { ...good, subject: "" } });
  for (const missing of ["name", "email", "message"]) {
    assert.deepEqual(parseContact({ ...good, [missing]: "  " }), { kind: "error", error: "Missing required fields." }, missing);
  }
  assert.deepEqual(parseContact({ ...good, email: "a@b.com, c@d.com" }), { kind: "error", error: "Invalid email address." });
  assert.equal(parseContact(null).kind, "error");
  assert.equal(parseContact({ ...good, name: 42 }).kind, "error");
});

test("a filled honeypot is answered ok and nothing is sent", () => {
  assert.equal(HONEYPOT_FIELD, "website");
  assert.deepEqual(parseContact({ ...good, website: "https://spam.example" }), { kind: "honeypot" });
  // Even an otherwise invalid body: the bot gets an ok and learns nothing.
  assert.deepEqual(parseContact({ website: "x" }), { kind: "honeypot" });
  assert.equal(parseContact({ ...good, website: "" }).kind, "ok");
  assert.equal(parseContact({ ...good, website: "   " }).kind, "ok");

  const route = read("app/api/contact/route.ts");
  const honeypotAt = route.indexOf('if (parsed.kind === "honeypot") return NextResponse.json({ success: true });');
  assert.ok(honeypotAt > 0, "the route answers a honeypot with ok");
  assert.ok(honeypotAt < route.indexOf("new Resend("), "and returns before any mail client is made");
  assert.ok(honeypotAt < route.indexOf("resend.emails.send("));
});

test("the form carries the hidden honeypot and the same limits", () => {
  const form = read("components/ContactForm.tsx");
  assert.match(form, new RegExp(`const HONEYPOT_FIELD = "${HONEYPOT_FIELD}";`));
  assert.match(form, new RegExp(`const LIMITS = \{ name: ${LIMITS.name}, subject: ${LIMITS.subject}, message: ${LIMITS.message} \};`));
  assert.match(form, /<div aria-hidden="true" className="absolute -left-\[10000px\][^"]*">/);
  assert.match(form, /name=\{HONEYPOT_FIELD\} tabIndex=\{-1\} autoComplete="off"/);
  assert.match(form, /\[HONEYPOT_FIELD\]: \(form\.elements\.namedItem\(HONEYPOT_FIELD\)/);
  assert.match(form, /maxLength=\{LIMITS\.name\}/);
  assert.match(form, /maxLength=\{LIMITS\.subject\}/);
  assert.match(form, /maxLength=\{LIMITS\.message\}/);
  assert.doesNotMatch(form, /from "@\/lib\/contact"/, "the client form does not bundle lib/contact.ts");
});

test("no auto-reply: the route sends one email, to DELIVERY_EMAIL only", () => {
  const route = read("app/api/contact/route.ts");
  assert.equal(route.match(/resend\.emails\.send\(/g)?.length, 1, "exactly one send");
  assert.equal(route.match(/\.send\(|\.batch/g)?.length, 1, "no other send or batch");
  assert.doesNotMatch(route, /to:\s/, "the route sets no recipient of its own");
  const mail = buildContactEmail({ name: "Eve <eve@x.com>", email: "victim@example.com", subject: "Buy now", message: "spam" });
  assert.equal(mail.to, DELIVERY_EMAIL, "the only recipient is our inbox");
  assert.notEqual(mail.to, "victim@example.com");
  // The typed-in address is only ever the reply-to of the mail to us, never a recipient.
  assert.equal(mail.replyTo, "victim@example.com");
});
