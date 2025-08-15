"use client";

import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: "1",
    category: "frontend",
    title: "LaunchWave Landing Page",
    description: "React + Tailwind landing page",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "2",
    category: "frontend",
    title: "Nextfolio Portfolio Site",
    description: "Next.js portfolio site",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: "3",
    category: "fullstack",
    title: "Authboard Dashboard",
    description: "MERN-stack APP with autentication",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["React", "Express", "Node.js", "MongoDB"],
  },
  {
    id: "4",
    category: "fullstack",
    title: "Chatsync Platform",
    description: "Real-time MERN-stack APP with chat functionality",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["React", "Express", "Node.js", "MongoDB", "Socket.io", "Redux"],
  },
  {
    id: "5",
    category: "uiux",
    title: "Mobile-first Figma Design",
    description: "Real-time MERN-stack APP with chat functionality",
    image: "/assets/work/thumb5.png",
    link: "",
    github: "",
    tech: ["Fifma", "AdobeXD"],
  },
  {
    id: "6",
    category: "uiux",
    title: "ShopEasy Dashboard Redesign",
    description: "Redesign of e-commerce dashboard",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["Fifma", "Framer", "Whimsical"],
  },
  {
    id: "7",
    category: "branding",
    title: "BrewHouse Brand Identity",
    description: "A bold and earthy visual identity for a modern coffee brand",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    id: "8",
    category: "branding",
    title: "LunaSkin Luxury Branding",
    description: "Elegant brending for a premium skincare product line",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["Photoshop", "Figma", "Canva"],
  },
  {
    id: "9",
    category: "branding",
    title: "NovaTech Brand Kit",
    description:
      "Full branding kit for a tech startup including logo and brand book",
    image: "/assets/work/thumb5.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Figma", "Notion"],
  },
];

const categories = ["frontend", "fullstack", "uiux", "branding"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen py-24 xl:py-0 flex items-center"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="h2 mb-6 xl:mb-12 max-w-150">
          My Latest&nbsp;<span className="text-accent">Work</span>
        </h2>
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          <TabsList className="h-full mb-4 xl:mb-0 flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
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
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  className="h-max xl:h-110"
                >
                  {projects
                    .filter((project) => project.category === category)
                    .map((project) => (
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
                                >
                                  <MdArrowOutward size={20} />
                                  <span>Live Project</span>
                                </button>
                              </Link>
                              <Link href={project.github}>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-white flex gap-2"
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
    </motion.section>
  );
};

export default Work;
