import { HTMLAttributes } from "react";

export default function PostWrapper({
  children,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="box-border pt-0 mt-0">
      <div className="pb-4">
        <div className="flex size-full flex-col overflow-hidden rounded-lg bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
