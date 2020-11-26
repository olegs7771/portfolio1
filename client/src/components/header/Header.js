import React, { Component } from 'react';
import hero_img from '../../../src/img/hero.jpg';

class Header extends Component {
  render() {
    return (
      <header className={this.props.isBlured ? 'header is_blured' : 'header'}>
        {/* BIO  LEFT*/}
        <div className="header__bio">
          <div className="header__bio-title">About Me</div>
          <p className="header__bio-article">
            Living in the sunny Ottawa . Married and proud father of two
            beautiful daughters . I have a lot of hobbies such as coding,
            reading, working out and so on..
          </p>
        </div>
        {/* HERO RIGHT  */}
        <div className="header__hero">
          <div className="header__hero__img-box">
            <img
              src={hero_img}
              alt="header__hero img"
              className="header__hero__img"
            />
          </div>
          <h1 className="heading-1 heading-1__text--light header__hero__name ">
            Oleg Smushkevich
          </h1>
          <h1 className="heading-1 heading-1__text--dark header__hero__prof">
            Full Stack Developer
          </h1>
          <div className=" heading-3 heading-3__text--light ">
            <div className="header__hero__moto-box">
              <p className="header__hero__moto">
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
