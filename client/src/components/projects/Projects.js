import React, { Component } from "react";
import hourManagerIcon from '../../img/hour_manager_icon.png'

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
              <img src={hourManagerIcon} alt="project one" className="project__image"/>
            </div>

            <p className="project__card-article">
            HourManager is a tool for the potential employer  who needs  to manage their staff  members efficiently.  Logging their  job hours and calculating their wages. 
            HourManager consists of two segments : The {' '}
            <a href="https://hourmanager.herokuapp.com/" className='project__link' target="_blank" rel='noreferrer'> web site</a>
            {' '}
             and  <a href="https://play.google.com/store/apps/details?id=com.hourmanagerapp" className="project__link" target="_blank" rel='noreferrer'>mobile app</a>  (Android).
            With a mobile app staff member  able to start and end the work day  only in the designed geolocation area. 

            Whole concept and functionality was designed and emplimented by myself.


            https://play.google.com/store/apps/details?id=com.hourmanagerapp
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
