import { prisma } from "@/lib/db";
import { PostProp } from "@/types/post";
import Link from "next/link";

const AllPosts = async () => {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

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
          <tr key={index}>
            <td className="border">{index + 1}</td>
            <td className="border">{post.title}</td>
            <td className="border">
              {new Date(post.createdAt).toLocaleDateString()}
            </td>
            <td className="border">
              <Link href={`/dashboard/edit/${post.id}`}>edit</Link>
            </td>
            <td className="border">{post.publish ? "publish" : "Unpublish"}</td>
            <td className="border">delete</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default AllPosts;
