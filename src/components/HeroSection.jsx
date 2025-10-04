import React from "react";

function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center" id="intro">
      <div className="intro_text">
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" textAnchor="middle">HI</text>
        </svg>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero-content-box">
              <span className="hero-sub-title">من جرولد هستم</span>
              <h1 className="hero-title">برنامه نویس و<br /> طراح UX</h1>
              <p className="lead">
                من مشکلات پیچیده کاربران در زمینه طراحی و برنامه نویسی را با توجه به سابقه کاری به راحتی برطرف میکنم
              </p>
              <div className="button-box d-flex flex-wrap align-items-center">
                <a href="#" className="btn tj-btn-secondary">
                  دریافت رزومه <i className="flaticon-download"></i>
                </a>
                <ul className="ul-reset social-icons">
                  <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-light fa-basketball"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-none d-md-block">
            <div className="hero-image-box text-center">
              <img src="assets/img/hero/me.png" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
