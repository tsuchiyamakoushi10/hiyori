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

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "トップ", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

type JobInput = {
  title: string;
  description: string;
  datePosted: string;
  validThrough: string;
  salary: { monthly: number; hourly: number };
};

// Googleしごと検索用。常勤（月給）とパート（時給）をまとめて1件として出す
export function jobPostingJsonLd(job: JobInput) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    validThrough: `${job.validThrough}T23:59:59+09:00`,
    employmentType: ["FULL_TIME", "PART_TIME"],
    hiringOrganization: {
      "@type": "Organization",
      name: site.operatorShort,
      sameAs: siteUrl,
      logo: `${siteUrl}/images/logo/logo-vertical.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        postalCode: site.postalCode,
        addressRegion: site.addressParts.region,
        addressLocality: site.addressParts.locality,
        streetAddress: site.addressParts.street,
        addressCountry: "JP",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "JPY",
      value: { "@type": "QuantitativeValue", minValue: job.salary.monthly, unitText: "MONTH" },
    },
    // パートの時給は説明文に含める（baseSalary は1つの単位しか持てないため）
  };
}
