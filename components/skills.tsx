import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { SKILL_LIST } from "@/constants";

export const Skills = () => {
  return (
    <div>
      <h3 className="h2 mb-8">
        My&nbsp;<span className="text-accent">Skills</span>
      </h3>
      <ul className="max-w-sm xl:max-w-none flex flex-wrap gap-6">
        {SKILL_LIST.map(({ icon: Icon, name }, index) => (
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
