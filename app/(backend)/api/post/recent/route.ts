import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        imageUrl: true,
        slug: true,
        createdAt: true,
      },
      take: 3,
    });
    return NextResponse.json({ success: true, posts }, { status: 200 });
  } catch (error) {
    console.error("Error_fetching_Recent", error);
    return NextResponse.json(
      { success: false, message: "failled to fetch recent post" },
      { status: 500 },
    );
  }
}
