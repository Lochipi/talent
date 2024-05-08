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
        textDecoration: "none",
      }}
      className="text-center px-4 py-2 border-2 border-gray-200 rounded-3xl w-full sm:w-auto" // Add w-full for full width on small screens and w-auto for auto width on larger screens
    >
      {text}
    </Link>
  );
};

export default Button;
