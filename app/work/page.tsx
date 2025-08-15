"use client";

import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      work
    </motion.section>
  );
};

export default Work;
