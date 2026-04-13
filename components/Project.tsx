"use client";

import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { FiArrowUpRight } from "react-icons/fi";

const FlexSpacer = ({ className }: { className: string }) => (
  <div className={`bg-[#f9f9f9] dark:bg-zinc-900 flex-1 ${className}`}></div>
);

// Real Embla hooks
const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const useDotButton = (emblaApi: EmblaCarouselType | undefined) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onInit();
    onSelect();
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

// Embla Carousel implementation
const EmblaCarousel = ({
  images,
  emblaRef,
  selectedIndex,
  onDotButtonClick,
  projectIndex,
}: {
  images: string[];
  emblaRef: (node: HTMLElement | null) => void;
  selectedIndex: number;
  onDotButtonClick: (index: number) => void;
  projectIndex: number;
}) => {
  return (
    <div className="h-[519px] w-full rounded-lg bg-gradient-to-t from-[#EDEDED] dark:from-zinc-800 to-[#f9f9f9] dark:to-zinc-900 p-5 relative overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="flex-none w-full h-[479px] relative">
              <Image
                src={src}
                alt={`project-image-${index + 1}`}
                width={800}
                height={500}
                className="w-full h-full object-contain rounded-lg"
                priority={projectIndex === 0}
                fetchPriority={projectIndex === 0 ? "high" : "auto"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

interface ProjectProps {
  title: string;
  description: string;
  name: string;
  year: string;
  images: string[];
  index: number;
  link?: string;
  techStack?: string[];
}

function Project({
  title,
  description,
  name,
  year,
  images,
  index,
  link,
  techStack,
}: ProjectProps) {
  const [desktopEmblaRef, desktopEmblaApi] = useEmblaCarousel();
  const {
    prevBtnDisabled: desktopPrevBtnDisabled,
    nextBtnDisabled: desktopNextBtnDisabled,
    onPrevButtonClick: onDesktopPrevButtonClick,
    onNextButtonClick: onDesktopNextButtonClick,
  } = usePrevNextButtons(desktopEmblaApi);
  const { selectedIndex: desktopSelectedIndex, onDotButtonClick: onDesktopDotButtonClick } = useDotButton(desktopEmblaApi);

  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel();
  const {
    prevBtnDisabled: mobilePrevBtnDisabled,
    nextBtnDisabled: mobileNextBtnDisabled,
    onPrevButtonClick: onMobilePrevButtonClick,
    onNextButtonClick: onMobileNextButtonClick,
  } = usePrevNextButtons(mobileEmblaApi);
  const { selectedIndex: mobileSelectedIndex, onDotButtonClick: onMobileDotButtonClick } = useDotButton(mobileEmblaApi);

  const formattedIndex = (index + 1).toString().padStart(2, "0");

  return (
    <>
      <div className="hidden lg:flex w-screen gap-[1px] mt-[1px] h-[100px]">
        <FlexSpacer className="rounded-r-lg" />
        <div className="w-[95vw] lg:w-[90vw] xl:w-[1200px] max-w-[1200px] grid grid-cols-12 gap-[1px] flex-shrink-0">
          <div className="h-full col-span-1 w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
          <div className="h-full col-span-1 w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
          <div className="h-full col-span-8 w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
          <div className="h-full col-span-1 w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
          <div className="h-full col-span-1 w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
        </div>
        <FlexSpacer className="rounded-l-lg" />
      </div>

      <div className="hidden lg:flex w-screen gap-[1px] mt-[1px] h-fit">
        <FlexSpacer className="rounded-r-lg" />
        <div className="h-[850px] w-[95vw] lg:w-[90vw] xl:w-[1200px] max-w-[1200px] rounded-lg grid grid-cols-12 gap-[1px] flex-shrink-0">
          <div className="h-full col-span-1 w-full rounded-lg grid grid-rows-[80px_519px_250px] gap-[1px]">
            <div className="w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
            <div className="w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
            <div className="w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
          </div>
          <div className="h-full col-span-1 w-full rounded-lg grid grid-rows-[80px_519px_250px] gap-[1px]">
            <div className="w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
            <div className="w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900 flex items-center justify-center">
              <button
                onClick={onDesktopPrevButtonClick}
                disabled={desktopPrevBtnDisabled}
                className={`text-2xl transition-colors ${
                  desktopPrevBtnDisabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-red-500 cursor-pointer hover:text-red-600"
                }`}
              >
                <FaChevronLeft />
              </button>
            </div>
            <div className="h-[250px] w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
          </div>
          <div className="h-full col-span-8 w-full rounded-lg flex flex-col gap-[1px]">
            <div className="h-[80px] w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900 flex justify-between px-4 lg:px-10 items-center font-mono text-sm">
              <div className="flex gap-5 text-xs">
                <span className="text-red-500">[.scroll]</span>
                <span className="text-zinc-700">see featured works</span>
              </div>
              <div className="text-zinc-400">
                <span className="text-red-500">{formattedIndex}</span>/04
              </div>
            </div>
            <EmblaCarousel
              images={images}
              emblaRef={desktopEmblaRef}
              selectedIndex={desktopSelectedIndex}
              onDotButtonClick={onDesktopDotButtonClick}
              projectIndex={index}
            />
            <div className="h-[250px] w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900 flex justify-between items-start px-5 py-10 gap-5">
              <div className="flex flex-col gap-4 font-pangaia-medium flex-1">
                <div className="text-black dark:text-white text-xl">
                  {title}
                </div>
                <p className="text-sm text-zinc-500 line-clamp-3 leading-relaxed max-w-2xl">
                  {description}
                </p>
                {techStack && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[10px] font-mono text-zinc-600 dark:text-zinc-300 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-md border border-zinc-200/50 dark:border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-end justify-between h-full font-mono text-xs flex-shrink-0">
                <div className="flex gap-5">
                  <span className="text-zinc-500">[.{year}]</span>
                  <span className="text-red-500">{name}</span>
                </div>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-black dark:bg-zinc-100 text-white dark:text-black rounded-full transition-all duration-300 hover:bg-red-500 dark:hover:bg-red-500 group"
                  >
                    <span>View Project</span>
                    <FiArrowUpRight className="text-white dark:text-black text-sm group-hover:text-white transition-colors duration-300" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="h-full col-span-1 w-full rounded-lg flex flex-col gap-[1px]">
            <div className="h-[80px] w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
            <div className="h-[519px] w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900 flex items-center justify-center">
              <button
                onClick={onDesktopNextButtonClick}
                disabled={desktopNextBtnDisabled}
                className={`text-2xl transition-colors ${
                  desktopNextBtnDisabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-red-500 cursor-pointer hover:text-red-600"
                }`}
              >
                <FaChevronRight />
              </button>
            </div>
            <div className="h-[250px] w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
          </div>
          <div className="h-full col-span-1 w-full rounded-lg flex flex-col gap-[1px]">
            <div className="h-[80px] w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
            <div className="h-[519px] w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
            <div className="h-[250px] w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900"></div>
          </div>
        </div>
        <FlexSpacer className="rounded-l-lg" />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-screen flex gap-[1px] mt-[1px] h-fit overflow-hidden">
        <FlexSpacer className="rounded-r-lg" />
        <div className="w-[90vw] md:w-[600px] flex flex-col gap-[1px] flex-shrink-0">
          <div className="h-[80px] w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900 flex flex-col justify-center px-4 font-mono text-sm gap-1">
            <div className="flex justify-between w-full">
              <span className="text-red-500 text-xs">
                [{formattedIndex}/03]
              </span>
              <span className="text-zinc-500 text-xs">[{year}]</span>
            </div>
            <div className="text-zinc-700 dark:text-zinc-300 text-xs truncate">
              {name}
            </div>
          </div>

          <div className="relative">
            <EmblaCarousel
              images={images}
              emblaRef={mobileEmblaRef}
              selectedIndex={mobileSelectedIndex}
              onDotButtonClick={onMobileDotButtonClick}
              projectIndex={index}
            />
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
              <button
                onClick={onMobilePrevButtonClick}
                disabled={mobilePrevBtnDisabled}
                className={`p-2 rounded-full bg-black/20 text-white transition-colors ${
                  mobilePrevBtnDisabled
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-black/40"
                }`}
              >
                <FaChevronLeft className="text-sm" />
              </button>
            </div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
              <button
                onClick={onMobileNextButtonClick}
                disabled={mobileNextBtnDisabled}
                className={`p-2 rounded-full bg-black/20 text-white transition-colors ${
                  mobileNextBtnDisabled
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-black/40"
                }`}
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>

          <div className="h-fit w-full rounded-lg bg-[#f9f9f9] dark:bg-zinc-900 flex flex-col px-5 py-8 gap-5">
            <div className="flex flex-col gap-3 font-pangaia-medium">
              <div className="text-black dark:text-white text-lg leading-tight">
                {title}
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {description}
              </p>
              {techStack && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[10px] font-mono text-zinc-600 dark:text-zinc-300 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-md border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3 bg-black dark:bg-zinc-100 text-white dark:text-black rounded-xl transition-all duration-300 hover:bg-red-500 dark:hover:bg-red-500 group w-full mt-4"
              >
                <span className="font-mono text-xs uppercase tracking-widest">
                  View Project
                </span>
                <FiArrowUpRight className="text-white dark:text-black text-sm group-hover:text-white transition-colors duration-300" />
              </a>
            )}
          </div>
        </div>
        <FlexSpacer className="rounded-l-lg" />
      </div>
    </>
  );
}

export default Project;
