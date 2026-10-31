import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-5 border">
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/dashboard/post"}>Posts</Link>
      <Link href={"/dashboard/subscription"}>subscription</Link>
    </div>
  );
};

export default Sidebar;
