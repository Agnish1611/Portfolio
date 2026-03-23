"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const FlexSpacer = ({ className }: { className: string }) => (
  <div className={`bg-[#f9f9f9] dark:bg-zinc-900 flex-1 ${className}`}></div>
);

const GridDiv = ({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) => (
  <div
    className={`bg-[#f9f9f9] dark:bg-zinc-900 rounded-lg ${className} flex items-center justify-center text-xs font-mono text-zinc-400`}
    style={style}
  >
    {children}
  </div>
);

export default function AboutContent() {
  const desktopHorizontalItemsTop = [...Array(10)].map((_, index) => (
    <GridDiv
      key={index}
      className="hidden lg:flex h-full items-center justify-center gap-2 col-span-1 w-full"
    >
      {index === 2 ? (
        `[2024]`
      ) : index === 7 ? (
        `[About]`
      ) : (
        <div className="w-1.5 h-1.5 bg-[#E5E7EB] dark:bg-zinc-700"></div>
      )}
    </GridDiv>
  ));

  return (
    <div className="w-full text-zinc-800 dark:text-zinc-200 selection:bg-zinc-200 dark:selection:bg-zinc-700 overflow-x-hidden">
      {/* Top Grid Row */}
      <div className="hidden lg:flex w-screen h-[6rem] gap-[1px] mt-[1px]">
        <FlexSpacer className="rounded-r-lg h-full" />
        <div className="w-[95vw] lg:w-[90vw] xl:w-[1200px] max-w-[1200px] grid grid-cols-12 gap-[1px] flex-shrink-0 h-full">
          <GridDiv className="hidden lg:block col-span-1 w-full h-full"></GridDiv>
          {desktopHorizontalItemsTop}
          <GridDiv className="hidden lg:block col-span-1 w-full h-full"></GridDiv>
        </div>
        <FlexSpacer className="rounded-l-lg h-full" />
      </div>

      {/* Main Desktop Content Area */}
      <div className="hidden lg:flex w-screen gap-[1px] mt-[1px]">
        <FlexSpacer className="rounded-r-lg" />
        <div className="w-[95vw] lg:w-[90vw] xl:w-[1200px] max-w-[1200px] grid grid-cols-12 gap-[1px] flex-shrink-0 min-h-[600px]">
          {/* Left Vertical Grid */}
          <div className="flex flex-col gap-[1px] col-span-1 w-full">
            <GridDiv className="h-[100px]"></GridDiv>
            <GridDiv className="flex-1 flex flex-col justify-between py-10">
              <span className="-rotate-90 whitespace-nowrap tracking-widest uppercase text-[10px]">
                [Dossier]
              </span>
            </GridDiv>
            <GridDiv className="h-[100px]"></GridDiv>
          </div>

          <div className="flex flex-col gap-[1px] col-span-4 w-full h-full relative">
            {/* Image Box */}
            <div className="flex-1 bg-zinc-200 rounded-lg relative overflow-hidden group min-h-[400px]">
              <Image
                src="/images/profile_pic.jpg"
                alt="Profile Picture"
                fill
                className="object-cover object-center transition-transform hover:scale-105 duration-700 ease-in-out grayscale hover:grayscale-0"
                sizes="33vw"
                priority
                fetchPriority="high"
              />
              <div className="absolute top-4 left-4 font-mono text-xs text-zinc-500 dark:text-zinc-400 z-10 bg-white/80 dark:bg-zinc-900/80 px-2 py-1 rounded">
                [.profile]
              </div>
            </div>

            {/* Socials Box */}
            <div className="bg-[#f9f9f9] dark:bg-zinc-900 rounded-lg p-6 flex flex-col justify-center h-fit">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4">
                {/* // Connect */}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    name: "Email",
                    href: "mailto:agnishbhattacharya161104@gmail.com",
                    icon: <MdEmail className="text-lg" />,
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/agnish-bhattacharya-324031286/",
                    icon: <FaLinkedinIn className="text-lg" />,
                  },
                  {
                    name: "Twitter",
                    href: "https://x.com/agnish1611",
                    icon: <FaXTwitter className="text-lg" />,
                  },
                  {
                    name: "GitHub",
                    href: "https://github.com/Agnish1611",
                    icon: <FaGithub className="text-lg" />,
                  },
                  {
                    name: "Resume",
                    href: "/Resume_Agnish_Bhattacharya.pdf",
                    icon: <FiDownload className="text-lg" />,
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="group relative flex items-center justify-between p-4 overflow-hidden rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 transition-all duration-500 hover:border-black dark:hover:border-zinc-500 hover:shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(social.name === "Resume" ? { download: "Resume_Agnish_Bhattacharya.pdf" } : {})}
                  >
                    <div className="absolute inset-0 bg-black dark:bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>

                    <div className="relative z-10 flex flex-col items-start gap-2 text-zinc-600 dark:text-zinc-300 group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
                      <div className="p-2 bg-zinc-50 dark:bg-zinc-700 group-hover:bg-white/20 dark:group-hover:bg-black/10 rounded-full transition-colors duration-500">
                        {social.icon}
                      </div>
                      <span className="font-medium text-sm tracking-tight">
                        {social.name}
                      </span>
                    </div>

                    <div className="relative z-10 text-zinc-300 dark:text-zinc-500 group-hover:text-white dark:group-hover:text-black transform transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 self-start font-light">
                      <FiArrowUpRight className="text-lg" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Main Bio Content */}
          <div className="bg-[#f9f9f9] dark:bg-zinc-900 rounded-lg p-12 flex flex-col justify-between relative col-span-6 w-full h-full">
            <div className="flex flex-col gap-10">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-2 flex justify-between">
                <span>{"// Introduction"}</span>
                <span>Agnish</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-pangaia-medium leading-tight tracking-tight text-black dark:text-white max-w-lg">
                Building digital products from the{" "}
                <span className="text-zinc-400 italic font-serif">
                  ground up
                </span>
              </h1>

              <div className="text-lg text-zinc-600 leading-relaxed font-light space-y-6 max-w-xl">
                <p>
                  I am a 3rd-year student at IIIT Ranchi with a deep-seated
                  passion for building digital products from the ground up. My
                  journey in development is defined by a balance between
                  technical leadership and the grit of the startup world.
                </p>
                <p>
                  Currently, I serve as the Software Development Wing Lead at
                  House of Geeks, where I lead a community of developers in
                  architecting scalable solutions. My work is centered on
                  creating seamless user experiences using{" "}
                  <span className="text-black dark:text-white font-medium">
                    Next.js and Tailwind CSS
                  </span>
                  , backed by robust, high-performance systems built on complex
                  SQL architectures.
                </p>
                <p>
                  Beyond my roles on campus, I am a{" "}
                  <span className="text-black dark:text-white font-medium">
                    co-founder of Draviya
                  </span>
                  . Alongside my co-founders Yash and Aditya, I am focused on
                  building the next generation of tools for the creator economy.
                  Whether I&apos;m diving into a freelance backend project or
                  refining a SaaS business model, I&apos;m driven by the
                  challenge of turning lines of code into a functional,
                  impactful product.
                </p>
                <p className="text-black dark:text-white font-pangaia-medium text-xl leading-snug pt-6 border-t border-zinc-200 mt-8">
                  I&apos;m always looking for ways to push the boundaries of
                  modern web development and bridge the gap between a great idea
                  and a production-ready application.
                </p>
              </div>
            </div>
          </div>

          {/* Right Vertical Grid */}
          <div className="flex flex-col gap-[1px] col-span-1 w-full">
            <GridDiv className="h-[100px]"></GridDiv>
            <GridDiv className="flex-1">
              <div className="w-1.5 h-1.5 bg-[#E5E7EB] dark:bg-zinc-700"></div>
            </GridDiv>
            <GridDiv className="h-[100px]"></GridDiv>
          </div>
        </div>
        <FlexSpacer className="rounded-l-lg" />
      </div>

      {/* Mobile View */}
      <div className="lg:hidden w-screen flex gap-[1px] mt-[1px]">
        <FlexSpacer className="rounded-r-lg" />
        <div className="w-[90vw] md:w-[600px] flex gap-[1px] flex-col mt-[1px] flex-shrink-0">
          <div className="bg-[#f9f9f9] dark:bg-zinc-900 rounded-lg p-6 flex flex-col gap-8">
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-zinc-200 relative">
              <Image
                src="/images/profile_pic.jpg"
                alt="Profile Picture"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                sizes="100vw"
                priority
                fetchPriority="high"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-pangaia-medium leading-tight tracking-tight text-black dark:text-white">
                Building digital products from the{" "}
                <span className="text-zinc-400 italic font-serif">
                  ground up
                </span>
              </h1>
              <div className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-light space-y-4">
                <p>
                  I am a 3rd-year student at IIIT Ranchi with a deep-seated
                  passion for building digital products from the ground up. My
                  journey in development is defined by a balance between
                  technical leadership and the grit of the startup world.
                </p>
                <p>
                  Currently, I serve as the Software Development Wing Lead at
                  House of Geeks, where I lead a community of developers in
                  architecting scalable solutions. My work is centered on
                  creating seamless user experiences using{" "}
                  <span className="text-black dark:text-white font-medium">
                    Next.js and Tailwind CSS
                  </span>
                  , backed by robust, high-performance systems built on complex
                  SQL architectures.
                </p>
                <p>
                  Beyond my roles on campus, I am a{" "}
                  <span className="text-black dark:text-white font-medium">
                    co-founder of Draviya
                  </span>
                  . Alongside my co-founders Yash and Aditya, I am focused on
                  building the next generation of tools for the creator economy.
                  Whether I&apos;m diving into a freelance backend project or
                  refining a SaaS business model, I&apos;m driven by the
                  challenge of turning lines of code into a functional,
                  impactful product.
                </p>
                <p className="text-black dark:text-white font-pangaia-medium text-lg leading-snug pt-6 border-t border-zinc-200 dark:border-zinc-700 mt-6">
                  I&apos;m always looking for ways to push the boundaries of
                  modern web development and bridge the gap between a great idea
                  and a production-ready application.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-4 border-t border-zinc-200 dark:border-zinc-700 pt-6">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                {/* // Connect */}
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {
                    name: "Email",
                    href: "mailto:agnishbhattacharya161104@gmail.com",
                    icon: <MdEmail className="text-lg" />,
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/agnish-bhattacharya-324031286/",
                    icon: <FaLinkedinIn className="text-lg" />,
                  },
                  {
                    name: "Twitter",
                    href: "https://x.com/agnish1611",
                    icon: <FaXTwitter className="text-lg" />,
                  },
                  {
                    name: "GitHub",
                    href: "https://github.com/Agnish1611",
                    icon: <FaGithub className="text-lg" />,
                  },
                  {
                    name: "Resume",
                    href: "/Resume_Agnish_Bhattacharya.pdf",
                    icon: <FiDownload className="text-lg" />,
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="group relative flex items-center justify-between p-4 overflow-hidden rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 transition-all duration-500 hover:border-black dark:hover:border-zinc-500 hover:shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(social.name === "Resume" ? { download: "Resume_Agnish_Bhattacharya.pdf" } : {})}
                  >
                    <div className="absolute inset-0 bg-black dark:bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>

                    <div className="relative z-10 flex flex-col items-start gap-2 text-zinc-600 dark:text-zinc-300 group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
                      <div className="p-2 bg-zinc-50 dark:bg-zinc-700 group-hover:bg-white/20 dark:group-hover:bg-black/10 rounded-full transition-colors duration-500">
                        {social.icon}
                      </div>
                      <span className="font-medium text-sm tracking-tight">
                        {social.name}
                      </span>
                    </div>

                    <div className="relative z-10 text-zinc-300 dark:text-zinc-500 group-hover:text-white dark:group-hover:text-black transform transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 self-start font-light">
                      <FiArrowUpRight className="text-lg" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <FlexSpacer className="rounded-l-lg" />
      </div>

      {/* Bottom Grid Row for Desktop */}
      <div className="hidden lg:flex w-screen h-[4rem] gap-[1px] mt-[1px]">
        <FlexSpacer className="rounded-r-lg h-full" />
        <div className="w-[95vw] lg:w-[90vw] xl:w-[1200px] max-w-[1200px] grid grid-cols-12 gap-[1px] flex-shrink-0 h-full">
          <GridDiv className="hidden lg:block col-span-1 w-full h-full"></GridDiv>
          {[...Array(10)].map((_, index) => (
            <GridDiv
              key={index}
              className="hidden lg:flex w-full h-full items-center justify-center gap-2 col-span-1"
            >
              {index === 5 ? (
                <div className="w-1.5 h-1.5 bg-[#E5E7EB] dark:bg-zinc-700"></div>
              ) : (
                ""
              )}
            </GridDiv>
          ))}
          <GridDiv className="hidden lg:block col-span-1 w-full h-full"></GridDiv>
        </div>
        <FlexSpacer className="rounded-l-lg h-full" />
      </div>
    </div>
  );
}
