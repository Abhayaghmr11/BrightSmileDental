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
}

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  disabled,
  children,
  size,
  className,
}) => {
  return (
    <ButtonUi
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={`${className}`}
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
