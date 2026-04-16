import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    logo: "/logo.png",
    url: "https://nuevamodo.co.za",
    email: "info@nuevamodo.co.za",
    telephone: "+1 (555) 000-0000",
    areaServed: "Industrial and commercial regions",
    sameAs: ["https://www.linkedin.com"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
