import React, { Component } from "react";
import hero_img from "../../../src/img/hero.jpg";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navigation-toggle"
          />
          <label htmlFor="navigation-toggle" className="navigation__button">
            <span className="nav__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  About
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Skills
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Projects
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Contact
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <header className="header">
          <div className="hero">
            <div className="hero__img-box">
              <img src={hero_img} alt="hero img" className="hero__img" />
            </div>
            <h1 className="heading-1 heading-1__text--light hero__name ">
              Oleg Smushkevich
            </h1>
            <h1 className="heading-1 heading-1__text--dark hero__name">
              Full Stack Developer
            </h1>
            <div className=" heading-3 heading-3__text--light hero__moto">
              since i discovered the coding i just strive for excellence{" "}
              <span className="hero__moto--exclamation">!</span>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
