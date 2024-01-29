import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/Portfolio%2Femail.png?alt=media&token=afb2d24f-60c5-4547-b294-2c1e76977e76&_gl=1*1455ecf*_ga*MTc3Nzc2MTU2OS4xNjk3MDQxNjg5*_ga_CW55HF8NVT*MTY5OTEyMDI3OC4xMy4xLjE2OTkxMjExMjIuNjAuMC4w"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:jatinvashisht11@gmail.com"> 
              jatinvashisht11gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/Portfolio%2Flinkedin.png?alt=media&token=245fca53-2f75-4787-a5c6-e26752eeddc2&_gl=1*t81f2a*_ga*MTc3Nzc2MTU2OS4xNjk3MDQxNjg5*_ga_CW55HF8NVT*MTY5OTEyMDI3OC4xMy4xLjE2OTkxMjA2NTEuNDcuMC4w"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jatin-vashisht-a6949a221/"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
