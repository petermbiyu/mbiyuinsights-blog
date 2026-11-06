import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { messageId } = useParams();
  console.log(messageId);
  return (
    <div>
      <h1>Message Reply Page</h1>
    </div>
  );
};

export default page;
