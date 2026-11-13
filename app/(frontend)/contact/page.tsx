import Link from "next/link";
import { Suspense } from "react";
import { assets } from "@/public/assets/assets";

import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import ContactForm from "./contactForm";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MbiyuInsights - mbiyuinsights.co.ke",
  description:
    "MbiyuInsights prides itself on begin your one stop platform for information about education, technology and lifestyle",
  keywords: [
    "CBC",
    "TSC",
    "KNEC",
    "INTERNET",
    "EDUCATION",
    "ACADEMIC",
    "TECHNOLOGY",
  ],
  openGraph: {
    title: "About MbiyuInsights - mbiyuinsights.co.ke",
    description:
      "Your one stop platform for the lastest in education, academics, technology and lifestyle",
    siteName: "MbiyuInsights",
    images: [{ url: "", width: "", height: "" }],
    locale: "en_KE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MbiyuInsights - mbiyuinsights.co.ke",
    description:
      "Your one stop platform for the lastest in education, academics, technology and lifestyle",
    creator: "@petermbiyu",
    images: ["https://example.com/seo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://mbiyuinsights.co.ke/about",
  },
};

const Contact = () => {
  return (
    <div className="relative  w-full  min-h-[calc(100vh-148px)]">
      <h1 className="mb-5 text-center text-3xl md:text-4xl font-bold text-zinc-700">
        Contact Us
      </h1>
      <div className="flex flex-col gap-2  md:gap-6 lg:gap-10 md:flex-row items-stretch justify-center">
        <div className="hidden w-full md:flex py-2 flex-col justify-between items-stretch md:w-1/2">
          <div className="relative w-full h-100">
            <Image
              src={assets.contact}
              alt="concacts"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2 md:px-4">
          <h2 className="text-3xl font-bold">Send us a message</h2>
          <Suspense fallback={<p>Loading</p>}>
            <p className="text-xl my-5 font-light">
              Leave a message on the contact form. You can also reach us through
              a social media handles.
            </p>
            <ContactForm />
            <div className="flex flex-row justify-end w-full space-x-4 mt-10 mx-auto">
              <Link
                href={"#"}
                className="border p-3 rounded-full hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-300 ease-in-out"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={"#"}
                className="border p-3 rounded-full hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-300 ease-in-out"
              >
                <FaWhatsapp />
              </Link>
              <Link
                href={"#"}
                className="border p-3 rounded-full hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-300 ease-in-out"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href={"#"}
                className="border p-3 rounded-full hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-300 ease-in-out"
              >
                <FaYoutube />
              </Link>
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Contact;
