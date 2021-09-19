import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h1 className="titleSection marginB2">CONTACT</h1>
        <form className="contact__form">
          <ul>
            <li className="half">
              <input placeholder="Name" />
            </li>
            <li className="half">
              <input placeholder="Email" />
            </li>
            <li>
              <input placeholder="Subject" />
            </li>
            <li>
              <textarea placeholder="Message" />
            </li>
          </ul>
          <div className="button__contact">
            <a href="#" className="btn-ctm">
              SEND MESSAGE
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
