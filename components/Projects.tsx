"use client";

import React from "react";
import Project from "./Project";

function Projects() {
  const projects = [
    {
      title: "A regulated platform where you can invest in creator tokens",
      description:
        "Draviya is building a regulated marketplace where people can financially back creators they believe in. Think of it as a stock market for creators, where growth is funded by fans instead of brands or platforms. Today, creators grow like startups but are paid like freelancers. Their income is unpredictable, they can’t raise capital without giving up control, and most growth is self funded. Draviya fixes this by letting creators sell a small share of their future royalties to fans and investors. Creators get upfront, non dilutive capital, and supporters get real financial exposure to a creator’s upside.",
      name: "Draviya",
      year: "2025",
      link: "https://www.draviya.com/",
      techStack: ["Next.js", "TypeScript", "Solana", "Rust", "PostgreSQL"],
      images: [
        "/images/draviya/1.png",
        "/images/draviya/2.png",
        "/images/draviya/3.png",
      ],
    },
    {
      title: "A no-code web scraper builder",
      description:
        "A no-code, AI-powered platform to build custom web scraping workflows using a drag-and-drop interface. Launch headless browsers, navigate pages, extract content with precision—or let AI extract the data for you. Perfect for non-coders, data analysts, and anyone who needs structured data from the web, fast.",
      name: "ScrapeBot",
      year: "2025",
      link: "https://scrape-bot.vercel.app/",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Puppeteer",
        "OpenAI",
      ],
      images: [
        "/images/scrapebot/1.png",
        "/images/scrapebot/2.png",
        "/images/scrapebot/3.png",
        "/images/scrapebot/4.png",
      ],
    },
    {
      title: "A 2D multiplayer virtual metaverse application",
      description:
        "Omniverse is a 2D multiplayer virtual world where users can interact with each other in real-time. This project is built with a modern web stack, featuring a React-based client and a Node.js WebSocket server, all managed within a Turborepo monorepo.",
      name: "Omniverse",
      year: "2025",
      link: "https://github.com/Agnish1611/Omniverse",
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
      link: "https://github.com/iaadi4/Anvil",
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
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>
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
    </section>
  );
}

export default Projects;
