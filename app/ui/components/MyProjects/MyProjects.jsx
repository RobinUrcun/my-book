import React from "react";
import Slider from "./Slider/Slider";
export default function MyProjects() {
  return (
    <article id="projects" className="myProjectsArticle">
      <h2>Mes réalisations !</h2>
      <div className="projectsContainer">
        <Slider />
      </div>
    </article>
  );
}
