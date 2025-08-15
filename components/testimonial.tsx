"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Doe",
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Doe",
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Doe",
  },
];

export const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-77.5 md:max-w-130 bg-secondary rounded-lg"
    >
      {testimonials.map(({ message, name }, index) => (
        <SwiperSlide key={index}>
          <div className="px-8 py-6 flex gap-8">
            <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
            <div className="flex flex-col gap-2">
              <p className="line-clamp-2">{message}</p>
              <p className="self-end text-accent font-semibold">{name}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
