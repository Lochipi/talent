import type { FC } from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  url: string;
  color?: string;
}

const Button: FC<ButtonProps> = ({ text, url, color = "#46BD61" }) => {
  const textColor = color === "#46BD61" ? "white" : "#46BD61";
  return (
    <Link
      href={url}
      style={{
        backgroundColor: color,
        color: textColor,
        padding: "10px 20px", 
        border: "none",
        textDecoration: "none",
      }}
      className="px-4 py-2 rounded-3xl"
    >
      {text}
    </Link>
  );
};

export default Button;
