"use client";

import BackgroundMovieLayer from "@/components/demo/BackgroundMovieLayer";
import ConceptLayout from "@/components/demo/ConceptLayout";
import HeroLayout from "@/components/demo/HeroLayout";
import NewsFeed from "@/components/demo/NewsLayout";
import HeaderLayout from "@/components/HeaderSection/HeaderLayout";

export default function HomePage() {
  return (
    <>
      {/* ===== Background Movie Layer===== */}
      <BackgroundMovieLayer />

      {/* ===== Header ===== */}
      <HeaderLayout />

      {/* ===== Hero===== */}
      <HeroLayout />

      {/* ===== Concept ===== */}
      <ConceptLayout/>

      {/* ===== News Section ===== */}
      <NewsFeed />

      <section data-section="demo" aria-label="Feed">
        <div className="h-[100lvh] w-[100lvw] border border-pink-500" />
      </section>
      <section data-section="demo" aria-label="Feed">
        <div className="h-[100lvh] w-[100lvw] border border-orange-500" />
      </section>
    </>
  );
}