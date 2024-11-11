"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ProjectsList from "@/app/Utils/ProjectsList";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      spaceBetween={50}
      loop={true}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {ProjectsList.map((project, index) => (
        <SwiperSlide key={project.projectName + index}>
          <a
            href={project.projectUrl}
            target="_blank"
            className="projectContainer"
          >
            <div>
              <div className="projectImgContainer">
                <Image
                  src={project.projectImg}
                  fill={true}
                  sizes="220"
                  alt={`Lien pour se rendre sur ${project.projectName}`}
                />
              </div>
              <h3>{project.projectName}</h3>
              <p className="projectDetails">{project.projectDetails}</p>
            </div>
            <div className="projectSkills">
              {project.projectSkill?.map((skill, index) => (
                <div className="projectSkillImg" key={skill.name + index}>
                  <Image
                    key={skill.name + index}
                    height={50}
                    width={50}
                    src={skill.skillImgUrl}
                    alt={`Logo de ${skill.skillName}`}
                  />
                </div>
              ))}
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
