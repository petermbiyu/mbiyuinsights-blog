import { prisma } from "@/lib/db";
import slugify from "slugify";
import { NextRequest, NextResponse } from "next/server";
import {
  CloudinaryUploadResult,
  deleteFromCloudinary,
  uploadToCloudinary,
} from "@/services/cloudinary";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> },
) {
  try {
    const { postId } = await params;
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

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> },
) {
  try {
    const { postId } = await params;
    if (!postId) {
      return NextResponse.json(
        { success: false, message: "Invalid PostId!" },
        { status: 400 },
      );
    }
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const publish = formData.get("publish") as string;
    const image = formData.get("image") as File;

    const isPublished = publish === "1";

    if (!title || !description || !content || !category) {
      return NextResponse.json(
        { success: false, message: "All fields are required!" },
        { status: 400 },
      );
    }

    const postExist = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });
    if (!postExist) {
      return NextResponse.json(
        { success: false, message: "Invalid PostId!" },
        { status: 400 },
      );
    }

    let slug = postExist.slug;
    if (title && title !== postExist.title) {
      const baseSlug = slugify(title, {
        lower: true,
        strict: true,
        trim: true,
      });
      let uniqueSlug = baseSlug;
      let counter = 1;

      while (
        await prisma.post.findUnique({
          where: { slug: uniqueSlug, NOT: { id: Number(postId) } },
        })
      ) {
        uniqueSlug = `${uniqueSlug}-${counter}`;
        counter++;
      }
      slug = uniqueSlug;
    }
    // upload image if available
    let imageData: CloudinaryUploadResult | null = null;
    if (image) {
      imageData = await uploadToCloudinary(image);
    }

    // delete image from cloudinary
    if (imageData && postExist.imagePublicId) {
      await deleteFromCloudinary(postExist.imagePublicId);
    }

    const post = await prisma.post.update({
      where: { id: Number(postId) },
      data: {
        title: title,
        description: description,
        category: category,
        content: content,
        slug: slug,
        publish: isPublished,
        ...(imageData && {
          imageUrl: imageData.secure_url,
          imagePublicId: imageData.public_id,
        }),
      },
    });

    return NextResponse.json(
      { success: true, message: "update successful", post },
      { status: 201 },
    );
  } catch (error) {
    console.error("failed to update post", error);
    return NextResponse.json(
      { success: false, message: "failed to update post" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ postId: number }> },
) {
  try {
    const { postId } = await params;
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
        { success: false, message: "failed to delete post" },
        { status: 400 },
      );
    }

    await deleteFromCloudinary(post.imagePublicId);
    await prisma.post.delete({ where: { id: post.id } });

    return NextResponse.json(
      { success: true, message: "Post deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("delete_error_message", error);
    return NextResponse.json({
      success: false,
      message: "error deleting post",
    });
  }
}
