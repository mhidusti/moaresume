import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 order-2 order-md-1">
            <ContactForm />
          </div>
          <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
