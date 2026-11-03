import { prisma } from "@/lib/db";
import AllPostsData from "./allPostsData";

const AllPosts = async () => {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <table className="w-8/10 mx-auto ">
      <thead>
        <tr className="text-center bg-zinc-400 text-zinc-50">
          <th className="border border-zinc-400 py-2 px-2 w-4">No.</th>
          <th className="border border-zinc-400 py-2 ">Title</th>
          <th className="border border-zinc-400 py-2 w-25">Date</th>
          <th className="border border-zinc-400 w-10 py-2 " colSpan={2}>
            Action
          </th>
        </tr>
      </thead>
      <AllPostsData posts={posts} />
    </table>
  );
};

export default AllPosts;
