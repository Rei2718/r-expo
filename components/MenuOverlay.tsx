type MenuOverlayProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default function MenuOverlay({ isOpen, toggleMenu }: MenuOverlayProps) {
  return (
    <div
      className={`fixed inset-0 bg-foreground bg-opacity-80 flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <nav>
        <ul className="space-y-6 text-2xl text-background">
          <li><a href="#home" onClick={toggleMenu} className="hover:text-primary">Home</a></li>
          <li><a href="#concept" onClick={toggleMenu} className="hover:text-primary">Concept</a></li>
          <li><a href="#products" onClick={toggleMenu} className="hover:text-primary">Products</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-primary">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}