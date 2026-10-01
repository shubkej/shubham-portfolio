import React from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "../../lib/utils"; // assuming your utility for classNames

interface WrapButtonProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  hoverClassName?: string;
  icon?: React.ReactNode; // pass ReactNode for icon components
}

const WrapButton: React.FC<WrapButtonProps> = ({
  className,
  children,
  href,
  onClick,
  hoverClassName,
  icon,
}) => {
  const content = (
    <>
      <div className="border border-[#3B3A3A] bg-[#ff3f17] h-[43px] rounded-full flex items-center justify-center text-white px-4">
        {icon && <span className="mr-3 flex items-center justify-center">{icon}</span>}
        <p className="font-medium tracking-tight flex items-center gap-2">{children}</p>
      </div>
      <div
        className={cn(
          "text-[#3b3a3a] group-hover:ml-2 ease-in-out transition-all w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#3b3a3a]",
          hoverClassName
        )}
      >
        <ArrowRight className="group-hover:rotate-45 ease-in-out transition-all" size={18} />
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn(
          "group cursor-pointer border border-[#3B3A3A] bg-[#151515] gap-2 h-[64px] flex items-center p-[11px] rounded-full",
          className
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "group cursor-pointer border border-[#3B3A3A] bg-[#151515] gap-2 h-[64px] flex items-center p-[11px] rounded-full",
        className
      )}
      type="button"
    >
      <div className="border border-[#3B3A3A] bg-[#fe7500] h-[43px] rounded-full flex items-center justify-center text-white px-4">
        {icon && <span className="mr-3 flex items-center justify-center">{icon}</span>}
        <p className="font-medium tracking-tight">{children || "Get Started"}</p>
      </div>

      <div
        className={cn(
          "text-gray-100 group-hover:ml-2 ease-in-out transition-all w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-100",
          hoverClassName
        )}
      >
        <ArrowRight className="group-hover:rotate-45 ease-in-out transition-all" size={18} />
      </div>
    </button>
  );
};

export default WrapButton;
