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
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {SkillsList.map((skill, index) => (
        <SwiperSlide key={skill.competenceName + index}>
          <div className="skillContainer">
            <Image src={skill.competenceImg} width={100} height={100} alt="" />
            <h3>{skill.competenceName}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
