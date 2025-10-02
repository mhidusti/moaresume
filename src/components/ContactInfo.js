import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact-info-list">
      <ul className="ul-reset">
        <li className="d-flex flex-wrap align-items-center position-relative">
          <div className="icon-box"><i className="flaticon-phone-call"></i></div>
          <div className="text-box">
            <p>Phone</p>
            <a href="tel:0123456789">+01 123 654 8096</a>
          </div>
        </li>
        <li className="d-flex flex-wrap align-items-center position-relative">
          <div className="icon-box"><i className="flaticon-mail-inbox-app"></i></div>
          <div className="text-box">
            <p>Email</p>
            <a href="mailto:gerolddesign@mail.com">gerolddesign@mail.com</a>
          </div>
        </li>
        <li className="d-flex flex-wrap align-items-center position-relative">
          <div className="icon-box"><i className="flaticon-location"></i></div>
          <div className="text-box">
            <p>Address</p>
            <a href="#">Warne Park Street Pine, <br />FL 33157, New York</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
