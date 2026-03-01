import { Helmet } from "react-helmet-async";

const SITE_NAME = "Райски Газ София 24/7";
const configuredSiteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim();
const SITE_URL = (configuredSiteUrl || "https://raiskigazsofia.bg").replace(/\/$/, "");
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogType?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  schema,
  noindex = false,
}: SEOProps) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large"} />
      <link rel="alternate" hrefLang="bg-BG" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* OpenGraph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="bg_BG" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
}

/* ── Reusable Schemas ── */

export const localBusinessSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Райски Газ София 24/7",
  "url": "https://raiskigazsofia.bg",
  "telephone": "+359886401804",
  "areaServed": {
    "@type": "City",
    "name": "София",
    "sameAs": "https://bg.wikipedia.org/wiki/%D0%A1%D0%BE%D1%84%D0%B8%D1%8F",
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "София",
    "addressRegion": "София-град",
    "addressCountry": "BG",
  },
  "priceRange": "€€",
  "currenciesAccepted": "EUR, BGN",
  "paymentAccepted": "Cash",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    "opens": "00:00",
    "closes": "23:59",
  },
  "description":
    "Денонощна доставка на райски газ в София — флакони и балони Exotic Whip, Instant Whip, Carbon Whip. Безплатна експресна доставка до 20 минути.",
};

export const websiteSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Райски Газ София 24/7",
  "url": "https://raiskigazsofia.bg",
  "inLanguage": "bg",
};

export function buildProductSchema(product: {
  name: string;
  price: string;
  image: string;
  description?: string;
}) {
  const numericPrice = product.price
    .replace(/[^\d,.]/g, "")
    .replace(",", ".");

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image.startsWith("http")
      ? product.image
      : `https://raiskigazsofia.bg${product.image}`,
    "description":
      product.description ||
      `Висококачествен райски газ ${product.name} с безплатна експресна доставка в София.`,
    "brand": {
      "@type": "Brand",
      "name": product.name.split(" ")[0],
    },
    "offers": {
      "@type": "Offer",
      "url": "https://raiskigazsofia.bg/products",
      "priceCurrency": "EUR",
      "price": numericPrice,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Райски Газ София 24/7",
      },
    },
  };
}
