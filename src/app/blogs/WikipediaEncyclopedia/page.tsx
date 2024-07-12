import React from "react";
import heroBg from "@/assets/hero-bg.png";
import Image from "next/image";
import image from '@/assets/1.png';

const WikipediaEncyclopedia = () => {
  return (
    <div className=" min-h-screen w-full ">
      <Image
        src={heroBg}
        width={1000}
        height={1000}
        alt="herobg"
        className="w-full object-cover h-[325px] lg:h-[350px] xl:h-[370px] z-0 absolute  top-0"
      />
      <div className="flex flex-col z-30 ">
        <div className=" absolute top-[180px] text-center mx-auto w-full flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white">
            آشنایی با دانشنامه ویکیپدیا
          </h1>
        </div>
        <div className="mt-[295px] lg:mt-[350px] xl:mt-[320px] px-5 md:px-10 ">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 ">
              <h1 className="text-neutral-900 text-xl md:text-2xl  font-bold leading-8 tracking-wide">
                اشنایی با دانشنامه ویکیپدیا
              </h1>
              <p className="text-[#161619b0] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] leading-6 lg:leading-8 xl:leading-9 tracking-wide">
                ویکی‌پدیا دانشنامه‌ای است همگانی و آزاد؛ بدین معنی که همه
                می‌توانند به نوشتن و ویرایش نوشتارهای موجود در آن بپردازند.
                البته این نوشتارها و ویرایش‌ها باید مطابق با اساس‌نامهٔ
                ویکی‌پدیا باشند؛ یعنی مطالب بی‌طرفانه و بدون پایمال کردن حق نشر
                دیگران نوشته شده باشند. مدیریت بررسی نوشتارها توسط خودِ کاربران
                انجام می‌شود. کسانی که در امر تکمیل این پروژهٔ بی‌پایان مشارکت
                می‌کنند، به هم‌زبانان خود یاری رسانده‌اند تا در امر گردآوری
                بی‌همتاترین دانشنامه جهانی سهمی داشته باشند.
              </p>
            </div>
            <p className="text-[#161619b0] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] leading-6 lg:leading-8 xl:leading-9 tracking-wide">
              دانشنامه ویکی‌پدیا هم‌زمان به بسیاری از زبان‌ها نوشته می‌شود و
              همکاران آن افرادی از سراسر جهان‌اند و هرکسی می‌تواند به رشد آن کمک
              کند. این دانشنامه از زمان تولد تاکنون رشد بسیار سریعی داشته و
              بزرگ‌ترین وبگاه دانشنامه‌ای با بیش از ۸۰ میلیون بازدید کننده در
              ماه است و بیش از ۹۰٬۰۰۰ کاربر فعال دارد که بر روی بیش از
              ۱۸٬۰۰۰٬۰۰۰ مقاله به ۲۷۰ زبان کار می‌کنند. در ویکی‌پدیای فارسی تا
              این لحظه ۱٬۰۰۴٬۰۶۴ مقاله وجود دارد و هر روز هزاران کاربر از این
              دانشنامه بازدید می‌کنند.
            </p>
            <p className="text-[#161619b0] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] leading-6 lg:leading-8 xl:leading-9 tracking-wide">
              شکل و حالت همکاری گروهی که در دانشنامه ویکی‌پدیا ایجاد شده را
              می‌توان بی‌سابقه دانست. اصول هوشمندانه‌ای که ویکی‌پدیا بر پایه
              آن‌ها بنا شده باعث شده‌است که این مجموعه از اطلاعات با پویایی
              دائمی به سوی تکمیل شدن و تکامل پیش برود. ویکی‌پدیا را می‌شود به
              مثابه انسان بزرگ و خردمند در نظر گرفت که سلول‌های پیکره‌اش از
              میلیون‌ها انسان فعال تشکیل یافته‌است. جیمی ولز، بنیان‌گذار
              ویکی‌پدیا گفته است: «ویکی‌پدیا چیز ویژه‌ای است. چیزی مانند یک
              کتابخانه یا پارک همگانی است. ویکی‌پدیا همانند معبدی برای ذهن است.
              جایی که همگی می‌توانیم به آن‌جا برویم تا بیندیشیم، بیاموزیم، و
              دانشمان را به اشتراک بگذاریم.»
            </p>
            <Image 
            src={image}
            alt="img"
            width={600}
            className="w-full md:w-[80%] xl:w-[65%] mx-auto"
            />
            <span className=" text-lg md:text-xl font-medium text-neutral-700">
              چند سؤال مهم درباره ویکیپدیا
            </span>
            <div className="flex flex-col gap-4">
              <h1 className="text-neutral-900 text-xl md:text-2xl  font-bold leading-8 tracking-wide">
                - ویکی‌پدیا چیست؟
              </h1>
              <p className="text-[#161619b0] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] leading-6 lg:leading-8 xl:leading-9 tracking-wide">
                ویکی‌پدیا یک دانش‌نامه است و دانش‌نامه مجموعه‌ای از نوشتارهای
                خلاصه برای پوشش‌دادن اطلاعات تمام عرصه‌های دانسته‌های بشری است.
                ویکی‌پدیا جای مطالب نامعتبر، تمرین مقاله‌نویسی، دموکراسی، وبلاگ
                و تالار گفتگو نیست. برای آشنایی کامل با ویکی‌پدیا، پنج بنیاد
                ویکی‌پدیا را مطالعه کنید، تمام قوانین و مقررات ویکی‌پدیا را
                می‌توان با اجماع کاربران و رعایت این پنج اصل تغییر داد.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-neutral-900 text-xl md:text-2xl  font-bold leading-8 tracking-wide">
                - آیا ویکی‌پدیا متعلق به گروه یا سازمان خاصی است؟ و تا چه اندازه
                بر روی مطالب ویکی‌پدیا نفوذ و تأثیر دارد؟
              </h1>
              <p className="text-[#161619b0] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] leading-6 lg:leading-8 xl:leading-9 tracking-wide">
                ویکی‌پدیا توسط بنیاد ویکی‌مدیا تأسیس شد و مالکیت آن (نام و علائم
                تجاری و…) به آن بنیاد تعلق دارد. از نظر فنی (پشتیبانی اینترنتی)
                توسط بنیاد ویکی‌مدیا پشتیبانی می‌شود؛ اما بنیاد ویکی‌مدیا هیچ
                نفوذ و تأثیری در مطالب درون ویکی‌پدیا و پروژه‌های دیگرش ندارد و
                محتویات آن توسط کاربرانش (افرادی مانند من و شما از همه نقاط
                دنیا) ساخته و ویرایش می‌شود. ویرایش، تغییر و افزودن مطلب، همگانی
                و بر پایه مشارکت عمومی است و ادارهٔ امور ویکی‌پدیا، با اجماع،
                گفتگو، همکاری و کار جمعی داوطلبانه، صورت می‌پذیرد.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-neutral-900 text-xl md:text-2xl  font-bold leading-8 tracking-wide">
                -منابع مالی ویکی‌پدیا از کجا تأمین می‌گردد؟
              </h1>
              <p className="text-[#161619b0] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] leading-6 lg:leading-8 xl:leading-9 tracking-wide">
                منابع مالی فقط از طریق کمک مالی‌ای که افراد به ویکی‌پدیا اهدا
                می‌کنند تأمین می‌شود و این پول‌ها صرف مسائل فنی و گسترش
                نرم‌افزار مدیاویکی می‌شود و در ویکی‌پدیای فارسی (ویکی‌فا) هیج
                پولی از سوی بنیاد برای ساخت مقاله یا ویرایش در مقاله پرداخت
                نمی‌شود.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-neutral-900 text-xl md:text-2xl  font-bold leading-8 tracking-wide">
                -اینجا چه کسی پاسخگو و مسئول است؟ و برای شکایت با چه کسی تماس
                بگیرم؟ صندوق شکایات و انتقادات کجاست؟
              </h1>
              <p className="text-[#161619b0] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] leading-6 lg:leading-8 xl:leading-9 tracking-wide">
                در ویکی‌پدیا به صورت کلی کسی مسئول مطالب درون مقالات نیست. با
                مشاهدهٔ تاریخچهٔ صفحه، کاربری که تصور می‌کنید مطالب اشتباه به
                مقالات می‌افزاید را پیدا کنید و در صفحهٔ بحثش با وی در تماس
                باشید. در صورتی که کاربر به قوانین ویکی‌پدیا احترام نگذاشت
                در وپ:تام شکایت خود را بیان نمائید و برای تماس محرمانه
                به ویکی‌پدیا:تماس با ما مراجعه کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WikipediaEncyclopedia;
