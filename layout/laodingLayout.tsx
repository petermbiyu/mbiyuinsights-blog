import React from "react";

const LaodingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-zinc-50 w-full flex items-center justify-center min-h-[calc(100vh-64px)]">
      {children}
    </div>
  );
};

export default LaodingLayout;
