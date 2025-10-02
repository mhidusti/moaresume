import React from "react";

const TestimonialItem = ({ logo, user, quote, name, designation }) => {
  return (
    <div className="testimonial-item">
      <div className="top-area d-flex flex-wrap justify-content-between">
        <div className="logo-box">
          <img src={logo} alt="" />
        </div>
        <div className="image-box">
          <img src={user} alt={name} />
        </div>
      </div>
      <div className="icon-box">{/* SVG ها می‌تونن ثابت باشن */}</div>
      <p className="quote">{quote}</p>
      <h4 className="name">{name}</h4>
      <span className="designation">{designation}</span>
    </div>
  );
};

export default TestimonialItem;
