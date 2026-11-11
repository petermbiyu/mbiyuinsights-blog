import React from "react";

const LaodingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-zinc-50 w-full flex items-center justify-center min-h-[calc(100vh-64px)]">
      <span className="mr-3 size-5 animate-spin inline-block w-6 h-6 border-5 border-zinc-500/50 border-t-zinc-500/90 rounded-full "></span>
      {children}
    </div>
  );
};

export default LaodingLayout;
