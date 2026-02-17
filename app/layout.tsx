import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2B5F83",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lucamedtech.no"),
  title: "Luca MedTech — Diabetesdata som bare flyter",
  description:
    "Vi kobler blodsukkersensorer (CGM) direkte til sykehusjournal — så klinikere slipper å kopiere, og familier med type 1-diabetes alltid har oversikt.",
  alternates: {
    canonical: "https://lucamedtech.no",
    languages: {
      "nb": "https://lucamedtech.no",
      "x-default": "https://lucamedtech.no",
    },
  },
  openGraph: {
    title: "Luca MedTech — Diabetesdata som bare flyter",
    description: "Norges første CGM-til-journal-plattform",
    url: "https://lucamedtech.no",
    siteName: "Luca MedTech",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luca MedTech — Diabetesdata som bare flyter",
    description: "Norges første CGM-til-journal-plattform",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "CGM",
    "blodsukker",
    "diabetes type 1",
    "DIPS",
    "journalsystem",
    "helsedata",
    "medisinsk teknologi",
    "Norge",
    "continuous glucose monitoring",
  ],
  authors: [{ name: "Steffen Fonvig" }],
  creator: "Luca MedTech AS",
  publisher: "Luca MedTech AS",
  applicationName: "Luca MedTech",
  category: "Medical Technology",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://lucamedtech.no/#organization",
  name: "Luca MedTech AS",
  url: "https://lucamedtech.no",
  logo: "https://lucamedtech.no/icon-lg",
  description:
    "Norsk medisinteknologisk selskap som kobler blodsukkersensorer direkte til sykehusjournal.",
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "Steffen Fonvig",
    jobTitle: "Grunnlegger",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hokksund",
    addressCountry: "NO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "steffen@lucamedtech.no",
    telephone: "+47-466-333-85",
    contactType: "sales",
    availableLanguage: ["Norwegian", "English"],
  },
  knowsAbout: [
    "Continuous Glucose Monitoring",
    "CGM",
    "Diabetes",
    "DIPS",
    "Digital Health",
    "Medical Device Software",
    "FHIR",
    "HelseID",
  ],
  sameAs: [
    "https://www.facebook.com/lucamedtech",
    "https://www.linkedin.com/company/luca-medtech-as/",
  ],
  areaServed: {
    "@type": "Country",
    name: "Norway",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://lucamedtech.no/#website",
  url: "https://lucamedtech.no",
  name: "Luca MedTech",
  description:
    "Diabetesdata som bare flyter — fra sensor til journal, automatisk.",
  publisher: { "@id": "https://lucamedtech.no/#organization" },
  inLanguage: "nb",
};

const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListOrder: "ItemListUnordered",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Luca Trygg hverdag",
        description:
          "Samlet oversikt over barnets blodsukker. Del trygt med besteforeldre, barnehage og skole. Ha data klar til legetimen.",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NOK",
          description: "Alltid gratis for familier og pårørende",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Luca Barnehage & skole",
        description:
          "Trafikklys-visning for blodsukker. Enkle handlingsinstrukser tilpasset barnets behandlingsplan. Ingen medisinsk bakgrunn nødvendig.",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Luca Sykehusintegrasjon",
        description:
          "CGM-data skrives automatisk inn i pasientjournalen. Klinikeren ser alt i DIPS uten å forlate systemet.",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
      },
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://lucamedtech.no/#webpage",
  url: "https://lucamedtech.no",
  name: "Luca MedTech — Diabetesdata som bare flyter",
  description:
    "Vi kobler blodsukkersensorer (CGM) direkte til sykehusjournal — så klinikere slipper å kopiere, og familier med type 1-diabetes alltid har oversikt.",
  isPartOf: { "@id": "https://lucamedtech.no/#website" },
  about: { "@id": "https://lucamedtech.no/#organization" },
  datePublished: "2025-12-01",
  dateModified: "2026-02-17",
  inLanguage: "nb",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "#problemet", "#losningen", "#om-oss"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site information" />
      </head>
      <body className={`${dmSerif.variable} ${dmSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productsJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
