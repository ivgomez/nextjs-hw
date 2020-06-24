import React from "react";
//import Link from "next/Link";
import NextLink from "next/link";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NextLink href="/">
        <a className="navbar-brand">Home</a>
      </NextLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NextLink href="/about">
              <a className="nav-link">About</a>
            </NextLink>
          </li>
          <li className="nav-item">
            <NextLink href="/services">
              <a className="nav-link">Services</a>
            </NextLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
