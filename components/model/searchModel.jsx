"use client";
import React from "react";
import { useSearch } from "@/context/searchContext";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";

const SearchModel = () => {
  const {
    searchQuery,
    setSearchQuery,
    posts,
    isLoading,
    isSearchOpen,
    setIsSearchOpen,
  } = useSearch();
  if (!isSearchOpen) return null;

  const handleClose = () => {
    setSearchQuery("");
    setIsSearchOpen(false);
  };
  return (
    <div className="border fixed flex items-center justify-center inset-0 top-16 w-full h-[calc(100vh-66px)] z-50 ">
      <div
        onClick={handleClose}
        className="fixed inset-0 top-16 w-full h-[calc(100vh-66px)] bg-zinc-800/80 "
      />
      <div className="relative bg-zinc-200 border z-50 w-full max-w-120 px-5 py-15 rounded-sm">
        <LiaTimesSolid
          className="absolute right-5 top-3 cursor-pointer"
          size={22}
          onClick={handleClose}
        />
        <input
          type="text"
          placeholder="Search Article"
          className="w-full outline-none border-2 border-zinc-400 px-4 py-3 rounded-sm bg-zinc-50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="mt-5 border-2 border-zinc-400 px-4 py-3 rounded-sm bg-zinc-100 text-zinc-700">
          {isLoading && <span>Searching...</span>}
          {!isLoading && posts.length === 0 && <span>No results found</span>}
          {posts.length > 0 && (
            <button>
              {posts.map((item, index) => (
                <span key={index} onClick={handleClose}>
                  <Link
                    href={`/articles/${item.slug}`}
                    className="line-clamp-1 border-b-2 pt-2 border-b-zinc-400 text-left w-full"
                  >
                    {`${index + 1}. ${item.title}`}
                  </Link>
                </span>
              ))}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModel;
