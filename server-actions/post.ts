"use server";
import { prisma } from "@/lib/db";

export async function PostBySlug(slug: string) {
  if (!slug) return null;
  const post = await prisma.post.findUnique({
    where: { slug: slug },
    select: {
      id: true,
      title: true,
      category: true,
      content: true,
      createdAt: true,
      imageUrl: true,
      slug: true,
    },
  });
  if (!post) return null;
  return post;
}

export async function SearchPost(query: string) {
  if (!query || query.trim() === "") return [];
  try {
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
        ],
      },
      take: 10,
      select: { id: true, title: true, slug: true },
    });
    return posts;
  } catch (error) {
    console.error("database error:", error);
    return [];
  }
}
