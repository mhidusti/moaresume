import React from "react";

const skillsData = [
  { icon: "assets/img/icons/figma.svg", name: "Figma", percent: "92%" },
  { icon: "assets/img/icons/sketch.svg", name: "Sketch", percent: "80%" },
  { icon: "assets/img/icons/xd.svg", name: "XD", percent: "85%" },
  { icon: "assets/img/icons/wp.svg", name: "WordPress", percent: "99%" },
  { icon: "assets/img/icons/react.svg", name: "React", percent: "89%" },
  { icon: "assets/img/icons/js.svg", name: "JavaScript", percent: "93%" },
];

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title">My Skills</h2>
              <p>
                We put your ideas and thus your wishes in the form of a unique web
                project that inspires you and your customers.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
              {skillsData.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-inner">
                    <div className="icon-box">
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                    <div className="number">{skill.percent}</div>
                  </div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
