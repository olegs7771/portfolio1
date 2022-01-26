import React, { Component } from 'react';
import hero_img from '../../img/hero-1.jpg';
import quill_img from '../../img/quill-light.png';

class Header extends Component {
  render() {
    return (
      <header
        className={this.props.isBlured ? 'header is_blured' : 'header'}
        id="about"
      >
        {/* BIO  LEFT*/}
        <div className="header__bio">
          <div className="header__bio-head">
            <div className="header__bio-title">About Me..</div>
            <div className="header__bio-image-box">
              <img
                src={quill_img}
                alt="quill feather background "
                className="header__bio-image"
              />
            </div>
          </div>
          <p className="header__bio-article">
            Living in the sunny Haifa ,Israel . Married and proud father of two
            beautiful daughters . I have a lot of hobbies such as coding,
            reading, working out and much more..
          </p>
        </div>
        {/* HERO RIGHT  */}
        <div className="header__hero">
          <div className="header__hero-img-box">
            <img
              src={hero_img}
              alt="header__hero img"
              className="header__hero-img"
            />
          </div>

          <h1 className="heading-1 heading-1__text--light header__hero__name ">
            Oleg Smushkevich
          </h1>
          <h1 className="heading-1 header__hero__prof">Full Stack Developer</h1>
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
