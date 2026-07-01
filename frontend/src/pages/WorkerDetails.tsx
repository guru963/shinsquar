import React from "react";
import { useParams, Link } from "react-router-dom";
import { WORKERS } from "../data2";

import SEO from "../components/SEO";

const WorkerDetails: React.FC = () => {
  const { id } = useParams();
  const worker = WORKERS.find((w) => w.id === id);

  if (!worker) {
    return (
      <div className="p-20 text-center font-bold text-display-lg">
        Worker Not Found
      </div>
    );
  }

  const whatsappContact = () => {
    const phone = worker.phone.replace(/\D/g, "");
    const message = `Hello ${worker.name}, I need your ${worker.role} service.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const workerSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": worker.name,
    "jobTitle": worker.role,
    "telephone": worker.phone,
    "url": `https://locall.in/household-workers/${worker.id}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Durg",
      "addressRegion": "Chhattisgarh",
      "addressCountry": "IN",
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": worker.role,
      "occupationLocation": {
        "@type": "City",
        "name": "Durg, Chhattisgarh",
      },
      "experienceRequirements": worker.experience,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": worker.rating,
      "bestRating": 5,
      "ratingCount": 10,
    },
  };

  return (
    <div className="bg-background min-h-screen pb-24 px-margin-mobile md:px-margin-desktop pt-24 text-left">
      <SEO
        title={`${worker.name} — ${worker.role} in Durg`}
        description={`Hire ${worker.name}, a verified ${worker.role} in Durg, Chhattisgarh. Rating: ${worker.rating}/5.0 with ${worker.experience} of experience. Contact via WhatsApp.`}
        schema={workerSchema}
        canonical={`https://locall.in/household-workers/${worker.id}`}
      />
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-12">
          <Link
            to="/household-works"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-bold transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] font-bold">arrow_back</span>
            Back to Workers
          </Link>
        </div>

        {/* Worker Details Card */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] border border-outline-variant/30 shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Image */}
            <img
              src={worker.image}
              alt={worker.name}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white shadow-lg"
            />

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-display-lg md:text-display-xl font-display-xl text-on-surface mb-2">
                {worker.name}
              </h1>

              <div className="text-body-lg text-primary font-bold tracking-wider uppercase px-3 py-1 bg-primary/5 rounded-full inline-block mb-6">
                {worker.role}
              </div>

              <div className="space-y-4">
                {/* Experience */}
                <div className="flex items-center justify-center md:justify-start gap-3 text-body-lg text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-[22px] text-primary">work</span>
                  <span>Experience: {worker.experience}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center md:justify-start gap-3 text-body-lg text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-[22px] text-amber-500" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span>Rating: {worker.rating} / 5.0</span>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-center md:justify-start gap-3 text-body-lg text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-[22px] text-primary">call</span>
                  <span>{worker.phone}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 flex justify-center md:justify-start">
                <button
                  onClick={whatsappContact}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-full transition-all flex items-center gap-2 text-body-md shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined">forum</span>
                  Contact on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDetails;