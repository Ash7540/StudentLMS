import React from "react";
import { cn } from "@/lib/utils";

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-slate-800/80 border border-slate-700/70 p-6 shadow-xl backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
