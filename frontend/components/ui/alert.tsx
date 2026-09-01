import React from "react";
import { AlertCircle, CheckCircle2, AlertTriangle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "error" | "success" | "warning" | "info";
  title?: string;
  message: string;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  variant = "error",
  title,
  message,
  onClose,
  className,
  ...props
}) => {
  const icons = {
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />,
    info: <AlertCircle className="w-5 h-5 text-sky-400 shrink-0" />,
  };

  const styles = {
    error: "bg-rose-500/10 border-rose-500/30 text-rose-200",
    success: "bg-emerald-500/10 border-emerald-500/30 text-emerald-200",
    warning: "bg-amber-500/10 border-amber-500/30 text-amber-200",
    info: "bg-sky-500/10 border-sky-500/30 text-sky-200",
  };

  return (
    <div
      className={cn(
        "p-4 rounded-xl border flex items-start gap-3 backdrop-blur-md text-xs sm:text-sm font-medium transition-all animate-fade-in",
        styles[variant],
        className
      )}
      {...props}
    >
      {icons[variant]}
      <div className="flex-1 space-y-0.5">
        {title && <h4 className="font-bold text-white leading-tight">{title}</h4>}
        <p className="leading-relaxed">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
          aria-label="Close Alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
