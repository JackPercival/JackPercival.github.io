import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img src={logoSource} alt="JWP" />
      </Link>
    );
  }

  return (
    <div className="site-logo"></div>
  );
}

export default Logo;
