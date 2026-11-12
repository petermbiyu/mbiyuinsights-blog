import AllPosts from "@/components/admin/allPosts";
import LaodingLayout from "@/layout/laodingLayout";
import { Suspense } from "react";

const Posts = async () => {
  return (
    <div>
      <Suspense
        fallback={
          <LaodingLayout>
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
