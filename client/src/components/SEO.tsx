import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export function SEO({ title, description, canonicalUrl, schema }: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = `${title} | Райски Газ София`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update canonical link
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Update OpenGraph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Cleanup schema script if any
    let existingSchema = document.querySelector('script[id="seo-schema"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new schema
    if (schema) {
      const script = document.createElement('script');
      script.id = 'seo-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      if (existingSchema) existingSchema.remove();
    };
  }, [title, description, canonicalUrl, schema]);

  return null;
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Райски Газ София 24/7",
  "image": "https://replit.com/public/images/opengraph.png",
  "telephone": "0886401804",
  "areaServed": {
    "@type": "City",
    "name": "Sofia"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sofia",
    "addressCountry": "BG"
  },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
};
