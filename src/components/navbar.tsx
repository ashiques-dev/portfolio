"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { NavbarVisibilityVariant } from "./variants";
import {
  ChevronDownIcon,
  CloseIcon,
  DownlaodIcon,
  GithubIcon,
  MenuIcon,
} from "./svg";
import { Button, buttonVariants } from "./ui/button";
import { TMobileNavMenu } from "./types";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { cn } from "@/lib/utils";
import { AppContext } from "./context-provider";
import { NavLinks } from "./data";
export const Navbar = () => {
  const { page, setPage } = useContext(AppContext);

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [previous, setPrevious] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= previous) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    setPrevious(latest);
  });

  const mobileNavButtonClick = () => {
    setMobileNav(!mobileNav);
    document.body.style.overflow = mobileNav ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        document.body.style.overflow = "auto";
        setMobileNav(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePageChange = (page: string) => {
    setPage(page);
  };
  return (
    <>
      <motion.header
        variants={NavbarVisibilityVariant}
        animate={isScrolled ? "hidden" : "visible"}
        whileHover={"visible"}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="fixed w-full top-0 z-50"
      >
        <nav
          className={cn(
            "max-w-6xl mx-auto pt-6 pb-4 padding flex items-center justify-between  ",
            previous > 0 &&
              "bg-linear-to-bl from-amber-100/75  to-amber-50/75 backdrop-blur-md border-b"
          )}
        >
          <Button
            variant={"logo"}
            size={"logo"}
            onClick={() => {
              handlePageChange("Home");
            }}
          >
            <Image
              loading="lazy"
              src={"/person.png"}
              alt="user image"
              height={480}
              width={640}
              className="size-8 rounded-full object-top object-cover"
            />
            Ashique
          </Button>
          <Button
            variant={"logo"}
            size={"icon"}
            className="md:hidden"
            onClick={mobileNavButtonClick}
          >
            {mobileNav ? <CloseIcon /> : <MenuIcon />}
          </Button>
          <div className="hidden md:flex gap-2 relative divide-x  ">
            {NavLinks.map(({ label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  variant={"link"}
                  disabled={page === label}
                  onClick={() => {
                    handlePageChange(label);
                  }}
                >
                  {label}
                </Button>
              </motion.div>
            ))}
          </div>
        </nav>
        {previous > 0 && (
          <div
            onClick={() => {
              setIsScrolled(!isScrolled);
            }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 border rounded-md p-0.5 bg-amber-100 cursor-grab"
          >
            <ChevronDownIcon className={cn(isScrolled ? "" : "rotate-180")} />
          </div>
        )}
      </motion.header>
      <MobileNavMenu
        handlePageChange={handlePageChange}
        mobileNav={mobileNav}
        mobileNavButtonClick={mobileNavButtonClick}
        page={page}
      />
    </>
  );
};

const MobileNavMenu = ({
  handlePageChange,
  mobileNav,
  mobileNavButtonClick,
  page,
}: TMobileNavMenu) => {
  return (
    <AnimatePresence mode="wait">
      {mobileNav && (
        <motion.nav
          initial={{ top: "-100%" }}
          animate={{ top: 0 }}
          exit={{ top: "-100%" }}
          transition={{ duration: 0.3 }}
          className="bg-linear-to-b from-amber-100  to-amber-50 fixed inset-0 z-50 overflow-y-scroll"
        >
          <div className="pt-6 pb-4 padding flex justify-end ">
            <Button
              variant={"logo"}
              size={"icon"}
              onClick={mobileNavButtonClick}
            >
              <CloseIcon />
            </Button>
          </div>
          <div className="flex flex-col gap-6 items-start place-self-center pt-6">
            {NavLinks.map(({ label }) => (
              <div key={label} className="">
                <Button
                  variant={"link"}
                  disabled={page === label}
                  onClick={() => {
                    handlePageChange(label);
                    mobileNavButtonClick();
                  }}
                >
                  {label}
                </Button>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-14 flex-wrap padding py-10">
            <Link
              href="https://github.com/ashiques-dev"
              target="_blank"
              className={buttonVariants({ variant: "default" })}
            >
              <GithubIcon /> Github
            </Link>
            <Link
              download={true}
              href="/ashique_resume.pdf"
              target="_blank"
              className={buttonVariants({ variant: "outline" })}
            >
              Downlaod CV
              <DownlaodIcon />
            </Link>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
