"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ElementType, useMemo } from "react";

type AnimationType = "text" | "word" | "character" | "line";
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

interface TextAnimateProps {
  children: string;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  duration?: number;
  variants?: { container?: Variants; item?: Variants };
  as?: ElementType;
  startOnView?: boolean;
  once?: boolean;
  by?: AnimationType;
  animation?: AnimationVariant;
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const defaultItemVariants: Record<AnimationVariant, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3 } },
    exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.3 } },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, filter: "blur(10px)", y: 20, transition: { duration: 0.3 } },
  },
  blurInDown: {
    hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
    show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, filter: "blur(10px)", y: -20, transition: { duration: 0.3 } },
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { y: 20, opacity: 0, transition: { duration: 0.3 } },
  },
  slideDown: {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
  },
  slideLeft: {
    hidden: { x: 20, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: 20, opacity: 0, transition: { duration: 0.3 } },
  },
  slideRight: {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: -20, opacity: 0, transition: { duration: 0.3 } },
  },
  scaleUp: {
    hidden: { scale: 0.5, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    exit: { scale: 0.5, opacity: 0, transition: { duration: 0.3 } },
  },
  scaleDown: {
    hidden: { scale: 1.5, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    exit: { scale: 1.5, opacity: 0, transition: { duration: 0.3 } },
  },
};

export function TextAnimate({
  children,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  once = true,
  by = "word",
  animation = "fadeIn",
}: TextAnimateProps) {
  const MotionComponent = motion.create(Component as keyof JSX.IntrinsicElements);

  const segments = useMemo(() => {
    switch (by) {
      case "word":
        return children.split(/(\s+)/);
      case "character":
        return children.split("");
      case "line":
        return children.split("\n");
      case "text":
      default:
        return [children];
    }
  }, [children, by]);

  const finalVariants = useMemo(() => {
    return {
      container: variants?.container || {
        ...defaultContainerVariants,
        show: {
          ...defaultContainerVariants.show,
          transition: {
            staggerChildren: duration / (segments.length || 1),
            delayChildren: delay,
          },
        },
      },
      item: variants?.item || defaultItemVariants[animation],
    };
  }, [variants, animation, duration, delay, segments.length]);

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={finalVariants.container as Variants}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={!startOnView ? "show" : undefined}
        exit="exit"
        viewport={{ once, amount: 0.3 }}
        className={cn("whitespace-pre-wrap", className)}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${segment}-${i}`}
            variants={finalVariants.item}
            className={cn("inline-block", segmentClassName)}
          >
            {segment === " " ? "\u00A0" : segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  );
}
