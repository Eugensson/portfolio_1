"use client";

import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/pagination";
import { FaGithub } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CATEGORY_LIST, PROJECT_LIST } from "@/constants";

export const WorkTabs = () => {
  return (
    <div className="container mx-auto w-full h-full flex flex-col justify-center">
      <h2 className="h2 mb-6 xl:mb-12 max-w-150">
        My Latest&nbsp;<span className="text-accent">Work</span>
      </h2>
      <Tabs
        defaultValue="frontend"
        className="w-full flex flex-col gap-6 xl:gap-12"
      >
        <TabsList className="h-full mb-4 xl:mb-0 flex flex-wrap items-center justify-center gap-4">
          {CATEGORY_LIST.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-12 px-6 rounded-full cursor-pointer"
            >
              {category === "uiux" ? "UI UX Design" : category}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="h-100 scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
          {CATEGORY_LIST.map((category) => (
            <TabsContent key={category} value={category}>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="h-max xl:h-110"
              >
                {PROJECT_LIST.filter(
                  (project) => project.category === category
                ).map((project) => (
                  <SwiperSlide key={project.id} className="h-full">
                    <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                      <div className="w-full max-w-95 flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                        <h3 className="h3">{project.title}</h3>
                        <div className="xl:mb-4 max-w-75 min-h-32.5">
                          <p className="mb-4">Technology Used</p>
                          <ul className="flex flex-wrap gap-4">
                            {project.tech.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-4 bg-[#a883ff]/13 h-7 px-3.5 rounded-full"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                          <Link href={project.link}>
                            <button
                              type="button"
                              className="btn btn-sm btn-accent flex gap-2"
                              aria-label="View live project"
                            >
                              <MdArrowOutward size={20} />
                              <span>Live Project</span>
                            </button>
                          </Link>
                          <Link href={project.github}>
                            <button
                              type="button"
                              className="btn btn-sm btn-white flex gap-2"
                              aria-label="View code in Github repo"
                            >
                              <FaGithub size={20} />
                              <span>Github repo</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className="w-full h-50 md:h-75 xl:h-100 relative order-1 xl:order-none rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};
