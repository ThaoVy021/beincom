"use client";

import React from "react";

import Button from "@/components/button";
import Avatar from "@/components/avatar";

import CommunityUsersIcon from "../../../../asset/icons/communityUsersIcon.svg";
import CommunityNFTIcon from "../../../../asset/icons/communityNFTIcon.svg";
import PlusIcon from "../../../../asset/icons/plusIcon.svg";

import "./index.scss";

export default function Community() {
  return (
    <aside className="max-w-layout-side-pane min-w-layout-side-pane grow sticky z-10 pt-6 communityRps">
      <div className="flex max-h-inherit min-h-full flex-col rounded-xl bg-white px-2 py-4">
        <div className="flex flex-col flex-wrap gap-y-1 px-2">
          <Button className="bg-purple-2 rounded-md w-full">
            <PlusIcon className={"text-purple-50"} />
            <div className={"text-purple-50"}>Create community</div>
          </Button>
          <span className="block text-xs font-light text-neutral-40 my-2">
            <span>0/3 communities created</span>
          </span>
        </div>
        <hr className="shrink-0 m-2 h-px my-2" />
        <div className="flex items-center justify-between py-2 pl-2">
          <span className="text-sm font-semibold text-neutral-60">
            Your pins
          </span>
          <button
            className="flex items-center justify-center space-x-2 cursor-pointer whitespace-nowrap rounded-md font-medium h-8 px-3 py-2 text-xs bg-inherit text-blue-50"
            type="button"
          >
            Edit
          </button>
        </div>
        <div className="flex flex-col overflow-y-auto overscroll-contain">
          <div className="group p-0 rounded-lg">
            <div className="flex cursor-pointer gap-x-2 rounded-lg bg-white p-2 hover:rounded-lg hover:bg-neutral-2">
              <span className="flex shrink-0 size-12">
                <Avatar
                  src="/community-bic.webp"
                  alt="beincom"
                  className="w-8 h-8 rounded-md"
                />
              </span>
              <div className="flex-1">
                <span className="flex text-xs font-semibold text-neutral-60">
                  <span className="mr-1 p-1 self-center">
                    <CommunityNFTIcon />
                  </span>
                  <div
                    className="whitespace-nowrap text-ellipsis overflow-hidden self-center text-purple-50"
                    style={{ width: "calc(100% - 50px)" }}
                  >
                    {" "}
                    <span>Beincom Official - Việt Nam</span>
                  </div>
                </span>

                <div className="flex w-full items-center justify-between">
                  <span className="flex items-center gap-x-1 text-xs font-normal text-neutral-40">
                    <CommunityUsersIcon />
                    <span className="pt-px">14.8k</span>
                  </span>
                  <div className="flex gap-x-0.5 mr-5">
                    <span className="flex shrink-0 size-6 !h-5 !w-5">
                      <img
                        src="/communityUser1.webp"
                        alt="communityUserBic"
                        className="!box-border aspect-square size-full object-cover overflow-hidden bg-neutral-1 border-neutral-1 border rounded-full"
                      />
                    </span>
                    <span className="flex shrink-0 size-6 !h-5 !w-5">
                      <img
                        src="/communityUser2.webp"
                        alt="communityUserBic"
                        className="!box-border aspect-square size-full object-cover overflow-hidden bg-neutral-1 border-neutral-1 border rounded-full"
                      />
                    </span>
                    <span className="flex shrink-0 size-6 !h-5 !w-5">
                      <img
                        src="/communityUser3.webp"
                        alt="communityUserBic"
                        className="!box-border aspect-square size-full object-cover overflow-hidden bg-neutral-1 border-neutral-1 border rounded-full"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
