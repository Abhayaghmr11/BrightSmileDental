import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bright Smile Dental Clinic | Best Dentist in Kathmandu",
  description:
    "Bright Smile Dental Clinic offers expert dental care in Kathmandu. Book an appointment with our top dentists for teeth whitening, braces, and more!",
  keywords:
    "Dentist in Kathmandu, Dental Clinic, Teeth Whitening, Braces, Root Canal, Dental Implants, Best Dentist Near Me",
  openGraph: {
    title: "Bright Smile Dental Clinic | Best Dentist in Kathmandu",
    description:
      "Get expert dental care at Bright Smile Dental Clinic in Kathmandu. Book an appointment today!",
    url: "https://bright-smile-dental.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://bright-smile-dental.vercel.app/_next/static/media/DentalImage.a12c6d9d.svg",
        width: 1200,
        height: 630,
        alt: "Bright Smile Dental Clinic",
      },
    ],
    locale: "en_US",
    siteName: "Bright Smile Dental Clinic",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bright Smile Dental Clinic | Best Dentist in Kathmandu",
    description:
      "Expert dental care in Kathmandu. Teeth whitening, braces, and more!",
    images: [
      "https://bright-smile-dental.vercel.app/_next/static/media/DentalImage.a12c6d9d.svg",
    ],
  },
  alternates: {
    canonical: "https://brightsmiledental.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Bright Smile Dental Clinic",
              url: "https://bright-smile-dental.vercel.app/",
              image:
                "https://bright-smile-dental.vercel.app/_next/static/media/DentalImage.a12c6d9d.svg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Putalisadak, Kathmandu",
                addressLocality: "Kathmandu",
                addressCountry: "NP",
              },
              telephone: "+977-9800000000",
              openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} leading-tight`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
