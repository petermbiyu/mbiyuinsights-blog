import RecentPost from "@/components/home/recentPost";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="text-center text-zinc-800 mt-[5%]">
        <h1 className="font-bold text-2xl sm:text-3xl mb:text-4xl lg:text-5xl mb-5">
          Welcome to MbiyuInsight!
        </h1>
        <h2 className="font-light text-xl sm:text-2xl mb:text-3xl lg:text-4xl">
          Discover and get the latest stories on academics, <br />
          education and lifestyle.
        </h2>

        <div className="flex-1 flex-col  sm:flex-row my-10 items-center  max-w-max mx-auto h-10">
          <input
            type="text"
            placeholder="Enter your email..."
            className="outline-none h-full max-w-80 px-5 border"
          />
          <button className="bg-amber-400 inline-block h-full text-[1rem] border md:border-l-0 text-zinc-700 font-bold text-center px-2">
            Subscribe
          </button>
        </div>
      </header>
      <div>
        <RecentPost />
      </div>
    </div>
  );
}
