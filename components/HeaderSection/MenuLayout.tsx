import { memo } from "react";
import clsx from "clsx";

type MenuOverlayProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default memo(function MenuOverlay({ isOpen, toggleMenu }: MenuOverlayProps) {
  return (
    <div
      id="menu-overlay"
      className={clsx(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-1000",
        {
          "opacity-100 pointer-events-auto": isOpen,
          "opacity-0 pointer-events-none": !isOpen,
        }
      )}
      aria-hidden={!isOpen}
    >
      <nav>
        <ul className="space-y-6 text-center text-2xl">
          <li><a href="#home" onClick={toggleMenu} className="transition-colors duration-300 hover:text-primary">Home</a></li>
          <li><a href="#concept" onClick={toggleMenu} className="transition-colors duration-300 hover:text-primary">Concept</a></li>
          <li><a href="#products" onClick={toggleMenu} className="transition-colors duration-300 hover:text-primary">Products</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="transition-colors duration-300 hover:text-primary">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
});