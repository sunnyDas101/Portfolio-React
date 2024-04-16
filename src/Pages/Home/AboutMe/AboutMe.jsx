import React from "react";
import img from "../../../images/Profile.png";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="about-section">
      <div className="about-section-img">
        <div className="circle"></div>
        <img src={img} alt="" />
      </div>
      <div className="hero-section-content-box about-section-box">
        <div className="hero-section-content">
          <p className="section-title">About</p>
          <h1 className="skills-section-heading">About Me</h1>
          <p className="hero-section-description">
            Hii! My name is Sunny. I always dreamt of becoming a great web
            designer/developer and as time passed by, it seems like my dream is
            given by the course BCA in computer programming. I always yearned to
            learn more, yearned to learn something different. I love applying
            responsive design principles and watching my web pages shrink into
            mobile screens and still look amazing.
          </p>
          <p className="hero-section-description">
            It's oddly satisfying. I think in a way I'm kind of like those web
            pages; I'm moldable but I still keep my creative flare intact. My
            specialties includes HTML, CSS, JS, Bootstrap, Node.js, ReactJS,
            Firebase, working with API's to interact with an external server and
            more. I'm still enthusiastically trying to grab onto any other
            programming languages, frameworks, or principles I can integrate
            into the coding web in my head.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
