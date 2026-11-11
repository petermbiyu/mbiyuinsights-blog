import RecentPost from "@/components/front/home/recentPost";
import Postcard from "@/skeletons/postcard";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full">
      <header className="text-center text-zinc-800 mt-10">
        <h1 className="font-bold text-2xl sm:text-3xl mb:text-4xl lg:text-5xl mb-5">
          Welcome to MbiyuInsight!
        </h1>
        <h2 className="font-light text-xl sm:text-2xl mb:text-3xl lg:text-4xl">
          Discover and get the latest stories on academics, <br />
          education and lifestyle.
        </h2>

        <div className="flex flex-nowrap sm:flex-row my-10 items-center border rounded-sm max-w-max mx-auto h-10">
          <input
            type="text"
            placeholder="Enter your email..."
            className="outline-none h-full w-full rounded-l-sm max-w-80 px-5 "
          />
          <button className="bg-amber-400 inline-block h-full rounded-r-sm text-[1rem] border-l text-zinc-700 font-bold text-center px-2">
            Subscribe
          </button>
        </div>
      </header>

      <div className="w-full mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-zinc-800 sm:mb-5">
          Recent Posts
        </h1>
        <div className="max-w-6xl mx-auto">
          <Suspense fallback={<Postcard limit={3} />}>
            <RecentPost />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
