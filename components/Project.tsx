'use client';

import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import useEmblaCarousel from 'embla-carousel-react';

const FlexSpacer = ({ className }: { className: string }) => (
  <div className={`bg-[#f9f9f9] flex-1 ${className}`}></div>
);

// Real Embla hooks
const usePrevNextButtons = (emblaApi: any) => {
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

const useDotButton = (emblaApi: any) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
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
}: {
  images: string[];
  emblaRef: any;
  selectedIndex: number;
  onDotButtonClick: (index: number) => void;
}) => {
  return (
    <div className="h-[519px] w-full rounded-lg bg-gradient-to-t from-[#EDEDED] to-[#f9f9f9] p-5 relative overflow-hidden">
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
}

function Project({ title, description, name, year, images, index }: ProjectProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const formattedIndex = (index + 1).toString().padStart(2, '0');
  
  return (
    <>
      <div className="w-screen flex gap-[1px] mt-[1px] h-[100px]">
        <FlexSpacer className="rounded-r-lg" />
        <div className="h-full w-[100px] rounded-lg bg-[#f9f9f9]"></div>
        <div className="h-full w-[99px] rounded-lg bg-[#f9f9f9]"></div>
        <div className="h-full rounded-lg bg-[#f9f9f9] w-[calc(8*(1000px-9px)/10+7px)]"></div>
        <div className="h-full w-[99px] rounded-lg bg-[#f9f9f9]"></div>
        <div className="h-full w-[100px] rounded-lg bg-[#f9f9f9]"></div>
        <FlexSpacer className="rounded-l-lg" />
      </div>

      <div className="w-screen flex gap-[1px] mt-[1px] h-fit">
        <FlexSpacer className="rounded-r-lg" />
        <div className="h-[850px] w-fit rounded-lg flex gap-[1px]">
          <div className="h-full w-[100px] rounded-lg flex flex-col gap-[1px]">
            <div className="h-[80px] w-full rounded-lg bg-[#f9f9f9]"></div>
            <div className="h-[519px] w-full rounded-lg bg-[#f9f9f9]"></div>
            <div className="h-[250px] w-full rounded-lg bg-[#f9f9f9]"></div>
          </div>
          <div className="h-full w-[99px] rounded-lg flex flex-col gap-[1px]">
            <div className="h-[80px] w-full rounded-lg bg-[#f9f9f9]"></div>
            <div className="h-[519px] w-full rounded-lg bg-[#f9f9f9] flex items-center justify-center">
              <button
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                className={`text-2xl transition-colors ${
                  prevBtnDisabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-red-500 cursor-pointer hover:text-red-600"
                }`}
              >
                <FaChevronLeft />
              </button>
            </div>
            <div className="h-[250px] w-full rounded-lg bg-[#f9f9f9]"></div>
          </div>
          <div className="h-full w-[calc(8*(1000px-9px)/10+7px)] rounded-lg flex flex-col gap-[1px]">
            <div className="h-[80px] w-full rounded-lg bg-[#f9f9f9] flex justify-between px-10 items-center font-mono text-sm">
              <div className="flex gap-5 text-xs">
                <span className="text-red-500">[.scroll]</span>
                <span className="text-zinc-700">see featured works</span>
              </div>
              <div className="text-zinc-400">
                <span className="text-red-500">{formattedIndex}</span>/03
              </div>
            </div>
            <EmblaCarousel
              images={images}
              emblaRef={emblaRef}
              selectedIndex={selectedIndex}
              onDotButtonClick={onDotButtonClick}
            />
            <div className="h-[250px] w-full rounded-lg bg-[#f9f9f9] flex justify-between items-start px-5 py-10 gap-5">
              <div className="flex flex-col gap-5 font-pangaia-medium">
                <div className="text-black text-xl">{title}</div>
                <div className="text-sm text-zinc-500">{description}</div>
              </div>
              <div className="flex gap-5 font-mono text-xs">
                <span className="text-zinc-500">[.{year}]</span>
                <span className="text-red-500">{name}</span>
              </div>
            </div>
          </div>
          <div className="h-full w-[99px] rounded-lg flex flex-col gap-[1px]">
            <div className="h-[80px] w-full rounded-lg bg-[#f9f9f9]"></div>
            <div className="h-[519px] w-full rounded-lg bg-[#f9f9f9] flex items-center justify-center">
              <button
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                className={`text-2xl transition-colors ${
                  nextBtnDisabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-red-500 cursor-pointer hover:text-red-600"
                }`}
              >
                <FaChevronRight />
              </button>
            </div>
            <div className="h-[250px] w-full rounded-lg bg-[#f9f9f9]"></div>
          </div>
          <div className="h-full w-[100px] rounded-lg flex flex-col gap-[1px]">
            <div className="h-[80px] w-full rounded-lg bg-[#f9f9f9]"></div>
            <div className="h-[519px] w-full rounded-lg bg-[#f9f9f9]"></div>
            <div className="h-[250px] w-full rounded-lg bg-[#f9f9f9]"></div>
          </div>
        </div>
        <FlexSpacer className="rounded-l-lg" />
      </div>
    </>
  );
}

export default Project;
