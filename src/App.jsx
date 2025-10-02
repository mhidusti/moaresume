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

function App() {
  // اجرای JS تم بعد از mount کامپوننت‌ها (مثل carousel و animation)
  useEffect(() => {
    if (window.initGerold) {
      window.initGerold(); // فرض بر اینه که main.js یک تابع initGerold برای افکت‌ها داره
    }
  }, []);

  return (
    <Router>
      {/* پیش‌لودر */}
      <Preloader />

      {/* هدر */}
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ResumeSection />
              <PortfolioSection />

              {/* نمونه BlogItem با props */}
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
        {/* مسیرهای دیگر مثل /login یا /dashboard می‌توانند اضافه شوند */}
      </Routes>

      {/* فوتر */}
      <Footer />
    </Router>
  );
}

export default App;
