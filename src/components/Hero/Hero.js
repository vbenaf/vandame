import React from "react";
import vandameHeroImage from "../../images/vandame.JPG";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="flex">
          <div className="info">
            <h1 className="name">
              HI, <br /> I'M VANDAME, <br /> WEB DEVELOPER
            </h1>
            <h3>Front End Developer / App developer</h3>
            <div className="button__contact">
            <a href="#" className="btn-ctm hero_btn">
              CONTACT ME
            </a>
          </div>
          </div>
          <div className = "image">
            <img src={vandameHeroImage} className="img__container" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
