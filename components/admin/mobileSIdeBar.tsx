import Link from "next/link";
import {
  MdContentPaste,
  MdDashboard,
  MdMessage,
  MdOutlineAlternateEmail,
} from "react-icons/md";

const MobSidebar = () => {
  return (
    <div className="flex w-full flex-row items-center justify-evenly gap-2">
      <Link
        href={"/dashboard"}
        className="inline-block border-gray text-zinc-50 rounded-full hover:text-zinc-500 transition-all duration-300 ease-in font-semibold text-center py-4 px-5 bg-amber-500"
      >
        <MdDashboard />
      </Link>
      <Link
        href={"/dashboard/post"}
        className="inline-block border-gray text-zinc-50 rounded-full hover:text-zinc-500 transition-all duration-300 ease-in font-semibold text-center py-4 px-5 bg-amber-500"
      >
        <MdContentPaste />
      </Link>
      <Link
        href={"/dashboard/contact"}
        className="inline-block border-gray text-zinc-50 rounded-full hover:text-zinc-500 transition-all duration-300 ease-in font-semibold text-center py-4 px-5 bg-amber-500"
      >
        <MdMessage />
      </Link>
      <Link
        href={"/dashboard/subscription"}
        className="inline-block border-gray text-zinc-50 rounded-full hover:text-zinc-500 transition-all duration-300 ease-in font-semibold text-center py-4 px-5 bg-amber-500"
      >
        <MdOutlineAlternateEmail />
      </Link>
    </div>
  );
};

export default MobSidebar;
