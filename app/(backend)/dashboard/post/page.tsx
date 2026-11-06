import AllPosts from "@/components/admin/allPosts";
import LaodingLayout from "@/layout/laodingLayout";
import { Suspense } from "react";

const Posts = async () => {
  return (
    <div>
      <Suspense
        fallback={
          <LaodingLayout>
            <span className="mr-3 size-5 animate-spin inline-block w-6 h-6 border-5 border-zinc-500/50 border-t-zinc-500/90 rounded-full "></span>
            <span className="text-xl font-semibold">Loading posts...</span>
          </LaodingLayout>
        }
      >
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-700 text-center">
          All Posts
        </h1>
        <div>
          <AllPosts />
        </div>
      </Suspense>
    </div>
  );
};

export default Posts;
