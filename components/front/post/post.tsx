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
      <h1 className="text-2xl md:text-3xl font-bold py-5 text-zinc-700 text-center">
        {post.title}
      </h1>
      <div className="overflow-hidden rounded-sm shadow-md mb-6">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width="1200"
          height="675"
          className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
          // className="mx-auto w-auto h-auto border-3 border-zinc-700"
        />
      </div>

      <div className="space-x-5 text-sm italic font-semibold ">
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
        className="text-zinc-900 leading-relaxed tracking-wide blog-post"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
};

export default BlogPost;
