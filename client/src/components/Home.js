import React, { Component } from "react";
import Navigation from "../components/navigation/Navigation";
import Contact from "../components/contact_form/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Header />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
