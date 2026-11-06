"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSending, SetIsSending] = useState(false);

  const handleFormSubmission = async (
    e: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    SetIsSending(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error);
      }
    } finally {
      setName("");
      setEmail("");
      setMessage("");
      SetIsSending(false);
    }
  };
  return (
    <form onSubmit={handleFormSubmission}>
      <div>
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="username"
          className="outline-none border-b-2 border-zinc-700 w-full md:w-7/8 py-2"
        />
      </div>
      <div className="mt-5">
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="username"
          className="outline-none border-b-2 border-zinc-700 w-full md:w-7/8 py-2"
        />
      </div>
      <div className="mt-5">
        <textarea
          name="message"
          placeholder="Enter your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          className="h-auto min-h-[31h] max-h-40 overflow-y-hidden field-sizing-content resize-none outline-none border-b-2 border-zinc-700 w-full md:w-7/8 py-2"
        ></textarea>
      </div>
      <button className="px-6 py-3 mt-5 bg-zinc-700 text-zinc-50 font-semibold rounded-b-sm hover:bg-zinc-500 transition-all duration-300 ease-in-out">
        {isSending ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
