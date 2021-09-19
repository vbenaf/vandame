import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../../images/my_logo.png";
import "./Nav.css";

function Nav() {
  const links = ["About", "Skills", "Portfolio", "Blog", "Contact"];
  const body = document.querySelector("body");

  const click = () => {
    body.classList.toggle("open");
  };

  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="menu__toggle">
            <HiMenu className="fa__bars" onClick={() => click()} />
            <IoMdClose className="fa__times" onClick={() => click()} />
          </div>
          <a href="#" className="logo">
            <img src={logo} />
          </a>
          <ul className="nav__list">
            {links.map((link, index) => {
              return (
                <li className="nav__list__item" key={index}>
                  <a href="#" className="nav__list__item__link">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
