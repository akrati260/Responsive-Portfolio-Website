"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "A Reactive Portfolio Website made using Next.js, CSS, HTML, Tailwind CSS, JavaScript and Framer Motion. Code Source available on Github",
    image: "/images/Project.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Solar System Simulation-3D",
    description:
      "A 3D Solar System Simulation made using Unity3D. Game is available on itch.io. Source Code available on Github. Hover and click over the image to access.",
    image: "/images/Solar System Simulator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/blackcross7/Solar-System-Simulator-3D",
    previewUrl: "https://21bcs10038.itch.io/solar-system",
  },
  {
    id: 3,
    title: "Space Blast",
    description:
      "A 2D Space Shooter Game made using Unity Engine with the help of C# script. Game is available on itch.io. Source Code available on Github. Hover and click over the image to access",
    image: "/images/Space Blast.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/blackcross7/SpaceBlast",
    previewUrl: "https://21bcs10038.itch.io/space-blast",
  },
  {
    id: 4,
    title: "SpaceStronaut",
    description:
      "Guided Project on Unity Engine. A game where you have to dodge the obstacles and destroy obstacles. Game is available on itch.io. Source Code available on Github. Hover and click over the image to access.",
    image: "/images/SpaceStronaut.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/blackcross7/SuperStronaut",
    previewUrl: "https://21bcs10038.itch.io/spacestronout",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/Project.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul
        ref={ref}
        className="grid md:grid-cols-3 gap-8 md:gap-12 sm:justify-center"
      >
        {projectsData.map((project) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: project.id * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              className="text-center sm:text-center"
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
