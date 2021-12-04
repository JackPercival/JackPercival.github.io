import React from "react";

function Footer({ light }) {
  return (
    <footer className={light ? "footer light" : "footer"}>
      <div className="container footerContainer">
        <span className="copyright">
          &copy; Jack Percival All Rights Reserved
        </span>
        <span className="copyright">
          &copy; {new Date().getFullYear()} Bolby Template.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
