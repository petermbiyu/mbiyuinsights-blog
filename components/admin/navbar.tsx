"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import SignOut from "../shared/sighOut";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  return (
    <nav className="fixed top-0 left-0 w-full h-16">
      <div className="flex flex-row px-5 md:px-20 text-zinc-50 bg-zinc-500 justify-between items-center h-full">
        <div className="w-1/5 font-bold text-2xl">
          <Link href={"/"}>
            Mbiyu<span className="text-amber-400">Insights</span>
          </Link>
        </div>
        <div className="text-zinc-50 text-[1.1rem]">
          {session && <SignOut />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
