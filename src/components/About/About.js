import React from "react";
import "./About.css";
import aboutImage from "../../images/about.jpg";
function About() {
  return (
    <section className="about">
      <div className="container">
        <h1 className="titleSection">About me</h1>
        <div className="section__description">
          <p>
            The primary area of my interest is front-end. My passion for code
            has begun when Adobe Flash was a complete innovation, alongside with
            CSS 1.0 and HTML 4.01 as standards of the current web.
          </p>
          <br />
          <p>
            For over a decade I had many opportunities to work in a vast
            spectrum of web technologies what let me gather a significant amount
            of various experience. Working for companies and individuals around
            the globe I met and learnt from amazing and ambitious people.
          </p>
          <br />
          <p>
            I currently work remotely with a selected freelance client base and
            are open for new opportunities.
          </p>
        </div>
        <img src={aboutImage} className="image__about__me" />
      </div>
    </section>
  );
}

export default About;
