import Avatar from "../avatar";
import ThreeDots from "../../asset/icons/threeDots.svg";
import Button from "../button";

export default function Comment(props: any) {
  const {
    username = "Unknown user",
    content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente debitis minima similique! Itaque at consequuntur porro, sequi sit beatae voluptas. Quis aliquam dolor rem est veritatis esse beatae molestias?",
    avatar,
  } = props;

  return (
    <div className="flex gap-2 mx-4 my-2">
      <Avatar src={avatar} className="w-8 h-8"></Avatar>
      <div>
        <div className="bg-neutral-2 rounded-md p-3 text-xs w-full">
          <div className="flex justify-between ">
            <strong>{username}</strong>
            <span className="flex items-center gap-2 pl-2">
              <span className="cursor-default whitespace-nowrap">22h</span>
              <button>
                <ThreeDots />
              </button>
            </span>
          </div>

          <p>{content}</p>
        </div>

        <div className="flex p-1 gap-x-0.5">
          <button
            type="button"
            className="text-xs cursor-pointer hover:underline"
          >
            Like
          </button>
          <span className="self-center rounded-full bg-black text-slate-950 size-0.5 mx-2"></span>
          <div className="bg-neutral-2 rounded-full">
            <img src="/likeIcon.png" alt="BIC Like" className="w-5 h-5 p-0.5" />
          </div>

          <div className="flex items-center gap-1">
            <button className="cursor-pointer hover:underline text-xs ml-1">
              2
            </button>
          </div>

          <div className="flex items-center ml-5">
            <button className="cursor-pointer hover:underline text-xs ml-1">
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
