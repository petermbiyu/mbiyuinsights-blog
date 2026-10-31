"use client";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full h-16 md:h-18">
      <div className="flex flex-row px-5 md:px-20 text-zinc-50 bg-zinc-500 justify-between items-center h-full">
        <div className="w-1/5 font-bold text-2xl">
          <Link href={"/"}>
            Mbiyu<span className="text-amber-400">Insights</span>
          </Link>
        </div>
        <div className="text-zinc-50 text-[1.1rem]">Logout</div>
      </div>
    </nav>
  );
};

export default Navbar;
