"use client";

import { useEffect, useState } from "react";

type HeroSlide = {
  image: string;
  label: string;
};

type HeroCarouselProps = {
  slides: HeroSlide[];
};

const intervalMs = 5200;

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [activeIndex, slides.length]);

  return (
    <>
      <div className="absolute inset-0 z-0" aria-label="Pet banner carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            aria-hidden="true"
            className={[
              "absolute inset-0 bg-cover bg-[center_42%] transition-[opacity,transform] duration-700 ease-out max-sm:bg-[58%_center]",
              index === activeIndex
                ? "scale-100 opacity-100"
                : "scale-[1.03] opacity-0",
            ].join(" ")}
            style={{ backgroundImage: `url("${slide.image}")` }}
          />
        ))}
      </div>

      <div
        className="pointer-events-none absolute bottom-7 left-1/2 z-30 flex w-[min(1180px,calc(100%-40px))] -translate-x-1/2 items-center justify-end gap-2.5 max-sm:bottom-5 max-sm:w-[min(1180px,calc(100%-32px))] max-sm:justify-start"
        aria-label="Pet banner controls"
      >
        <button
          className="pointer-events-auto grid size-10 place-items-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/25 max-sm:size-9"
          type="button"
          aria-label="上一张横幅"
          onClick={() => showSlide(activeIndex - 1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4.5 fill-none stroke-current stroke-[2.4]">
            <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex items-center gap-2 px-1" role="tablist" aria-label="Pet banner slides">
          {slides.map((slide, index) => (
            <button
              key={slide.label}
              className={[
                "pointer-events-auto size-2.5 rounded-full border border-white/40 bg-white/15 p-0 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/25",
                index === activeIndex ? "border-white/70 bg-white/30" : "",
              ].join(" ")}
              type="button"
              role="tab"
              aria-label={slide.label}
              aria-selected={index === activeIndex}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
        <button
          className="pointer-events-auto grid size-10 place-items-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/25 max-sm:size-9"
          type="button"
          aria-label="下一张横幅"
          onClick={() => showSlide(activeIndex + 1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4.5 fill-none stroke-current stroke-[2.4]">
            <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </>
  );
}
