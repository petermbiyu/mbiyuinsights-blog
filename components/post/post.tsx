import { blog_data } from "@/public/assets/assets";
import Image from "next/image";

type BlogPostProp = {
  postParams: Promise<{ id: string }>;
};
const BlogPost = async ({ postParams }: BlogPostProp) => {
  const id = (await postParams).id;
  const post = blog_data.find((post) => post.id === Number(id));
  if (!post) return;
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold py-5 text-zinc-700 text-center">
        {post.title}
      </h1>
      <Image
        src={post.image}
        alt={post.title}
        width={1024}
        height={650}
        className="mx-auto w-auto h-auto border-3 border-zinc-700"
      />
      <div className="space-x-5">
        <span>{post.author}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default BlogPost;
