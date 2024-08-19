import React from "react";
import Image from "next/image";
import footerLogo from "@/assets/newWiki-w.png";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-[150px] min-h-[650px] lg:min-h-[400px] bg-[#272657] flex items-center justify-center">
      <div className="flex flex-col gap-5 w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col gap-1 lg:flex-row items-center justify-center lg:justify-between ">
          <Image
            src={footerLogo}
            alt="footer"
            width={120}
            height={100}
            className=" lg:ml-[-20px]"
          />
          <nav className="flex items-center gap-8">
            <Link
              href="/#products"
              className="text-white hover:text-blue-400 duration-300"
            >
              محصولات
            </Link>
            <span className="w-[0.7px] h-[20px] bg-gray-300/40"></span>
            <Link
              href="/#services"
              className="text-white hover:text-blue-400 duration-300"
            >
              خدمات
            </Link>
            <span className="w-[0.7px] h-[20px] bg-gray-300/40"></span>
            <Link
              href="/#blogs"
              className="text-white hover:text-blue-400 duration-300"
            >
              مقالات
            </Link>
          </nav>
        </div>
        <div className="flex w-full items-start justify-center lg:justify-between">
          <div className="flex flex-col items-center lg:items-start  gap-3 pr-5">
            <p className=" text-sm md:text-md text-center lg:text-start leading-8 max-w-[80%]  text-gray-300 lg:max-w-[75%]">
              آدرس : تهران - بزرگراه بابایی - بلوار نیروی زمینی - مجتمع الماس
              ایران - طبقه همکف واحد{" "}
            </p>
            <div className="flex items-center gap-1">
              <span className="ext-sm md:text-md  text-gray-300">تلفن :</span>
              <p className="ext-sm md:text-md  text-gray-300" dir="ltr">
                021-28421300{" "}
              </p>
            </div>
            <p className="ext-sm md:text-md  text-gray-300">
              ایمیل : info@wikitori.ir
            </p>
          </div>
          <div className="flex items-center gap-5 md:gap-3 mt-7 lg:mt-0">
            <Link
              target="_blank"
              href="https://t.me/Wikitori_admin"
              className="bg-slate-500/30 p-2 rounded-xl"
            >
              <FaTelegram size={30} className="text-neutral-300" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/wikitori?igsh=MTNkaGg3NjkwczJlbg=="
              className="bg-slate-500/30 p-2 rounded-xl"
            >
              <FaInstagram size={30} className="text-neutral-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
