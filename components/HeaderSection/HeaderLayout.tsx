"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Hexagon } from "lucide-react";
import MenuOverlay from "@/components/HeaderSection/MenuLayout";
import MenuButton from "@/components/HeaderSection/MenuButton";

export default function HeaderLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="z-50">
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 transition-colors duration-1000",
          {
            "bg-background border-b border-foreground/20": isScrolled && !isOpen,
            "bg-transparent border-b border-transparent": !isScrolled || isOpen,
          }
        )}
      >
        <Link href="/" className="h-6 w-6">
          <Hexagon
            className={clsx("h-6 w-6 transition-colors duration-1000 md:hidden", {
              "text-primary": isOpen,
              "text-foreground": !isOpen,
            })}
            strokeWidth={1.5}
          />
        </Link>
        <MenuButton isOpen={isOpen} onClick={toggleMenu} />
      </header>

      <MenuOverlay isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}