"use client";

import Card from "@/components/ui/Card";
import HeaderLayout from "@/components/HeaderSection/HeaderLayout";
import HeroSection from "@/components/HeroSection/HeroLayout";

export default function Home() {
  return (
    <>
      <HeaderLayout />
      <main>
        <HeroSection />

        <section className="h-[100svh] w-full bg-background rounded-b-3xl">
        </section>

        <section className="h-[100svh] w-full">
        </section>

        <section className="h-[100svh] w-full bg-background rounded-3xl">
          <Card />
        </section>

        <section className="h-[100svh] w-full">
          <footer></footer>
        </section>
      </main>
    </>
  );
}