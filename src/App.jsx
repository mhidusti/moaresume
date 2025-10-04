import React from "react";

// Import Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
// import AboutSection from "./components/AboutSection"; // فعلاً نداریم
import SkillsSection from "./components/SkillsSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ResumeSection from "./components/ResumeSection";
import TestimonialSection from "./components/TestimonialSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";

const App = () => {
  return (
    <>
      <Preloader />
      <Header />
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <PortfolioSection />
      <ResumeSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
