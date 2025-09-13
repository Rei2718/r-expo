"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export default function EmblaCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="grid mx-auto max-w-6xl">
      <div className='col-start-1 row-start-1 bg-gradient-to-b from-transparent via-foreground/10 via-50% to-transparent w-full h-full z-0'></div>
      <div className="col-start-1 row-start-1 overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-8 touch-pan-y">
          {slides.map((index) => (
            <div
              className="max-w-xl flex-shrink-0 basis-[80svw] pl-8 grid aspect-[13/8]"
              key={index}
            >
              <div className='col-start-1 row-start-1 self-center justify-self-center w-full h-full p-[5%] z-10'>
                <div className="col-start-1 row-start-1 self-start justify-self-start h-1/2 aspect-[8/13] flex items-center justify-center rounded-sm bg-foreground text-foreground">
                  {index + 1}
                </div>
              </div>
              <div className="col-start-1 row-start-1 self-start w-full aspect-[16/9] flex items-center justify-center rounded-md bg-background text-foreground z-0">
                {index + 1}
              </div>
              <div className="col-start-1 row-start-1 self-end justify-self-center w-[90%] h-2/5 bg-pink-500 rounded-sm z-10">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}