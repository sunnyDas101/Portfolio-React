import React from "react";
import profileimg from "../../../images/Profile.png";
import { Link } from "react-scroll";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <section id="HeroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hey I'm Sunny</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Full Stack</span>{" "}
            Developer
          </h1>
          <p className="hero-section-description">
            Passionate Web Developer | Expert in Frontend Technologies |
            Crafting Robust & Scalable Web Applications with React, Node.js,
            Firebase and more |
          </p>
        </div>
        <Link
          activeClass="navbar-active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="btn btn-primary"
        >
          Get In Touch
        </Link>
      </div>

      <div className="hero-section-img">
        <img src={profileimg} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
