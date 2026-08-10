import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, schema, canonical }) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title.includes("Locall") || title.includes("Locall") ? title : `${title} | Locall`;
    const fullUrl = canonical ?? `https://locall.co.in${location.pathname}`;

    // Update Title
    document.title = fullTitle;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update Canonical URL
    const canonicalLink = document.getElementById("canonical-link");
    if (canonicalLink) {
      canonicalLink.setAttribute("href", fullUrl);
    }

    // Update OpenGraph tags
    const ogTitle = document.getElementById("og-title");
    if (ogTitle) ogTitle.setAttribute("content", fullTitle);

    const ogDescription = document.getElementById("og-description");
    if (ogDescription) ogDescription.setAttribute("content", description);

    // Update Twitter tags
    const twitterTitle = document.getElementById("twitter-title");
    if (twitterTitle) twitterTitle.setAttribute("content", fullTitle);

    const twitterDescription = document.getElementById("twitter-description");
    if (twitterDescription) twitterDescription.setAttribute("content", description);

    // Inject JSON-LD schema
    const schemaId = "dynamic-schema-ld-json";
    const existing = document.getElementById(schemaId);
    if (existing) existing.remove();

    if (schema) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const toRemove = document.getElementById(schemaId);
      if (toRemove) toRemove.remove();
    };
  }, [title, description, schema, canonical, location.pathname]);

  return null;
};

export default SEO;
