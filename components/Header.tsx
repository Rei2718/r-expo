"use client";

import { useState, useEffect } from "react";
import MenuButton from "@/components/MenuButton";
import { Hexagon, House } from "lucide-react";
import Link from "next/link";

type HeaderProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default function Header({ isOpen, toggleMenu }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 rounded-b-3xl p-4 px-6 flex items-center justify-between z-40 transition-colors duration-1000 ${
        isScrolled && !isOpen ? "bg-background" : "bg-transparent"
      }`}
    >
      <Link href="/" className="h-6 w-6">
        <House
          className={`transition-colors duration-1000 ${
            isOpen ? "text-primary" : "text-foreground"
          }`}
          strokeWidth={1.5}
        />
      </Link>
      <Hexagon
        className={`h-6 w-6 transition-colors duration-1000 ${
          isOpen ? "text-primary" : "text-foreground"
        }`}
        strokeWidth={1.5}
        />
        <MenuButton isOpen={isOpen} onClick={toggleMenu} />
    </header>
  );
}