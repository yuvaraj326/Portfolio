import React from "react";
import { GiProcessor } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { GiSpellBook } from "react-icons/gi";

export default function Info() {
  return (
    <div className="about-info grid">
      <a href="#skills" style={{textDecoration:'none'}}>
        <div className="about-box">
          <i className="about-icon"><GiSpellBook/></i>
          <h3 className="about-title">skills</h3>
          <span className="about-subtitle">Full Stack Development</span>
        </div>
      </a>
      <a href="#skills" style={{textDecoration:'none'}}>
        <div className="about-box">
          <i className="about-icon"><PiStudentBold/></i>
          <h3 className="about-title">Eductation</h3>
          <span className="about-subtitle">B.Com Computer Application</span>
        </div>
      </a>
      <a href="#project" style={{textDecoration:'none'}}>
        <div className="about-box">
          <i className="about-icon"><GiProcessor/></i>
          <h3 className="about-title">Projects</h3>
          <span className="about-subtitle">5+ Personal Projects Completed</span>
        </div>
      </a>
    </div>
  );
}
