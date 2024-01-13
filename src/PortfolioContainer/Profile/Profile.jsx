import React from "react";
import "./Profile.css";
import profilepic from "../../assets/IMG_2256_edited (1).jpeg";
import  cvpdf from '../../assets/YUVARAJ CV.pdf'
import { FaLinkedin,FaGithub  } from "react-icons/fa";

export default function Profile() {

  
  return (
    
    <section className="profile-container container " id="home">
      
      <div className="profile-pic">
        <img className="profile-pic1"
          // style={{ height: "150px", width: "150px"  }}
          src={profilepic}
          alt="profile pic"
        />
      </div>
      <div className="profile-text">
        
        <p className="profile-p1">Hello, I'm</p>
        <h1 className="profile-title">Yuvaraj</h1>
        <p className="profile-p2">Full Stack Developer</p>
        <div className="btn-container">
          <a href={cvpdf} download="" >
          <button className="btn btn-colorcv">Download CV</button>
          </a>
          <a href="#contact">
          <button className="btn btn-colorcm" >Contact Me</button>
          </a>
        </div>
        <div className="profile-social">
          <a href="https://linkedin.com/in/yuvaraj-vx31">
          <FaLinkedin style={{height: "30px", width: "30px"}}/>
          </a>
          <a href="https://github.com/yuvaraj326">
            <FaGithub  style={{height: "30px", width: "30px"}}/>
          </a>
        </div>
      </div>
    </section>
  );
}
