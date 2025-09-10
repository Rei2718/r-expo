type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {

  const barColor = isOpen ? "bg-primary" : "bg-foreground";

  return (
    <button
      onClick={onClick}
      className="relative z-[60] flex h-6 w-6 flex-col items-center justify-center space-y-1"
    >
      <span
        className={`
          block h-0.5 w-6 transform transition-all duration-1000 ease-in-out rounded-full
          ${barColor}
          ${isOpen ? "translate-y-[6px] rotate-45" : ""}
        `}
      ></span>
      <span
        className={`
          block h-0.5 w-4.5 ml-auto transform transition-all duration-1000 ease-in-out rounded-full
          ${barColor}
          ${isOpen ? "-rotate-45 w-6" : ""}
        `}
      ></span>
    </button>
  );
}