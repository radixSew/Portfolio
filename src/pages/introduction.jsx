import React from "react";
import "../css/introduction.css";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import img from "../Assets/sew.jpg";
import img1 from "../Assets/linkedin.png";
import img2 from "../Assets/github.png";
import img3 from "../Assets/medium.png";

const Introduction = () => {
  const [subRole] = useTypewriter({
    words: [" Full Stack Developer", " Web Developer", " Web Designer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="homeConationer">
      <div className="topI">
        <div className="profileImg">
          <img src={img} alt="Radhika Nanyakkara" />
        </div>
        <div className="homeContent">
          <h1 className="porfileName">Radhika Nanayakkara</h1>
          <p className="profileDescription">
            I'm a <span className="subRoles">{subRole}</span>
            <span className="curserStyle">
              <Cursor className="CurserSt"></Cursor>
            </span>
          </p>
          <div className="contactIconsContainer">
            <a href="#contact" className="hireLink">
              Contact Me
            </a>
            <div className="iconContainer">
              <img src={img1} alt="LinkedIn" className="socialIcon" />
              <img src={img2} alt="GitHub" className="socialIcon" />
              <img src={img3} alt="Medium" className="socialIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
