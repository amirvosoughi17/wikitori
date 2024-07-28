import React from "react";
import Image from "next/image";
import footerLogo from "@/assets/wiki-logo.svg";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-[150px] min-h-[650px] lg:min-h-[450px] bg-[#272657] flex items-center justify-center">
      <div className="flex flex-col gap-5 w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col gap-1 lg:flex-row items-center justify-center lg:justify-between border-b-[0.5px] border-gray-600 pb-8">
          <Image
            src={footerLogo}
            alt="footer"
            width={130}
            height={100}
            className=""
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
        <div className="flex flex-col gap-6">
          <p className="text-gray-500 text-[12px] md:text-[14px] lg:text-[17px] leading-8  ">
            گروه ویکی طوری با سابقه ی ایجاد و ویرایش بیش از 200 مقاله و ثبت 20
            هزار ویرایش در ویکیپدیا فارسی، انگلیسی و عربی دانش و تجربه و تخصص
            خود را در اختیار شما قرار می دهد. برای داشتن مقاله در ویکیپدیا همین
            حاال با ما تماس بگیرید و از مشاوره رایگان ما بهره مند شوید. با
            ویکیطوری، صفحه اول گوگل از آن شماست.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
