import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "creative",
  },
  {
    id: 3,
    text: "art",
  },
  {
    id: 4,
    text: "design",
  },
  {
    id: 5,
    text: "branding",
  },
];

const allData = [
  {
    id: 1,
    title: "ChihuaWalk",
    shortDescription: "AirBnb clone focused on dogs, built with React, Redux, Python, HTML, CSS, and Google APIs",
    bullet1: "• Incorporated the Google Geocoder API to validate user-entered addresses and convert them into geo-coordinates to automatically render dog locations on a Google Map",
    bullet2: "• Engineered a customizable search feature with Redux to allow users to search a variety of characteristics and find results that fit their specific criteria",
    bullet3: "• Utilized AWS S3 to implement image uploads to reduce server load and allow for scalability of image services",
    category: "art",
    image: "images/works/chihuaWalkCover.png",
    link: "https://chihuawalk.herokuapp.com/",
    gitHubLink: "https://github.com/JackPercival/chihuaWalk"
  },
  {
    id: 2,
    title: "Discuss",
    shortDescription: "Chat-based web application inspired by Discord, built with React, Redux, Python, HTML, CSS, and Socket.IO",
    bullet1: "• Designed the majority of the application with custom CSS, including the splash screen, login and sign-up pages, server and channel sidebars, and search page, to create a seamless user experience between every page and feature",
    bullet2: "• Improved performance by organizing the application’s architecture via React Router to reduce loading times, page refreshes, and React component re-renders",
    bullet3: "• Created an instant chat feature with the Socket.IO library",
    category: "art",
    image: "images/works/discussCover.png",
    link: "https://discuss-chat.onrender.com/",
    gitHubLink: "https://github.com/benthere914/Discuss-Chat-Application"
  },
  {
    id: 3,
    title: "Soccr",
    shortDescription: "Flickr clone for viewing and uploading soccer related images, built with React, Redux, Javascript, HTML, and CSS",
    bullet1: "• Connected the Express backend to a PostgreSQL database, utilizing the Sequelize ORM to seamlessly validate data and make database queries",
    bullet2: "• Implemented custom React components to create a single-page website with fully dynamic data rendering",
    bullet3: "• Developed user privacy and autonomy using authentication, React Router, and BCrypt password hashing to ensure only authenticated users can modify their photos and comments based on defined user requirements and permissions",
    category: "art",
    image: "images/works/soccrCover.png",
    link: "https://soccr-aa.herokuapp.com/",
    gitHubLink: "https://github.com/JackPercival/soccr"
  }
];

function Works() {
  const [getAllItems] = useState(allData);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);


  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Projects" />
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item singleProject" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
