// SkillsSection.jsx
import React from "react";

const SkillsSection = () => {
  const skills = [
    { name: "فیگما", icon: "figma.svg", percent: "92%" },
    { name: "Sketch", icon: "sketch.svg", percent: "80%" },
    { name: "XD", icon: "xd.svg", percent: "85%" },
    { name: "وردپرس", icon: "wp.svg", percent: "99%" },
    { name: "ری اکت", icon: "react.svg", percent: "89%" },
    { name: "جاوا اسکریپت", icon: "js.svg", percent: "93%" },
  ];

  return (
    <section className="skills-section" id="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">مهارت ها</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                ما ایده های شما و در نتیجه خواسته های شما را در قالب یک پروژه وب منحصر به فرد قرار می دهیم.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
              {skills.map((skill, i) => (
                <div className="skill-item wow fadeInUp" data-wow-delay={`.${3+i}s`} key={i}>
                  <div className="skill-inner">
                    <div className="icon-box">
                      <img src={`assets/img/icons/${skill.icon}`} alt={skill.name} />
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
