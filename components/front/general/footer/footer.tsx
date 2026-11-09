"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center flex-col md:flex-row bg-zinc-700 text-zinc-50 mt-5 py-2 justify-between min-h-16 px-0 md:px-10 lg:px-20">
      <div>&copy; 2026 MbiyuInsights. All rights reserved</div>
      <div className="flex items-center flex-col md:flex-row gap-2 mt-5 sm:mt-0 justify-center md:gap-5">
        <Link
          href={"/terms"}
          className="hover:text-amber-400 transition-colors duration-300 ease-in"
        >
          Terms & Conditions
        </Link>
        <Link
          href={"/privacy"}
          className="hover:text-amber-400 transition-colors duration-300 ease-in"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
