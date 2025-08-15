import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiNodejsFill,
} from "react-icons/ri";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skillsList = [
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

export const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        My&nbsp;<span className="text-accent">Skills</span>
      </h2>
      <ul className="max-w-sm xl:max-w-none flex flex-wrap gap-6">
        {skillsList.map(({ icon: Icon, name }, index) => (
          <li key={index}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="size-16 flex items-center justify-center rounded-full bg-tertiary/70 group">
                  <Icon
                    size={30}
                    className="group-hover:text-accent transition-all duration-300"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  );
};
