"use client";

import CountUp from "react-countup";

export const Stats = () => {
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
      <li className="flex gap-4">
        <div className="min-w-25 lg:min-w-0 flex text-5xl font-bold text-accent">
          <CountUp end={12} duration={5} delay={2} className="block w-15" />
          <div>+</div>
        </div>
        <span>
          Years
          <br />
          Experience
        </span>
      </li>
      <li className="flex gap-4">
        <div className="min-w-25 lg:min-w-0 flex text-5xl font-bold text-accent">
          <CountUp end={43} duration={5} delay={2} className="block w-15" />
        </div>
        <span>
          Clients
          <br />
          Worldwide
        </span>
      </li>
    </ul>
  );
};
