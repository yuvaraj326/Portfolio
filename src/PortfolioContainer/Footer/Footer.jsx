import React from 'react'
import "./Footer.css"
import {FaInstagram, FaLinkedin,FaGithub  } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className='footer' id='footer'>
      <div className='footer-container container'>
        
        <h1 className="footer-title"> <a href="# ">Yuvaraj</a></h1>

          <ul className="footer-list">
            <li>
              <a href="# " className="footer-link">Profile</a>
            </li>
            <li>
              <a href="#about" className="footer-link">About</a>
            </li>
            <li>
              <a href="#skills" className="footer-link">Skills</a>
            </li>
            <li>
              <a href="#project" className="footer-link">Project</a>
            </li>
          </ul>

          <div className="footer-social">
           <a className='footer-social-link f1' href="https://www.instagram.com/yuvi_vx/" target="_blank" rel="noopener noreferrer">
             <FaInstagram />
           </a>
           <a
           className='footer-social-link f2'
            href="https://www.linkedin.com/in/yuvaraj-vx31"
            target="_blank"
            rel="noopener noreferrer" 
          >
             <FaLinkedin />
           </a>
           <a className='footer-social-link f3' href="https://github.com/yuvaraj326" target="_blank" rel="noopener noreferrer">
             <FaGithub />
           </a>
         </div>
          <span className="footer-copyrights">&#169; Yuvaraj. All Rights reserved</span>
      </div>
    </footer>

    )
}


