"use client";

import React, { useState } from "react";

const DESKTOP_WIDTH = "calc((1000px - 9px) / 10)";
const DOMAINS = ["Frontend", "Backend", "DevOps & Cloud", "Blockchain"];
const SKILLS = [
  // Frontend
  [
    ["frameworks", "Next.js"],
    [
      "libraries",
      "React.js, React Query, Redux, Recoil, Zustand, Tailwind CSS, Shadcn/UI, Framer Motion",
    ],
    ["languages", "JavaScript (ES6+), TypeScript, HTML5, CSS3"],
    ["tools", "Vite, Babel, ESLint, Prettier"],
    ["experience", "2+ years"],
  ],

  // Backend
  [
    ["frameworks", "Express.js"],
    ["languages", "Node.js, Python, JavaScript, TypeScript"],
    ["databases", "PostgreSQL, MySQL, MongoDB"],
    ["ORMs", "Prisma, Sequelize, Mongoose"],
    ["APIs", "REST"],
    ["authentication", "JWT, Better Auth, NextAuth.js, Clerk, Firebase Auth"],
    ["experience", "1.5+ years"],
  ],

  // DevOps & Cloud
  [
    ["cloud providers", "AWS"],
    ["containerization", "Docker"],
    ["orchestration", "Kubernetes"],
    ["CI/CD", "GitHub Actions, GitLab CI"],
    ["monitoring & logging", "Prometheus, Grafana"],
    ["version control", "Git, GitHub, GitLab"],
    ["experience", "1+ years"],
  ],

  // Blockchain
  [
    ["languages", "Solidity, Rust"],
    ["frameworks", "Foundry"],
    ["libraries", "Ethers.js, Web3.js"],
    ["networks", "Ethereum, Solana"],
    ["tools", "Metamask, Remix IDE"],
    ["concepts", "Smart Contracts, NFTs, Token Standards (ERC-20)"],
    ["experience", "<1 year"],
  ],
];

const FlexSpacer = ({ className }: { className: string }) => (
  <div className={`bg-[#f9f9f9] flex-1 ${className}`}></div>
);

const DownloadIcon = () => {
  const [currentPattern, setCurrentPattern] = useState(0);

  const patterns = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
  ];

  return (
    <div
      className="bg-[#eb3030] h-10 w-10 rounded-lg p-2 grid grid-cols-5 gap-[1px] cursor-pointer"
      onMouseEnter={() => setCurrentPattern(1)}
      onMouseLeave={() => setCurrentPattern(0)}
    >
      {patterns[currentPattern].map((dot, index) => (
        <div
          key={index}
          className={`h-1 w-1 rounded-sm transition-colors duration-500 ${
            dot === 1 ? "bg-white" : "bg-red-400"
          }`}
        />
      ))}
    </div>
  );
};

function Skills() {
  const [selectedDomain, setSelectedDomain] = useState(0);

  return (
    <>
      <div className="w-screen flex gap-[1px] mt-[1px]">
        <FlexSpacer className="rounded-r-lg" />
        <div className="w-[100px] h-[50px] bg-[#f9f9f9] rounded-lg hidden lg:block"></div>
        <div
          className="h-[50px] bg-[#f9f9f9] rounded-lg hidden lg:block"
          style={{ width: DESKTOP_WIDTH }}
        ></div>
        {/* Main content area */}
        <div className="w-[350px] lg:w-[calc(8*(1000px-9px)/10+7px)] h-[50px] flex gap-[1px]">
          <div className="w-[calc(25%-1px)] lg:w-[calc(25%-1px)] h-full bg-[#f9f9f9] rounded-lg gap-2 items-center px-5 hidden lg:flex">
            {[1, 2, 3].map((_, id) => {
              return (
                <div
                  key={id}
                  className="w-4 h-4 rounded-full border-[1px] border-zinc-400"
                ></div>
              );
            })}
          </div>
          <div className="w-full lg:w-[75%] h-full bg-[#f9f9f9] text-zinc-400 flex items-center px-5 lg:px-10 rounded-lg font-mono text-xs lg:text-sm">
            <div className="h-4 w-4 rounded-sm bg-zinc-300 mr-5"></div>
            https://agnish/
            <span className="text-zinc-700">skills&expertise</span>
          </div>
        </div>
        <div
          className="h-[50px] bg-[#f9f9f9] rounded-lg hidden lg:block"
          style={{ width: DESKTOP_WIDTH }}
        ></div>
        <div className="w-[100px] h-[50px] bg-[#f9f9f9] rounded-lg hidden lg:block"></div>
        <FlexSpacer className="rounded-l-lg" />
      </div>

      <div className="w-screen flex gap-[1px] mt-[1px] h-fit lg:h-[300px]">
        <FlexSpacer className="rounded-r-lg" />
        <div className="w-[100px] h-full bg-[#f9f9f9] rounded-lg hidden lg:block"></div>
        <div
          className="h-full bg-[#f9f9f9] rounded-lg hidden lg:block"
          style={{ width: DESKTOP_WIDTH }}
        ></div>
        
        {/* Desktop Layout */}
        <div className="w-[calc(8*(1000px-9px)/10+7px)] h-full hidden lg:flex gap-[1px]">
          <div className="w-[calc(25%-1px)] h-full bg-none rounded-lg flex flex-col gap-[1px]">
            <div className="w-full h-[calc(20%-1px)] rounded-lg bg-[#f9f9f9] flex items-center px-5 gap-5">
              <div className="grid grid-cols-2 gap-[1px] w-fit">
                {[...Array(4)].map((_, id) => {
                  return (
                    <div
                      key={id}
                      className="h-2 w-2 rounded-xs bg-zinc-300"
                    ></div>
                  );
                })}
              </div>
              <div className="text-zinc-400 font-mono">Domains</div>
            </div>
            <div className="w-full h-[80%] rounded-lg bg-[#f9f9f9] p-1 flex flex-col gap-1">
              {DOMAINS.map((domain, id) => {
                return (
                  <div
                    key={id}
                    onClick={() => setSelectedDomain(id)}
                    className={`flex font-mono gap-2 text-sm py-2 px-3 rounded-lg cursor-pointer transition-colors ${
                      selectedDomain === id
                        ? "bg-zinc-200"
                        : "hover:bg-zinc-100"
                    }`}
                  >
                    <span className="text-zinc-400">#Domain{id + 1}</span>
                    <span className="text-zinc-700">{domain}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[75%] h-full bg-none rounded-lg flex flex-col gap-[1px]">
            <div className="h-[calc(20%-1px)] w-full bg-[#f9f9f9] rounded-lg flex items-center justify-center gap-20">
              <div className="text-sm font-mono text-zinc-700">
                [.download my resume]
              </div>
              <DownloadIcon />
            </div>
            <div className="h-[80%] w-full bg-[#f9f9f9] rounded-lg p-4">
              <div className="flex items-start gap-3 font-mono text-xs">
                <span className="text-zinc-300 text-xs mt-0.5 w-6 flex-shrink-0">
                  {1}
                </span>
                <div className="flex-1">
                  <span className="text-zinc-400">{`{`}</span>
                </div>
              </div>
              <div className="space-y-1 overflow-y-auto max-h-[180px]">
                {SKILLS[selectedDomain].map(([title, description], index) => (
                  <div
                    key={index}
                    className="flex items-start gap-10 font-mono text-xs"
                  >
                    <span className="text-zinc-300 text-xs mt-0.5 w-6 flex-shrink-0">
                      {index + 2}
                    </span>
                    <div className="flex-1">
                      <span className="text-zinc-400 whitespace-pre">	{title}</span>
                      <span className="text-zinc-700">: </span>
                      <span className="text-red-500">{description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-3 font-mono text-xs">
                <span className="text-zinc-300 text-xs mt-0.5 w-6 flex-shrink-0">
                  {SKILLS[selectedDomain].length+2}
                </span>
                <div className="flex-1">
                  <span className="text-zinc-400">{`}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="w-[350px] flex flex-col gap-[1px] lg:hidden">
          {/* Domains Section */}
          <div className="w-full h-fit bg-none rounded-lg flex flex-col gap-[1px]">
            <div className="w-full h-fit py-2 rounded-lg bg-[#f9f9f9] flex items-center px-5 gap-5">
              <div className="grid grid-cols-2 gap-[1px] w-fit">
                {[...Array(4)].map((_, id) => {
                  return (
                    <div
                      key={id}
                      className="h-2 w-2 rounded-xs bg-zinc-300"
                    ></div>
                  );
                })}
              </div>
              <div className="text-zinc-400 font-mono text-sm">Domains</div>
            </div>
            <div className="w-full h-fit rounded-lg bg-[#f9f9f9] p-2 flex flex-col gap-1">
              {DOMAINS.map((domain, id) => {
                return (
                  <div
                    key={id}
                    onClick={() => setSelectedDomain(id)}
                    className={`flex font-mono gap-2 text-xs py-2 px-3 rounded-lg cursor-pointer transition-colors ${
                      selectedDomain === id
                        ? "bg-zinc-200"
                        : "hover:bg-zinc-100"
                    }`}
                  >
                    <span className="text-zinc-400">#Domain{id + 1}</span>
                    <span className="text-zinc-700">{domain}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills Section */}
          <div className="w-full h-fit bg-none rounded-lg flex flex-col gap-[1px]">
            <div className="h-fit py-3 w-full bg-[#f9f9f9] rounded-lg flex items-center justify-center gap-8">
              <div className="text-xs font-mono text-zinc-700">
                [.download my resume]
              </div>
              <DownloadIcon />
            </div>
            <div className="w-full h-fit bg-[#f9f9f9] rounded-lg p-3">
              <div className="flex items-start gap-2 font-mono text-xs">
                <span className="text-zinc-300 text-xs mt-0.5 w-4 flex-shrink-0">
                  {1}
                </span>
                <div className="flex-1">
                  <span className="text-zinc-400">{`{`}</span>
                </div>
              </div>
              <div className="space-y-1 max-h-[250px] overflow-y-auto">
                {SKILLS[selectedDomain].map(([title, description], index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 font-mono text-xs"
                  >
                    <span className="text-zinc-300 text-xs mt-0.5 w-4 flex-shrink-0">
                      {index + 2}
                    </span>
                    <div className="flex-1">
                      <span className="text-zinc-400 whitespace-pre">	{title}</span>
                      <span className="text-zinc-700">: </span>
                      <span className="text-red-500 text-xs break-words">{description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-2 font-mono text-xs">
                <span className="text-zinc-300 text-xs mt-0.5 w-4 flex-shrink-0">
                  {SKILLS[selectedDomain].length+2}
                </span>
                <div className="flex-1">
                  <span className="text-zinc-400">{`}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div
          className="h-full bg-[#f9f9f9] rounded-lg hidden lg:block"
          style={{ width: DESKTOP_WIDTH }}
        ></div>
        <div className="w-[100px] h-full bg-[#f9f9f9] rounded-lg hidden lg:block"></div>
        <FlexSpacer className="rounded-l-lg" />
      </div>
    </>
  );
}

export default Skills;
