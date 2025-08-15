"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Blob } from "@/components/blob";
import { Info } from "@/components/info";
import { Stats } from "@/components/stats";
import { Skills } from "@/components/skills";
import { Socials } from "@/components/socials";
import { Journey } from "@/components/journey";
import { Testimonial } from "@/components/testimonial";
import { ScrollArea } from "@/components/ui/scroll-area";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col lg:flex-row items-center gap-24 w-full h-[90vh]">
          <div className="relative hidden lg:flex flex-col w-full h-full pt-14 max-w-[430px]">
            <Image
              src="/assets/avatar.png"
              alt="avatar"
              width={320}
              height={496}
              className="z-20 relative"
            />
            <div className="w-full h-15 absolute left-0 right-0 top-105 bg-gradient-to-t from-primary via-primary/90 z-30" />
            <div className="absolute top-20 -left-20 z-10">
              <Blob containerStyles="w-105 h-105" />
            </div>
            <Socials
              containerStyles="z-40 w-max flex gap-4 transform translate-x-8"
              iconStyles="size-12 flex items-center justify-center text-2xl text-accent hover:text-accent-hover transition-all rounded-full cursor-pointer"
            />
          </div>
          <ScrollArea className="w-full h-[80vh] mt-10 md:mt-20 lg:mt-0 pr-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-2 bg-accent rounded-full animate-pulse" />
              <p>About me</p>
            </div>
            <h2 className="h2 mb-6">
              <span className="text-accent">Jake</span>&nbsp;Doe
            </h2>
            <p className="max-w-135 mb-12">
              I focus on craftinf visually stunning, user-friendly web
              expiriences that not only look great, but also function
              seamlessly, ensuring every detail is carefully designed and
              executed.
            </p>
            <div className="flex flex-col items-start gap-16">
              <Stats />
              <Testimonial />
              <Info />
              <Journey />
              <Skills />
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
