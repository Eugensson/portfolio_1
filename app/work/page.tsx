import { Metadata } from "next";
import * as motion from "motion/react-client";

import { WorkTabs } from "@/components/work-tabs";

export const metadata: Metadata = {
  title: "Work",
};

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
      <WorkTabs />
    </motion.section>
  );
};

export default Work;
