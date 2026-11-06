"use client";
import { blog_data } from "@/public/assets/assets";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInfinitePosts } from "@/custom-hook/usePost";
import Postcard from "@/skeletons/postcard";
const Articles = () => {
  const [active, setActive] = useState(true);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfinitePosts({ limit: 6 });

  if (status === "pending") {
    return (
      <div className="text-xl font-semibold text-center text-zinc-600 mt-5">
        <h2 className="mb-5">All Posts</h2>
        <Postcard limit={6} />
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className="text-xl font-semibold text-center text-zinc-800 mb-5">
        <h2>All Posts</h2>
        <p>Error retrieving posts</p>
      </div>
    );
  }

  const posts = data?.pages.flatMap((page) => page.posts) ?? [];
  return (
    <div className="mt-5">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-zinc-800 mb-5">
        Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2 space-y-5 max-w-6xl mx-5 sm:mx-auto items-stretch justify-center">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] w-full max-w-90 rounded-sm"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.imageUrl}
                alt="blog-img"
                fill
                className="rounded-t-sm"
              />
            </div>

            <div className="flex flex-col space-y-2 px-2">
              <p className="text-sm">
                <span>{post.category}</span>
                {" | "}
                <span>
                  {new Date(post.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </p>
              <h2 className="font-semibold text-2xl line-clamp-2">
                {post.title}
              </h2>
              <p className="font-light text-[16px] line-clamp-3">
                {post.description}
              </p>
            </div>
            <Link
              href={`/articles/${post.slug}`}
              className=" flex items-center justify-between gap-2 max-w-max px-2 my-4 hover:underline"
            >
              Learn more <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="py-3 px-6 bg-zinc-700 text-amber-400 font-bold rounded-sm mx-auto inline-block mt-5"
          >
            {isFetchingNextPage ? "Loading more" : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Articles;
