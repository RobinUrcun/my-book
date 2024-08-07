import React from "react";
import Slider from "./Slider/Slider";

export default function Myskills() {
  return (
    <article id="skills" className="mySkillsArticle">
      <h2 className="mySkillsTitle">
        Développeur Web qualifié avec les connaissances nécessaires !
      </h2>
      <div className="skillsContainer">
        <Slider />
      </div>
    </article>
  );
}
