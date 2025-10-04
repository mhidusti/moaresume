import React from "react";

const ResumeSection = () => {
  return (
    <section className="resume-section" id="resume-section">
      <div className="container">
        <div className="row">
          {/* Experience */}
          <div className="col-md-6">
            <div className="section-header">
              <h2 className="section-title">
                <i className="flaticon-recommendation"></i> My Experience
              </h2>
            </div>

            <div className="resume-widget">
              <div className="resume-item">
                <div className="time">2022 - Present</div>
                <h3 className="resume-title">Lead Developer</h3>
                <div className="institute">Blockdots, London</div>
              </div>
              <div className="resume-item">
                <div className="time">2021 - 2022</div>
                <h3 className="resume-title">Full Stack Web Developer</h3>
                <div className="institute">Parsons, The New School</div>
              </div>
              <div className="resume-item">
                <div className="time">2020 - 2021</div>
                <h3 className="resume-title">UI Designer</h3>
                <div className="institute">House of Life, Leeds</div>
              </div>
              <div className="resume-item">
                <div className="time">2018 - 2020</div>
                <h3 className="resume-title">Junior Graphics Designer</h3>
                <div className="institute">Theme Junction, Bursa</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="col-md-6">
            <div className="section-header">
              <h2 className="section-title">
                <i className="flaticon-graduation-cap"></i> My Education
              </h2>
            </div>

            <div className="resume-widget">
              <div className="resume-item">
                <div className="time">2020 - 2023</div>
                <h3 className="resume-title">Programming course</h3>
                <div className="institute">Harverd University</div>
              </div>
              <div className="resume-item">
                <div className="time">2016 - 2020</div>
                <h3 className="resume-title">Graphic design course</h3>
                <div className="institute">University of Denmark</div>
              </div>
              <div className="resume-item">
                <div className="time">2012 - 2015</div>
                <h3 className="resume-title">Web design course</h3>
                <div className="institute">University of California</div>
              </div>
              <div className="resume-item">
                <div className="time">2010 - 2011</div>
                <h3 className="resume-title">Design & Technology</h3>
                <div className="institute">Parsons, The New School</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
