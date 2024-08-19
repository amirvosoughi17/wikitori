"use client";
import React from "react";
import heroBg from "@/assets/hero-bg.png";
import Image from "next/image";
import heroWikiLogo from "@/assets/hero-wiki-logo.svg";
import TypeingAnimation from "./TypeingAnimation";
import DownloadButton from "../../buttons/DownloadButton";


const Hero = () => {
  return (
    <div className="w-full min-h-[400px]">
      <Image
        src={heroBg}
        width={1000}
        height={1000}
        alt="herobg"
        className="w-full object-cover h-[600px] lg:h-[550px] xl:h-[600px] 2xl:h-[700px] z-0 absolute  top-0"
      />
      <div className="flex flex-col items-center justify-center gap-6 mt-[110px] ">
        <TypeingAnimation />
        <p className="text-[14px] sm:text-md  md:text-lg lg:text-[18px] 2xl:text-[26px] leading-5 lg:leading-8 text-gray-400 z-40 max-w-[85%] md:max-w-[55%] lg:max-w-[45%] text-center tracking-wider">
          تیم ویکیتوری با سابقه ی ایجاد و ویرایش بیش از   <span className="text-extrabold text-white">200 مقاله </span><span className="text-extrabold text-white">  و ثبت 20 </span>          هزار ویرایش در ویکی پدیا فارسی، انگلیسی و عربی دانش و تجربه و تخـــصص
        </p>
        <DownloadButton />
      </div>
    </div>
  );
};

export default Hero;
