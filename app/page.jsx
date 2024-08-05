import React from "react";
import Header from "./ui/Layout/Header";
import MyPresentation from "./ui/components/MyPresentation/MyPresentation";
import AboutMe from "./ui/components/AboutMe/AboutMe";
import Myskills from "./ui/components/MySkills/Myskills";
import MyProjects from "./ui/components/MyProjects/MyProjects";
import ContactMe from "./ui/components/ContactMe/ContactMe";
import Footer from "./ui/Layout/Footer";

export default function page() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <MyPresentation />
        <AboutMe />
        <Myskills />
        <MyProjects />
        <ContactMe />
        <Footer />
      </main>
    </React.Fragment>
  );
}
