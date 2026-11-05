import { prisma } from "@/lib/db";
import slugify from "slugify";
import { NextRequest, NextResponse } from "next/server";
import {
  CloudinaryUploadResult,
  uploadToCloudinary,
} from "@/services/cloudinary";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const default_Limit = 3;
    const limit = Number(searchParams.get("limit")) || default_Limit;
    const cursor = Number(searchParams.get("cursor"));

    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      select: {
        id: true,
        description: true,
        title: true,
        imageUrl: true,
        category: true,
        createdAt: true,
        slug: true,
      },
    });
    const hasMore = posts.length > limit;
    const items = hasMore ? posts.slice(0, limit) : posts;
    const nextCursor = hasMore ? items[items.length - 1].id : null;

    return NextResponse.json(
      { success: true, posts: items, nextCursor },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error getting post: ", error);
    return NextResponse.json(
      { success: false, message: "Error fetching posts" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const content = formData.get("content") as string;
    const publish = (formData.get("publish") as string) || null;
    const image = formData.get("image") as File;

    const isPublished = publish === "1";

    if (!title || !description || !category || !content || !image) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }
    // create a slug from title
    const baseSlug = slugify(title, { lower: true, strict: true, trim: true });
    // create unique slug
    let slug = baseSlug;
    let counter = 1;
    while (await prisma.post.findUnique({ where: { slug } })) {
      slug = `${slug}-${counter}`;
      counter++;
    }
    // upload image to cloudinary
    const imageData: CloudinaryUploadResult = await uploadToCloudinary(image);
    const post = await prisma.post.create({
      data: {
        title,
        description,
        content,
        publish: isPublished,
        category,
        slug,
        imageUrl: imageData.secure_url,
        imagePublicId: imageData.public_id,
      },
    });
    return NextResponse.json(
      { success: true, message: "Upload successfull" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed_to_fetch_all_post", error);
    return NextResponse.json(
      { success: false, message: "failed to fetch all post" },
      { status: 500 },
    );
  }
}
