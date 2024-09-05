import React from "react";
import VerifiedIcon from "../../../asset/icons/verifiedIcon.svg";
import StarIcon from "../../../asset/icons/starIcon.svg";
import ThreeDots from "../../../asset/icons/threeDots.svg";
import Avatar from "../../avatar";

export default function HeaderPosts(props: any) {
  const {
    user: { avatar, fullName, username },
    isVerifed = false,
    isEarlyAdopter = false,
    isStar = false,
    postedDate = Date.now(),
  } = props;

  return (
    <div className="flex items-center p-4">
      <span className="inline-flex items-center w-full">
        <Avatar
          src={avatar}
          alt={`${username}-avatar`}
          className="w-10 h-10 cursor-pointer mr-3"
        />
        <div className="flex h-12 grow flex-col text-xs">
          <div className="flex w-full items-center">
            <div className="font-semibold text-purple-50">
              <span className="flex items-center gap-x-1">
                <span className="truncate cursor-pointer hover:underline bg-clip-text decoration-neutral-60 bg-gradient-purple-lining">
                  {fullName}
                </span>
                {!!isVerifed && (
                  <VerifiedIcon width={20} height={20} viewBox="0 0 24 24" />
                )}
                {!!isEarlyAdopter && (
                  <img
                    src="/earlyAdopterIcon.webp"
                    alt="earlyAdopterIcon"
                    className="rounded-full h-3 w-3"
                  />
                )}
              </span>
            </div>
            <span className="font-normal">
              <span className="m-1">·</span>
              <span className="cursor-default whitespace-nowrap">
                {/* {postedDate.valueOf()} */}
                3w
              </span>
            </span>
          </div>
          <div className="block w-full">
            <span className="whitespace-nowrap font-normal">Posted to</span>
            <div className="inline w-full ml-1 font-semibold">
              <a
                href="https://group.beincom.com/en/communities/f54db29a-6c30-4f7d-a722-a84d781a7fd3"
                className="inline cursor-pointer hover:underline"
              >
                Beincom Official - Việt Nam, &nbsp;
              </a>
              <span className="w-full cursor-pointer">+1 others</span>
            </div>
          </div>
        </div>
      </span>

      <span className="flex items-center gap-2 pl-2">
        {!!isStar && <StarIcon className="text-purple-50" />}
        <button className="flex items-center justify-center space-x-2 whitespace-nowrap rounded-md font-medium">
          <ThreeDots />
        </button>
      </span>
    </div>
  );
}
