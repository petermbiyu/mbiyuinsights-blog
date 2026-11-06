import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { PostProp } from "@/types/post";
import PostDate from "./postDate";

const RecentPost = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/post/recent`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to load recent posts");
  }
  const { posts }: { posts: PostProp[] } = await res.json();
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-6xl mx-5 sm:mx-auto items-stretch justify-center">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col relative bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] w-full mx-auto md:max-w-90 rounded-sm"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.imageUrl}
                alt="blog-img"
                fill
                className="object-cover rounded-t-sm"
              />
            </div>
            <div className="flex flex-col space-y-2 px-2">
              <p className="text-sm">
                <PostDate date={post.createdAt} />
                {" - "}
                <span>{post.category}</span>
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
              className="px-2 my-4 hover:underline"
            >
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
