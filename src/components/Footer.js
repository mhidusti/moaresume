import React from "react";

const Footer = () => {
  return (
    <footer className="tj-footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-logo-box">
              <a href="#">
                <img src="/assets/img/logo/logo.png" alt="Logo" />
              </a>
            </div>
            <div className="footer-menu">
              <nav>
                <ul>
                  <li><a href="#services-section">Services</a></li>
                  <li><a href="#works-section">Works</a></li>
                  <li><a href="#resume-section">Resume</a></li>
                  <li><a href="#skills-section">Skills</a></li>
                  <li><a href="#testimonials-section">Testimonials</a></li>
                  <li><a href="#contact-section">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="copy-text">
              <p>
                &copy; 2024 All rights reserved by{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  ThemeJunction
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
