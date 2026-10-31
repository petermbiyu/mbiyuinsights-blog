import Link from "next/link";

interface mobileNavProp {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ isOpen, setIsOpen }: mobileNavProp) => {
  return (
    <div className="flex items-end flex-col absolute top-16 left-0 w-full min-h-[calc(100vh-64px)] z-50 bg-zinc-700/90 text-zinc-50 justify-between">
      <ul className="flex flex-col items-center w-full justify-center mt-[20%] gap-10">
        <li className="z-100">
          <Link
            href={"/"}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center hover:font-semibold justify-center w-20 mx-auto"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/articles"}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center hover:font-semibold justify-center w-20 mx-auto"
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center hover:font-semibold justify-center w-20 mx-auto"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center hover:font-semibold justify-center w-20 mx-auto"
          >
            About
          </Link>
        </li>
      </ul>
      <div
        className="text-center w-full mb-[20%]"
        onClick={() => setIsOpen(!isOpen)}
      >
        Dashboard
      </div>
    </div>
  );
};

export default Nav;
