// Import the cart component
import React from "react";
import Cart from "../components/Cart";
import HeroSection from "@/components/HeroSection";
import CartSection from "@/components/CartSection";
import Header from "@/components/Header/Header";
import MainTemplate from "@/components/MainTemplate/MainTemplate";

export default function Home() {
  return (
    <>
      <div className="container px-5">
        <Header />
        <MainTemplate />
        <CartSection></CartSection>

        <HeroSection></HeroSection>
      </div>
    </>
  );
}
