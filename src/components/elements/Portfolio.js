import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Portfolio({ portfolio }) {
  const { title, shortDescription, bullet1, bullet2, bullet3, image, popupLink, link } = portfolio;
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    if (!link) {
      e.preventDefault();
      setToggler(!toggler);
    }
  };

  return (
    <>
      <a
        href={link ? link : "!#"}
        className="work-image"
        onClick={handleLightbox}
        target="_blank"
      >
        <div className="portfolio-item rounded shadow-dark">
          <div className="details">
            {/* <span className="term text-capitalize">{category}</span> */}
            <h4 >{title}</h4>
            <span className="more-button"><i className="icon-link"></i></span>
          </div>
          <div className="thumb">
            <img src={image} alt="Portfolio-title" className="projectImage"/>
            <div className="mask"></div>
          </div>
        </div>
      </a>
      <div className="projectInfo">
        <div className="projectNameAndLinks">
          <h4>{title}</h4>
          <div className="projectLinks">
            <a href={link} target="_blank">Live site</a>
            <div className="dotBetweenLinks">•</div>
            <li className="list-inline-item">
              <a href="https://github.com/JackPercival" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </div>
        </div>
        <h5>{shortDescription}</h5>
        <p>{bullet1}</p>
        <p>{bullet2}</p>
        <p>{bullet3}</p>
      </div>
      {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
    </>
  );
}

export default Portfolio;
