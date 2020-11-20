import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <div className="heading-1 heading-1__text--light mb-lg text-upcase ">
          Contact Me
        </div>
        <div className="contact__form-container">
          <form action="" className="contact__form">
            <span className="contact__form-label">Name</span>
            <input
              type="text"
              name="name"
              className="contact__form-input--name"
            />
            <span className="contact__form-label">Email</span>
            <input
              type="email"
              name="email"
              className="contact__form-input--email"
            />
            <input
              type="submit"
              value="Send"
              className="contact__form-input--submit"
            />
          </form>
          <div className="contact__block">
            <p className="contact__block-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              sapiente deleniti saepe perferendis quisquam non laborum tempora
              est aspernatur minus.
            </p>
            <ul className="contact__block-list">
              <li className="contact__block-item">
                <span className="contact__block-icon">Icon</span>
                <span className="contact__block-phone">0503054422</span>
              </li>
              <li className="contact__block-item">
                <span className="contact__block-icon">Icon</span>
                <span className="contact__block-phone">Email</span>
              </li>
              <li className="contact__block-item">
                <span className="contact__block-icon">Icon</span>
                <span className="contact__block-phone">facebook</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
