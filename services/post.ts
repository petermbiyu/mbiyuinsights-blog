import { FetchPostProp, FetchPostRes } from "@/types/post";
import axios from "axios";
import toast from "react-hot-toast";

export async function fetchPosts({
  pageParam,
  limit,
}: FetchPostProp): Promise<FetchPostRes> {
  const response = await axios.get("api/post", {
    params: {
      cursor: pageParam,
      limit,
    },
  });
  return response.data;
}

export async function deletePost(postId: number) {
  try {
    const confirmed = confirm("Are you sure you want to delete this post");
    if (confirmed) {
      const response = await axios.delete(`/api/post/${postId}`);
      if (response.data.success) {
        toast.success("Post deleted successfully");
      }
    }
  } catch (error) {
    console.error("Error deleting Post", error);
    throw new Error("Error deleting post");
  }
}
