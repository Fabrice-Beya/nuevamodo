import { SITE_DESCRIPTION, SITE_NAME, CONTACT, COMPANY } from "@/lib/constants";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: COMPANY.legalName,
    description: SITE_DESCRIPTION,
    foundingDate: COMPANY.founded,
    logo: "/logo.png",
    url: "https://nuevamodo.co.za",
    email: CONTACT.email,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "50 Electron Avenue, Unit 24 Electron, Exchange Isando",
      addressLocality: "Kempton Park",
      postalCode: "1609",
      addressCountry: "ZA",
    },
    areaServed: "South Africa",
    sameAs: ["https://www.facebook.com", "https://www.instagram.com"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
