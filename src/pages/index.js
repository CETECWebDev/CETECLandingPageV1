// Import the cart component
import React from "react";
import Cart from "../components/Cart";
import HeroSection from "@/components/HeroSection";

export default function Home() {
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
    {
      image: "/cart4.svg",
      title: "بازی و سرگرمی",
      description: "در مسابقات و قرعه‌کشی‌های ما شرکت کنید و پاداش بگیرید.",
    },
  ];
  return (
    <div className="container px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <Cart
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <HeroSection></HeroSection>
    </div>
  );
}
