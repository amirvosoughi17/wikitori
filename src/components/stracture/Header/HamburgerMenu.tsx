"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/wiki-logo-single.png";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

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
          className="fixed top-0 right-0 w-full h-full bg-slate-900 text-white z-40"
        >
          <div className="w-full h-full flex justify-between py-[60px] flex-col  p-10">
            <div className="flex flex-col gap-[70px]">
              <Image
                src={Logo}
                alt="logo"
                width={140}
                height={40}
                className="mr-[-55px]"
              />
              <div className="flex flex-col">
                <Link
                  onClick={toggleMenu}
                  href="/"
                  className="text-3xl  mb-4 text-neutral-300 hover:border-b-[0.9px] duration-200 border-neutral-500 pb-3"
                >
                  خانه
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/#about"
                  className="text-3xl  mb-4 text-neutral-300 hover:border-b-[0.9px] duration-200 border-neutral-500 pb-3"
                >
                  محصولات
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/contact"
                  className="text-3xl  mb-4 text-neutral-300 hover:border-b-[0.9px] duration-200 border-neutral-500 pb-3"
                >
                  خدمات
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/contact"
                  className="text-3xl  mb-4 text-neutral-300 hover:border-b-[0.9px] duration-200 border-neutral-500 pb-3"
                >
                  مقالات
                </Link>
              </div>
            </div>
            <div className=" w-full flex items-center justify-between">
              <span className="w-1"></span>
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
