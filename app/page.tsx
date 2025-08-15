"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

import { Blob } from "@/components/blob";
import { Socials } from "@/components/socials";
import { Pattern } from "@/components/pattern";
import avatarImage from "@/public/assets/avatar.png";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <Pattern />
      <div className="w-full flex flex-col xl:flex-row items-center justify-between">
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1 mb-7">
            Hi! I&apos;m Jake,
            <br />
            <TypeAnimation
              sequence={["Web Developer", 2000, "Web Designer", 2000]}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="w-full max-w-125 mb-11">
            I build visually captivating, user-friendly websites and web apps
            that transform your ideas into seamless, engaging digital
            experiences.
          </p>
          <button type="button" className="btn btn-lg btn-accent mb-16 gap-3">
            <span>Let&apos;s talk.</span>
            <MdArrowOutward className="text-xl" />
          </button>
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone className="text-xl" />
              </span>
              <span>+49 123 456 7890</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>jake.joe@email.com</span>
            </div>
          </div>
          <Socials
            containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            iconStyles="bg-accent hover:bg-accent-hover text-white transition w-12 h-12 text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>
        <div className="relative z-20 hidden xl:flex flex-1">
          <Blob containerStyles="w-140 h-140" />
          <Image
            src={avatarImage}
            alt="avatar"
            width={440}
            height={600}
            quality={100}
            className="absolute -top-16 left-30"
          />
          <div className="absolute bottom-0 left-0 right-0 w-full h-41 bg-gradient-to-t from-primary via-primary/90 to-primary/40" />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
