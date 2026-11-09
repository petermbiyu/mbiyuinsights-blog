"use client";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import Nav from "./mobNav";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import SignOut from "@/components/shared/sighOut";
import { useSearch } from "@/context/searchContext";

export const navLinks = [
  { label: "Home", url: "/" },
  { label: "Articles", url: "/articles" },
  { label: "Contact", url: "/contact" },
  { label: "About", url: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsSearchOpen } = useSearch();
  const { data: session, isPending } = authClient.useSession();
  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50">
      <div className="flex flex-row px-5 min-[950]:px-20 text-zinc-50 bg-zinc-500 justify-between items-center h-full">
        <div className="md:w-1/5 font-bold text-2xl">
          Mbiyu<span className="text-amber-400">Insights</span>
        </div>
        <div className="hidden md:block w-4/5 ">
          <div className="flex items-center flex-col md:flex-row justify-between">
            <ul className="flex flex-row items-center justify-center h-full w-4/5 min-[950]:gap-4">
              <li>
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:font-semibold flex items-center gap-1 w-20"
                >
                  <FaSearch size={16} className="font-bold inline-block" />{" "}
                  <span className="hidden md:inline-block">Search</span>
                </button>
              </li>
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
            <div className=" flex items-center text-[1rem] justify-end space-x-3 w-1/5">
              {!isPending && session && (
                <Link
                  href={"/dashboard"}
                  className="boarder rounded-sm bg-amber-500 px-3 py-2 inline-block"
                >
                  Dashboard
                </Link>
              )}
              {!isPending &&
                (session ? <SignOut /> : <Link href={"/auth"}>Sign In</Link>)}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 md:hidden z-110 p-2 ">
          <button
            className="hover:cursor-pointer active:scale-95 transition-transform"
            onClick={() => {
              setIsSearchOpen(true);
              setIsOpen(false);
            }}
          >
            <FaSearch size={16} className="font-bold inline-block" />
          </button>
          <button
            className="hover:cursor-pointer active:scale-95 transition-transform"
            type="button"
            onClick={() => {
              setIsSearchOpen(false);
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <LiaTimesSolid size={25} /> : <LuMenu size={25} />}
          </button>
        </div>
      </div>
      {isOpen && <Nav isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
