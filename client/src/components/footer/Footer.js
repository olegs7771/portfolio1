import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className={this.props.isBlured ? "footer is_blured" : "footer"}>
        footer
      </footer>
    );
  }
}
export default Footer;
