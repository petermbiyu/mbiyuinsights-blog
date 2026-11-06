import BlogPost from "@/components/front/post/post";
import Article from "@/skeletons/article";
import { Suspense } from "react";

const Post = async ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <div className=" w-full">
      <Suspense fallback={<Article />}>
        <BlogPost postParams={params} />
      </Suspense>
    </div>
  );
};

export default Post;
