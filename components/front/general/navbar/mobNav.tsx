import SignOut from "@/components/shared/sighOut";
import { useSearch } from "@/context/searchContext";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

interface mobileNavProp {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ isOpen, setIsOpen }: mobileNavProp) => {
  const { data: session, isPending } = authClient.useSession();
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
        <li className="mt-10 flex items-center flex-col justify-center space-y-5">
          {session && (
            <Link
              href={"/dashboard"}
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center hover:font-semibold justify-center w-20 mx-auto"
            >
              Dashboard
            </Link>
          )}
          {!isPending &&
            (session ? (
              <span onClick={() => setIsOpen(!isOpen)}>
                <SignOut />
              </span>
            ) : (
              <Link href={"/auth"} onClick={() => setIsOpen(!isOpen)}>
                Sign In
              </Link>
            ))}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
