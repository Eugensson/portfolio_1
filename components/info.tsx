import { INFO_LIST } from "@/constants";

export const Info = () => {
  return (
    <ul className="grid md:grid-cols-2 gap-4 md:gap-y-4">
      {INFO_LIST.map(({ icon: Icon, name, value }, index) => (
        <li key={index} className="flex items-start gap-4">
          <Icon size={24} className="mt-1 text-accent" />
          <div>
            <p className="text-lg">{name}</p>
            <p>{value}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
