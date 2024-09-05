"use client";

import React from "react";
import Community from "./community";
import Posts from "./posts";
import Advertising from "./advertising";

import "./index.scss";

export default function Main() {
  return (
    <div className="main layout_box relative w-screen flex items-start justify-center gap-x-6 px-5">
      <Community />
      <Posts />
      <Advertising />
    </div>
  );
}
