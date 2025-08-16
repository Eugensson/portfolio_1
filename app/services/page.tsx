import { Metadata } from "next";
import * as motion from "motion/react-client";
import { MdArrowRightAlt } from "react-icons/md";

import { ServicesSlider } from "@/components/services";

export const metadata: Metadata = {
  title: "Services",
};

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        <div className="flex flex-col xl:flex-row items-start justify-between xl:items-center gap-8">
          <h2 className="h2 max-w-120 text-left xl:mb-0">
            Custom&nbsp;<span className="text-accent">Web Solutions</span>
            &nbsp;to Boost Your Business
          </h2>
          <button type="button" className="btn btn-lg btn-accent flex gap-2">
            All Services
            <MdArrowRightAlt size={24} />
          </button>
        </div>
        <ServicesSlider />
      </div>
    </motion.section>
  );
};

export default Services;
