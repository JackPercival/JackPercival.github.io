import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {id: 1,
    icon: "images/js_icon.png",
    title: "JavaScript"
  },
  {
    id: 1,
    icon: "images/python_icon.png",
    title: "Python"
  },{
    id: 1,
    icon: "images/react_icon.png",
    title: "React"
  },
  {
    id: 3,
    icon: "images/redux_icon.png",
    title: "Redux"
  },

  {
    id: 2,
    icon: "images/html2_icon.png",
    title: "HTML"
  },
  {
    id: 3,
    icon: "images/css_icon.jpeg",
    title: "CSS"
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "Photography",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Skills" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Want to connect?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
