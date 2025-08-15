import { CiMenuFries } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";
import { NavLinks } from "@/components/nav-links";

export const Header = () => {
  return (
    <header className="2xl:hidden absolute z-40 top-0 left-0 right-0">
      <div className="container mx-auto">
        <div className="py-6 flex items-center justify-between">
          <Logo />
          <Sheet>
            <SheetTrigger className="cursor-pointer text-3xl text-white">
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent
              className="bg-primary border-none flex flex-col items-center justify-between pt-16 pb-20"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation menu
                </SheetDescription>
              </SheetHeader>
              <NavLinks containerStyles="flex flex-col gap-8 max-w-25" />
              <div>
                <button type="button" className="btn btn-lg btn-tertiary mb-16">
                  <div className="flex items-center gap-3">
                    <span>Download CV</span>
                    <MdFileDownload className="text-xl" />
                  </div>
                </button>
                <Socials
                  containerStyles="flex gap-4"
                  iconStyles="bg-accent hover:bg-accent-hover text-white transition w-10 h-10 text-xl flex items-center justify-center rounded-full cursor-pointer"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
