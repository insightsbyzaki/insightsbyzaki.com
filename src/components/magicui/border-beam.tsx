"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  delay = 0,
  colorFrom = "hsl(var(--accent))",
  colorTo = "transparent",
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
      style={{
        ["--size" as string]: `${size}px`,
        ["--duration" as string]: `${duration}s`,
        ["--delay" as string]: `-${delay}s`,
        ["--color-from" as string]: colorFrom,
        ["--color-to" as string]: colorTo,
        ["--border-width" as string]: `${borderWidth}px`,
      }}
    >
      <div
        className="absolute inset-[var(--border-width)] rounded-[inherit]"
        style={{
          background: "inherit",
          maskImage:
            "linear-gradient(transparent, transparent), linear-gradient(white, white)",
          maskClip: "padding-box, border-box",
          maskComposite: "intersect",
        }}
      />
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `linear-gradient(90deg, var(--color-to), var(--color-from), var(--color-to))`,
          backgroundSize: "var(--size) 100%",
          animation: `border-beam var(--duration) linear infinite var(--delay)`,
        }}
      />
      <style>{`
        @keyframes border-beam {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
