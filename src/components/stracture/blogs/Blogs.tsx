import React from "react";
import Image from "next/image";
import blogsTitle from "@/assets/blogs-title.png";
import Blog from "./Blog";

const blogsinfo = [
  {
    image: "/blog-1.png",
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    badge: "",
    href : "/blogs/"
  },
  {
    image: "/blog-2.png",
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    badge: "",
    href : "/blogs/"
  },
  {
    image: "/blog-3.png",
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    badge: "",
    href : "/blogs/"
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
