import React, { useEffect, useState } from "react";
import Slider from "infinite-react-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import data from "../data";
import Arrow from "./Arrow";

const Carousel = () => {
  const { projects } = data;
  const handleDragStart = (e) => e.preventDefault();
  const [animate, setAnimate] = useState(
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const items = projects.map(
    ({ title, imgSrc, videoSrc, description, githubLink, liveLink }) => (
      <div className="details-container color-container padder" onDragStart={handleDragStart} role="presentation">
        <div className="article-container">
          <div className="wrap">
            <img src={imgSrc} alt={title} className="project-img" />
            <video autoPlay loop playsInline muted>
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
        <h2 className="experience-sub-title project-title">{title}</h2>
        <p className="project-info">{description}</p>
        <div className="btn-container">
          <a
            className="btn btn-color-2 project-btn"
            target="_blank"
            href={githubLink}
          >
            Github
          </a>
          <a
            className="btn btn-color-2 project-btn"
            target="_blank"
            href={liveLink}
          >
            Live
          </a>
        </div>
      </div>
    )
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const handleMediaQueryChange = () => {
      setAnimate(!mediaQueryList.matches);
    };

    handleMediaQueryChange();

    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <p className="section__text__p1">
        <small>Hover over images for live demo (Drag to view prev/next)</small>
      </p>
      <div className="projects-details-container">
        <div className="scroller" data-animated={animate}>
          <div className="about-containers scroller__inner project">
            <AliceCarousel
              mouseTracking
              touchTracking
              items={items}
              autoPlay
              animationDuration={1500}
              infinite
              keyboardNavigation
              paddingLeft={50}
              paddingRight={50}
              autoHeight
              disableButtonsControls
              disableDotsControls
              responsive={{
                0: {
                  items: 1,
                },
                1024: {
                  items: 2,
                  itemsFit: "contain",
                },
              }}
            />
          </div>
        </div>
      </div>
      <Arrow to="contact" />
    </section>
  );
};

export default Carousel;
