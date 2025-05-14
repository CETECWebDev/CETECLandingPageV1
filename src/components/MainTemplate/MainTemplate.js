import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import CardSection from "../CardSection/CardSection";
import PurposeBox from "../PurposeBox/PurposeBox";
import Questions from "../Questions/Questions";
import Services from "../Services/Services";

export default function MainTemplate() {
  return (
    <div className="container px-5">
      <PurposeBox></PurposeBox>

      <div >
        <CardSection></CardSection>
      </div>


      <Services />


      <HeroSection></HeroSection>


      <Questions />


    </div>
  );
}
