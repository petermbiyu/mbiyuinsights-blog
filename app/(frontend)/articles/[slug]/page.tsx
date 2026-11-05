import BlogPost from "@/components/front/post/post";
import { Suspense } from "react";

const Post = async ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <BlogPost postParams={params} />
      </Suspense>
    </div>
  );
};

export default Post;
