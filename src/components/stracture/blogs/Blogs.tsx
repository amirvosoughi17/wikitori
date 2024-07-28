import React from "react";
import Image from "next/image";
import blogsTitle from "@/assets/blogs-title.png";
import Blog from "./Blog";

const blogsinfo = [
  {
    image: "/blog-1.png",
    title: "آشنایی با دانشنامه ویکی پدیا",
    decription:
      "ویکی‌پدیا دانشنامه‌ای است همگانی و آزاد؛ بدین معنی که همه می‌توانند به نوشتن و ویرایش نوشتارهای موجود در آن بپردازند. البته این نوشتارها و ویرایش‌ها باید مطابق با اساس‌نامهٔ ...     ",
    badge: "",
    href: "/blogs/WikipediaEncyclopedia",
  },
  {
    image: "/blog-2.png",
    title: "ویکی‌پدیا:سیاست‌ها و رهنمودها",
    decription:
      "سیاست‌ها و رهنمودهای ویکی‌پدیا به وسیلهٔ اجتماع ویکی‌پدیا برای توصیف بهترین روش‌ها، روشن‌نمودن اصول، حل اختلافات و در موارد دیگر با هدف پیش بردن ویکی‌پدیا به....",
    badge: "",
    href: "/blogs/WikipediaPolicies",
  },
  {
    image: "/blog-3.png",
    title: "ویکی‌پدیا:پنج بنیاد",
    decription:
      "ویکی‌پدیا یک دانشنامه است که ویژگی‌های دانشنامه‌های عمومی و تخصصی و فرهنگ‌های جغرافیایی را در خود ترکیب کرده‌است...",
    badge: "",
    href: "/blogs/FiveFoundations",
  },
];
const Blogs = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col items-center gap-[85px]">
        <div className="flex flex-col items-center gap-2">
          <Image src={blogsTitle} alt="title" width={300} height={150} />
          <p className="text-md font-medium text-[#82819c] ">
            آخرین مطالب و مقالات مفید منتشر شده توسط ویکیطوری
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {blogsinfo.map((item, index) => (
            <Blog
              key={index}
              title={item.title}
              description={item.decription}
              badge={item.badge}
              image={item.image}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
