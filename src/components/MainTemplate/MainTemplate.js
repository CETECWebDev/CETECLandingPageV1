import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import CardSection from "../CardSection/CardSection";
import PurposeBox from "../PurposeBox/PurposeBox";
import Questions from "../Questions/Questions";
import Services from "../Services/Services";

export default function MainTemplate() {
  return (
    <>
      <PurposeBox></PurposeBox>

      
      <CardSection></CardSection>
      

      <Services />


      <HeroSection></HeroSection>


      <Questions />


    </>
  );
}
