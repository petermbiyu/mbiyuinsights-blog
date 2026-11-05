import Image from "next/image";
import { PostBySlug } from "@/server-actions/post";

type BlogPostProp = {
  postParams: Promise<{
    slug: string;
  }>;
};
const BlogPost = async ({ postParams }: BlogPostProp) => {
  const { slug } = await postParams;
  const post = await PostBySlug(slug);

  if (!post) return null;
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold py-5 text-zinc-700 text-center">
        {post.title}
      </h1>
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={1024}
        height={650}
        className="mx-auto w-auto h-auto border-3 border-zinc-700"
      />
      <div className="space-x-5 ">
        <span>{post.category}</span>
        <span>
          {new Date(post.createdAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
      <div
        className="text-gray-900 leading-relaxed tracking-wide blog-post"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
};

export default BlogPost;
