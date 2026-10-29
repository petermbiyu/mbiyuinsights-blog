"use client";
import { blog_data } from "@/public/assets/assets";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Articles = () => {
  const [active, setActive] = useState(true);
  return (
    <div>
      <div className="mt-5">
        <span className="flex flex-row justify-center max-w-max items-center mx-auto gap-1  text-xl md:text-2xl font-semibold text-center text-zinc-800 mb-5">
          <Link
            href={"#"}
            style={{ padding: "4px 12px", width: "5rem" }}
            className={
              active
                ? "border-b-2 border-amber-500 text-amber-500"
                : "text-zinc-600 px-4 py-2"
            }
          >
            All
          </Link>
          <Link
            href={"#"}
            className={
              !active
                ? "px-3 py-1 text-amber-600"
                : " text-zinc-500 border-b-2 border-zinc-500 px-3 py-1"
            }
          >
            Academic
          </Link>
          <Link
            href={"#"}
            className={
              !active
                ? "px-3 py-1 text-amber-600"
                : "text-zinc-500 border-b-2 border-zinc-500 px-3 py-1"
            }
          >
            Lifestyle
          </Link>
        </span>
        <div className="flex gap-5 flex-wrap  items-stretch justify-evenly">
          {blog_data.map((post, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] w-87.5 rounded-sm"
            >
              <Image
                src={post.image}
                alt="blog-img"
                width={350}
                height={200}
                className="rounded-t-sm"
              />
              <div className="flex flex-col space-y-2 px-2">
                <p className="text-sm">
                  {new Date(Number(post.date)).toLocaleDateString()}
                </p>
                <h2 className="font-semibold text-2xl line-clamp-2">
                  {post.title}
                </h2>
                <p className="font-light text-[16px] line-clamp-3">
                  {post.description}
                </p>
              </div>
              <Link
                href={`/articles/${post.id}`}
                className=" flex items-center justify-between gap-2 max-w-max px-2 my-4 hover:underline"
              >
                Learn more <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
