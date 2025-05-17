import React from 'react';

export default function Card( { image, title, description }) {
  return (
    <div className="pb-4 overflow-hidden bg-white rounded-lg shadow-md text-center">
      <div className="">
        <img
          src={image} // Replace with the actual image path
          alt="Cart Illustration"
          className="w-[100%]"
        />
      </div>
      <h3 className="text-lg pt-6 font-bold text-[#3A3A3A] mb-2 font-[YekanBakhBold]">{title}</h3>
      <p className="text-sm pt-6 pb-12  text-[#3A3A3A] font-[YekanBakh]">
      {description}
      </p>
    </div>
  );
}
