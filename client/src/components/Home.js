import React, { Component } from "react";
import ContactForm from "../components/contact_form/ContactForm";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Projects from "../components/projects/Projects";
import Sidebar from "../components/sidebar/Sidebar";
import Skills from "../components/skills/Skills";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Sidebar />
        <Skills />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default Home;
