import Link from "next/link";
import { Metadata } from "next";
import { FaGithub } from "react-icons/fa";
import * as motion from "motion/react-client";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen py-24 xl:py-0 flex items-center"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex-1 xl:w-150 flex flex-col gap-12">
              <div>
                <h2 className="h2 mb-6">
                  Get In&nbsp;<span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-115">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, sequi.
                </p>
              </div>
              <div className="mb-6 xl:mb-0 flex flex-col gap-8">
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone size={24} />
                  </span>
                  <Link
                    href="tel:+491234567890"
                    className="hover:text-accent-hover transition-colors"
                    rel="noreferrer noopener"
                    aria-label="Call to phone"
                  >
                    +49 123 456 7890
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail size={24} />
                  </span>
                  <Link
                    href="mailto:jake.joe@email.com"
                    className="hover:text-accent-hover transition-colors"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Send email"
                  >
                    jake.joe@email.com
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <FaGithub size={24} />
                  </span>
                  <Link
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Visit GitHub profile"
                    className="hover:text-accent-hover transition-colors"
                  >
                    GitHub
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin size={24} />
                  </span>
                  <span>Berlin, Germany</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <form className="flex flex-col items-start gap-6">
                <div className="w-full flex gap-6">
                  <div className="flex-1">
                    <Label htmlFor="firstname">
                      Firstname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      type="text"
                      placeholder="First name"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="lastname">
                      Lastname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Last name"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Label htmlFor="email">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="service">
                    I&apos;m interested in
                    <span className="text-accent">*</span>
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger
                      id="service"
                      className="w-full !h-12 bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="webdev">Web Development</SelectItem>
                      <SelectItem value="uiux">UI & UX Design</SelectItem>
                      <SelectItem value="logo">Logo Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full">
                  <Label htmlFor="message">
                    Message
                    <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    required
                    autoComplete="off"
                    className="min-h-40 bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent resize-none p-4 selection:bg-accent placeholder:text-white/50"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-lg btn-accent"
                  aria-label="Send message"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Send message</span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
