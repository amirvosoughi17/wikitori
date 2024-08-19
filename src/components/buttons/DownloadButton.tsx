import React from "react";
import documentIcon from "@/assets/icons/document-text.svg";
import Image from "next/image";

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/wiki.pdf";
    link.download = "wiki.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button 
    onClick={() => {console.log("no src ")}}
    className="bg-white px-9 py-4 rounded-lg text-[#272657] mt-4 font-medium z-40 flex items-center gap-2">
      <Image src={documentIcon} alt="icon" width={20} height={20} />
      <span>دانلود رزومه</span>
    </button>
  );
};

export default DownloadButton;
