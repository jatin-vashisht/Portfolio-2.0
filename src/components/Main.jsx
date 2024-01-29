import React from "react";

const Main = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          className="rounded"
          src="https://avatars.githubusercontent.com/u/84888954?v=4"
          alt="profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Jatin Vashisht</h1>
        <p className="section__text__p2">Full-Stack MERN Developer</p>
        <div className="btn-container">
          <a
            className="btn btn-color-2"
            target="_blank"
            href="https://jatin-vashisht.tiiny.site/"
          >
            Download CV
          </a>
          <a className="btn btn-color-1" href="./#contact">
            Contact Info
          </a>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/jatin-vashisht-a6949a221/"
            target="_blank"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/Portfolio%2Flinkedin.png?alt=media&token=245fca53-2f75-4787-a5c6-e26752eeddc2&_gl=1*t81f2a*_ga*MTc3Nzc2MTU2OS4xNjk3MDQxNjg5*_ga_CW55HF8NVT*MTY5OTEyMDI3OC4xMy4xLjE2OTkxMjA2NTEuNDcuMC4w"
              alt="My LinkedIn profile"
              className="icon"
            />
          </a>
          <a href="https://github.com/jatin-vashisht" target="_blank">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/Portfolio%2Fgithub.png?alt=media&token=4c743322-c8dd-4ef4-b656-382f7a832edf&_gl=1*7vdyp5*_ga*MTc3Nzc2MTU2OS4xNjk3MDQxNjg5*_ga_CW55HF8NVT*MTY5OTEyMDI3OC4xMy4xLjE2OTkxMjA2OTguNjAuMC4w"
              alt="My Github profile"
              className="icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
