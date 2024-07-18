import React from "react";
import Image from "next/image";
import sarnakhImage from "@/assets/sarenakh-1.png";
import clinicImage from "@/assets/clinik.png";
import javanehImage from "@/assets/sarnkh-des.png";
import mobileJavaneh from "@/assets/mobile-javaneh.png";
import mobilesarenakh from "@/assets/mobile-sarenakh.webp";
import mobileclinik from "@/assets/mobile-clinik.jpg";
import arrow from "@/assets/icons/arrow.svg";

const MainProducts = () => {
  return (
    <div className="my-10 py-10 w-full min-h-screen 2xl:mt-[120px] ">
      <div className="flex flex-col gap-10 lg:gap-[80px] w-full">
        <div className="flex  flex-col bg-transparent h-auto  pb-6 md:pb-0 rounded-[25px] md:rounded-[45px] md:max-h-[340px] 2xl:max-h-[370px] md:pl-6 border-[0.8px] border-neutral-400/50 justify-center  md:flex-row gap-5 md:gap-10 w-[95%] sm:w-[90%] md:w-[85%] xl:w-[80%] max-w-[1100px] mx-auto  ">
          <div className="w-full h-auto order-1  md:w-1/2">
            <Image
              src={clinicImage}
              alt="کلینیک"
              width={200}
              height={360}
              className=" h-full w-full hidden md:block"
            />
            <Image
              src={mobileclinik}
              alt="کلینیک"
              width={200}
              height={360}
              className=" h-full w-full block md:hidden max-h-[250px] min-h-[250px] md:max-h-full rounded-t-[25px]"
            />
          </div>
          <div className="flex order-2   flex-col items-start justify-center  gap-3 w-full md:w-1/2 px-4 sm:px-6 md:pl-10">
            <div className="flex  items-center gap-7 ">
              <h2 className="text-[#272657] text-xl md:text-[25px] xl:text-[26px] font-medium">
                کلینیک
              </h2>
              <span className="w-[1.5px] h-[12px] bg-gray-500/40 rounded-md"></span>
              <p className="text-[#3A65C8] text-[14px] md:text-[15px]">
                تحلیل داده‌ها، تقویت برند، ویکیپدیا
              </p>
            </div>
            <div className="">
              <p className="text-[#59587E] text-[12px] md:text-[14px] xl:text-[15px] leading-[28px] xl:leading-[31px] ">
                کلینیک فضایی برای بررسی وضعیت موضوع مد نظر شما برای حضور در
                ویکیپدیا است. ما در کلینیک به شما استراتژی لازم برای حضور در
                ویکیپیدیا را عرضه می‌کنیم و در راه پیاده سازی آن قدم به قدم
                همراه شما هستیم. اگر موضوع مدنظر در ویکیپدیا مقاله داشت، در
                کلینیک می توانید راه‌های رشد و بهره‌برداری حداکثری از مقاله
                ویکپیدیا را دریافت کنیم. ما در کلینیک ویکیتوری برای هر مسأله‌ای
                چندین راهکار داریم.
              </p>
            </div>
            <button className="bg-[#3A65C8] py-3 text-sm md:text-md px-2 2xl:py-4 xl:px-6 rounded-md mt-4 md:mt-2 xl:mt-2 text-white flex items-center gap-4">
              <span>اطلاعات بیشتر</span>
              <Image src={arrow} alt="arrow" width={15} height={15} />
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-transparent h-auto  pb-6 md:pb-0 rounded-[25px] md:rounded-[45px] md:max-h-[340px] 2xl:max-h-[370px]  md:pr-6 border-[0.8px] border-neutral-400/50 justify-center  md:flex-row gap-5 md:gap-10 w-[95%] sm:w-[90%] md:w-[85%] xl:w-[80%] max-w-[1100px] mx-auto ">
          <div className="flex order-2 md:order-1 flex-col items-start justify-center  gap-3 w-full md:w-1/2 px-4 sm:px-6 md:pr-10">
            <div className="flex  items-center gap-7 ">
              <h2 className="text-[#272657] text-xl md:text-[25px] xl:text-[26px] font-medium">
                سرنخ
              </h2>
              <span className="w-[1.5px] h-[12px] bg-gray-500/40 rounded-md"></span>
              <p className="text-[#3A65C8] text-[14px] md:text-[15px]">
                تحلیل داده‌ها، تقویت برند، ویکیپدیا
              </p>
            </div>
            <div className="">
              <p className="text-[#59587E] text-[12px] md:text-[14px] xl:text-[15px] leading-[28px] xl:leading-[31px] ">
                در مقالات ویکیپدیا ابزارهای آماری بسیاری وجوددارد. با استفاده از
                این ابزارها و به پشتوانه تجربه چندین ساله ویکیتوری در حضور در
                ویکیپدیا اطلاعات معناداری از برند و موضوع مدنظر را استخراج  کرده
                و در راستای تقویت برند، آفت زدایی و رقابت سازنده با هم ردیفان
                این داده‌ها را در اختیار شما قرار می‌دهیم. ما سرنخ‌هایی را به
                شما عرضه می‌کنیم تا موانع رشد خود را بیابید.
              </p>
            </div>
            <button className="bg-[#3A65C8] py-3 text-sm md:text-md px-2 2xl:py-4 xl:px-6 rounded-md mt-1 md:mt-2 xl:mt-2 text-white flex items-center gap-4">
              <span>اطلاعات بیشتر</span>
              <Image src={arrow} alt="arrow" width={15} height={15} />
            </button>
          </div>
          <div className="w-full  order-1 md:order-2 h-auto md:w-1/2">
            <Image
              src={sarnakhImage}
              alt="سرنخ"
              width={500}
              height={360}
              className="w-full h-full hidden md:block "
            />
            <Image
              src={mobilesarenakh}
              alt="سرنخ"
              width={500}
              height={360}
              className="w-full h-full max-h-[250px] min-h-[250px] md:max-h-full block md:hidden rounded-t-[25px] "
            />
          </div>
        </div>
        <div className="flex flex-col bg-transparent rounded-[25px] md:rounded-[45px] h-auto  pb-6 md:pb-0  md:max-h-[340px] 2xl:max-h-[370px] md:pl-6 border-[0.8px] border-neutral-400/50 justify-center  md:flex-row gap-5 md:gap-10 w-[95%] sm:w-[90%] md:w-[85%] xl:w-[80%] max-w-[1100px] mx-auto ">
          <div className="flex flex-col order-2 md:order-2 items-start justify-center  gap-3 w-full md:w-1/2 px-4 sm:px-6 md:pr-10">
            <div className="flex  items-center gap-7 ">
              <h2 className="text-[#272657] text-xl md:text-[25px] xl:text-[26px] font-medium">
                جوانه
              </h2>
              <span className="w-[1.5px] h-[12px] bg-gray-500/40 rounded-md"></span>
              <p className="text-[#3A65C8] text-[14px] md:text-[15px]">
                تحلیل داده‌ها، تقویت برند، ویکیپدیا
              </p>
            </div>
            <div className="">
              <p className="text-[#59587E] text-[12px] md:text-[14px] xl:text-[15px] leading-[28px] xl:leading-[31px] ">
                در راستای تولید اطلاعات جدید و حل برخی مشکلات و پاسخ به سوالات
                مجموعه تحقیقاتی با هدف بررسی و تجزیه و تحلیل داده‌ها در یک حوزه
                خاص انجام می‌شوند. به این فرآیند پژوهش گفته می‌شود و با استفاده
                از روش‌های تحقیقاتی، مطالعات علمی و تحلیل‌های آماری ، نتایج و
                توصیه‌های معتبری ارائه می‌گردد. پژوهش در فهم عمیق ما از دنیای
                پیرامون و پیشرفت در هر حوزه‌‌ای نقش بسزایی دارد.
              </p>
            </div>
            <button className="bg-[#3A65C8] py-3 text-sm md:text-md px-2 2xl:py-4 xl:px-6 rounded-md mt-4 md:mt-2 xl:mt-2 text-white flex items-center gap-4">
              <span>اطلاعات بیشتر</span>
              <Image src={arrow} alt="arrow" width={15} height={15} />
            </button>
          </div>
          <div className="w-full order-1 md:order-1 h-auto md:w-1/2">
            <Image
              src={javanehImage}
              alt="جوانه"
              width={500}
              height={360}
              className="w-full h-full hidden md:block"
            />
            <Image
              src={mobileJavaneh}
              alt="جوانه"
              width={500}
              height={360}
              className="w-full h-full max-h-[250px]  object-cover md:max-h-full block md:hidden rounded-t-[25px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProducts;
