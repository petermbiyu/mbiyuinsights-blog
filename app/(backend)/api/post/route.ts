import { prisma } from "@/lib/db";
import slugify from "slugify";
import { NextRequest, NextResponse } from "next/server";
import {
  CloudinaryUploadResult,
  uploadToCloudinary,
} from "@/services/cloudinary";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const content = formData.get("content") as string;
    const publish = formData.get("publish") as any;
    const image = formData.get("image") as File;

    if (!title || !description || !category || !content || !publish || !image) {
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
        publish,
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
