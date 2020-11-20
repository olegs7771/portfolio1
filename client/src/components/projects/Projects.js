import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <section className="project">
        <div className="heading-1 heading-1__text--light mb-lg text-upcase ">
          My Projects
        </div>

        <ul className="project__list">
          <li className="project__item">
            <div className="project__card-title mb-sm">Project Title</div>
            <p className="project__card-article">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              asperiores numquam nostrum commodi facilis sed ratione! Nobis
              minima, voluptates impedit quibusdam blanditiis doloribus unde,
              voluptatum ad aut, tempore a ratione?
            </p>
          </li>
          <li className="project__item">
            <div className="project__card">
              <div className="project__card-title mb-sm">Project Title</div>
              <p className="project__card-article">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                asperiores numquam nostrum commodi facilis sed ratione! Nobis
                minima, voluptates impedit quibusdam blanditiis doloribus unde,
                voluptatum ad aut, tempore a ratione?
              </p>
            </div>
          </li>
          <li className="project__item">
            <div className="project__card">
              <div className="project__card-title mb-sm">Project Title</div>
              <p className="project__card-article">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                asperiores numquam nostrum commodi facilis sed ratione! Nobis
                minima, voluptates impedit quibusdam blanditiis doloribus unde,
                voluptatum ad aut, tempore a ratione?
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Projects;
