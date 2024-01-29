import React from "react";

const Details = ({ title, end }) => {
  return (
    <div className="details-container">
      <h2 className="experience-sub-title">{title} Development</h2>
      <div className="article-container">
        {end.map((item) => (
          <article key={item.name}>
            <img src={item.imgSrc} alt="Experience icon" className="icon" />
            <div>
              <h3>{item.name}</h3>
              <p>{item.experience}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Details;
