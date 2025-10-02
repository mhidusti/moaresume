import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// کامپوننت‌ها
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ResumeSection from "./components/ResumeSection";
import PortfolioSection from "./components/PortfolioSection";
import BlogItem from "./components/BlogItem";
import ServicePopup from "./components/ServicePopup";
import ContactSection from "./components/ContactSection";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import './App.css';

/* ======================
   اینجا اضافه کن
====================== */
window.initGerold = function () {
  if (!window.jQuery) return;
  const $ = window.jQuery;
  "use strict";

  // Data js
  $("[data-bg-image]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-bg-image") + ")");
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  // Preloader + GSAP
  const svg = document.getElementById("preloaderSvg");
  if (svg) {
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
      delay: 1.5,
      y: -100,
      opacity: 0,
    });
    tl.to(svg, { duration: 0.5, attr: { d: curve }, ease: "power2.easeIn" })
      .to(svg, { duration: 0.5, attr: { d: flat }, ease: "power2.easeOut" });
    tl.to(".preloader", { y: -1500 });
    tl.to(".preloader", { zIndex: -1, display: "none" });
  }

  // WOW Animation
  if (typeof WOW !== "undefined") {
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 100,
      mobile: true,
      live: true,
    }).init();
  }

  // BackToTop امن
  const progressWrap = document.querySelector(".progress-wrap path");
  if (progressWrap) {
    const path = progressWrap;
    const length = path.getTotalLength();
    path.style.transition = path.style.WebkitTransition = "none";
    path.style.strokeDasharray = length + " " + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 10ms linear";

    const updateDash = () => {
      const scroll = $(window).scrollTop();
      const height = $(document).height() - $(window).height();
      const progress = length - (scroll * length) / height;
      path.style.strokeDashoffset = progress;
    };
    updateDash();
    $(window).on("scroll", updateDash);

    $(".progress-wrap").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 550);
      return false;
    });
  }
};
/* ======================
   اضافه شد
====================== */

function App() {
  // اجرای JS تم بعد از mount کامپوننت‌ها
  useEffect(() => {
    if (window.initGerold) {
      window.initGerold();
    }
  }, []);

  return (
    <Router>
      <Preloader />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ResumeSection />
              <PortfolioSection />
              <BlogItem
                image="/assets/img/blog/sample.jpg"
                category="Design"
                date="Oct 2, 2025"
                comments={0}
                title="نمونه بلاگ"
              />
              <ServicePopup />
              <ContactSection />
              <ContactForm />
              <ContactInfo />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
