import React from "react";
import { useParams, Link } from "react-router-dom";
import { Phone, ArrowLeft, Star, Briefcase } from "lucide-react";
import { WORKERS } from "../data2";

const WorkerDetails: React.FC = () => {
  const { id } = useParams();

  const worker = WORKERS.find((w) => w.id === id);

  if (!worker) {
    return (
      <div className="p-20 text-center font-bold">
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

  return (
    <div className="bg-[#F8FAFC] min-h-screen p-6 md:p-12 font-['Poppins']">

      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <Link
          to="/household-works"
          className="flex items-center gap-2 text-gray-700 mb-8 hover:text-[#4F46E5]"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        {/* Worker Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Image */}
            <img
              src={worker.image}
              alt={worker.name}
              className="w-40 h-40 rounded-full object-cover border"
            />

            {/* Info */}
            <div className="text-center md:text-left">

              <h1 className="text-3xl font-bold text-gray-900">
                {worker.name}
              </h1>

              <p className="text-lg text-gray-500 mt-1">
                {worker.role}
              </p>

              {/* Experience */}
              <div className="flex items-center gap-2 mt-4 text-gray-600 justify-center md:justify-start">
                <Briefcase size={18} />
                <span>Experience: {worker.experience}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2 text-yellow-500 justify-center md:justify-start">
                <Star size={18} fill="currentColor" />
                <span className="text-gray-700">{worker.rating}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 mt-4 text-gray-600 justify-center md:justify-start">
                <Phone size={18} />
                <span>{worker.phone}</span>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={whatsappContact}
                className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition"
              >
                Contact on WhatsApp
              </button>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default WorkerDetails;