import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form-box">
      <div className="section-header">
        <h2 className="section-title">Let’s work together!</h2>
        <p>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
      </div>

      <div className="tj-contact-form">
        <form id="contact-form">
          <div className="row gx-3">
            <div className="col-sm-6">
              <div className="form_group">
                <input type="text" name="conName" placeholder="First name" autoComplete="off" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <input type="text" name="conLName" placeholder="Last name" autoComplete="off" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <input type="email" name="conEmail" placeholder="Email address" autoComplete="off" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <input type="tel" name="conPhone" placeholder="Phone number" autoComplete="off" />
              </div>
            </div>
            <div className="col-12">
              <div className="form_group">
                <select name="conService" className="tj-nice-select" defaultValue="">
                  <option value="" disabled>Choose Service</option>
                  <option value="branding">Branding Design</option>
                  <option value="web">Web Design</option>
                  <option value="uxui">UI/UX Design</option>
                  <option value="app">App Design</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="form_group">
                <textarea name="conMessage" placeholder="Message"></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="form_btn">
                <button type="submit" className="btn tj-btn-primary">Send Message</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
