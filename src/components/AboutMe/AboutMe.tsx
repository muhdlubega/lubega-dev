import React from "react";
import './AboutMe.scss';

const AboutMe: React.FC = () => {
  return (
    <div className="about-main">
      <div className="about-card">
        {/* <div className="about-img-container">
          <img className="about-effect" src={effect}></img>
          <img className="about-image" src={aboutme}></img>
        </div> */}
        <div className="about-text">
          <p className="about-title">About Me</p>
          <p className="about-content">My name is Muhammad Lubega Bin Siraje. I am a creative and detail-oriented person with passion in programming and engineering. During my bachelor studies I learned the basics of computer science and programming through C/C++. After I got my degree I decided to continue studying computer science where I delved deeper into softwares such as C/C++, Python, Javascript, HTML and CSS and learned the basics of frameworks and databases through SQL, Flask and Ajax. I am a fast learner with high critical thinking and problem solving skills. I am always open to learning new things and constructive criticism to become better in the working field.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
