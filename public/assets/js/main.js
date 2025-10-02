window.initGerold = function () {
  if (!window.jQuery) return;
  const $ = window.jQuery;
  "use strict";

  $("[data-bg-image]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-bg-image") + ")");
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  // مطمئن شو المنت وجود داره قبل از اجرا
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

  if (typeof WOW !== "undefined") {
    new WOW({ boxClass: "wow", animateClass: "animated", offset: 100, mobile: true, live: true }).init();
  }
};
