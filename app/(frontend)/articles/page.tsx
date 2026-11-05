"use client";
import { blog_data } from "@/public/assets/assets";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInfinitePosts } from "@/custom-hook/usePost";
const Articles = () => {
  const [active, setActive] = useState(true);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfinitePosts({ limit: 3 });

  if (status === "pending") {
    return (
      <div>
        <h2>All Posts</h2>
        <p>Loading posts</p>
      </div>
    );
  }
  if (status === "error") {
    return (
      <div>
        <h2>All Posts</h2>
        <p>Error retrieving posts</p>
      </div>
    );
  }

  const posts = data?.pages.flatMap((page) => page.posts) ?? [];
  return (
    <div>
      <div className="mt-5">
        <span className="flex flex-row justify-center max-w-max items-center mx-auto gap-1  text-xl font-semibold text-center text-zinc-800 mb-5">
          <Link
            href={"#"}
            style={{ padding: "4px 12px", width: "5rem" }}
            className={active ? "text-amber-500" : "text-zinc-600 px-4 py-2"}
          >
            All
          </Link>
          <Link
            href={"#"}
            className={
              !active ? "px-3 py-1 text-amber-600" : " text-zinc-500 px-3 py-1"
            }
          >
            Academic
          </Link>
          <Link
            href={"#"}
            className={
              !active ? "px-3 py-1 text-amber-600" : "text-zinc-500 px-3 py-1"
            }
          >
            Lifestyle
          </Link>
        </span>
        <div className="flex gap-5 flex-wrap  items-stretch justify-center">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] w-87.5 rounded-sm"
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
    </div>
  );
};

export default Articles;
