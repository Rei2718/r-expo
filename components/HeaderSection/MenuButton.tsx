import { memo } from "react";
import clsx from "clsx";

type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default memo(function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  const barColor = isOpen ? "bg-primary" : "bg-foreground";

  return (
    <button
      onClick={onClick}
      className="relative flex h-6 w-6 flex-col items-center justify-center space-y-1"
      aria-label="open and close menu"
      aria-expanded={isOpen}
      aria-controls="menu-overlay"
    >
      <span
        className={clsx(
          "block h-0.5 transform rounded-full transition-all duration-1000 ease-in-out",
          barColor,
          { "translate-y-[6px] rotate-45 w-6": isOpen, "w-6": !isOpen }
        )}
      />
      <span
        className={clsx(
          "block h-0.5 ml-auto transform rounded-full transition-all duration-1000 ease-in-out",
          barColor,
          { "-rotate-45 w-6": isOpen, "w-4.5": !isOpen }
        )}
      />
    </button>
  );
});