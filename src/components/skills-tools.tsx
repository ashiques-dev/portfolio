"use client";
import React, { useRef } from "react";
import { EaseInText, ProtectedComponets } from ".";
import { forntendList, backendList, databaseList, toolsList } from "./data";
import { motion, useScroll, useTransform } from "motion/react";

const Skills = () => {
  return (
    <ProtectedComponets pageName="Skills & Tools">
      <section className="py-32 max-w-6xl mx-auto padding overflow-clip ">
        <h2 className="font-sans text-2xl font-semibold text-center ">
          <EaseInText
            top
            word="🛠 Skills & Tools
          "
          />
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-center">
          These are the technologies, tools, and frameworks I’ve used to build
          full-stack applications — from idea to deployment.
        </p>
        <div className="mt-14 grid gap-10">
          <StackCard title="Frontend" list={forntendList} />
          <StackCard title="Backend" list={backendList} />
          <StackCard title="Database" list={databaseList} />
          <StackCard title="Tools" list={toolsList} />
        </div>
      </section>
    </ProtectedComponets>
  );
};

export default Skills;

const StackCard = ({
  title,
  list,
}: {
  title: string;
  list: { icon: React.JSX.Element; name: string }[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="">
      <motion.h1
        style={{
          translateY,
          opacity,
        }}
        className="text-4xl font-semibold text-center"
      >
        {title}
      </motion.h1>
      <div
        ref={containerRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-4 gap-y-8 mt-8 bg-linear-to-bl from-amber-100  to-amber-50 relative px-4 py-8 rounded-md border border-amber-200 overflow-clip max-w-3xl mx-auto"
      >
        {list.map(({ icon, name }, index) => (
          <motion.div
            key={name}
            initial={{
              y: 50,
              opacity: 0,
              scale: 0.9,
              rotate: 10,
              filter: "blur(10px)",
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="flex flex-col items-center justify-between text-center gap-2"
          >
            <div className="">{icon}</div>
            <p className="font-medium  ">{name}</p>
          </motion.div>
        ))}
      </div>{" "}
    </div>
  );
};
