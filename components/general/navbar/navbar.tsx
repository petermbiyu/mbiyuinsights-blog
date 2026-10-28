import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row px-20 text-zinc-50 bg-zinc-500 justify-between items-center h-16.5">
      <div className="w-1/5 font-bold text-2xl">
        Mbiyu<span className="text-amber-400">Insights</span>
      </div>

      <ul className="flex flex-row items-center justify-center min-h-max w-3/5 gap-4">
        <li>
          <Link
            href={"/"}
            className="flex items-center hover:font-semibold justify-center w-20 mx-auto"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/articles"}
            className="flex items-center hover:font-semibold justify-center w-20 mx-auto"
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            href={"/contacts"}
            className="flex items-center hover:font-semibold justify-center w-20 mx-auto"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className="flex items-center hover:font-semibold justify-center w-20 mx-auto"
          >
            About
          </Link>
        </li>
      </ul>
      <div className="w-1/5 text-right">Dashboard</div>
    </nav>
  );
};

export default Navbar;
