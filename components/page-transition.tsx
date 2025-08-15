"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            delay: 1,
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="min-h-screen w-screen fixed top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};
