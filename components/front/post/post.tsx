import Image from "next/image";
import { PostBySlug } from "@/server-actions/post";
import { cache } from "react";

const getPost = cache(PostBySlug);

type BlogPostProp = {
  postParams: Promise<{
    slug: string;
  }>;
};
const BlogPost = async ({ postParams }: BlogPostProp) => {
  const { slug } = await postParams;
  const post = await getPost(slug);

  if (!post) return null;
  return (
    <article className="max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: [post.imageUrl],
            datePublished: new Date(post.createdAt).toISOString(),
            dateModified: new Date(post.updatedAt).toISOString(), // use updatedAt if you have it
            // author: { "@type": "Person", name: "peter mbiyu" },
            // publisher: {
            //   "@type": "Organization",
            //   name: "Your Site",
            //   logo: {
            //     "@type": "ImageObject",
            //     url: "https://yourdomain.com/logo.png",
            //   },
            // },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://mbiyuinsights.co.ke/articles/${slug}`,
            },
          }),
        }}
      />
      <header>
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
      </header>

      <div className="space-x-5 text-sm italic font-semibold ">
        <span>{post.category}</span>
        <span>
          <time
            dateTime={new Date(post.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          >
            {new Date(post.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </time>
        </span>
      </div>
      <div
        className="text-zinc-900 leading-relaxed tracking-wide blog-post"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </article>
  );
};

export default BlogPost;
