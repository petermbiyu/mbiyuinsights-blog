import React, { Suspense } from "react";
import EditPost from "./edit-post";

const Edit = () => {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading editor…</div>}>
      <EditPost />
    </Suspense>
  );
};

export default Edit;
