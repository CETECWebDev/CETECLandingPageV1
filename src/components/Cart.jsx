import React from 'react';

export default function Cart() {
  return (
    <div className="p-4 bg-[#FFF7F0] rounded-lg shadow-md text-center">
      <div className="">
        <img
          src="/cart1.svg" // Replace with the actual image path
          alt="Cart Illustration"
          className="w-[100%]"
        />
      </div>
      <h3 className="text-lg pt-6 font-bold text-[#3A3A3A] mb-2 font-[YekanBakhBold]">بازی و سرگرمی</h3>
      <p className="text-sm pt-6 pb-12 text-[#3A3A3A] font-[YekanBakh]">
        در مسابقات و قرعه‌کشی‌های ما شرکت کنید و پاداش بگیرید.
      </p>
    </div>
  );
}
