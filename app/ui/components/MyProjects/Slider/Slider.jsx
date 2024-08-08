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
      onSlideChange={() => console.log("slide change")}
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
      onSwiper={(swiper) => console.log(swiper)}
    >
      {ProjectsList.map((project, index) => (
        <SwiperSlide key={project.projectName + index}>
          <a
            href={project.projectUrl}
            target="_blank"
            className="projectContainer"
          >
            <div className="projectImgContainer">
              <Image
                src={project.projectImg}
                fill={true}
                alt={`Lien pour se rendre sur ${project.projectName}`}
              />
            </div>
            <h3>{project.projectName}</h3>
            <p className="projectDetails">{project.projectDetails}</p>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
