import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-5">
      <Link
        href={"/dashboard"}
        className="inline-block border-gray text-zinc-50 hover:text-zinc-500 transition-all duration-300 ease-in font-semibold text-center py-3 bg-amber-500"
      >
        Dashboard
      </Link>
      <Link
        href={"/dashboard/post"}
        className="inline-block border-gray text-zinc-50 hover:text-zinc-500 transition-all duration-300 ease-in font-semibold text-center py-3 bg-amber-500"
      >
        All Posts
      </Link>
      <Link
        href={"/dashboard/add"}
        className="inline-block border-gray text-zinc-50 hover:text-zinc-500 transition-all duration-300 ease-in font-semibold text-center py-3 bg-amber-500"
      >
        Add Posts
      </Link>
      <Link
        href={"/dashboard/subscription"}
        className="inline-block border-gray text-zinc-50 hover:text-zinc-500 transition-all duration-300 ease-in font-semibold text-center py-3 bg-amber-500"
      >
        Subscription
      </Link>
    </div>
  );
};

export default Sidebar;
