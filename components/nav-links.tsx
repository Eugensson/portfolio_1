import Link from "next/link";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

interface NavLinksProps {
  containerStyles: string;
}

export const NavLinks = ({ containerStyles }: NavLinksProps) => {
  return (
    <ul className={containerStyles}>
      {links.map(({ name, path }) => (
        <li key={name}>
          <Link href={path}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
