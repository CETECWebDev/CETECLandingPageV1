import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import CardSection from "../CardSection/CardSection";

export default function MainTemplate() {
  return (
    <div className="container px-5">
      <div className="flex gap-4">
        <CardSection></CardSection>
      </div>

      <HeroSection></HeroSection>
    </div>
  );
}
