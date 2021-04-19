import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopHeader from "../Top-Header/TopHeader";
import About from "./About";
import Contact from "./Contact";
import FooterWidget from "./FooterWidget";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Testimonial from "./Testimonial";
import WhyChoose from "./WhyChoose";
const Home = () => {
  return (
    <>
      <TopHeader/>
      <Header/>
      <HeroSection/>
      <About/>
      <WhyChoose/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <FooterWidget/>
      <Footer/>
    </>
  );
};

export default Home;
