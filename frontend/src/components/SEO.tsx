import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = `${title} | Shin Square`;
    const fullUrl = `https://shinsquare.com${location.pathname}`;

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

  }, [title, description, location.pathname]);

  return null; // This component doesn't render any UI
};

export default SEO;
