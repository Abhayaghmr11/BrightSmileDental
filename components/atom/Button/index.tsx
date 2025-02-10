import React from "react";
import { Button as ButtonUi } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type buttonTypes = "default" | "secondary";
type buttonSize = "default";

interface ButtonProps {
  variant: buttonTypes;
  size?: buttonSize;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Add this line to include ...props
}

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  disabled,
  children,
  size,
  className,
  ...props
}) => {
  return (
    <ButtonUi
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={`${className}`}
      {...props}
    >
      {disabled ? (
        <>
          <Loader2 className=" animate-spin " /> Please wait...
        </>
      ) : (
        children
      )}
    </ButtonUi>
  );
};

export default Button;
