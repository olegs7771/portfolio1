import React, { Component } from "react";
import spriteIcon from "../../../src/img/sprite_brand.svg";

class Skills extends Component {
  render() {
    return (
      <section className={this.props.isBlured ? "skill is_blured" : "skill"}>
        <div className="heading-1 heading-1__text--light mb-md text-upcase ">
          My Skills
        </div>
        <div className="skill__icon-container">
          {/* FRONT-END  */}

          <div className=" skill__icon-box">
            <h2 className="skill__icon-box--front">Front End</h2>
            <ul className="skill__list">
              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-css3"} />
                </svg>
                <span className="skill__icon--name">css</span>
              </li>
              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-javascript"} />
                </svg>
                <span className="skill__icon--name">JavaScript</span>
              </li>
              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-sass"} />
                </svg>
                <span className="skill__icon--name">sass</span>
              </li>

              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-react"} />
                </svg>
                <span className="skill__icon--name">React</span>
              </li>
              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-react"} />
                </svg>
                <span className="skill__icon--name">React Native</span>
              </li>
              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-redux"} />
                </svg>
                <span className="skill__icon--name">Redux</span>
              </li>
            </ul>
          </div>

          {/* BACK-END  */}
          <div className=" skill__icon-box">
            <h2 className="skill__icon-box--back">Back End</h2>
            <ul className="skill__list">
              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-node-dot-js"} />
                </svg>
                <span className="skill__icon--name">node.js</span>
              </li>

              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-mongodb"} />
                </svg>
                <span className="skill__icon--name">Mongo</span>
              </li>
            </ul>
          </div>

          <div className=" skill__icon-box">
            <h2 className="skill__icon-box--back">Experienced with</h2>
            <ul className="skill__list">
              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-heroku"} />
                </svg>
                <span className="skill__icon--name">heroku</span>
              </li>
              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-github"} />
                </svg>
                <span className="skill__icon--name">GitHub</span>
              </li>
              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-npm"} />
                </svg>
                <span className="skill__icon--name">npm</span>
              </li>
              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-visualstudio"} />
                </svg>
                <span className="skill__icon--name">vscode</span>
              </li>
              <li className="skill__item">
                <svg className="skill__icon">
                  <use href={spriteIcon + "#icon-git"} />
                </svg>
                <span className="skill__icon--name">Git</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
export default Skills;
