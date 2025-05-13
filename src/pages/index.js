// Import the cart component
import React from "react";
import Cart from "../components/Cart";
import HeroSection from "@/components/HeroSection";
import CartSection from "@/components/CartSection";

export default function Home() {
 
  return (
    <div className="container px-5">
      <CartSection></CartSection>

      <HeroSection></HeroSection>
    </div>
  );
}
