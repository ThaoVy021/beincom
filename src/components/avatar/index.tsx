import { ImgHTMLAttributes } from "react";

export default function Avatar(props: ImgHTMLAttributes<HTMLImageElement>) {
  const {
    src = "/default-avatar.png",
    alt = "user",
    className,
    ...rest
  } = props;

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full ${className}`}
      {...rest}
    ></img>
  );
}
