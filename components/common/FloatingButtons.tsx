"use client";

import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export default function FloatingButtons() {
  const handleWhatsAppClick = () => {
    // Using the main UAN number for WhatsApp
    const phoneNumber = "+923195000666";
    const message =
      "Hello! I would like to inquire about your travel services.";
    const whatsappUrl = `https://wa.me/923195000666`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    // Using the main UAN number for calls
    window.location.href = "tel:+923195000666";
  };

  return (
    <>
      {/* WhatsApp Button - Right Side */}
      <div className="fixed right-6 bottom-12 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="group bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 animate-pulse-glow"
          style={{
            boxShadow: "0 8px 32px rgba(34, 197, 94, 0.4)",
          }}
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp
            size={30}
            color="green"
            className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
          />
          {/* <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" /> */}

          {/* Tooltip */}
          {/* <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div> */}
        </button>
      </div>

      {/* Call Button - Left Side */}
      <div className="fixed left-6 bottom-12 z-50">
        <button
          onClick={handleCallClick}
          className="group bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 animate-pulse-glow"
          style={{
            boxShadow: "0 8px 32px rgba(59, 130, 246, 0.4)",
          }}
          aria-label="Call us now"
        >
          <Phone className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />

          {/* Tooltip */}
          {/* <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Call Now: +92 51 111 143 111
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
          </div> */}
        </button>
      </div>
    </>
  );
}
