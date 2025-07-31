"use client";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[var(--color-primary6)] via-gray-900 to-[var(--color-primary6)] text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[var(--color-primary4)] rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[var(--color-primary1)] rounded-full animate-float animate-delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-[var(--color-primary7)] rounded-full animate-float animate-delay-500"></div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-up">
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-black mb-6 gradient-text">
              Crown International Travels
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Your partner for expert travel services worldwide.
            </p>
            <div className="flex space-x-6">
              <div
                className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary4)] to-[var(--color-primary7)] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer hover-glow"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/CrownInternationalTravels",
                    "_blank"
                  )
                }
              >
                <span className="text-[var(--color-primary6)] font-bold text-lg">
                  fb
                </span>
              </div>
              <div
                className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary4)] to-[var(--color-primary7)] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer hover-glow"
                onClick={() =>
                  window.open("https://wa.me/923195000666", "_blank")
                }
              >
                <span className="text-[var(--color-primary6)] font-bold text-lg">
                  Wa
                </span>
              </div>
              <div
                className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary4)] to-[var(--color-primary7)] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer hover-glow"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/crowninternationaltravels",
                    "_blank"
                  )
                }
              >
                <span className="text-[var(--color-primary6)] font-bold text-lg">
                  in
                </span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right animate-delay-400">
            <h4 className="text-xl font-bold mb-6 text-[var(--color-primary1)]">
              Contact Info
            </h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center group">
                <MapPin className="w-6 h-6 mr-3 text-[var(--color-primary4)] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Rawalpindi & Karachi Offices</span>
              </div>
              <div className="flex items-center group">
                <Phone className="w-6 h-6 mr-3 text-[var(--color-primary4)] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">+92 319 5000666</span>
              </div>
              <div className="flex items-center group">
                <Mail className="w-6 h-6 mr-3 text-[var(--color-primary4)] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">info@crowntravel.com.pk</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-12 text-center text-gray-300 animate-fade-in-up animate-delay-600">
          <p className="text-lg">
            &copy; 2024 Crown International Travels (Pvt) Ltd. All rights
            reserved. | Privacy Policy | Terms of Service |  <Link
                                
                                href={'/disclaimer'}
                               
                            >
                                Disclaimer
                            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
