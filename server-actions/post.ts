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
