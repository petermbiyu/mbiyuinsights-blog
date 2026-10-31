import { Suspense } from "react";
import BlogPost from "@/components/front/post/post";

const Post = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <BlogPost postParams={params} />
      </Suspense>
    </div>
  );
};

export default Post;
