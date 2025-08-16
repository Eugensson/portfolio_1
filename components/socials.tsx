import Link from "next/link";

import { SOCIAL_LIST } from "@/constants";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

export const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <ul className={containerStyles}>
      {SOCIAL_LIST.map(({ name, icon: Icon, path }) => (
        <li key={name}>
          <Link
            href={path}
            target="_blank"
            className={iconStyles}
            rel="noreferrer noopener"
            aria-label={`Link to ${name} account`}
          >
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
};
