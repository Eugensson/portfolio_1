"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants";

interface NavLinksProps {
  containerStyles: string;
}

export const NavLinks = ({ containerStyles }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <ul className={containerStyles}>
      {NAV_LINKS.map(({ name, path }) => {
        const isActive = pathname === path;
        const lineWidth = name.length > 5 ? "after:w-[120%]" : "after:w-[90%]";

        return (
          <li
            key={name}
            className={cn(
              "relative text-lg uppercase text-white",
              isActive &&
                "after:content-[''] after:block after:absolute after:left-0 after:top-1/2 after:h-1 after:bg-accent after:-translate-y-1/2 after:z-0",
              lineWidth
            )}
          >
            <Link href={path}>
              <span className="relative z-10">{name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
