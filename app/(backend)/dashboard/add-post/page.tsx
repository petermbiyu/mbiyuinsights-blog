"use client";
import axios from "axios";
import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AddPost = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("academic");
  const [publish, setPublish] = useState(false);
  const [image, setImage] = useState<null | File>(null);

  const config = useMemo(
    () => ({
      placeholder: "Start writing your post...",
      theme: "light",
      style: { background: "#ffff", color: "gray" },
    }),
    [],
  );

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-700 py-5 text-center">
        Add Post
      </h1>
      <div>
        <form className="w-full max-w-8/10 px-4 border-zinc-500 mx-auto bg-zinc-200">
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
              rows={3}
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
              checked={publish}
              id="publish"
              onChange={(e) => setPublish(e.target.checked)}
              name={"publish"}
              className="inline-block mx-5"
            />
          </div>
          <button
            type="submit"
            className="my-5 px-5 py-3 font-semibold rounded-sm bg-zinc-500 text-amber-400 border cursor-pointer border-zinc-500 "
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
