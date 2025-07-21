"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Globe,
  Shield,
  Users,
  Award,
} from "lucide-react";

import newzealandBg from "@/images/newzealand_bg.png";
import schengenBg from "@/images/schengen_bg.png";
import kenyaBg from "@/images/kenya_bg.png";
import myanmarBg from "@/images/myanmar_bg.png";
import rawandaBg from "@/images/rwand_bg.png";
import vietnamBg from "@/images/vietnam_bg.png";
import zimbabweBg from "@/images/zimbabwe_bg.png";
import thailandBg from "@/images/thailand_bg.png";
import tajikistanBg from "@/images/tajikistan_bg.png";
import malaysiaBg from "@/images/malaysia_bg.png";
import iranBg from "@/images/iran_bg.png";
import indonesiaBg from "@/images/indonesia_bg.png";
import singaporeBg from "@/images/singapore_bg.png";
import uzbekistanBg from "@/images/uzbekistan_bg.png";
import heroImage from "@/images/hero_image.jpg";
import FloatingButtons from "@/components/common/FloatingButtons";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const authorizedCountries = [
    {
      name: "Malaysia",
      capital: "Kuala Lumpur",
      image: malaysiaBg.src,
    },
    {
      name: "Thailand",
      capital: "Bangkok",
      image: thailandBg.src,
    },
    {
      name: "Vietnam",
      capital: "Hanoi",
      image: vietnamBg.src,
    },
    {
      name: "Indonesia",
      capital: "Jakarta",
      image: indonesiaBg.src,
    },
    {
      name: "Iran",
      capital: "Tehran",
      image: iranBg.src,
    },
    {
      name: "Tajikistan",
      capital: "Dushanbe",
      image: tajikistanBg.src,
    },
    {
      name: "Myanmar",
      capital: "Naypyidaw",
      image: myanmarBg.src,
    },
    {
      name: "Rwanda",
      capital: "Kigali",
      image: rawandaBg.src,
    },
    {
      name: "Kenya",
      capital: "Nairobi",
      image: kenyaBg.src,
    },
    {
      name: "Zimbabwe",
      capital: "Harare",
      image: zimbabweBg.src,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(authorizedCountries.length / 3)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(authorizedCountries.length / 3)) %
        Math.ceil(authorizedCountries.length / 3)
    );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", country: "", message: "" });
  };

  return (
    <main className="min-h-screen">
      <FloatingButtons />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black/80 via-black/60 to-black/40">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-[10s] hover:scale-105"
          style={{
            backgroundImage: `url('${heroImage.src}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white container-custom animate-fade-in-up">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 animate-float">
              <span className="inline-block px-6 py-2 bg-[var(--color-primary4)]/20 backdrop-blur-sm border border-[var(--color-primary4)]/30 rounded-full text-[var(--color-primary1)] font-semibold text-sm tracking-wider uppercase">
                ✈️ Premium Travel Services
              </span>
            </div>
            <h1 className="heading-primary text-white mb-8 animate-fade-in-up animate-delay-200">
              Crown International Travels{" "}
              <span className="gradient-text">(Pvt) Ltd</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 font-light leading-relaxed animate-fade-in-up animate-delay-300">
              Your gateway to the world - Expert travel services
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-400">
              <button
                className="btn-primary text-lg px-10 py-5 hover-glow"
                onClick={() =>
                  window.open(
                    "https://wa.me/crowninternationaltravels",
                    "_blank"
                  )
                }
              >
                Get Details
              </button>
              <button
                className="btn-secondary text-lg px-10 py-5 hover-glow"
                onClick={() => (window.location.href = "tel:+923135000666")} // Replace with the actual phone number
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce animate-delay-600">
          <div className="w-8 h-12 border-2 border-[var(--color-primary1)] rounded-full flex justify-center animate-pulse-glow">
            <div className="w-1.5 h-4 bg-[var(--color-primary1)] rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-primary4)]/20 rounded-full animate-float animate-delay-100"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[var(--color-primary1)]/20 rounded-full animate-float animate-delay-300"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-[var(--color-primary7)]/20 rounded-full animate-float animate-delay-500"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-primary1)]/10 via-[var(--color-primary4)]/5 to-[var(--color-primary1)]/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in-up">
            <div className="space-y-3 p-6 rounded-2xl glass-effect hover-glow transition-all duration-500 animate-scale-in animate-delay-100">
              <div className="text-5xl font-black text-[var(--color-primary6)] gradient-text">
                80+
              </div>
              <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Countries Served
              </div>
            </div>
            <div className="space-y-3 p-6 rounded-2xl glass-effect hover-glow transition-all duration-500 animate-scale-in animate-delay-200">
              <div className="text-5xl font-black text-[var(--color-primary6)] gradient-text">
                10K+
              </div>
              <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Happy Clients
              </div>
            </div>
            <div className="space-y-3 p-6 rounded-2xl glass-effect hover-glow transition-all duration-500 animate-scale-in animate-delay-300">
              <div className="text-5xl font-black text-[var(--color-primary6)] gradient-text">
                98%
              </div>
              <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Success Rate
              </div>
            </div>
            <div className="space-y-3 p-6 rounded-2xl glass-effect hover-glow transition-all duration-500 animate-scale-in animate-delay-400">
              <div className="text-5xl font-black text-[var(--color-primary6)] gradient-text">
                20+
              </div>
              <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Visa Application Centers */}
      <section className="section-padding bg-gradient-to-br from-[var(--color-primary1)]/20 via-[var(--color-primary4)]/10 to-[var(--color-primary7)]/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[var(--color-primary4)] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[var(--color-primary7)] rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[var(--color-primary1)] rounded-full"></div>
        </div>

        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-secondary">
              We're Officially <span className="gradient-text">Authorised</span>{" "}
              Application Processing Centre for:
            </h2>
            <p className="text-primary text-xl">Trusted Process Within Time</p>
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative animate-fade-in-up animate-delay-200">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from(
                  { length: Math.ceil(authorizedCountries.length / 3) },
                  (_, slideIndex) => (
                    <div
                      key={slideIndex}
                      className="w-full flex-shrink-0 grid grid-cols-3 gap-6"
                    >
                      {authorizedCountries
                        .slice(slideIndex * 3, slideIndex * 3 + 3)
                        .map((country, index) => (
                          <div
                            key={index}
                            className="country-card h-80 group cursor-pointer hover-glow"
                          >
                            <img
                              src={country.image}
                              alt={country.capital}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-white text-3xl font-bold mb-2 drop-shadow-lg">
                                  {country.name}
                                </h3>
                                <p className="text-white/90 text-lg font-medium drop-shadow-md">
                                  {country.capital}
                                </p>
                              </div>
                            </div>
                            <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <Globe className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        ))}
                    </div>
                  )
                )}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[var(--color-primary6)] p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 animate-pulse-glow"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[var(--color-primary6)] p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 animate-pulse-glow"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Mobile Scroll */}
          <div className="md:hidden animate-fade-in-up animate-delay-200">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 custom-scrollbar">
              {authorizedCountries.map((country, index) => (
                <div
                  key={index}
                  className="country-card group min-w-[300px] h-64 snap-center hover-glow"
                >
                  <img
                    src={country.image}
                    alt={country.capital}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">
                      {country.name}
                    </h3>
                    <p className="text-white/90 text-xl font-medium drop-shadow-md">
                      Tashkent - Discover the Silk Road
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in-up animate-delay-400">
            <button
              className="btn-primary text-xl px-12 py-5 hover-glow"
              onClick={() =>
                window.open("https://wa.me/crowninternationaltravels", "_blank")
              }
            >
              Get Details
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-white via-gray-50/30 to-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-secondary">
              Also Offering Authorised Services for{" "}
              <span className="gradient-text">Visiting</span>:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="country-card group h-80 cursor-pointer hover-glow animate-fade-in-left animate-delay-200">
              <img
                src={singaporeBg.src}
                alt="Singapore"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-4xl font-bold mb-3 drop-shadow-lg">
                    Singapore
                  </h3>
                  {/* <p className="text-white/90 text-xl font-medium drop-shadow-md">
                    Marina Bay - Lion City
                  </p> */}
                </div>
              </div>
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="country-card group h-80 cursor-pointer hover-glow animate-fade-in-right animate-delay-300">
              <img
                src={uzbekistanBg.src}
                alt="Tashkent"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-4xl font-bold mb-3 drop-shadow-lg">
                    Uzbekistan
                  </h3>
                  {/* <p className="text-white/90 text-xl font-medium drop-shadow-md">
                    Tashkent - Capital of Silk Road
                  </p> */}
                </div>
              </div>
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in-up animate-delay-400">
            <button
              className="btn-primary text-xl px-12 py-5 hover-glow"
              onClick={() =>
                window.open("https://wa.me/crowninternationaltravels", "_blank")
              }
            >
              Get Details
            </button>
          </div>
        </div>
      </section>

      {/* Visa File Processing Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-[var(--color-primary4)] rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[var(--color-primary7)] rounded-full animate-float animate-delay-300"></div>
        </div>

        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-secondary">
              We're Well Experienced in{" "}
              <span className="gradient-text">File Processing</span> for:
            </h2>
            <p className="text-primary text-xl">
              Expert handling of complex applications & files for premium
              destinations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              {
                name: "Schengen Countries",
                flag: "EU",
                flagClass: "flag-eu",
                image: schengenBg.src,
              },
              {
                name: "USA",
                flag: "US",
                flagClass: "flag-us",
                image:
                  "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                name: "UK",
                flag: "GB",
                flagClass: "flag-gb",
                image:
                  "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                name: "Canada",
                flag: "CA",
                flagClass: "flag-ca",
                image:
                  "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                name: "Australia",
                flag: "AU",
                flagClass: "flag-au",
                image:
                  "https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                name: "New Zealand",
                flag: "NZ",
                flagClass: "flag-nz",
                image: newzealandBg.src,
              },
            ].map((country, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover-glow animate-scale-in animate-delay-${
                  (index + 1) * 100
                } h-48 group`}
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                  <div
                    className={`text-4xl mb-2 animate-float font-black ${country.flagClass}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {country.flag}
                  </div>
                  <h3 className="font-bold text-white text-base leading-tight text-center drop-shadow-2xl bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm">
                    {country.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up animate-delay-600">
            <button className="btn-primary text-xl px-12 py-5 hover-glow">
              Get Details
            </button>
          </div>
        </div>
      </section>
      {/* Intro Section */}
      <section className="section-padding bg-gradient-to-br from-white via-gray-50/50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="heading-secondary">
              Your Trusted <span className="gradient-text">Travel Partner</span>
            </h2>
            <p className="text-primary text-2xl leading-relaxed mb-16 font-light">
              As a full-service Travel Agency, We're specialized in overall
              Travel Processing. From East Asian escapes to European & American
              adventures, our expert team handles every detail with precision
              and care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animate-delay-100 hover-glow">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary4)] to-[var(--color-primary7)] rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary6)]">
                  Secure & Reliable
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your documents and deformations are handled with utmost
                  security
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animate-delay-200 hover-glow">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary4)] to-[var(--color-primary7)] rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float animate-delay-200">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary6)]">
                  Expert Team
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our experienced professionals guide you through every step
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animate-delay-300 hover-glow">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary4)] to-[var(--color-primary7)] rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float animate-delay-400">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary6)]">
                  Proven Track Record
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Thousands of successful applications and happy travelers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-br from-white via-[var(--color-primary1)]/5 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="heading-secondary">
                Send Your <span className="gradient-text">Query</span>
              </h2>
              <p className="text-primary text-xl">
                Get in touch with our travel experts for personalized assistance
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-8 animate-fade-in-up animate-delay-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-bold text-[var(--color-primary6)] mb-3"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[var(--color-primary4)]/30 focus:border-[var(--color-primary4)] transition-all duration-500 text-lg hover:border-[var(--color-primary4)]/50"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-bold text-[var(--color-primary6)] mb-3"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[var(--color-primary4)]/30 focus:border-[var(--color-primary4)] transition-all duration-500 text-lg hover:border-[var(--color-primary4)]/50"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-bold text-[var(--color-primary6)] mb-3"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[var(--color-primary4)]/30 focus:border-[var(--color-primary4)] transition-all duration-500 text-lg hover:border-[var(--color-primary4)]/50"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-lg font-bold text-[var(--color-primary6)] mb-3"
                  >
                    Select Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[var(--color-primary4)]/30 focus:border-[var(--color-primary4)] transition-all duration-500 text-lg hover:border-[var(--color-primary4)]/50"
                  >
                    <option value="">Select destination country</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="thailand">Thailand</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="iran">Iran</option>
                    <option value="tajikistan">Tajikistan</option>
                    <option value="mayanmar">Mayanmar</option>
                    <option value="rwanda">Rwanda</option>
                    <option value="kenya">Kenya</option>
                    <option value="zimbabwe">Zimbabwe</option>
                    <option value="singapore">Singapore</option>
                    <option value="uzbekistan">Uzbekistan</option>
                    <option value="schengen">Schengen Countries</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="new-zealand">New Zealand</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-bold text-[var(--color-primary6)] mb-3"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[var(--color-primary4)]/30 focus:border-[var(--color-primary4)] transition-all duration-500 text-lg hover:border-[var(--color-primary4)]/50 resize-none"
                  placeholder="Tell us about your travel plans, visa requirements, or any specific questions you have..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary text-xl px-16 py-5 hover-glow animate-pulse-glow"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-secondary">
              Visit Our <span className="gradient-text">Office</span>
            </h2>
            <p className="text-primary text-xl">
              Find us at our convenient location in Pakistan
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 animate-scale-in animate-delay-200">
            <iframe
              src="https://www.google.com/maps?q=33.59513864590115,73.05597490592731&hl=es;z=14&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover-glow animate-fade-in-up animate-delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary4)] to-[var(--color-primary7)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[var(--color-primary6)] mb-3 text-xl">
                Rawalpindi Head Office
              </h3>
              <p className="text-gray-600 text-sm">
                Office No. 406, 4th Floor Rizwan Arcade I, Adam Jee Road Saddar,
                Rawalpindi, Punjab, Pakistan
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover-glow animate-fade-in-up animate-delay-400">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary4)] to-[var(--color-primary7)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[var(--color-primary6)] mb-3 text-xl">
                Karachi Main Office
              </h3>
              <p className="text-gray-600 text-sm">
                Plot # 38-C, Office No 1, Main Saba Avenue, Bader Commercial,
                Phase V, DHA, Karachi, Sindh, Pakistan
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover-glow animate-fade-in-up animate-delay-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary4)] to-[var(--color-primary7)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[var(--color-primary6)] mb-3 text-xl">
                Phone Numbers
              </h3>
              <div className="text-gray-600 text-sm space-y-1">
                <p>+92 51 111 143 111 (UAN)</p>
                <p>+92 313 5000 666 (UAN)</p>
                <p>+92 51 5511 155/56-57</p>
                <p>+92 21 35244461/62</p>
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover-glow animate-fade-in-up animate-delay-600">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary4)] to-[var(--color-primary7)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[var(--color-primary6)] mb-3 text-xl">
                Hours
              </h3>
              <p className="text-gray-600 text-sm">
                Mon-Fri: 9AM-6PM
                <br />
                Sat: 9AM-2PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                Your trusted partner for expert travel services worldwide.
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
                    window.open(
                      "https://wa.me/crowninternationaltravels",
                      "_blank"
                    )
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

            {/* <div className="animate-fade-in-up animate-delay-200">
              <h4 className="text-xl font-bold mb-6 text-[var(--color-primary1)]">
                Quick Links
              </h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-primary1)] transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() =>
                      window.open("https://www.crownintltravels.com", "_blank")
                    }
                    className="hover:text-[var(--color-primary1)] transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-primary1)] transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    Visa Process
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-primary1)] transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in-up animate-delay-300">
              <h4 className="text-xl font-bold mb-6 text-[var(--color-primary1)]">
                Services
              </h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-primary1)] transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    Visa Processing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-primary1)] transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    Travel Insurance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-primary1)] transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    Hotel Booking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-primary1)] transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    Flight Tickets
                  </a>
                </li>
              </ul>
            </div> */}

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
                  <span className="text-sm">+92 51 111 143 111</span>
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
              reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
