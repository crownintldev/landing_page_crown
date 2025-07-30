import Footer from "@/components/common/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import Header from "@/components/common/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Pakistan's Best Travel Agency | Visa Services & Travel Processing",
  description:
    "Full-service travel agency specializing in visa processing, travel services, and expert guidance for destinations worldwide. Authorized visa application center.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${poppins.variable} ${playfair.variable}`}
    >
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
