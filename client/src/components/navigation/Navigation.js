import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navigation-toggle"
        />
        <label htmlFor="navigation-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        {/* <div className="navigation__background">&nbsp;</div> */}
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
    );
  }
}

export default Navigation;
