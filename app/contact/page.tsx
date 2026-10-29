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
      <h1 className="text-center text-3xl md:text-4xl font-bold my-5 text-zinc-700">
        Contact
      </h1>
      <div className="flex flex-col md:flex-row px-2">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold">Want to reach us?</h2>
          <p className="text-xl mt-5 font-light">
            Use our email or leave a message on the contact form. You can also
            reach us through a social media handles.
          </p>

          <div className="flex flex-row space-x-2 mt-10 mx-auto">
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
          <form>
            <div>
              <label htmlFor="username">Name</label>
              <input type="text" placeholder="Enter name..." name="username" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter email..."
                name="username"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows={5}></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
