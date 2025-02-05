import React from "react";
import clsx from "clsx";

interface Textprop {
  children: React.ReactNode;
  className?: string;
  variant?: "title" | "heading" | "subheading" | "body" | "span" | "nav";
}

const Text: React.FC<Textprop> = ({
  children,
  className,
  variant = "body",
}) => {
  const Component =
    variant === "title"
      ? "h1"
      : variant === "heading"
      ? "h2"
      : variant === "subheading"
      ? "h3"
      : variant === "nav"
      ? "span"
      : variant === "body"
      ? "p"
      : "span";

  const baseStyle = clsx(
    variant === "title" && " text-[32px] sm:text-banner_text font-black",
    variant === "heading" && "text-[24px] sm:text-heading font-black",
    variant === "subheading" && "text-sub_heading font-semibold",
    variant === "body" && "text-paragraph",
    variant === "span" && "sm:text-label font-light text-[12px]",
    variant === "nav" &&
      "text-nav font-light hover:text-primary transition-all duration-500 ease-in-out",
    className
  );

  return <Component className={baseStyle}>{children}</Component>;
};

export default Text;
