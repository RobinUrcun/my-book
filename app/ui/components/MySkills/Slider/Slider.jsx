"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SkillsList from "@/app/Utils/SkillsList";
import Image from "next/image";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <Swiper
      loop={true}
      modules={[Navigation]}
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 320px

        450: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        // when window width is >= 640px
        800: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1100: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
    >
      {SkillsList.map((skill, index) => (
        <SwiperSlide key={skill.competenceName + index}>
          <div className="skillContainer">
            <Image
              src={skill.competenceImg}
              width={100}
              height={100}
              alt={`Je maitrise ${skill.competenceName}`}
            />
            <h3>{skill.competenceName}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
