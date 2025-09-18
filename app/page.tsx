import Concept from "@/components/dev2/Concept";
import Header from "@/components/dev2/Header";
import Hero from "@/components/dev2/Hero";
import MenuCard from "@/components/dev2/MenuCard";
import { Sponcor } from "@/components/dev2/Sponsor";

export default function HomePage() {
  return (
    <>
      {/* ========== Header ========== */}
      <Header />

      {/* ========== Hero ========== */}
      <Hero />

      {/* ========== MenuCard ========== */}
      <MenuCard />

      {/* ========== Concept ========== */}
      <Concept />

      {/* ========== Sponcor ========== */}
      <Sponcor />

      <div className="bg-background h-lvh w-lvw border border-primary"></div>
    </>
  );
}