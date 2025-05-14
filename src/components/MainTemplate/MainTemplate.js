import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import CardSection from "../CardSection/CardSection";
import PurposeBox from "../PurposeBox/PurposeBox";

export default function MainTemplate() {
  return (
    <div className="container px-5">
        <PurposeBox></PurposeBox>

      <div >
        <CardSection></CardSection>
      </div>

      <HeroSection></HeroSection>
    </div>
  );
}
