import React from "react";
import Card from "../Card/Card";

export default function PurposeBox() {
  const features = [
    {
      image: "/cart1.svg",
      title: "خدمات متنوع",
      description:
        "در صورت عدم استفاده از خدمات ما می‌توانید معادل ریالی امتیاز خود را برداشت کنید.",
    },
    {
      image: "/cart2.svg",
      title: "کسب درآمد بیشتر",
      description: "با افزایش زیرمجموعه‌های خود درآمدتان را افزایش دهید.",
    },
    {
      image: "/cart3.svg",
      title: "بولتن و گزارش‌های تحلیلی",
      description:
        "با گزارش‌ های تحلیلی از وضعیت بازار و سهام شرکت‌ها مطلع شوید.",
    },
  ];
  return (
    <div className="container">
    <div className="flex flex-col gap-8 py-12 xl:flex-row items-center">
      <div className="flex ">
        <div className="grid grid-cols-2 gap-6  mx-auto relative">
          <div className=" row-span-2 h-full flex items-center"> 
            <Card
              className="row-span-2"
              image={features[0].image}
              title={features[0].title}
              description={features[0].description}
            />
          </div>
          <div>
            <Card
              image={features[1].image}
              title={features[1].title}
              description={features[1].description}
            />
          </div>
          <div>
            <Card
              image={features[2].image}
              title={features[2].title}
              description={features[2].description}
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col px-12 ">
        <h2 className="bg-[#8176FF] w-fit text-white px-4 py-2 rounded-xl ">
          درباره باشگاه مشتریان
        </h2>
        <h1 className="font-[YekanBakhBold] text-2xl pt-6">
          اینجا چه کارهایی انجام میشه و هدف ما چیه
        </h1>
        <p className="pt-8 text-justify w-[7git0%]">
          سامانه باشگاه مشتریان کارگزاری بانک تجارت (منشور) با توجه به نیاز و
          خواسته شما مشتریان عزیز راه‌اندازی شد. اگر شما هم عضو خانواده بزرگ
          کارگزاری بانک تجارت هستید با ثبت نام در باشگاه، امتیاز بگیرید و از
          خدمات متنوعی که برای شما عزیزان در نظر گرفته شده است بهره‌مند شوید.
        </p>
      </div>
    </div>
    </div>
  );
}
