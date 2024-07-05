"use client"
import React from "react";
import { navigationLinkProps } from "@/types/types";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavigationLink: React.FC<navigationLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const activeLink = pathname === href;
  return (
    <Link href={href}>
      <span
        className={`text-[#f2f2f2] duration-300 hover:text-[#ffff] text-md ${
          activeLink && "text-[#ffff]"
        }`}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavigationLink;
