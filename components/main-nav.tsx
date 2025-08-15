import { MdFileDownload } from "react-icons/md";

import { Logo } from "@/components/logo";
import { NavLinks } from "@/components/nav-links";

export const MainNav = () => {
  return (
    <nav className="pt-16 w-full">
      <div className="h-full flex flex-col items-center justify-between">
        <Logo />
        <NavLinks containerStyles="space-y-6" />
        <button type="button" className="btn btn-lg btn-tertiary mb-16">
          <div className="flex items-center gap-3">
            <span>Download CV</span>
            <MdFileDownload className="text-xl" />
          </div>
        </button>
      </div>
    </nav>
  );
};
