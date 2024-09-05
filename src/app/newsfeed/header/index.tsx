"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { debounce } from "throttle-debounce";

import { setPostSearch } from "@/redux/slices/posts";

import Logo from "./logo";
import Search from "./search";
import Information from "./information";

import "./index.scss";

export default function Header() {
  const dispatch = useDispatch();

  const debounceFunc = debounce(200, (payload: any) => {
    dispatch(setPostSearch(payload));
  });

  return (
    <div className="header layout_box flex items-center justify-between border-b fixed top-0 z-10">
      <Logo />
      <Search
        onChange={(e) => {
          debounceFunc(e.target.value);
        }}
      />
      <Information />
    </div>
  );
}
