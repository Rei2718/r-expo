import Concept from "@/components/dev2/Concept";
import Header from "@/components/dev2/Header";
import Hero from "@/components/dev2/Hero";

export default function HomePage() {
  return (
    <>
      {/* ========== Header ========== */}
      <Header />

      {/* ========== Header ========== */}
      <Hero />


      <div className="bg-secondary h-lvh w-lvw rounded-t-lg"></div>

      {/* ========== Concept ========== */}
      <Concept />

      <div className="bg-background h-lvh w-lvw"></div>
    </>
  );
}