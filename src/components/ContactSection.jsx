// ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">تماس با ما</h2>
          <p className="wow fadeInUp" data-wow-delay=".4s">
            هر سوال یا درخواستی دارید، از طریق فرم زیر با ما در ارتباط باشید.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form className="contact-form wow fadeInUp" data-wow-delay=".5s">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" placeholder="نام شما" required />
                </div>
                <div className="col-md-6">
                  <input type="email" placeholder="ایمیل شما" required />
                </div>
              </div>
              <input type="text" placeholder="موضوع" required />
              <textarea placeholder="پیام شما" required></textarea>
              <button type="submit" className="btn tj-btn-primary">
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
