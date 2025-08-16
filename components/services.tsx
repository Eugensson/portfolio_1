"use client";

import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import Image from "next/image";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineArrowOutward } from "react-icons/md";

const servicesList = [
  {
    icon: "/assets/services/design.svg",
    href: "",
    title: "Website Interface Design",
  },
  {
    icon: "/assets/services/frontend.svg",
    href: "",
    title: "Frontend Development",
  },
  {
    icon: "/assets/services/backend.svg",
    href: "",
    title: "Backend Development",
  },
  {
    icon: "/assets/services/seo.svg",
    href: "",
    title: "Search Engine Optimization",
  },
  {
    icon: "/assets/services/video.svg",
    href: "",
    title: "Video Production",
  },
];

export const ServicesSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      modules={[Pagination]}
      pagination={{ clickable: true, dynamicBullets: true }}
      className="h-80"
    >
      {servicesList.map(({ icon, href, title }, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-71 px-7.5 py-10 flex flex-col justify-between rounded-[20px] bg-secondary/90">
            <div className="mb-12 flex items-center justify-between">
              <Image src={icon} alt={`${title} icon`} width={48} height={48} />
              <Link
                href={href}
                className="size-12 flex items-center justify-center bg-accent rounded-full cursor-pointer text-2xl hover:rotate-45 transition-all duration-300"
              >
                <MdOutlineArrowOutward />
              </Link>
            </div>
            <h5 className="max-w-60 text-2xl font-medium">{title}</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
