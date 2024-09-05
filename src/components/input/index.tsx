import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const {
    className = "Input",
    type = "text",
    placeholder = "Write your comment...",
    ...rest
  } = props;

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}
