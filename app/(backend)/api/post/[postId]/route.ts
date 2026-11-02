import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> },
) {
  try {
    const postId = await params;
    if (!postId) {
      return NextResponse.json(
        { success: false, message: "Invalid ID" },
        { status: 400 },
      );
    }
    const post = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });
    if (!post) {
      return NextResponse.json(
        { success: false, message: "Post not found" },
        { status: 400 },
      );
    }
    return NextResponse.json({ success: true, post }, { status: 200 });
  } catch (error) {
    console.error("Error_fetchng_post", error);
    return NextResponse.json(
      { success: false, message: "error fetching post" },
      { status: 500 },
    );
  }
}
