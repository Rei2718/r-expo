"use client";
import { useState, useEffect } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="z-50"
      >
        {isOpen ? (
          <MdClose className="h-8 w-8 text-gray-900 transition-transform duration-1000 transform" />
        ) : (
          <HiOutlineBars3BottomRight className="h-8 w-8 text-[#F4F3E1] transition-transform duration-1000 transform" />
        )}
      </button>

      <div
        className={`fixed inset-0 bg-[#F4F3E1] bg-opacity-80 flex flex-col items-center justify-center transition-all duration-1000 z-50 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav>
          <ul className="space-y-6 text-2xl text-gray-900">
            <li>
              <a
                href="#home"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#concept"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition-colors"
              >
                Concept
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}