import { site } from "@/content/site";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function medicalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    alternateName: site.nameEn,
    url: siteUrl,
    logo: `${siteUrl}/images/logo/logo-vertical.png`,
    telephone: `+81-${site.tel.slice(1)}`,
    faxNumber: `+81-${site.fax.slice(1)}`,
    address: {
      "@type": "PostalAddress",
      postalCode: site.postalCode,
      addressRegion: site.addressParts.region,
      addressLocality: site.addressParts.locality,
      streetAddress: site.addressParts.street,
      addressCountry: "JP",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: ["さいたま市北区", "さいたま市西区", "さいたま市大宮区", "上尾市", "伊奈町"].map((name) => ({
      "@type": "City",
      name,
    })),
    parentOrganization: { "@type": "Organization", name: site.operatorShort },
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON 内の "<" をエスケープして script タグの早期終了を防ぐ
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
