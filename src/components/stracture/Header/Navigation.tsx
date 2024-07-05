import React from "react";
import NavigationLink from "./NavigationLink";
import Image from "next/image";
import Logo from "@/assets/wiki-logo.svg";
import callingIcon from "@/assets/icons/calling-icon.svg";
import HamburgerMenu from "./HamburgerMenu";
import TelegramIcon from "@/assets/icons/Telegram.svg";
import WhatsappIcon from "@/assets/icons/Whatsapp.svg";
import Link from "next/link";

const Navigation = () => {
  return (
    <header className="flex items-center justify-between px-8 w-full sticky z-50 max-w-[1660px] mx-auto">
      <div className="">
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </div>
      <nav className="hidden lg:flex items-center gap-7 ml-[-170px]">
        <NavigationLink href="/" label="خانه" />
        <span className="w-[1px] h-[20px] bg-gray-300/30"></span>
        <NavigationLink href="/#products" label="محصولات" />
        <span className="w-[1px] h-[20px] bg-gray-300/30"></span>
        <NavigationLink href="/#services" label="خدمات" />
        <span className="w-[1px] h-[20px] bg-gray-300/30"></span>
        <NavigationLink href="/#articles" label="مقالات" />
      </nav>
      <div className="flex items-center ">
        <div className="hidden lg:flex gap-1 items-center">
          <Link href="">
            <Image
              src={TelegramIcon}
              alt="telegram"
              width={90}
              height={90}
              className="ml-[-47px] min-w-[90px]"
            />
          </Link>
          <Link href="">
            <Image src={WhatsappIcon} alt="whatsapp" width={90} height={90} />
          </Link>
        </div>
        <div className="hidden lg:flex gap-1 items-center">
          <div className="flex flex-col">
            <p className="text-sm text-gray-300 flex gap-2 items-center">
              <span className="text-lg text-gray-200 font-bold tracking-widest">
                ۳۲۳۴۰۳۴۹
              </span>
              <span>۰۲۱</span>
            </p>
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-400">شماره تماس</span>
              <span className=" w-[55px] h-[1.5px] bg-gray-400/40 rounded-lg"></span>
            </div>
          </div>
          <Image src={callingIcon} alt="calling icon" width={45} height={45} />
        </div>
        <div className="block lg:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
