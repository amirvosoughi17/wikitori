"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/wiki-logo-single.png";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

interface HamburgerMenuProps {}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="z-100">
      <div className="cursor-pointer z-50 relative top-0 " onClick={toggleMenu}>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="w-6 h-[2.5px] rounded-md bg-white mb-[6px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          className="w-6 h-[2.5px] rounded-md bg-white mb-[6px]"
        ></motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? -45 : 0 }}
          className="w-6 h-[2.5px] rounded-md bg-white"
        ></motion.div>
      </div>
      <div className="relative top-0 left-0 right-0 bottom-0 z-100">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-full h-full bg-neutral-900 text-white z-40"
        >
          <div className="w-full h-full flex justify-between py-[60px] flex-col  p-10">
            <div className="flex flex-col gap-[30px]">
              <Image
                src={Logo}
                alt="logo"
                width={140}
                height={40}
                className="mr-[-55px]"
              />
              <div className="flex flex-col gap-3">
                <Link
                  onClick={toggleMenu}
                  href="/"
                  className="flex items-center gap-5  mb-4 text-neutral-300 hover:border-b-[0.9px] duration-200 border-neutral-500 pb-3"
                >
                  <FaHome  size={25}/>
                  <h1 className="text-3xl ">خانه</h1>
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/#products"
                  className=" flex items-center gap-5  mb-4 text-neutral-300 hover:border-b-[0.9px] duration-200 border-neutral-500 pb-3"
                >
                  <AiOutlineProduct  size={25}/>
                  <h1 className=" text-3xl">محصولات</h1>
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/#services"
                  className=" flex items-center gap-5  mb-4 text-neutral-300 hover:border-b-[0.9px] duration-200 border-neutral-500 pb-3"
                >
                  <MdOutlineHomeRepairService size={25}/>
                  <h1 className="text-3xl" >خدمات</h1>
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/#blogs"
                  className="t flex items-center gap-5  mb-4 text-neutral-300 hover:border-b-[0.9px] duration-200 border-neutral-500 pb-3"
                >
                  <MdArticle  size={25}/>
                  <span className=" text-3xl">مقالات</span>
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/"
                  className=" flex items-center gap-5  mb-4 text-neutral-300 hover:border-b-[0.9px] duration-200 border-neutral-500 pb-3"
                >
                  <FaSquarePhone  size={25}/>
                  <span className=" text-3xl">تماس باما</span>
                </Link>
              </div>
            </div>
            <div className=" w-full flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-5">
                  <Link href="/" className="bg-slate-500/30 p-2 rounded-xl">
                    <FaTelegram size={30}/>
                  </Link>
                  <Link href="/" className="bg-slate-500/30 p-2 rounded-xl">
                    <FaWhatsapp size={30}/>
                  </Link>
                  <Link href="/" className="bg-slate-500/30 p-2 rounded-xl">
                   <FaInstagram size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
