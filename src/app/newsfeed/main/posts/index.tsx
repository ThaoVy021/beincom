"use client";

import React from "react";
import CreatePost from "./createPost";
import FilterPosts from "./filterPosts";
import ShowPosts from "./showPosts";
import "./index.scss";

export default function Posts() {
  return (
    <section className="posts min-w-layout-main-pane max-w-layout-main-pane flex-1">
      <CreatePost />
      <FilterPosts />
      <ShowPosts />
    </section>
  );
}
