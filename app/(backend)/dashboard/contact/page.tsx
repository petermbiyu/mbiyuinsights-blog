import React, { Suspense } from "react";
import ViewMessages from "./listMessages";

const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-700 text-center">
        Messages
      </h1>
      <div>
        <Suspense fallback={<p>Loading posts</p>}>
          <ViewMessages />
        </Suspense>
      </div>
    </div>
  );
};

export default Contact;
