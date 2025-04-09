import React from "react";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills-tools";
const Home = () => {
  return (
    <>
      <Intro />
      <Projects />
      <About />
      <Skills />
    </>
  );
};

export default Home;
