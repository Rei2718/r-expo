"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Hexagon, House } from "lucide-react";
import clsx from "clsx";
import MenuButton from '@/components/MenuButton';

function throttle(func: () => void, limit: number) {
  let inThrottle: boolean;

  return function() {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(function() {
        inThrottle = false;
      }, limit);
    }
  };
}

type HeaderProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const SCROLL_THRESHOLD_RATIO = 0.5;

export default function Header({ isOpen, toggleMenu }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(function() {
    const handleScroll = throttle(function() {
      const threshold = window.innerHeight * SCROLL_THRESHOLD_RATIO;
      setIsScrolled(window.scrollY > threshold);
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return function() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-[60] flex items-center justify-between rounded-b-3xl p-4 px-6 transition-colors duration-1000",
        {
          "bg-background": isScrolled && !isOpen,
          "bg-transparent": !isScrolled || isOpen,
        }
      )}
    >
      <Link href="/" className="h-6 w-6">
        <House
          className={clsx("transition-colors duration-1000", {
            "text-primary": isOpen,
            "text-foreground": !isOpen,
          })}
          strokeWidth={1.5}
        />
      </Link>
      <Hexagon
        className={clsx("h-6 w-6 transition-colors duration-1000", {
          "text-primary": isOpen,
          "text-foreground": !isOpen,
        })}
        strokeWidth={1.5}
      />
      <MenuButton isOpen={isOpen} onClick={toggleMenu} />
    </header>
  );
}