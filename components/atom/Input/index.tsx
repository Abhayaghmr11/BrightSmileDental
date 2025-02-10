"use client";
import { Input as UiInput } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import React from "react";

interface InputProp extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  className?: string;
}

const Input: React.FC<InputProp> = ({ icon, className, type, ...prop }) => {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  return (
    <div className="relative ">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <UiInput
        type={type === "password" && !isPasswordVisible ? "password" : "text"}
        className={`${className} ${icon ? "pl-11" : ""}`}
        {...prop}
      />
      {type === "password" && (
        <button
          type="button"
          className=" absolute bg-transparent inset-y-0 right-0 pr-2 flex items-center cursor-pointer"
          onClick={() => setPasswordVisible((prev) => !prev)}
        >
          {isPasswordVisible ? (
            <Eye className=" w-[15px] h-[15px]" />
          ) : (
            <EyeOff />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
