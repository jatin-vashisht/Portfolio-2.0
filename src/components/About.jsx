import React from "react";
import Arrow from './Arrow'

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/Portfolio%2Fexperience.png?alt=media&token=8f91ee4f-aa45-40d4-84ac-f4d4ecaf2eb6&_gl=1*1ye9r40*_ga*MTc3Nzc2MTU2OS4xNjk3MDQxNjg5*_ga_CW55HF8NVT*MTY5OTEyMDI3OC4xMy4xLjE2OTkxMjA3NDUuMTMuMC4w"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                2+ year 
                <br />
                Full-Stack Development
              </p>
            </div>
            <div className="details-container">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/Portfolio%2Feducation.png?alt=media&token=5ba66953-3051-4045-b125-c0e2ff764d78&_gl=1*4eppgu*_ga*MTc3Nzc2MTU2OS4xNjk3MDQxNjg5*_ga_CW55HF8NVT*MTY5OTEyMDI3OC4xMy4xLjE2OTkxMjA3NjEuNjAuMC4w"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.Tech. Bachelors Degree
                <br />
                NIT, Srinagar
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I'm a passionate full stack developer dedicated to creating
              seamless digital experiences. With expertise in both front-end and
              back-end technologies, I thrive on turning innovative ideas into
              functional, user-friendly applications. I enjoy the creative
              process of designing captivating user interfaces while tackling
              the complexity of server-side logic. My goal is to build robust,
              end-to-end solutions that make a real impact. As a full stack
              enthusiast, I'm committed to staying at the forefront of
              technology and delivering exceptional results in every project.
            </p>
          </div>
        </div>
      </div>
      <Arrow to='experience' />
    </section>
  );
};

export default About;
