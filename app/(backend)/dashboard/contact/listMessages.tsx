"use client";
import { Suspense, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdMarkEmailRead, MdMarkEmailUnread } from "react-icons/md";
import Link from "next/link";
import LaodingLayout from "@/layout/laodingLayout";
import toast from "react-hot-toast";

interface MessageProp {
  id: string;
  name: string;
  email: string;
  isRead: boolean;
  createdAt: string | Date;
}

const ViewMessages = () => {
  const [messages, setMessages] = useState<MessageProp[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/contact");
      if (!response.ok) return null;
      const data = await response.json();
      setMessages(data.messages || []);
    } catch (error: any) {
      console.error("Error_loading_message", error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <LaodingLayout>
        <span className="mr-3 size-5 animate-spin inline-block w-6 h-6 border-5 border-zinc-500/50 border-t-zinc-500/90 rounded-full "></span>
        <span className="text-xl font-semibold">Loading messages...</span>
      </LaodingLayout>
    );
  }
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-700 text-center">
        Messages
      </h1>
      <table className="w-8/10 mx-auto ">
        <thead>
          <tr className="text-center bg-zinc-400 w-full text-zinc-50">
            <th className="border border-zinc-400 py-2 px-2 w-1/16">No.</th>
            <th className="border border-zinc-400 py-2 w-5/16">Name</th>
            <th className="border border-zinc-400 py-2 w-5/16">Email</th>
            <th className="border border-zinc-400 py-2 w-3/16">Date</th>
            <th className="border border-zinc-400 py-2 w-2/16" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index} className="odd:bg-zinc-300 even:bg-zinc-100 ">
              <td className="border border-zinc-400 py-2 px-2">{index + 1}</td>
              <td className="border border-zinc-400 py-2 px-2">
                {message.name}
              </td>
              <td className="border border-zinc-400 py-2 px-2">
                {message.email}
              </td>
              <td className="border border-zinc-400 py-2 text-center">
                {new Date(message.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </td>
              <td className="border border-zinc-400 w-15 py-2">
                <Link href={`/dashboard/contact/${message.id}`}></Link>
                {message.isRead ? (
                  <MdMarkEmailRead className="mx-auto text-green-500" />
                ) : (
                  <MdMarkEmailUnread className="mx-auto text-amber-600" />
                )}
              </td>
              <td className="border  border-zinc-400 w-15 py-2  text-red-500">
                <FaTrash className="mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMessages;
