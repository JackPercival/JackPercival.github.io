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
    bullet1: "• Incorporated the Google Geocoder API to validate addresses and convert them into geo-coordinates to automatically render dog locations on a Google Map",
    bullet2: "• Engineered a customizable search feature with Redux to allow users to search on a variety of optional characteristics and find results that fit their criteria",
    bullet3: "• Implemented custom React components to create a single page website with fully dynamic data rendering",
    category: "art",
    image: "images/works/chihuaWalkCover.png",
    link: "https://chihuawalk.herokuapp.com/",
    gitHubLink: "https://github.com/JackPercival/chihuaWalk"
  },
  {
    id: 2,
    title: "Discuss",
    shortDescription: "Chat-based web application inspired by Discord, built with React, Redux, Python, HTML, CSS, and Socket.IO",
    bullet1: "• Designed the majority of the application with custom CSS, including the splash screen, authentication pages, navigation bars, and search page, to create a seamless user experience between every page",
    bullet2: "• Organized the entire application’s architecture and structure via React Router to reduce loading times, page refreshes, and React component re-renders",
    bullet3: "• Created an instant chat feature with the Socket.IO library to let users send and receive messages in live time",
    category: "art",
    image: "images/works/discussCover.png",
    link: "https://discuss-aa.herokuapp.com/",
    gitHubLink: "https://github.com/benthere914/Discuss-Chat-Application"
  },
  {
    id: 3,
    title: "Soccr",
    shortDescription: "Flickr clone for viewing and uploading soccer related images, built with React, Redux, Javascript, HTML, and CSS",
    bullet1: "• Developed user privacy and autonomy via authentication, React Router, and BCrypt password hashings",
    bullet2: "• Connected the Express backend to a PostgreSQL database, utilizing the Sequelize ORM for validations and database queries",
    bullet3: "• Styled the website with user-centered design techniques to enhance usability and user experience",
    category: "art",
    image: "images/works/soccrCover.png",
    link: "https://soccr-aa.herokuapp.com/",
    gitHubLink: "https://github.com/JackPercival/soccr"
  },
  {
    id: 3,
    title: "Ace API",
    shortDescription: "Website designed for developers to view and organize APIs, built with Javascript, Pug, and CSS",
    bullet1: "• Constructed the front-end JavaScript used throughout the application, to create an interactive user interface with minimal page refreshes",
    bullet2: "• Instituted custom SQL queries to efficiently show and update data to decrease server latency and increase loading speeds",
    bullet3: "• Built pages with Pug templates to create dynamic and reusable code throughout the application",
    category: "art",
    image: "images/works/aceCover.png",
    link: "https://aa-aceapi.herokuapp.com/",
    gitHubLink: "https://github.com/mkoerner570/goodreads-express-project"
  },
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