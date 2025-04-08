import React from "react";
import { EaseInText, ProjectCard, ProjectSelector, ProtectedComponets } from ".";

const Projects = () => {
  return (
    <ProtectedComponets pageName="Projects">
      <section className="pt-32 pb-14 max-w-6xl mx-auto padding overflow-clip ">
        <h2 className="font-sans text-2xl font-semibold text-center ">
          <EaseInText top word="Check out my latest work" />
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-center">
          I&apos;ve worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </p>
        <ProjectSelector />
        <ProjectCard />
      </section>
    </ProtectedComponets>
  );
};

export default Projects;
