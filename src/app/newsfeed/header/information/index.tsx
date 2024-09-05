"use client";

import React from "react";
import Notification from "../../../../asset/icons/notification.svg";
import Messenger from "../../../../asset/icons/messenger.svg";
import Avatar from "@/components/avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import SignOutIcon from "../../../../asset/icons/signOutIcon.svg";
import { useRouter } from "next/navigation";

import "./index.scss";

export default function Information() {
  const router = useRouter();

  const logOut = () => {
    router.push("/login");
  };

  return (
    <div className="information flex justify-center items-center">
      <div className="rounded-full p-1.5 bg-slate-200">
        <Notification />
      </div>
      <div className="rounded-full p-1.5 bg-slate-200">
        <Messenger />
      </div>

      <button type="button" className="cursor-pointer mt-2">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="IconButton cursor-pointer"
              aria-label="Customise options"
            >
              <Avatar className="w-8 h-8" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="DropdownMenuContent mt-3"
              sideOffset={5}
            >
              <DropdownMenu.Item className="DropdownMenuItem" onClick={logOut}>
                Sign Out{" "}
                <div className="RightSlot">
                  <SignOutIcon />
                </div>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </button>
    </div>
  );
}
