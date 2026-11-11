import { breadcrumbList, type Crumb } from "@/lib/seo";

/** BreadcrumbList structured data for the trail a page shows. Pass the crumbs exactly as shown. */
export function BreadcrumbJsonLd({ crumbs, path }: { crumbs: Crumb[]; path: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList(crumbs, path)) }}
    />
  );
}
