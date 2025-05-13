import React from "react";

export default function HeroSection() {
  return (
    <div className="relative">
      <img src="/HeroSection.svg" className=""></img>
      <div className="absolute  top-[50%] md:left-[50%] md:translate-x-[-50%] translate-y-[-50%] flex flex-row md:flex-col items-center justify-center ">
        <h2 className="text-xl md:text-2xl  font-bold mb-2 text-center ">
          ما در هر قدم کنار شما هستیم
        </h2>
        <p className="mb-4 text-sm md:text-base pt-2">
          باشگاه مشتریان بانک تجارت، فرصتی برای همراهی بیشتر و خلق تجربه‌های
          متفاوت
        </p>
        <div className="space-x-0 space-y-2 md:space-y-0 md:space-x-4 flex flex-col md:flex-row  justify-center items-center pt-4">
          <button className="bg-green-400 text-white py-2 px-4 rounded-xl cursor-pointer">
            وارد شوید
          </button>
          <button className="bg-red-400 text-white py-2 px-4 rounded-xl cursor-pointer">
            ثبت‌نام کنید!
          </button>
        </div>
      </div>
    </div>
  );
}
