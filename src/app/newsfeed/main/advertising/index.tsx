"use client";

import React from "react";
import "./index.scss";

export default function Advertising() {
  return (
    <aside className="max-w-layout-side-pane min-w-layout-side-pane grow sticky z-10 pt-6 overflow-y-auto advertisingRps">
      <div className="h-full space-y-6">
        <div className="rounded-lg bg-white p-2">
          <div className="relative flex flex-col gap-2">
            <div className="p-2 text-sm font-semibold">
              Welcome to Beincom (BIC)
            </div>
            <ul className="relative text-xs flex flex-col gap-4 py-2 pl-6 pr-2">
              <li>
                <span className="flex items-center justify-start">
                  Quick Introductions and Guides
                </span>
              </li>
              <li>
                <span className="flex items-center justify-start">
                  Culture and Community Guidelines
                </span>
              </li>
            </ul>
          </div>
          <div className="relative flex flex-col gap-2 mt-3">
            <div className="p-2 text-sm font-semibold">
              Beincom (BIC) Project
            </div>
            <ul className="relative text-xs flex flex-col gap-4 py-2 pl-6 pr-2">
              <li>
                <span className="flex items-center justify-start">
                  Beincom - Journey of Aspiration
                </span>
              </li>
              <li>
                <span className="flex items-center justify-start">
                  Becoming a Savvy BIC Holder
                </span>
              </li>
              <li>
                <span className="flex items-center justify-start">
                  BIC Tokens Acquisition for Beginners
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
