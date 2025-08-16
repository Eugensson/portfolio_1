import Link from "next/link";
import { Metadata } from "next";
import { FaGithub } from "react-icons/fa";
import * as motion from "motion/react-client";
import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

import { ContactForm } from "@/components/contact-form";

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
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
