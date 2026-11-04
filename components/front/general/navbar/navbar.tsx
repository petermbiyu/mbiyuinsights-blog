"use client";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import Nav from "./mobNav";
import { useState } from "react";
import { MdLogout } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import SignOut from "@/components/shared/sighOut";

export const navLinks = [
  { label: "Home", url: "/" },
  { label: "Articles", url: "/articles" },
  { label: "Contact", url: "/contact" },
  { label: "About", url: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50">
      <div className="flex flex-row px-5 md:px-20 text-zinc-50 bg-zinc-500 justify-between items-center h-full">
        <div className="md:w-1/5 font-bold text-2xl">
          Mbiyu<span className="text-amber-400">Insights</span>
        </div>
        <div className="hidden md:block w-4/5 ">
          <div className="flex items-center flex-col md:flex-row justify-between">
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

        <button
          className="hover:cursor-pointer md:hidden z-110 p-2 active:scale-95 transition-transform"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <LiaTimesSolid size={25} /> : <LuMenu size={25} />}
        </button>
      </div>
      {isOpen && <Nav isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
