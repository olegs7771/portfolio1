import React, { Component } from 'react';
import Navigation from '../components/navigation/Navigation';
import Contact from '../components/contact_form/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';

class Home extends Component {
  state = {
    isBlured: false,
  };
  isBlureParent = (state) => {
    this.setState({
      isBlured: state,
    });
  };
  render() {
    return (
      <div className="container">
        <Navigation isBlured={this.isBlureParent} />
        <Header isBlured={this.state.isBlured} />
        <Skills isBlured={this.state.isBlured} />
        <Projects isBlured={this.state.isBlured} />
        <Contact isBlured={this.state.isBlured} />
        <Footer isBlured={this.state.isBlured} />
      </div>
    );
  }
}

export default Home;
