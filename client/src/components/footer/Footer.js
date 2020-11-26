import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className={this.props.isBlured ? 'footer is_blured' : 'footer'}>
        <p className="footer__copy">&copy; 2020 All rights reserved</p>
      </footer>
    );
  }
}
export default Footer;
