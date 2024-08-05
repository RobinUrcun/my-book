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
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      loop={true}
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
              <Image src={project.projectImg} fill={true} alt="" />
            </div>
            <h3>{project.projectName}</h3>
            <p className="projectDetails">{project.projectDetails}</p>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
