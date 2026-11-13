import BlogPost from "@/components/front/post/post";
import { PostBySlug } from "@/server-actions/post";
import Article from "@/skeletons/article";
import { Metadata } from "next";
import { cache, Suspense } from "react";

const getPost = cache(PostBySlug);
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  const url = `www.mbiyuinsights/articles/${slug}`;
  if (!post) {
    return {
      title: "Page not found",
      description: "The requested article could not be found",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: post.title,
    description: post.description,
    keywords: [post.category],
    openGraph: {
      title: post.title,
      type: "article",
      description: post.description,
      url,
      images: [
        { url: post.imageUrl, width: 1200, height: 675, alt: post.title },
      ],
      publishedTime: new Date(post.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      section: post.category,
    },
    twitter: {
      title: post.title,
      card: "summary_large_image",
      description: post.description,
      images: [post.imageUrl],
    },
    alternates: {
      canonical: `https://mbiyuinsights.co.ke/articles${slug}`,
    },
  };
}

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
