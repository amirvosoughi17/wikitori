import React from "react";
import NavigationLink from "./NavigationLink";
import Image from "next/image";
import Logo from "@/assets/wiki-logo.svg";
import callingIcon from "@/assets/icons/calling-icon.svg";
import TelegramIcon from "@/assets/icons/Telegram.svg";
import WhatsappIcon from "@/assets/icons/Whatsapp.svg";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import instagramIcon from "@/assets/instagram.webp";
import telegramIcon from "@/assets/telegram.webp";

const Navigation = () => {
  return (
    <header className="flex items-center justify-between px-3 md:px-8 w-full py-3 sticky z-50 max-w-[1660px] mx-auto">
      <div className="">
        <Image
          src={Logo}
          alt="Logo"
          width={110}
          height={100}
          className="mb-[-20px] md:w-[110px] w-[90px]"
        />
      </div>
      <nav className="hidden lg:flex items-center gap-7 ml-[-170px]">
        <NavigationLink href="/" label="خانه" />
        <span className="w-[1px] h-[20px] bg-gray-300/30"></span>
        <NavigationLink href="/#products" label="محصولات" />
        <span className="w-[1px] h-[20px] bg-gray-300/30"></span>
        <NavigationLink href="/#services" label="خدمات" />
        <span className="w-[1px] h-[20px] bg-gray-300/30"></span>
        <NavigationLink href="/#blogs" label="مقالات" />
      </nav>
      <div className="flex items-center  mb-[-10px] ">
        <div className="flex gap-1 items-center mb-[-7px] ml-[-8px]">
          <Link target="_blank" href="https://t.me/Wikitori_admin">
            <Image
              src={telegramIcon}
              alt="telegram"
              width={40}
              height={40}
              className="md:ml-2  w-[30px] mt-[-5px] h-[30px] md:w-[40px] md:h-[40px]"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/wikitori?igsh=MTNkaGg3NjkwczJlbg=="
            className=" w-[40px] h-[40px] ml-[12px] md:ml-[25px]  mt-[-6px] flex items-center justify-center rounded-lg"
          >
            <Image
              src={instagramIcon}
              alt="instagramIcon"
              className="w-[30px] h-[30px] mr-[-5px] md:w-[40px] md:h-[40px]"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div className="flex gap-1 items-center">
          <div className="flex flex-col">
            <p className="md:text-sm text-xs text-gray-300 flex gap-2 items-center">
              <span className="md:text-lg text-md text-gray-200 font-bold tracking-widest">
                ۲۸۴۲۱۳۰۰
              </span>
              <span>۰۲۱</span>
            </p>
            <div className="flex items-center gap-1">
              <span className="md:text-xs text-[10px] text-gray-400">
                شماره تماس
              </span>
              <span className=" w-[25px] lg:w-[55px] h-[1.5px] bg-gray-400/40 rounded-lg"></span>
            </div>
          </div>
          <Image
            src={callingIcon}
            alt="calling icon"
            width={45}
            height={45}
            className=" md:w-[45px] w-[30px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
