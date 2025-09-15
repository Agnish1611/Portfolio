"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import AnimatedIconGrid from "./AnimatedIconGrid";
import ScrambledText from "./ScrambledText";

interface NavbarProps {
  name?: string;
  animatedTexts?: string[];
}

export default function Navbar({
  name = "Agnish Bhattacharya",
  animatedTexts = ["Software Engineer", "Web3 Developer"],
}: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Recommendations", href: "#recommendations" },
    { label: "Resume", href: "#resume" },
    { label: "Email", href: "#email" },
    { label: "LinkedIn", href: "#linkedin" },
  ];

  return (
    <div className={`w-screen flex flex-col gap-[1px] transition-all duration-500 ease-in-out`}>
      <div className="flex gap-[1px] h-[6rem]">
        <div className="bg-[#f9f9f9] rounded-r-lg flex-1 h-full"></div>
        
        <div className="hidden lg:block bg-[#f9f9f9] w-[100px] rounded-lg h-full"></div>
        
        <div className="bg-[#f9f9f9] rounded-lg w-[350px] lg:w-[1000px] h-full flex-shrink-0 flex justify-between px-5 items-center lg:gap-8">
          <div className="flex items-center gap-4">
            <AnimatedIconGrid />
            <div>
              <div className="font-pangaia-bold text-lg text-black">{name}</div>
              <div className="font-mono text-xs">
                <ScrambledText texts={animatedTexts} />
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-zinc-500 hover:text-red-400 transition-colors duration-200 text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="lg:hidden">
            <button
              onClick={toggleDropdown}
              className="transition-transform duration-300 hover:scale-110"
            >
              <RxHamburgerMenu
                className={`text-zinc-500 cursor-pointer h-6 w-6 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
        
        <div className="hidden lg:block bg-[#f9f9f9] w-[100px] rounded-lg h-full"></div>
        
        <div className="bg-[#f9f9f9] rounded-l-lg flex-1 h-full"></div>
      </div>

      <div
        className={`lg:hidden flex gap-[1px] transition-all duration-500 ease-in-out overflow-hidden ${
          isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`bg-[#f9f9f9] rounded-r-lg flex-1 transition-all duration-500 ease-in-out ${
            isDropdownOpen ? "max-h-96" : "max-h-0"
          }`}
        ></div>
        <div
          className={`bg-[#f9f9f9] rounded-lg w-[350px] flex-shrink-0 transition-all duration-500 ease-in-out overflow-hidden ${
            isDropdownOpen ? "max-h-96 py-5 px-5" : "max-h-0 py-0 px-5"
          }`}
        >
          <div
            className={`grid grid-cols-1 gap-3 transition-all duration-200 ease-in-out ${
              isDropdownOpen ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-mono text-zinc-500 px-4 py-2 hover:text-red-400 rounded-lg flex items-center justify-center text-center`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div
          className={`bg-[#f9f9f9] rounded-l-lg flex-1 transition-all duration-500 ease-in-out ${
            isDropdownOpen ? "max-h-96" : "max-h-0"
          }`}
        ></div>
      </div>
    </div>
  );
}
