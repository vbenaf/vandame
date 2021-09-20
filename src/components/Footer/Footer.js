import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="flex__container">
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
          <div className="follow__me">
            <h1>Follow me</h1>
            <ul>
              <li>
                <a href="#">
                  <img src="https://freeiconshop.com/wp-content/uploads/edd/instagram-new-color-flat.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://ingbiomedica.uniandes.edu.co/sites/default/files/footer/linkedIn.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://www.noctivagos.com/wp-content/uploads/2015/06/Facebook-Icono1.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
