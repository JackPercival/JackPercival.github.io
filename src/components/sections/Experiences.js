import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "App Academy",
    years: "2021",
    content:
      "Rigorous 1000-hour full stack software development course with <3% acceptance rate.",
  },
  {
    id: 2,
    title: "Carleton College",
    years: "2012 - 2016",
    content:
      "Attended Carleton College in Northfield, Minnesota. Earned my BA in Economics and competed in varsity Track & Field.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Amazon",
    years: "2022 - Today",
    content: "Currently work as a Software Development Engineer at Amazon, on the Subscribe and Discover team. I develop full-stack features used by millions of Amazon customers, write comprehensive unit and integration tests, handle on-call operations to solve high priority issues, and integrate projects with AWS technologies.",
  },
  {
    id: 2,
    title: "Epic Systems",
    years: "2016 - 2021",
    content: "Worked on the Security R&D team as a Quality Manager. Tested new software features and fixes, managed development projects and teams of 6+ people, advised as a User Experience coordinator to improve our application's accessibility and usability, authored technical documentation, and trained new employees and customers.",
  }


];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
