import { serviceProps } from "@/types/types";
import React from "react";
import Image from "next/image";

const Service: React.FC<serviceProps> = ({ image, content }) => {
  return (
    <div className="flex items-center justify-center rounded-2xl gap-2 sm:gap-6 bg-white shadow-xl flex-col w-[180px] h-[150px] md:w-[320px] md:h-[240px] ">
      <Image src={image} alt="services" width={70} height={70} className="w-[40px] h-[40px] md:w-[70px] md:h-[70px]" />
      <h1 className="text-[13px] md:text-lg max-w-[75%] text-center  text-[#272657]">
        {content}
      </h1>
    </div>
  );
};

export default Service;
