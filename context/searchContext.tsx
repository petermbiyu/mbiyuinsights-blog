"use client";
import { SearchPost } from "@/server-actions/post";
import React, { createContext, useContext, useEffect, useState } from "react";

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  posts: PostsType[];
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

interface PostsType {
  id: number;
  title: string;
  slug: string;
}

const searchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<PostsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  //   a debounce function to create a delay for the user to complete typing the search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setPosts([]);
      return;
    }
    const delayDebounce = setTimeout(async () => {
      setIsLoading(true);
      const result = await SearchPost(searchQuery);
      setPosts(result);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  //   const itemList = ["nextjs 15", "nextjs 16", "react server component"];
  //   const filteredItems = itemList.filter((item) =>
  //     item.toLowerCase().includes(searchQuery.toLowerCase()),
  //   );

  return (
    <searchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        posts,
        isLoading,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(searchContext);
  if (!context) {
    throw new Error("useSearch must be used with a searchProvider");
  }
  return context;
};
