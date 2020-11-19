import React, { Component } from "react";
import hero_img from "../../../src/img/hero.jpg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="icon-box">
          <div className="icon"> menu icon</div>
        </div>
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
    );
  }
}
export default Header;
