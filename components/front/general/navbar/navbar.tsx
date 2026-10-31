"use client";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import Nav from "./mobNav";
import { useState } from "react";

export const navLinks = [
  { label: "Home", url: "/" },
  { label: "Articles", url: "/articles" },
  { label: "Contact", url: "/contact" },
  { label: "About", url: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full h-16 md:h-18">
      <div className="flex flex-row px-5 md:px-20 text-zinc-50 bg-zinc-500 justify-between items-center h-full">
        <div className="w-1/5 font-bold text-2xl">
          Mbiyu<span className="text-amber-400">Insights</span>
        </div>
        <div className="hidden md:block w-4/5">
          <div className="flex items-end flex-col md:flex-row justify-between min-h-max">
            <ul className="flex flex-row items-center justify-center h-full w-4/5 gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="flex items-center hover:font-semibold justify-center w-20 mx-auto"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-right w-1/5">
              <Link href={"/dashboard"}>Dashboard</Link>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <span
            className="hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <LiaTimesSolid size={25} /> : <LuMenu size={25} />}
          </span>
        </div>
      </div>
      {isOpen && <Nav isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
