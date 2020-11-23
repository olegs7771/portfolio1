import React, { Component } from "react";
import hourManagerIcon from "../../img/hour_manager_icon.png";

class Projects extends Component {
  render() {
    return (
      <section
        className={this.props.isBlured ? "project is_blured" : "project"}
      >
        <div className="heading-1 heading-1__text--light mb-lg text-upcase ">
          My Projects
        </div>

        <ul className="project__list">
          <li className="project__item">
            <div className="project__card-title mb-sm">Hour Manager</div>

            <div className="project__image-box">
              <img
                src={hourManagerIcon}
                alt="project one"
                className="project__image"
              />
            </div>

            <p className="project__card-article">
              HourManager is a tool for the potential employer who needs to
              manage their staff members efficiently. Logging their job hours
              and calculating their wages. HourManager consists of two segments
              : The{" "}
              <a
                href="https://hourmanager.herokuapp.com/"
                className="project__link"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                web site
              </a>{" "}
              and{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.hourmanagerapp"
                className="project__link"
                target="_blank"
                rel="noreferrer"
              >
                mobile app
              </a>{" "}
              (Android). With a mobile app staff member able to start and end
              the work day only in the designed geolocation area. Whole concept
              and functionality was designed and emplimented by myself.
            </p>
          </li>
          <li className="project__item">
            <div className="project__card">
              <div className="project__card-title mb-sm"> Project Natours</div>
              <p className="project__card-article">
                Project{" "}
                <a
                  href="https://someappoleg.herokuapp.com/"
                  className="project__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Natours
                </a>{" "}
                was a part of Udemy course. Practicing advancing node.js and
                populating templates Pug from DB Mongo Atlas. Project bundled
                with parcel-bundler.
              </p>
            </div>
          </li>
          <li className="project__item">
            <div className="project__card">
              <div className="project__card-title mb-sm">Cool Album</div>
              <p className="project__card-article">
                Project{" "}
                <a
                  href="https://coolalbum.herokuapp.com/"
                  className="project__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  coolalbum
                </a>{" "}
                is a full stack app. Implements the MERN environment. This
                project implements third party validation with FaceBook .
                Password recovery via Email or SMS. I have used for styling only
                Boot Straps solely for convinience porpose only. After
                successful authentication users can create multiple albums and
                upload images. Since the creation of the project I have not
                maintained it ,hence some features won't function as supposed
                to.
              </p>
            </div>
          </li>
          <li className="project__item">
            <div className="project__card">
              <div className="project__card-title mb-sm">Outdoors</div>
              <p className="project__card-article">
                Project{" "}
                <a
                  href="https://gentle-wildwood-04980.herokuapp.com/"
                  className="project__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  outdoors
                </a>{" "}
                was a part of Udemy course. Practicing advancing SASS CSS3 Build
                with React.
              </p>
            </div>
          </li>
          <li className="project__item">
            <div className="project__card">
              <div className="project__card-title mb-sm">Trillo</div>
              <p className="project__card-article">
                Project{" "}
                <a
                  href="https://trillo-css-advanced.herokuapp.com//"
                  className="project__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  trillo
                </a>{" "}
                was a part of Udemy course. Practicing advancing SASS, CSS3,
                FLEX-BOX. Build with React.
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Projects;
