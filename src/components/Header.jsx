import React from "react";

function Header() {
  return (
    <>
      <header className="tj-header-area header-absolute">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <a href="/">
                  <img src="assets/img/logo/logo-dark.png" alt="Logo" />
                </a>
              </div>

              <div className="header-info-list d-none d-md-inline-block">
                <ul className="ul-reset">
                  <li><a href="mailto:Gerold@gmail.com">Gerold@gmail.com</a></li>
                </ul>
              </div>

              <div className="header-menu">
                <nav>
                  <ul>
                    <li><a href="#services-section">خدمات</a></li>
                    <li><a href="#works-section">نمونه کار</a></li>
                    <li><a href="#resume-section">رزومه</a></li>
                    <li><a href="#skills-section">مهارت ها</a></li>
                    <li><a href="#testimonials-section">گواهینامه ها</a></li>
                    <li><a href="#contact-section">تماس با ما</a></li>
                  </ul>
                </nav>
              </div>

              <div className="header-button">
                <a href="#contact-section" className="btn tj-btn-primary">تماس با من</a>
              </div>

              <div className="menu-bar d-lg-none">
                <button>
                  <span></span><span></span><span></span><span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
