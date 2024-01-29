import React from "react";
import data from "../data";
import Arrow from "./Arrow";
import Details from "./Details";

const Experience = () => {
  const { frontEnd, backEnd } = data;
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <Details title="Frontend" end={frontEnd} />
          <Details title="Backend" end={backEnd} />
        </div>
      </div>
      <Arrow to='projects' />
    </section>
  );
};

export default Experience;
