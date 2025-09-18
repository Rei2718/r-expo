"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Hexagon } from "lucide-react";
import MenuOverlay from "@/components/HeaderSection/MenuLayout";
import MenuButton from "@/components/HeaderSection/MenuButton";

export default function Header() {
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
      // 50vhスクロールされたら判定
      setIsScrolled(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header data-section="header">
      <div className="z-50">
        <header
          className={clsx(
            "fixed top-0 left-0 right-0 z-[60] grid grid-cols-3 items-center rounded-full m-2 px-6 py-4 transition-all duration-500",
            {
              "bg-background/60 backdrop-blur-sm border border-foreground/12":
                isScrolled && !isOpen,
              "bg-transparent border border-transparent": !isScrolled || isOpen,
            }
          )}
        >
          <Link href="/" className="h-6 w-6 justify-self-start">
            <Hexagon
              className={clsx("h-6 w-6 transition-colors duration-1000 md:hidden", {
                "text-primary": isOpen,
                "text-foreground": !isOpen,
              })}
              strokeWidth={1.5}
            />
          </Link>
          <div className="col-start-3 justify-self-end">
            <MenuButton isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </header>

        <MenuOverlay isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}