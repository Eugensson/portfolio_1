import { JOURNIE_LIST } from "@/constants";

export const Journey = () => {
  return (
    <section className="flex flex-col">
      <h3 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h3>
      <ul>
        {JOURNIE_LIST.map(({ years, role, institution }, index) => (
          <li key={index} className="w-full flex items-center gap-12">
            <div className="w-max flex flex-col items-center justify-center">
              <div className="size-3 bg-accent rounded-full" />
              <div className="w-0.25 h-45 bg-white/10" />
            </div>
            <div className="max-w-125">
              <p className="mb-6 text-lg text-white/50">{years}</p>
              <h4 className="h4 mb-2">{role}</h4>
              <p className="text-lg text-white/50">{institution}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
