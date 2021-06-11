import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const CurrentDate = () => new Date().getFullYear();

    return (
      <footer className={this.props.isBlured ? 'footer is_blured' : 'footer'}>
        <p className="footer__copy">
          &copy; <CurrentDate /> All rights reserved
        </p>
      </footer>
    );
  }
}
export default Footer;
