import React, { useRef } from "react";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { LuSendHorizonal } from "react-icons/lu";
import { GrSend } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toast";

export default function Contact() {
  // toast.configure();

  const notify = () => {
    toast.success("Successfully Sended!");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qhfj37j",
      "template_xstitva",
      form.current,
      "tTOOauINZU1PFZ5fh"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <div className="section-head">
      <span className="section-subtitle">Get in Touch</span>
      <h2 className="section-title">Contact Me</h2>
      </div>
      <div className="contact-container container grid">
        <div className="contact-content">
          <h4 className="contact-title">Talk To Me</h4>

          <div className="contact-info">
              <a href="https://wa.me/989496148" className="contact-button">
            <div className="contact-card">
              <i className="contact-card-icon">
                <FaWhatsapp />{" "}
              </i>
              <span className="contact-card-title b1">Whatsapp</span>
              
                <i className="contact-button-icon">
                  <LuSendHorizonal />
                </i>
                <br />
            </div>
              </a>

              <a
                href="mailto:yuvivx92@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact-button"
              >
            <div className="contact-card">
              <i className="contact-card-icon">
              <MdOutlineMail />
              </i>
              <span className="contact-card-title ">yuvarajvx31@gmail</span>
                <i className="contact-button-icon">
                <BiMailSend />
                </i>
                <br />
            </div>
              </a>
              <a
                href="http://www.linkedin.com/in/yuvaraj-vx31"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
            <div className="contact-card">
              <i className="contact-card-icon">
                <CiLinkedin />
              </i>
              <span className="contact-card-title b1">yuvaraj-vx31</span>
                
                <i className="contact-button-icon">
                  <GrSend />
                </i>
                <br />
            </div>
              </a>
          </div>
        </div>
          <span className="contact-line"></span>
        <div className="contact-content">
          <h4 className="contact-title">Send Your Feedback</h4>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Insert Your Name"
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Insert Your Email"
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Subject</label>
              <textarea
                name="subject"
                className="contact-form-input in"
                cols="30"
                rows="10"
                placeholder="Write Your Subject"
              ></textarea>
            </div>

            <button onClick={notify} className="btn btn-colorcv">
              Send message
            </button>
            {/* <button  className="btn btn-colorcv">Send message</button> */}
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right"  delay={3000}  />
    </section>
  );
}
