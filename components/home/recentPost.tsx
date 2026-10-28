import { blog_data } from "@/public/assets/assets";
import { assets } from "@/public/assets/assets";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const RecentPost = () => {
  return (
    <div className="mt-5">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-zinc-800 mb-5">
        Recent Posts
      </h1>
      <div className="flex gap-5  flex-wrap items-center justify-between">
        {blog_data.slice(0, 3).map((post, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] w-87.5 rounded-sm"
          >
            <Image
              src={assets.blog_pic_1}
              alt="blog-img"
              width={350}
              height={200}
              className="rounded-t-sm"
            />
            <div className="flex flex-col space-y-2 px-2">
              <p className="text-sm">21/10/2026</p>
              <h2 className="font-semibold text-2xl">This is the blog title</h2>
              <p className="font-light text-[16px] line-clamp-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                provident quisquam libero quidem error facere praesentium omnis
                ipsam dicta aut.
              </p>
            </div>
            <Link href={"#"} className="px-2 my-4 hover:underline">
              Learn more
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          href={"/articles"}
          className="flex items-center gap-2 justify-center mx-auto max-w-max bg-zinc-600 text-amber-400 px-4 py-3 mt-10 font-semibold "
        >
          View more posts <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default RecentPost;
