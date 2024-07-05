import React from "react";
import bg from "@/assets/services-bg.png";
import Service from "./Service";
import Image from "next/image";

const servicesInfo = [
  {
    image: "/book-square.svg",
    content: "ایجاد و ویرایش مقاالت در ویکیپدیا فارسی، انگلیسی و عربی",
  },
  {
    image: "/Dart.svg",
    content: "مشاوره و ارائه استراتژی برای حضور در ویکیپدیا",
  },
  {
    image: "/Announcement.svg",
    content: "حضور در صفحه اول گوگل با داشتن مقاله در ویکیپدیا",
  },
  {
    image: "/receipt-search.svg",
    content: "اوسینت و جمع آوری اطلاعات معنادار از ویکیپدیا",
  },
  {
    image: "/Verified.svg",
    content: "گرفتن تیک آبی اینستاگرام با ایجاد مقاله در ویکیپدیا",
  },
  {
    image: "/link.svg",
    content: "ایجاد و درج بک لینک در مقالات ویکیپدیا",
  },
];
const Services = () => {
  return (
    <div className=" w-full min-h-[500px] relative my-[200px] ">
        <Image 
        src={bg}
        alt="bg"
        className="w-full h-[600px] object-cover xl:max-h-[700px]"
        width={700}
        height={500}
        />
      <div className="flex flex-col items-center justify-center gap-[80px] w-full mt-[-500px] xl:mt-[-500px]">
        <h1 className="text-2xl max-w-[88%] leading-9 text-center md:text-3xl lg:text-4xl font-semibold text-white">با خدمات و پلتفرم های ویکیطوری آشنا شوید</h1>
        <div className=" grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2 md:gap-7">
          {servicesInfo.map((item, index) => (
            <Service key={index} image={item.image} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
