"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";

import { Rectangle } from "@/components/rectangle";

export const RectangleTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="fixed top-0 left-0 right-0 z-50 w-screen h-screen flex pointer-events-none">
          <Rectangle />
        </div>
      </div>
    </AnimatePresence>
  );
};
