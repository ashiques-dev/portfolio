"use client";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context-provider";
import { AnimatePresence, motion, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { TBluredInText, TEaseInText, TProjectCard } from "./types";
import { characterVariant, easeInTextVariant } from "./variants";
import { Button, buttonVariants } from "./ui/button";
import { DjangoProjectsList, nextJsProjectsList } from "./data";
import Image from "next/image";
import Link from "next/link";
import { ChromeIcon, GithubIcon } from "./svg";

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

export const ProjectSelector = () => {
  const { setProject, project } = useContext(AppContext);

  return (
    <>
      <div className=" mt-8 flex justify-center gap-2">
        <Button
          disabled={project === "Next.Js"}
          variant={"link"}
          onClick={() => {
            setProject("Next.Js");
          }}
        >
          Next.Js
        </Button>
        <Button
          disabled={project === "Django"}
          variant={"link"}
          onClick={() => {
            setProject("Django");
          }}
        >
          Django
        </Button>
      </div>
    </>
  );
};

export const ProjectCard = () => {
  const { project } = useContext(AppContext);

  const projectList: TProjectCard =
    project === "Next.Js" ? nextJsProjectsList : DjangoProjectsList;

  return (
    <AnimatePresence mode="wait">
      <MotionContainer
        key={project}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10  group/project"
      >
        {projectList.map(({ name, description, source, used, src, link }) => (
          <div
            key={name}
            className={cn(
              "pb-10 grid group-hover/project:not-hover:scale-95 group-hover/project:not-hover:blur-[2px] transition-all duration-300",
              src
                ? " gap-6 max-w-2xl lg:max-w-full mx-auto lg:grid-cols-2 "
                : "max-w-3xl mx-auto"
            )}
          >
            {src && (
              <MotionContainer
                initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
                whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5 }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                className="h-80 rounded-lg overflow-hidden"
              >
                <Image
                  loading="lazy"
                  src={src}
                  alt="project image"
                  height={720}
                  width={640}
                  className="size-full object-top object-cover"
                />
              </MotionContainer>
            )}

            <MotionContainer
              initial={{ x: 100, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              className=""
            >
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className=" font-sans mt-4">{description}</p>
              <div className="flex flex-wrap gap-x-2 gap-y-4 mt-4 ">
                {used.map((item) => (
                  <p
                    key={item}
                    className="px-4 py-2 rounded-md bg-amber-200 font-medium whitespace-nowrap"
                  >
                    {item}
                  </p>
                ))}
              </div>
              {(source || link) && (
                <div className="mt-4 flex gap-2">
                  {source && (
                    <Link
                      target="_blank"
                      href={source}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      View Source <GithubIcon />
                    </Link>
                  )}
                  {link && (
                    <Link
                      target="_blank"
                      href={link}
                      className={buttonVariants({ variant: "default" })}
                    >
                      Live Demo <ChromeIcon />
                    </Link>
                  )}
                </div>
              )}
            </MotionContainer>
          </div>
        ))}
      </MotionContainer>
    </AnimatePresence>
  );
};
