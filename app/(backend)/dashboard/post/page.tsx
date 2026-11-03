import AllPosts from "@/components/admin/allPosts";
import { Suspense } from "react";

const Posts = async () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-700 text-center">
        All Posts
      </h1>
      <div>
        <Suspense fallback={<p>Loading posts</p>}>
          <AllPosts />
        </Suspense>
      </div>
    </div>
  );
};

export default Posts;
