import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "../seo/routes";
import { buildAbsoluteUrl } from "../seo/schema";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  canonicalPath?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  canonicalPath,
  structuredData,
  noIndex,
}) => {
  const location = useLocation();
  const structuredDataJson = JSON.stringify(structuredData ?? null);

  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const fullUrl = buildAbsoluteUrl(canonicalPath ?? location.pathname);
    const fullImage = buildAbsoluteUrl(image ?? DEFAULT_OG_IMAGE);

    // Update Title
    document.title = fullTitle;

    const updateMeta = (selector: string, content: string | null) => {
      const meta = document.querySelector(selector);
      if (meta && content) {
        meta.setAttribute("content", content);
      }
    };

    const updateLink = (selector: string, href: string | null) => {
      const link = document.querySelector(selector);
      if (link && href) {
        link.setAttribute("href", href);
      }
    };

    // Update Meta Description
    updateMeta('meta[name="description"]', description);

    // Update Canonical URL
    updateLink('link[rel="canonical"]', fullUrl);

    // Update OpenGraph tags
    updateMeta('meta[property="og:title"]', fullTitle);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[property="og:url"]', fullUrl);
    updateMeta('meta[property="og:image"]', fullImage);

    // Update Twitter tags
    updateMeta('meta[property="twitter:title"]', fullTitle);
    updateMeta('meta[property="twitter:description"]', description);
    updateMeta('meta[property="twitter:url"]', fullUrl);
    updateMeta('meta[property="twitter:image"]', fullImage);

    if (noIndex !== undefined) {
      const robotsContent = noIndex ? "noindex, nofollow" : "index, follow";
      let robotsMeta = document.querySelector('meta[name="robots"]');
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.setAttribute("name", "robots");
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute("content", robotsContent);
    }

    const existingStructuredData = document.querySelectorAll(
      'script[data-seo-structured="true"]'
    );
    existingStructuredData.forEach((script) => script.remove());

    const dataList = structuredData
      ? Array.isArray(structuredData)
        ? structuredData
        : [structuredData]
      : [];

    dataList.forEach((data) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-structured", "true");
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });

    document.dispatchEvent(new Event("seo-rendered"));

  }, [
    title,
    description,
    canonicalPath,
    image,
    location.pathname,
    noIndex,
    structuredDataJson,
  ]);

  return null; // This component doesn't render any UI
};

export default SEO;
