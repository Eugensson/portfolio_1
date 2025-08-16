import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiNodejsFill,
} from "react-icons/ri";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoDribbble,
  BiLogoLinkedin,
} from "react-icons/bi";

export const INFO_LIST = [
  {
    icon: HiOutlineUser,
    name: "Date of Birth",
    value: "20 Nov 1996",
  },
  {
    icon: HiOutlineMail,
    name: "Email Address",
    value: "jake.doe@email.com",
  },
  {
    icon: HiOutlinePhone,
    name: "Phone",
    value: "+49 123 456 7890",
  },
  {
    icon: HiOutlineLocationMarker,
    name: "Location",
    value: "Berlin, Germany",
  },
];

export const JOURNIE_LIST = [
  {
    years: "2022 - present",
    role: "Web Developer & Designer",
    institution: "Tech Inc.",
  },
  {
    years: "2020 - 2022",
    role: "Web Developer",
    institution: "Alpha Inc.",
  },
  {
    years: "2016 - 2020",
    role: "Student",
    institution: "Univercity of Design",
  },
];

export const NAV_LINKS = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export const SERVICE_LIST = [
  {
    icon: "/assets/services/design.svg",
    href: "",
    title: "Website Interface Design",
  },
  {
    icon: "/assets/services/frontend.svg",
    href: "",
    title: "Frontend Development",
  },
  {
    icon: "/assets/services/backend.svg",
    href: "",
    title: "Backend Development",
  },
  {
    icon: "/assets/services/seo.svg",
    href: "",
    title: "Search Engine Optimization",
  },
  {
    icon: "/assets/services/video.svg",
    href: "",
    title: "Video Production",
  },
];

export const SKILL_LIST = [
  {
    icon: RiReactjsFill,
    name: "React.js",
  },
  {
    icon: RiNextjsFill,
    name: "Next.js",
  },
  {
    icon: RiHtml5Fill,
    name: "HTML 5",
  },
  {
    icon: RiCss3Fill,
    name: "CSS 3",
  },
  {
    icon: RiTailwindCssFill,
    name: "Tailwind CSS",
  },
  {
    icon: RiNodejsFill,
    name: "Node.js",
  },
];

export const SOCIAL_LIST = [
  {
    name: "Facebook",
    icon: BiLogoFacebook,
    path: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: BiLogoInstagramAlt,
    path: "https://www.instagram.com/",
  },
  {
    name: "Dribbble",
    icon: BiLogoDribbble,
    path: "https://www.dribbble.com/",
  },
  {
    name: "LinkedIn",
    icon: BiLogoLinkedin,
    path: "https://www.linkedin.com/",
  },
];

export const TESTIMONIAL_LIST = [
  {
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Doe",
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Doe",
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Doe",
  },
];

export const CATEGORY_LIST = ["frontend", "fullstack", "uiux", "branding"];

export const PROJECT_LIST = [
  {
    id: "1",
    category: "frontend",
    title: "LaunchWave Landing Page",
    description: "React + Tailwind landing page",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "2",
    category: "frontend",
    title: "Nextfolio Portfolio Site",
    description: "Next.js portfolio site",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: "3",
    category: "fullstack",
    title: "Authboard Dashboard",
    description: "MERN-stack APP with autentication",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["React", "Express", "Node.js", "MongoDB"],
  },
  {
    id: "4",
    category: "fullstack",
    title: "Chatsync Platform",
    description: "Real-time MERN-stack APP with chat functionality",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["React", "Express", "Node.js", "MongoDB", "Socket.io", "Redux"],
  },
  {
    id: "5",
    category: "uiux",
    title: "Mobile-first Figma Design",
    description: "Real-time MERN-stack APP with chat functionality",
    image: "/assets/work/thumb5.png",
    link: "",
    github: "",
    tech: ["Fifma", "AdobeXD"],
  },
  {
    id: "6",
    category: "uiux",
    title: "ShopEasy Dashboard Redesign",
    description: "Redesign of e-commerce dashboard",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["Fifma", "Framer", "Whimsical"],
  },
  {
    id: "7",
    category: "branding",
    title: "BrewHouse Brand Identity",
    description: "A bold and earthy visual identity for a modern coffee brand",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    id: "8",
    category: "branding",
    title: "LunaSkin Luxury Branding",
    description: "Elegant brending for a premium skincare product line",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["Photoshop", "Figma", "Canva"],
  },
  {
    id: "9",
    category: "branding",
    title: "NovaTech Brand Kit",
    description:
      "Full branding kit for a tech startup including logo and brand book",
    image: "/assets/work/thumb5.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Figma", "Notion"],
  },
];

export const rectangleVariants = {
  initial: {
    y: "-100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "-100%"],
    height: ["0%", "100%"],
  },
};
