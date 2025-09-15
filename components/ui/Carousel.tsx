"use client";

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from "@/components/ui/EmblaCarousel";


export default function Carousel() {
  const OPTIONS: EmblaOptionsType = { 
    align: "center",
    loop: true,
    dragFree: false,
  };

  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
);
}