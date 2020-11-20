import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <section className="project">
        <div className="heading-1 heading-1__text--light mb-md text-upcase ">
          My Projects
        </div>
        <div className="project__content">
          <ul className="project__list">
            <li className="project__item">Project</li>
            <li className="project__item">Project</li>
            <li className="project__item">Project</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Projects;
