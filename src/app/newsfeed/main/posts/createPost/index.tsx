"use client";

import React from "react";
import { useSelector } from "react-redux";
import Button from "@/components/button";
import Avatar from "@/components/avatar";
import PostsPenIcon from "../../../../../asset/icons/postsPenIcon.svg";
import PostsArticalIcon from "../../../../../asset/icons/postsArticalIcon.svg";
import PostsCreateIcon from "../../../../../asset/icons/postsCreateIcon.svg";
import "./index.scss";

export default function CreatePost() {
  const auth = useSelector((state: any) => state.auth);

  return (
    <div className="grid w-full gap-2 rounded-lg bg-white p-4">
      <span className="inline-flex items-center">
        <div className="flex w-full items-start gap-4">
          <span className="flex justify-center items-center size-10 flex-none cursor-pointer">
            <Avatar className="w-8 h-8" />
          </span>
          <div className="flex w-full grow flex-col justify-center">
            <div className="text-sm text-neutral-80 inline-flex gap-1 welcome">
              <span className="flex-none font-light">Welcome back, </span>
              <span className="flex items-center gap-x-1 text-xs font-semibold">
                <span className="grid">
                  <span className="truncate cursor-pointer hover:underline text-neutral-60">
                    {auth.authenticate.name}
                  </span>
                </span>
              </span>
            </div>
            <div className="text-xs font-light text-neutral-40">
              Share new ideas with your community!
            </div>
          </div>
        </div>
      </span>

      <div className="createPost grid grid-cols-3 gap-3">
        <Button className="rounded-md bg-neutral-2 w-full">
          <PostsPenIcon className={"text-blue-50"} />
          <div className="font-light text-xs">Quick Post</div>
        </Button>
        <Button className="rounded-md bg-neutral-2 w-full">
          <PostsArticalIcon className={"text-orange-30"} />
          <div className="font-light text-xs">Write Artical</div>
        </Button>
        <Button className="rounded-md bg-neutral-2 w-full">
          <PostsCreateIcon className={"text-green-50"} />
          <div className="font-light text-xs">Create Series</div>
        </Button>
      </div>
    </div>
  );
}
