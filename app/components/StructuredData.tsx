export default function StructuredData() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://orienttechusa.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "AutoPartsStore"],
    "@id": `${siteUrl}/#organization`,
    name: "Orient Tech USA, Inc.",
    alternateName: [
      "Orient Tech, SA de CV",
      "Orient Tech Group",
      "Orient Tech",
    ],
    legalName: "Orient Tech, SA de CV",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/opengraph-image`,
    description:
      "Orient Tech is a vertically integrated automotive spare parts and aftermarket solutions company, providing OEM replacement parts, commercial vehicle components, and supply chain logistics across North America and global markets.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alliance DFW Logistics Corridor",
      addressLocality: "Dallas-Fort Worth",
      addressRegion: "TX",
      postalCode: "75201",
      addressCountry: "US",
    },
    telephone: "+1-800-555-0198",
    email: "infor@orienttech.us",
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "Mexico",
      },
      {
        "@type": "Country",
        name: "Qatar",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      {
        "@type": "Country",
        name: "Oman",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Roopesh Mohandas",
      jobTitle: "Managing Director",
    },
    sameAs: [
      "https://www.linkedin.com/company/orient-tech",
      "https://twitter.com/OrientTechUSA",
    ],
    knowsAbout: [
      "Automotive Spare Parts",
      "Commercial Fleet Maintenance",
      "Aftermarket Components",
      "Automotive Supply Chain Logistics",
      "Heavy Vehicle Braking & Suspensions",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Orient Tech USA",
    description: "Automotive Spare Parts & Aftermarket Solutions",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-US",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Automotive Spare Parts Distribution",
        description:
          "Full catalog coverage across passenger, commercial, and heavy-duty vehicles including engines, braking, transmissions, and electrical components.",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "Service",
        position: 2,
        name: "Warehouse & Logistics Solutions",
        description:
          "High-throughput modern distribution centers equipped with intelligent inventory controls and rapid dispatch corridors.",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "Service",
        position: 3,
        name: "Automotive Commercial Partnerships",
        description:
          "Strategic commercial supply agreements for tier-1 distributors, municipal transport authorities, and fleet operators.",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
