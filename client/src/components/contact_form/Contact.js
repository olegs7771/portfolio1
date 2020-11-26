import React, { Component } from 'react';
import sprite_icon from '../../../src/img/sprite_icon.svg';
import axios from 'axios';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    text: '',
    sending: false,
    message: false,
    error: false,
  };

  _onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  _onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.text,
    };
    this.setState({ sending: true });

    try {
      const res = await axios.post('/api/v1/contact/contact', payload);
      console.log('res.data', res.data);
      this.setState({ sending: false, message: res.data.response });
    } catch (err) {
      this.setState({ sending: false });
      console.log('err :', err.response.data);
    }
  };

  render() {
    return (
      <section
        className={this.props.isBlured ? 'contact is_blured' : 'contact'}
      >
        <div className="heading-1 heading-1__text--light mb-sm text-upcase ">
          Contact Me
        </div>

        {/* LEFT-SIDE  */}
        <div className="contact__form-container">
          <div className="contact__block">
            <div className="contact__block-wrapper">
              <p className="contact__block-text mb-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                sapiente deleniti saepe perferendis quisquam non laborum tempora
                est aspernatur minus.
              </p>
              <ul className="contact__block-list">
                <li className="contact__block-item">
                  <svg className="contact__block-icon--phone">
                    <use href={sprite_icon + '#icon-mobile'} />
                  </svg>
                  <span className="contact__block--phone">0503054422</span>
                </li>
                <li className="contact__block-item">
                  <svg className="contact__block-icon--email">
                    <use href={sprite_icon + '#icon-envelope'} />
                  </svg>
                  <span className="contact__block--email">
                    olegs777@gmail.com
                  </span>
                </li>
                <li className="contact__block-item">
                  <svg className="contact__block-icon--facebook">
                    <use href={sprite_icon + '#icon-facebook'} />
                  </svg>
                  <span className="contact__block--facebook">
                    <a
                      href="https://www.facebook.com/oleg.smushkevich"
                      className="contact__block--link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      My FaceBook
                    </a>
                  </span>
                </li>
                <li className="contact__block-item">
                  <svg className="contact__block-icon--github">
                    <use href={sprite_icon + '#icon-github'} />
                  </svg>
                  <span className="contact__block--github">
                    <a
                      href="https://github.com/olegs7771"
                      className="contact__block--link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      My GitHub
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT-SIDE */}
          <form onSubmit={this._onSubmit} className="contact__form">
            <div className="contact__form-group">
              <span className="contact__form-label">Name</span>
              <input
                placeholder="Your Name"
                type="text"
                name="name"
                className="contact__form-input "
                value={this.state.name}
                onChange={this._onChange}
                required
              />
            </div>

            <div className="contact__form-group">
              <span className="contact__form-label">Email</span>
              <input
                placeholder="Your Email"
                type="email"
                name="email"
                className="contact__form-input"
                value={this.state.email}
                onChange={this._onChange}
                required
              />
            </div>
            <div className="contact__form-group">
              <span className="contact__form-label">Message</span>
              <textarea
                placeholder="Leave some message.."
                name="text"
                className="contact__form-input"
                cols="30"
                rows="10"
                value={this.state.text}
                onChange={this._onChange}
              ></textarea>
            </div>
            {this.state.message ? (
              <div className="contact__form-input--message">
                {this.state.message}
              </div>
            ) : null}
            <input
              type="submit"
              value={this.state.sending ? 'Sending...' : 'Send'}
              className="contact__form-input--submit"
            />
          </form>
        </div>
      </section>
    );
  }
}
export default Contact;
