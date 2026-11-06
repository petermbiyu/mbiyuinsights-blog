import React, { Suspense } from "react";
import ViewMessages from "./listMessages";

const Contact = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading posts</p>}>
        <ViewMessages />
      </Suspense>
    </div>
  );
};

export default Contact;
