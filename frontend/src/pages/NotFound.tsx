import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound: React.FC = () => {
  return (
    <main
      className="min-h-[85vh] flex items-center justify-center py-20 px-6 md:px-12 relative overflow-hidden bg-background"
      style={{
        background: "#FFFFFF",
      }}
    >
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist. Return to Locall homepage to discover local shops, household workers, and deals in Durg."
      />

      <div className="max-w-lg w-full mx-auto text-center space-y-8 relative z-10">
        {/* 404 Number */}
        <h1
          className="text-[120px] md:text-[160px] font-extrabold leading-none tracking-tighter bg-[#2563EB] from-[#2563EB] to-[#FF6B00] bg-clip-text text-transparent select-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          404
        </h1>

        {/* Message */}
        <div className="space-y-3">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Page not found
          </h2>
          <p
            className="text-[#475569] text-base md:text-lg max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Looks like this page has wandered off. Let's get you back to
            discovering the best deals in your locality.
          </p>
        </div>

        {/* Back Home Button */}
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg cursor-pointer"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
