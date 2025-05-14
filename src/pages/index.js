import '@fortawesome/fontawesome-free/css/all.min.css';
import Services from './components/Services/Services';
import Questions from './components/Questions/Questions';
// Import the cart component
import React from "react";
import Header from "@/components/Header/Header";
import MainTemplate from "@/components/MainTemplate/MainTemplate";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Services />
      <Questions />
      
        <Header />
        <MainTemplate />
       

        
    
      
      <Footer />
    </>
  );
}
