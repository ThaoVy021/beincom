import { Skeleton } from "@radix-ui/themes";
import React from "react";

export default function HeaderPostsSkeleton() {
  return (
    <>
      <div className="flex items-center p-4">
        <span className="inline-flex items-center w-full gap-3">
          <Skeleton width="48px" height="48px" className="rounded-full" />
          <div className="flex h-12 grow flex-col text-xs">
            <div className="flex w-full items-center">
              <div className="font-semibold text-purple-50">
                <Skeleton>Lorem ipsum dolor sit amet</Skeleton>
              </div>
            </div>
            <div>
              <Skeleton>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Skeleton>
            </div>
          </div>
        </span>
      </div>
      <div className="w-full gap-y-2">
        <div className="px-4 pb-4">
          <Skeleton className="overflow-hidden text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            maiores culpa expedita aliquid laudantium iste totam porro, beatae,
            voluptatum rerum perferendis accusamus? Doloremque ut animi
            voluptas. Ad quis natus repellat.
          </Skeleton>
        </div>
      </div>
    </>
  );
}
