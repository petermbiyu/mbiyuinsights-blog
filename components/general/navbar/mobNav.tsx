import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex items-end flex-col border absolute top-16 left-0 w-full min-h-[calc(100vh-64px)] z-50 bg-zinc-700/60 text-zinc-50 justify-between">
      <ul className="flex flex-col items-center justify-center h-full w-4/5 gap-4">
        <li className="z-100">
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
            href={"/contact"}
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
      <div className="text-right w-1/5">Dashboard</div>
    </div>
  );
};

export default Nav;
