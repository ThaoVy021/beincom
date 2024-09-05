"use client";

import React, { InputHTMLAttributes } from "react";

import "./index.scss";

export default function Search(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="search">
      <input
        className="Input"
        type="text"
        placeholder="Search content"
        {...props}
      />
    </div>
  );
}
