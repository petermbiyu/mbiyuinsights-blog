import Link from "next/link";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 md:gap-6 lg:gap-10  mt-[5%] md:flex-row px-2">
        <div className="w-full flex flex-col justify-between items-stretch md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold">Want to reach us?</h2>
            <p className="text-xl mt-5 font-light">
              Leave a message on the contact form. You can also reach us through
              a social media handles.
            </p>
          </div>

          <div className="flex flex-row items-start w-full space-x-2 mt-10 mx-auto">
            <Link
              href={"#"}
              className="border p-3 rounded-full hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-300 ease-in-out"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"#"}
              className="border p-3 rounded-full hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-300 ease-in-out"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href={"#"}
              className="border p-3 rounded-full hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-300 ease-in-out"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={"#"}
              className="border p-3 rounded-full hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-300 ease-in-out"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold">Send us a message</h2>
          <form>
            <div>
              <input
                type="text"
                placeholder="Enter your name..."
                name="username"
                className="outline-none border-b-2 border-zinc-700 w-full md:w-6/8 py-2"
              />
            </div>
            <div className="mt-5">
              <input
                type="email"
                placeholder="Enter your email..."
                name="username"
                className="outline-none border-b-2 border-zinc-700 w-full md:w-6/8 py-2"
              />
            </div>
            <div className="mt-5">
              <textarea
                name="message"
                placeholder="Enter your message..."
                rows={1}
                className="h-auto min-h-[31h] max-h-40 overflow-y-hidden field-sizing-content resize-none outline-none border-b-2 border-zinc-700 w-full md:w-6/8 py-2"
              ></textarea>
            </div>
            <button className="px-6 py-3 mt-5 bg-zinc-700 text-zinc-50 font-semibold rounded-b-sm hover:bg-zinc-500 transition-all duration-300 ease-in-out">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
