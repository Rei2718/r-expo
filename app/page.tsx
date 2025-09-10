"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import MenuOverlay from "@/components/MenuOverlay";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="z-[100]">
        <Header isOpen={isOpen} toggleMenu={toggleMenu} />
        <MenuOverlay isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      <main className="relative -z-10 flex flex-col">
        <div className="relative h-[90svh]">
          <Image src="/hero.webp" alt="Hero Image" fill className=" -z-20 object-cover" />
          <div className="absolute inset-0 pt-16 pb-[15svh] flex justify-center items-center">
            <p className="text-6xl text-foreground font-bold">REXPO</p>
          </div>
          <div className="absolute bottom-0 left-0 h-[30svh] w-full bg-gradient-to-b from-transparent to-background -z-10"></div>
        </div>
        <div className="w-[80svw] h-[100svh] mx-auto -mt-[15svh] bg-primary rounded-3xl"></div>
        <div className="h-[100svh] bg-pink-500"></div>
        <div className="h-[100svh]">footer</div>
      </main>
    </>
  );
}