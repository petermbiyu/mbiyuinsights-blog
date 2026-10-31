import { blog_data } from "@/public/assets/assets";
import Image from "next/image";

type BlogPostProp = {
  postParams: Promise<{ id: string }>;
};
const BlogPost = async ({ postParams }: BlogPostProp) => {
  const id = (await postParams).id;
  const post = blog_data.find((post) => post.id === Number(id));
  if (!post) return;
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold py-5 text-zinc-700 text-center">
        {post.title}
      </h1>
      <Image
        src={post.image}
        alt={post.title}
        width={1024}
        height={650}
        className="mx-auto w-auto h-auto border-3 border-zinc-700"
      />
      <div className="space-x-5 ">
        <span>{post.author}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        tenetur totam unde distinctio, cum rerum quod quos reiciendis dolores
        repudiandae saepe sequi, numquam laborum nobis fugiat corrupti eveniet
        modi itaque maxime debitis quae explicabo, illo rem. Quis, voluptatem?
        Ab alias, non, quidem, ea quam et doloremque ex omnis vero amet aperiam!
        Velit sapiente magni autem pariatur ab itaque, atque harum! Commodi
        eligendi libero temporibus ex excepturi aspernatur, nostrum repellat in
        quibusdam veritatis perspiciatis dolorum vero. Distinctio mollitia
        consequuntur ex enim labore debitis tempore iste assumenda nobis, omnis
        quae atque et vitae numquam culpa reiciendis aut voluptatem quasi rerum
        velit? Ipsam.
      </div>
    </div>
  );
};

export default BlogPost;
