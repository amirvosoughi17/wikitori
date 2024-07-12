import { blogProps } from "@/types/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog: React.FC<blogProps> = ({
  image,
  title,
  description,
  badge,
  href,
}) => {
  return (
    <Link href={href} className="w-[365px] h-auto md:w-[400px] xl:w-[450px]">
      <div className="flex w-full h-full flex-col">
        <Image
          src={image}
          alt="title"
          width={340}
          height={280}
          className="w-full h-[245px] md:h-[300px] xl:h-[340px]"
        />
        <div className="flex flex-col mt-[-10px] gap-3 px-4 justify-center">
          <h1 className="lg:text-[20px] text-[17px] md:text-xl font-bold text-[#272657]">
            {title}
          </h1>
          <p className="text-[#2726577c] text-[12px] sm:text-[13.5px] md:text-[15px] leading-6 ">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
