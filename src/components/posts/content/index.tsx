"use client";
import React, { useEffect, useRef } from "react";
import Divider from "../../divider";
import Button from "../../button";

import SendMessengerIcon from "../../../asset/icons/sendMessengerIcon.svg";

import LikeIcon from "@/asset/icons/like.svg";
import CommentIcon from "@/asset/icons/comment.svg";
import Avatar from "../../avatar";
import Input from "../../input";
import Comment from "../../comment";

import "./index.scss";

export default function ContentPosts(props: any) {
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { title, content, images = [] } = props;

  const shouldShowSeeMore = content.length > 300;

  return (
    <div className="w-full gap-y-2">
      <div className="px-4 pb-4">
        <div
          ref={contentRef}
          className="overflow-hidden text-xs"
          style={{ height: shouldShowSeeMore ? "3rem" : "auto" }}
        >
          <strong>{title}</strong>
          {typeof content === "function" ? content() : content}
        </div>
        {shouldShowSeeMore && (
          <div className="flex w-full items-center justify-end bg-white px-4">
            <button
              className="cursor-pointer hover:underline text-xs text-blue-50 font-semibold"
              onClick={(event) => {
                contentRef.current.style.height = "auto";
                event.currentTarget.style.display = "none";
              }}
            >
              ...see more
            </button>
          </div>
        )}
      </div>
      <div className="size-full px-4 pb-4">
        {!!images.length && <img src={images[0]} alt="postsAdBic" />}
      </div>
      <Divider />
      <div className="flex justify-between items-center mx-4 contentPosts">
        <div className="flex">
          <Button className="rounded-full bg-white hover:bg-neutral-2">
            <LikeIcon />
            Like
          </Button>
          <Button className="rounded-full bg-white hover:bg-neutral-2">
            <CommentIcon />
            Comment
          </Button>
        </div>

        <div className="flex gap-3 text-xs reactions">
          <span>1.3k reactions</span>·<span>49k comments</span>
        </div>
      </div>
      <Divider />
      <div className="flex gap-3 m-4 items-center">
        <Avatar className="w-8 h-8" />
        <Input />
        <button type="button" className="cursor-pointer">
          <SendMessengerIcon />
        </button>
      </div>
      <Comment />
    </div>
  );
}
