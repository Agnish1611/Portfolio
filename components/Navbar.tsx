"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import AnimatedIconGrid from "./AnimatedIconGrid";
import ScrambledText from "./ScrambledText";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  name?: string;
  animatedTexts?: string[];
}

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-me" },
];

const NavSpacer = ({ className }: { className: string }) => (
  <div
    className={`bg-[#f9f9f9] dark:bg-zinc-900 flex-1 h-full ${className}`}
  ></div>
);

const NavFixedDiv = ({ className }: { className: string }) => (
  <div
    className={`bg-[#f9f9f9] dark:bg-zinc-900 rounded-lg h-full ${className}`}
  ></div>
);

const DropdownSpacer = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={`bg-[#f9f9f9] dark:bg-zinc-900 rounded-r-lg flex-1 transition-all duration-500 ease-in-out ${
      isOpen ? "max-h-96" : "max-h-0"
    }`}
  ></div>
);

export default function Navbar({
  name = "Agnish Bhattacharya",
  animatedTexts = ["Software Engineer", "Web3 Developer"],
}: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const dropdownClasses = `lg:hidden flex gap-[1px] transition-all duration-500 ease-in-out overflow-hidden ${
    isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  }`;

  const dropdownContentClasses = `bg-[#f9f9f9] dark:bg-zinc-900 rounded-lg w-[90vw] md:w-[600px] flex-shrink-0 transition-all duration-500 ease-in-out overflow-hidden ${
    isDropdownOpen ? "max-h-96 py-5 px-5" : "max-h-0 py-0 px-5"
  }`;

  const menuGridClasses = `grid grid-cols-1 gap-3 transition-all duration-200 ease-in-out ${
    isDropdownOpen ? "opacity-100 delay-100" : "opacity-0"
  }`;

  return (
    <nav className="w-screen flex flex-col gap-[1px] transition-all duration-500 ease-in-out">
      <div className="flex gap-[1px] h-[6rem]">
        <NavSpacer className="rounded-r-lg" />

        {/* Desktop Navbar */}
        <div className="hidden lg:grid grid-cols-12 w-[95vw] lg:w-[90vw] xl:w-[1200px] max-w-[1200px] gap-[1px] flex-shrink-0 h-full">
          <NavFixedDiv className="col-span-1 w-full" />
          <div className="bg-[#f9f9f9] dark:bg-zinc-900 rounded-lg col-span-10 h-full flex justify-between px-5 items-center gap-8">
            <div className="flex items-center gap-4">
              <AnimatedIconGrid />
              <div>
                <div className="font-pangaia-bold lg:text-2xl text-lg text-black dark:text-white">
                  {name}
                </div>
                <div className="font-mono text-xs">
                  <ScrambledText texts={animatedTexts} />
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-mono text-zinc-500 dark:text-zinc-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 text-sm"
                >
                  {item.label}
                </a>
              ))}
              <ThemeToggle />
            </div>
          </div>
          <NavFixedDiv className="col-span-1 w-full" />
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden w-[90vw] md:w-[600px] gap-[1px] flex flex-shrink-0 h-full">
          <div className="bg-[#f9f9f9] dark:bg-zinc-900 rounded-lg w-full h-full flex justify-between px-5 items-center">
            <div className="flex items-center gap-4">
              <AnimatedIconGrid />
              <div>
                <div className="font-pangaia-bold lg:text-2xl text-lg text-black dark:text-white">
                  {name}
                </div>
                <div className="font-mono text-xs hidden sm:block">
                  <ScrambledText texts={animatedTexts} />
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <ThemeToggle />
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
        </div>

        <NavSpacer className="rounded-l-lg" />
      </div>

      <div className={dropdownClasses}>
        <DropdownSpacer isOpen={isDropdownOpen} />
        <div className={dropdownContentClasses}>
          <div className={menuGridClasses}>
            {MENU_ITEMS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-zinc-500 dark:text-zinc-400 px-4 py-2 hover:text-red-400 dark:hover:text-red-400 rounded-lg flex items-center justify-center text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div
          className={`bg-[#f9f9f9] dark:bg-zinc-900 rounded-l-lg flex-1 transition-all duration-500 ease-in-out ${
            isDropdownOpen ? "max-h-96" : "max-h-0"
          }`}
        ></div>
      </div>
    </nav>
  );
}
