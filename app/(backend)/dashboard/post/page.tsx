import AllPosts from "@/components/admin/allPosts";
import { Suspense } from "react";

const Posts = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-700 text-center">
        All Posts
      </h1>
      <div>
        <table className="w-8/10 mx-auto ">
          <thead>
            <tr className="text-center">
              <th className="border border-zinc-400 w-1/8">No.</th>
              <th className="border border-zinc-400 w-4/8">Title</th>
              <th className="border border-zinc-400 w-1/8">Date</th>
              <th className="border border-zinc-400 w-2/8 " colSpan={3}>
                Action
              </th>
            </tr>
          </thead>
          <Suspense
            fallback={
              <tbody>
                <tr>
                  <td colSpan={6}>Loadig posts</td>
                </tr>
              </tbody>
            }
          >
            <AllPosts />
          </Suspense>
        </table>
      </div>
    </div>
  );
};

export default Posts;
