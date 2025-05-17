import React from "react";

export default function HeroSection() {
  return (
    <div className="relative">
      <img src="/HeroSection.svg" ></img>
      <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col  items-center justify-center ">
        <div className="flex flex-col ">
          <h2 className="text-[clamp(1rem,2vw,2rem)]  font-bold mb-2 text-center ">
            ما در هر قدم کنار شما هستیم
          </h2>
          <p className="mb-4 text-[clamp(0.6rem,1.9vw,1.5rem)] lg:pt-2 whitespace-nowrap">
            باشگاه مشتریان بانک تجارت، فرصتی برای همراهی بیشتر و خلق تجربه‌های
            متفاوت
          </p>
        </div>

        <div className="gap-2   space-y-0 space-x-4 flex  md:flex-row  justify-center items-center pt-1 lg:pt-4">
          <button className="bg-green-400 text-white py-1 lg:py-2 px-4 rounded-xl cursor-pointer">
            وارد شوید
          </button>
          <button className="bg-red-400 text-white py-1 lg:py-2 px-4 rounded-xl cursor-pointer">
            ثبت‌نام کنید!
          </button>
        </div>
      </div>
    </div>
  );
}
