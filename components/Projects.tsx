"use client";

import React from "react";
import Project from "./Project";

function Projects() {
  const projects = [
    {
      title: "A no-code web scraper builder",
      description:
        "A no-code, AI-powered platform to build custom web scraping workflows using a drag-and-drop interface. Launch headless browsers, navigate pages, extract content with precision—or let AI extract the data for you. Perfect for non-coders, data analysts, and anyone who needs structured data from the web, fast.",
      name: "ScrapeBot",
      year: "2025",
      link: "https://scrapebot.example.com",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Puppeteer", "OpenAI"],
      images: [
        "/images/scrapebot/1.png",
        "/images/scrapebot/2.png",
        "/images/scrapebot/3.png",
      ],
    },
    {
      title: "A 2D multiplayer virtual metaverse application",
      description:
        "Omniverse is a 2D multiplayer virtual world where users can interact with each other in real-time. This project is built with a modern web stack, featuring a React-based client and a Node.js WebSocket server, all managed within a Turborepo monorepo.",
      name: "Omniverse",
      year: "2025",
      link: "https://omniverse.example.com",
      techStack: ["React", "Node.js", "WebSocket", "Turborepo", "Canvas API"],
      images: [
        "/images/omniverse/1.png",
        "/images/omniverse/2.png",
        "/images/omniverse/3.png",
      ],
    },
    {
      title: "Interactive CLI for web project setup",
      description:
        "Anvil is a comprehensive project bootstrapping tool designed to streamline the setup process for web applications. It offers an interactive CLI experience to configure your project with the frameworks and tools you need, eliminating the hassle of manual setup and configuration.",
      name: "Anvil",
      year: "2025",
      link: "https://github.com/example/anvil",
      techStack: ["Node.js", "Commander.js", "Inquirer", "Chalk", "TypeScript"],
      images: [
        "/images/anvil/1.png",
        "/images/anvil/2.png",
        "/images/anvil/3.png",
        "/images/anvil/4.png",
        "/images/anvil/5.png",
      ],
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          name={project.name}
          year={project.year}
          link={project.link}
          techStack={project.techStack}
          images={project.images}
          index={index}
        />
      ))}
    </>
  );
}

export default Projects;
