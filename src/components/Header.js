// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <>
      {/* Back To Top */}
      <div className="progress-wrap" id="scrollUp">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>

      {/* HEADER 1 */}
      <header className="tj-header-area header-absolute">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <a href="/">
                  <img src="/assets/img/logo/logo.png" alt="logo" />
                </a>
              </div>

              <div className="header-info-list d-none d-md-inline-block">
                <ul className="ul-reset">
                  <li>
                    <a href="mailto:mail@gerolddesign.com">
                      mail@gerolddesign.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="header-menu">
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

              <div className="header-button">
                <a href="#" className="btn tj-btn-primary">Hire me!</a>
              </div>

              <div className="menu-bar d-lg-none">
                <button>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HEADER 2 (Sticky) */}
      <header className="tj-header-area header-2 header-sticky sticky-out">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <a href="/">
                  <img src="/assets/img/logo/logo.png" alt="logo" />
                </a>
              </div>

              <div className="header-info-list d-none d-md-inline-block">
                <ul className="ul-reset">
                  <li>
                    <a href="mailto:mail@gerolddesign.com">
                      mail@gerolddesign.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="header-menu">
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

              <div className="header-button">
                <a href="#" className="btn tj-btn-primary">Hire me!</a>
              </div>

              <div className="menu-bar d-lg-none">
                <button>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
