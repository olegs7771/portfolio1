import React, { Component } from "react";
import hero_img from "../../../src/img/hero.jpg";

class Header extends Component {
  render() {
    return (
      <header className={this.props.isBlured ? "header is_blured" : "header"}>
        <div className="hero">
          <div className="hero__img-box">
            <img src={hero_img} alt="hero img" className="hero__img" />
          </div>
          <h1 className="heading-1 heading-1__text--light hero__name ">
            Oleg Smushkevich
          </h1>
          <h1 className="heading-1 heading-1__text--dark hero__prof">
            Full Stack Developer
          </h1>
          <div className=" heading-3 heading-3__text--light ">
            <div className="hero__moto-box">
              <p className="hero__moto">
                Ever since i discovered the coding <br /> I just strive for
                excellence.
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
