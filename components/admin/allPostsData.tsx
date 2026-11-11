"use client";
import Link from "next/link";
import { PostProp } from "@/types/post";
import { deletePost } from "@/services/post";
import { useRouter } from "next/navigation";
import { FaTrash, FaRegEdit } from "react-icons/fa";

type Props = {
  posts: PostProp[];
};

const AllPostsData = ({ posts }: Props) => {
  const router = useRouter();
  const handleDelete = async (postId: number) => {
    await deletePost(postId);
    router.refresh();
  };

  if (!posts || posts.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={6}>No posts found</td>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      {posts.map((post, index) => {
        return (
          <tr key={index} className="odd:bg-zinc-300 even:bg-zinc-100 ">
            <td className="border border-zinc-400 py-1 px-1 text-center">{`${index + 1}.`}</td>
            <td className="border border-zinc-400 py-2 px-2">{post.title}</td>
            <td className="border border-zinc-400 hidden sm:table-cell py-2 text-center">
              {new Date(post.createdAt).toLocaleDateString()}
            </td>
            <td className="border border-zinc-400 w-15 py-2">
              <Link href={`/dashboard/edit/${post.id}`}>
                <FaRegEdit className="cursor-pointer text-green-600 mx-auto" />
              </Link>
            </td>

            <td
              className="border border-zinc-400 w-15 py-2"
              onClick={() => handleDelete(post.id)}
            >
              <FaTrash className="cursor-pointer text-red-600 mx-auto" />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default AllPostsData;
