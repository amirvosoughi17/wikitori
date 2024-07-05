import React from "react";
import Image from "next/image";
import footerLogo from "@/assets/footer-logo.svg";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-[150px] min-h-[750px] lg:min-h-[450px] bg-[#272657] flex items-center justify-center">
      <div className="flex flex-col gap-5 w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col gap-1 lg:flex-row items-center justify-center lg:justify-between border-b-[0.5px] border-gray-600 pb-8">
          <Image
            src={footerLogo}
            alt="footer"
            width={180}
            height={100}
            className=""
          />
          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-blue-400 duration-300"
            >
              محصولات
            </Link>
            <span className="w-[0.7px] h-[20px] bg-gray-300/40"></span>
            <Link
              href="/"
              className="text-white hover:text-blue-400 duration-300"
            >
              خدمات
            </Link>
            <span className="w-[0.7px] h-[20px] bg-gray-300/40"></span>
            <Link
              href="/"
              className="text-white hover:text-blue-400 duration-300"
            >
              مقالات
            </Link>
          </nav>
          <div className="flex items-center gap-5 mt-7 lg:mt-0">
            <Link href="/" className="bg-slate-500/30 p-2 rounded-xl">
              <FaTelegram size={30} className="text-neutral-300" />
            </Link>
            <Link href="/" className="bg-slate-500/30 p-2 rounded-xl">
              <FaWhatsapp size={30} className="text-neutral-300" />
            </Link>
            <Link href="/" className="bg-slate-500/30 p-2 rounded-xl">
              <FaInstagram size={30} className="text-neutral-300" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-gray-500 text-[12px] md:text-[14px] leading-8 tracking-wide ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
            شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
