import Link from "next/link";
import { Suspense } from "react";

import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <div className="relative">
      <h1 className="mb-5 md:mb-15 lg:mb-20 text-center text-2xl md:text-3xl font-bold text-zinc-700">
        Contact Us
      </h1>
      <div className="flex flex-col gap-2  md:gap-6 lg:gap-10 md:flex-row px-2">
        <div className="w-full flex flex-col justify-between items-stretch md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold">Want to reach us?</h2>
            <p className="text-xl mt-5 font-light">
              Leave a message on the contact form. You can also reach us through
              a social media handles.
            </p>
          </div>

          <div className="flex flex-row items-start w-full space-x-2 mt-10 mx-auto">
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
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold">Send us a message</h2>
          <Suspense fallback={<p>Loading</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Contact;
