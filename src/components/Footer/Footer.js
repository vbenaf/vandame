import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="navigate">
          <h1>Navigate</h1>
          <ul>
            <li>
              <a href="#"> About</a>
            </li>
            <li>
              <a href="#"> Portfolio</a>
            </li>
            <li>
              <a href="#"> Blog</a>
            </li>
            <li>
              <a href="#"> Contact</a>
            </li>
          </ul>
        </div>
        <div className="follow__me"></div>
        <div className="policies"></div>
      </div>
    </section>
  );
}

export default Footer;
