import React from "react";

function Preloader() {
  return (
    <div className="preloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="preloader-heading">
        <div className="load-text">
          <span>ب</span>
          <span>ا</span>
          <span>ر</span>
          <span>گ</span>
          <span>ذ</span>
          <span>ا</span>
          <span>ر</span>
          <span>ی</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
