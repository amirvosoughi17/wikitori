import React from "react";
import Total from "./Total";
import WikiUnderLine from "../WikiUnderLine";
import totalsElement from '@/assets/totals-element.svg';
import Image from "next/image";

const Totals = () => {
  return (
    <div className="w-full min-h-[300px] mt-[110px] py-10 relative">
      <Image 
      src={totalsElement}
      alt=""
      className=" absolute left-0 top-[-90px] w-[0] md:w-[400px]"
      />
      <div className="flex flex-col gap-[85px] items-center justify-center w-full">
        <h1 className="flex items-center gap-[7px] ">
          <span className="font-semibold text-xl sm:text-2xl xl:text-3xl text-[#272657]">
            با
          </span>
          <WikiUnderLine
            className="text-[#3A65C8] font-semibold text-xl sm:text-2xl xl:text-3xl"
            title="ویکیطوری ,"
            size="w-[110px] h-[10px]"
          />
          <span className="font-semibold text-xl sm:text-2xl xl:text-3xl text-[#272657]">
            صفحه اول گوگل از ان شماست
          </span>
        </h1>
        <div className="flex lg:flex-row flex-col gap-[25px] sm:gap-[40px] lg:gap-[60px] ">
          <div className="flex flex-row gap-[25px] sm:gap-[40px] lg:gap-[60px]">
            <Total from={0} to={200} title="مقاله ثبت شده" />
            <span className="w-[1.5px] bg-gray-300/40 h-[140px] "></span>
            <Total from={0} to={600} title="total articles" />
          </div>
          <span className="w-[1.5px] bg-gray-300/40 h-[140px] hidden lg:block"></span>
          <div className="flex  flex-row gap-[25px] sm:gap-[40px] lg:gap-[60px]">
            <Total from={0} to={200} title="مقاله ثبت شده" />
            <span className="w-[1.5px] bg-gray-300/40 h-[140px]"></span>
            <Total from={0} to={600} title="total articles" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Totals;
