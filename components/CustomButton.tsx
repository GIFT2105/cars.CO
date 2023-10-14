"use client";

import Image from "next/image";

import { CustomButtonProps } from "../types";

const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
  
  <div className="flex flex-row   ">
 <input type="text" className="bg-white h-14 mt-10 w-96   " placeholder="Search for a car make,model or variant"></input>
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={` bg-red-500  ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
</div>
);

export default Button;
