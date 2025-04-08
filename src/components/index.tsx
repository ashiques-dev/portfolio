"use client";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context-provider";
import { AnimatePresence, motion, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { TBluredInText, TEaseInText } from "./types";
import { characterVariant, easeInTextVariant } from "./variants";

export const ProtectedComponets = ({
  children,
  pageName,
}: {
  children: React.ReactNode;
  pageName: string;
}) => {
  const { page } = useContext(AppContext);
  if (page === pageName) {
    return <>{children}</>;
  }
  return null;
};

export function BluredInText({
  words,
  duration = 3000,
  className,
}: TBluredInText) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [isAnimating, words]);

  return (
    <AnimatePresence mode="wait">
      <motion.h3 key={words[index]} className={cn(className)}>
        {words[index].split("").map((char, charIndex) => (
          <motion.span
            key={charIndex}
            variants={characterVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={{ charIndex, wordLength: words[index].length }}
            onAnimationComplete={() => {
              if (charIndex === words[index].length - 1) {
                setIsAnimating(false);
              }
            }}
            onAnimationStart={() => {
              if (charIndex === 0) {
                setIsAnimating(true);
              }
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h3>
    </AnimatePresence>
  );
}

export const EaseInText = ({ word, className, top = false }: TEaseInText) => {
  return (
    <>
      {word.split(" ").map((text, id) => (
        <span key={id} className="overflow-hidden inline-block leading-tight">
          <motion.span
            variants={easeInTextVariant}
            initial="initial"
            whileInView="whileInView"
            custom={{ id, top }}
            viewport={{
              once: true,
            }}
            className={cn("inline-block leading-tight", className)}
          >
            {text}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
};

export const MotionContainer = ({
  children,
  className,
  ...motionProps
}: {
  children: React.ReactNode;
  className?: string;
} & MotionProps) => {
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
};
