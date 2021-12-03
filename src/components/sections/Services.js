import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/react_icon.png",
    title: "React",
    padding: true
  },
  {
    id: 2,
    icon: "images/redux_icon.png",
    title: "Redux",
    padding: true
  },
  {id: 3,
    icon: "images/js_icon.png",
    title: "JavaScript"
  },
  {
    id: 4,
    icon: "images/python_icon.png",
    title: "Python",
    padding: true
  },
  {
    id: 5,
    icon: "images/flask_icon.png",
    title: "Flask",
    padding: true
  },
  {
    id: 6,
    icon: "images/express_icon.png",
    title: "Express",
  },
  {
    id: 6,
    icon: "images/html2_icon.png",
    title: "HTML"
  },
  {
    id: 7,
    icon: "images/css_icon.jpeg",
    title: "CSS"
  },
  {
    id: 8,
    icon: "images/sql_icon.png",
    title: "SQL",
    padding: true
  },
  {
    id: 8,
    icon: "images/sequelize_icon.png",
    title: "Sequelize",
    padding: true
  },
  {
    id: 8,
    icon: "images/sqlalchemy_icon.png",
    title: "SQLAlchemy",
    padding: true
  },
  {
    id: 9,
    icon: "images/postgresql_icon.png",
    title: "PostgreSQL",
    padding: true
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
