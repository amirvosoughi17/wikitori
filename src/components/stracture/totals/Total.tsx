import { totalProps } from "@/types/types";
import React from "react";
import Counter from "./Counter";

const Total: React.FC<totalProps> = ({ title, from, to }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <div className=" relative min-h-[75px]">
        <Counter
          from={from}
          to={to}
          className=" font-semibold  text-[#272657] text-7xl z-20  "
        />
        <span className="absolute bottom-5 left-[-10px]  z-0 w-[155px] h-[16px] bg-[#3a65c825]"></span>
      </div>
      <h1 className="text-[#272657] text-xl lg:text-2xl font-medium">{title}</h1>
    </div>
  );
};

export default Total;
