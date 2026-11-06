import React from "react";

const Article = () => {
  return (
    <div className="animate-pulse mt-5 w-full max-w-3xl mx-auto">
      <div className="flex items-center flex-col space-y-2">
        <div className="bg-zinc-500 h-8 w-full"></div>
        <div className="bg-zinc-500 h-8 w-full max-w-80"></div>
      </div>
      <div className=" mt-3">
        <div className="w-full h-90 bg-zinc-500 mx-auto rounded-sm"></div>
      </div>
      <div className="mt-5">
        <span className="w-40 h-4 bg-zinc-500 inline-block "></span>
        {" - "}
        <span className="w-30 h-4 bg-zinc-500 inline-block "></span>
      </div>
      <div className="mt-5 space-y-2">
        <div className="w-full bg-zinc-500 h-4"></div>
        <div className="w-full bg-zinc-500 h-4"></div>
        <div className="w-full bg-zinc-500 h-4"></div>
        <div className="w-full bg-zinc-500 h-4"></div>
        <div className="w-full max-w-50 bg-zinc-500 h-4"></div>
      </div>
      <div className="mt-5 space-y-2">
        <div className="w-full bg-zinc-500 h-4"></div>
        <div className="w-full bg-zinc-500 h-4"></div>
        <div className="w-full bg-zinc-500 h-4"></div>
        <div className="w-full max-w-50 bg-zinc-500 h-4"></div>
      </div>
    </div>
  );
};

export default Article;
