import React from "react";
import Slider from "./Slider/Slider";

export default function Myskills() {
  return (
    <article id="skills" className="mySkillsArticle">
      <h2 className="mySkillsTitle">
        Skilled Web Developer with Necessary Knowledges!
      </h2>
      <div className="skillsContainer">
        <Slider />
      </div>
    </article>
  );
}
