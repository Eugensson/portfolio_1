import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoDribbble,
  BiLogoLinkedin,
} from "react-icons/bi";
import Link from "next/link";

const socialLinks = [
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

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

export const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <ul className={containerStyles}>
      {socialLinks.map(({ name, icon: Icon, path }) => (
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
