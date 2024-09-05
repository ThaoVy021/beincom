"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { throttle } from "throttle-debounce";
import { fetchPosts } from "@/redux/slices/posts/thunks";
import { setPostFilter } from "@/redux/slices/posts";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import Button from "@/components/button";
import DownArrowIcon from "../../../../../asset/icons/downArrowIcon.svg";
import StarIcon from "../../../../../asset/icons/starIcon.svg";

import "./index.scss";

enum PostFilter {
  All = "All",
  Important = "Important",
}

export default function FilterPosts() {
  const dispatch = useDispatch<any>();

  const [filter, setFilter] = React.useState<PostFilter>(PostFilter.All);

  const throttleFunc = throttle(
    2000,
    (payload: any) => {
      dispatch(setPostFilter(payload));
      dispatch(fetchPosts(payload));
    },
    {
      noLeading: false,
      noTrailing: false,
    }
  );

  useEffect(() => {
    switch (filter) {
      case PostFilter.Important:
        throttleFunc({ current: 1, userId: 2 });
        break;
      default:
        throttleFunc({ current: 1 });
        break;
    }
  }, [filter]);

  return (
    <div className="flex justify-between items-center">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="flex items-center justify-center space-x-2 whitespace-nowrap rounded-md font-base h-8 px-3 py-2 my-2 text-xs gap-2 cursor-pointer"
            aria-label="Customise options"
          >
            Content
            <DownArrowIcon style={{ width: "25px", height: "25px" }} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="DropdownMenuContent customDropdownMenu"
            sideOffset={5}
          >
            <DropdownMenu.Item className="DropdownMenuItem">
              Contents
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              Posts
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              Articles
            </DropdownMenu.Item>
            <DropdownMenu.Arrow className="DropdownMenuArrow" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      <div className="flex gap-1 items-center">
        <Button
          onClick={() => setFilter(PostFilter.All)}
          className={`filterButton ${
            filter === PostFilter.All ? "text-purple-50" : "text-gray-50"
          }`}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter(PostFilter.Important)}
          className={`filterButton ${
            filter === PostFilter.Important ? "text-purple-50" : "text-gray-50"
          }`}
        >
          <StarIcon
            className={`${
              filter === PostFilter.Important
                ? "text-purple-50"
                : "text-gray-50"
            }`}
          />
          Important
        </Button>
      </div>
    </div>
  );
}
