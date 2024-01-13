import React, { useState } from "react";
import "./Skills.css";
// import { FaGraduationCap } from 'react-icons/fa';
import { PiStudentBold } from "react-icons/pi";
import { GiSpellBook } from "react-icons/gi";
import { BsCalendarDate } from "react-icons/bs";


function Skills() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="skills section" id="skills">
      <div className="section-head">
      <span className="section-subtitle">My Experience in</span>
      <h2 className="section-title">Qulification </h2>
      </div>
      {/* <FaGraduationCap/> */}
      <div className="skills-container container">
        <div className="skills-tabs">
          <div
            className={
              toggleState === 1
                ? "skills-button skills-active button-flex"
                : "skills-button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            {/* ivon*/} <i className="uil uil-graduation-cap skill-icon"><PiStudentBold/></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "skills-button skills-active button-flex"
                : "skills-button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap skill-icon"><GiSpellBook/></i>Skills
          </div>
        </div>

        <div className="skills-sections">
          <div
            className={
              toggleState === 1
                ? "skills-content skills-content-active"
                : "skills-content"
            }
          >
            {/*1 */}
            <div className="skills-data">
              <div>
                <h4 className="skills-title">Full Stack Development</h4>
                <span className="skills-subtitle"> Qspider Chennai</span>
                <div className="skills-calender">
                  <i className="uil"><BsCalendarDate/></i> 2022-2023
                </div>
              </div>
              <div>
                <span className="skills-rounder"></span>
                <span className="skills-line"></span>
              </div>
            </div>
            {/* ------------- */}
            {/*2 */}
            <div className="skills-data">
              <div></div>
              <div>
                <span className="skills-rounder"></span>
                <div className="skills-line"></div>
              </div>
              <div>
                <h4 className="skills-title">Bachelaor of Commerce</h4>
                <h5>(Computer Application)</h5>
                <span className="skills-subtitle">Tiruvalluvar University </span>
                <div className="skills-calender">
                  <i className="uil"><BsCalendarDate/></i> 2019-2022
                </div>
              </div>
            </div>
            {/* ------------- */}
            {/*3 */}
            <div className="skills-data">
              <div>
                <h4 className="skills-title">HSLC</h4>
                <span className="skills-subtitle">Jeeva Velu Metric Higher Secondary School </span>
                <div className="skills-calender">
                  <i className="uil"><BsCalendarDate/></i> 2017-2019
                </div>
              </div>
              <div>
                <span className="skills-rounder"></span>
                <div className="skills-line"></div>
              </div>
            </div>
            {/* ------------- */}
            {/*4 */}
            <div className="skills-data">
              <div></div>
              <div>
                <span className="skills-rounder"></span>
                <span className="skills-line"></span>
              </div>
              <div>
                <h4 className="skills-title">SSLC</h4>
                <span className="skills-subtitle">Sishya Metric Higher Secondary School </span>
                <div className="skills-calender">
                  <i className="uil"><BsCalendarDate/></i> 2016-2017
                </div>
              </div>
            </div>
            {/* ------------- */}
          </div>

          <div
            className={
              toggleState === 2
                ? "skills-content skills-content-active"
                : "skills-content"
            }
          >
            {/*1 */}
            <div className="skills-data">
              <div>
                <h4 className="skills-title">Core Java </h4>
                <span className="skills-subtitle">  </span>
                {/* <div className="skills-calender">
                  <i className="uil"></i> 
                </div> */}
              </div>
              <div>
                <span className="skills-rounder"></span>
                <span className="skills-line"></span>
              </div>
            </div>
            {/* ------------- */}
            {/*2 */}
            <div className="skills-data">
              <div></div>
              <div>
                <span className="skills-rounder"></span>
                <div className="skills-line"></div>
              </div>
              <div>
                <h4 className="skills-title">SpringBoot</h4>
                <span className="skills-subtitle"> </span>
                {/* <div className="skills-calender">
                  <i className="uil">*</i> 2019-2022
                </div> */}
              </div>
            </div>
            {/* ------------- */}
            {/*3 */}
            <div className="skills-data">
              <div>
                <h4 className="skills-title">HTML</h4>
                <span className="skills-subtitle"></span>
                {/* <div className="skills-calender">
                  <i className="uil">*</i> 2017-2019
                </div> */}
              </div>
              <div>
                <span className="skills-rounder"></span>
                <div className="skills-line"></div>
              </div>
            </div>
            {/* ------------- */}
            {/*4 */}
            <div className="skills-data">
              <div></div>
              <div>
                <span className="skills-rounder"></span>
                <span className="skills-line"></span>
              </div>
              <div>
                <h4 className="skills-title">CSS</h4>
                <span className="skills-subtitle"> </span>
                {/* <div className="skills-calender">
                  <i className="uil">*</i> 2019-2022
                </div> */}
              </div>
            </div>
            {/* ------------- */}
            <div className="skills-data">
              <div>
                <h4 className="skills-title">javascript</h4>
                <span className="skills-subtitle">  </span>
                {/* <div className="skills-calender">
                  <i className="uil"></i> 
                </div> */}
              </div>
              <div>
                <span className="skills-rounder"></span>
                <span className="skills-line"></span>
              </div>
            </div>
            {/* ------------- */}
            {/*2 */}
            <div className="skills-data">
              <div></div>
              <div>
                <span className="skills-rounder"></span>
                <div className="skills-line"></div>
              </div>
              <div>
                <h4 className="skills-title">React JS</h4>
                <span className="skills-subtitle"> </span>               
              </div>
            </div>
            {/* ------------- */}
            {/*3 */}
            <div className="skills-data">
              <div>
                <h4 className="skills-title">SQL</h4>
                <span className="skills-subtitle"></span>
              </div>
              <div>
                <span className="skills-rounder"></span>
                <div className="skills-line"></div>
              </div>
            </div>
            {/* ------------- */}
            {/*4 */}
            <div className="skills-data">
              <div></div>
              <div>
                <span className="skills-rounder"></span>
                {/* <span className="skills-line"></span> */}
              </div>
              <div>
                <h4 className="skills-title">MySQL </h4>
                <span className="skills-subtitle"> </span>
              </div>
            </div>
            {/* ------------- */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
