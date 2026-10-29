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
        <div className="mt-10">
          <div className="flex flex-row items-center border max-w-max mx-auto h-10">
            <input
              type="text"
              placeholder="Enter your email..."
              className="outline-none w-80 px-5"
            />
            <span className="bg-amber-400 h-full text-[1rem]/9 text-zinc-700 font-bold text-center px-2">
              Subscribe
            </span>
          </div>
        </div>
      </header>
      <div>
        <RecentPost />
      </div>
    </div>
  );
}
