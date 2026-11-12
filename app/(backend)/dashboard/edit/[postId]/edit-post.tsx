"use client";
import LaodingLayout from "@/layout/laodingLayout";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const EditPost = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("academic");
  const [publish, setPublish] = useState("0");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const config = useMemo(
    () => ({
      theme: "light",
      style: { background: "white", color: "gray" },
    }),
    [],
  );

  const { postId } = useParams();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    try {
      if (!title || !description || !content || !category) {
        console.log("All fields are required");
        toast.error("All fields are required! Check items");
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("content", content);
      formData.append("publish", publish === "1" ? "1" : "0");
      if (image) {
        formData.append("image", image);
      }

      const response = await axios.patch(`/api/post/${postId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        toast.success("Updated post successfully");
        router.push("/dashboard/post");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error);
      }
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    let ignore = false;

    const fetchPost = async () => {
      try {
        if (!ignore) {
          const { data } = await axios.get(`/api/post/${postId}`);
          const post = data.post;

          setContent(post.content);
          setTitle(post.title);
          setDescription(post.description);
          setCategory(post.category);
          setPublish(post.publish ? "1" : "0");
          setPreview(post.imageUrl);
        }
      } catch (error) {
        if (!ignore) {
          if (axios.isAxiosError(error)) {
            console.error("Axios_error", error);
            toast.error(error.response?.data.error || "Failed to load post");
          } else {
            console.error("Unknown_error", error);
            alert("Unexpected error");
          }
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };
    if (postId) {
      fetchPost();
    }
    return () => {
      ignore = true;
    };
  }, [postId]);
  if (isLoading) {
    return (
      <LaodingLayout>
        <span className="text-xl font-semibold">Loading Edit Page...</span>
      </LaodingLayout>
    );
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-700 py-5 text-center">
        Edit Post
      </h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-8/10 px-4 border-zinc-500 mx-auto bg-zinc-200"
        >
          <div className="py-2">
            <label htmlFor="title" className="text-xl font-semibold">
              Title
            </label>
            <br />
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type here..."
              className="w-full px-4 py-2 text-[1rem] outline-none bg-zinc-50"
            />
          </div>
          <div className="py-2">
            <label htmlFor="description" className="text-xl font-semibold">
              Description
            </label>
            <br />
            <textarea
              name="description"
              placeholder="Type here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="w-full px-4 py-2 text-[1rem] outline-none bg-zinc-50 resize-none"
            ></textarea>
          </div>
          <div className="py-2">
            <label htmlFor="image" className="text-xl font-semibold">
              Image
            </label>
            <br />
            <input
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="w-full px-4 py-2 text-[1rem] outline-none bg-zinc-50 resize-none"
            />
            {preview && (
              <Image
                src={preview}
                alt="preview"
                width={150}
                height={100}
                className="mt-5"
              />
            )}
          </div>
          <div className="py-2">
            <label htmlFor="content" className="text-xl font-semibold">
              Content
            </label>
            <br />
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onChange={(newContent) => setContent(newContent)}
            />
            {/* <textarea
              name="content"
              rows={5}
              className="w-full px-4 py-2 text-[1rem] outline-none bg-zinc-50 resize-none"
            ></textarea> */}
          </div>
          <div className="py-2">
            <label htmlFor="category" className="text-xl font-semibold">
              Category
            </label>
            <br />
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 text-[1rem] border-none outline-none bg-zinc-50"
            >
              <option disabled hidden>
                Select
              </option>
              <option value={"academic"}>Academic</option>
              <option value={"lifestyle"}>Lifestyle</option>
            </select>
          </div>
          <div className="py-2">
            <label htmlFor="publish" className="text-xl font-semibold">
              Publish
            </label>
            <input
              type="checkbox"
              name={"publish"}
              checked={publish === "1"}
              onChange={(e) => setPublish(e.target.checked ? "1" : "0")}
              className="inline-block mx-5"
            />
          </div>
          <button
            type="submit"
            className="my-5 px-5 py-3 font-semibold rounded-sm bg-zinc-500 text-amber-400 border cursor-pointer border-zinc-500 "
          >
            {" "}
            {isSending ? "Updating Post..." : "Update Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
