// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-top d-flex justify-content-between align-items-center flex-wrap">
          <div className="footer-logo">
            <a href="#home"><img src="assets/img/logo.png" alt="Logo" /></a>
          </div>
          <div className="footer-menu">
            <ul className="d-flex flex-wrap">
              <li><a href="#home">خانه</a></li>
              <li><a href="#about-section">درباره ما</a></li>
              <li><a href="#portfolio-section">نمونه کارها</a></li>
              <li><a href="#contact-section">تماس با ما</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center mt-4">
          <p>© 1403 همه حقوق محفوظ است | طراحی توسط <a href="#">DjangoQueen</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
