import { blog_data } from "@/public/assets/assets";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const Articles = () => {
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-zinc-800 mb-5">
          All Posts
        </h1>
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
