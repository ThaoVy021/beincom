"use client";

import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { throttle } from "throttle-debounce";

import { fetchPosts } from "@/redux/slices/posts/thunks";
import { fetchAllUsers } from "@/redux/slices/users/thunks";

import Header from "./header";
import Posts from "./main";

export default function Home() {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    dispatch(fetchAllUsers());
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const throttleFunc = throttle(2000, () => dispatch(fetchPosts({})), {
    noLeading: false,
    noTrailing: false,
  });

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 20
    ) {
      throttleFunc();
    }
  }, []);

  return (
    <div>
      <Header />
      <Posts />
    </div>
  );
}
