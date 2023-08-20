import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Bolby",
  avatarImage: "/images/me2.png",
  content:
    "I'm Jack Percival, a Software Development Engineer at Amazon. I have over seven years of experience building full stack applications, advising on UI/UX decisions, managing large scale software development projects, and testing countless features. I love to code with React, Redux, JavaScript, and Python, and am always eager to learn new technologies.",
};

const progressData = [
  {
    id: 1,
    title: "Front End Development",
    percantage: 95,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Back End Development",
    percantage: 90,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "UI/UX",
    percantage: 85,
    progressColor: "#6C6CE5",
  },
  {
    id: 4,
    title: "Bug Finding",
    percantage: 90,
    progressColor: "#329932",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects",
    count: 40,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Lines of code",
    count: 25170,
    icon: "icon-screen-desktop",
  },
  {
    id: 3,
    title: "People managed",
    count: 125,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Dog Walks",
    count: 947,
    icon: "icon-heart",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="/Jack_Percival_Resume.pdf" target="_blank" className="btn btn-default">
                      Download Resume
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
