import React from "react";
import {
  ProtectedComponets,
  BluredInText,
  EaseInText,
  MotionContainer,
} from ".";
import Image from "next/image";
import { GithubIcon } from "./svg";
import Link from "next/link";
import { DownlaodIcon } from "./svg";
import { buttonVariants } from "./ui/button";

const Intro = () => {
  return (
    <ProtectedComponets pageName="Home">
      <section className="pt-32 pb-14 max-w-6xl mx-auto padding">
        <MotionContainer
          initial={{ opacity: 0, y: -30, filter: "blur(10px)", rotate: -10 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="size-56 rounded-md overflow-hidden relative"
        >
          <Image
            loading="lazy"
            src={"/person.png"}
            alt="user image"
            height={720}
            width={640}
            className="size-full object-cover object-left-top animate-move-profile
            "
          />
          <div className="absolute inset-2 border rounded-md"></div>
        </MotionContainer>
        <h1 className="text-4xl font-sans font-semibold leading-none tracking-tight mt-4 ">
          <EaseInText top word="Hi, I'm Ashique!" />
        </h1>
        <BluredInText
          className="mt-2 text-lg font-semibold text-stone-700 tracking-tight"
          words={[" Django & Next.js Developer", "Interactive Web Alchemist"]}
        />
        <p className="mt-8 max-w-2xl text-pretty">
          <EaseInText
            word="I specialize in building seamless web experiences with Django and
          Next.js. I craft high-performance, scalable applications with
          intuitive interfaces, smooth animations, and engaging user
          experiences. My focus is on blending design and functionality to
          create web solutions that are both visually stunning and technically robust."
          />
        </p>
        <MotionContainer
          initial={{ y: 20, opacity: 0, filter: "grayscale(100%) blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "grayscale(0%) blur(0px)" }}
          transition={{ duration: 1 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="flex items-center flex-wrap gap-3 mt-4"
        >
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
          <Link
            download={true}
            href="mailto:ashiques.dev@gmail.com"
            target="_blank"
            className={buttonVariants({ variant: "outline" })}
          >
            ashiques.dev@gmail.com
          </Link>
          <Link
            download={true}
            href="tel:+919487864811 "
            target="_blank"
            className={buttonVariants({ variant: "outline" })}
          >
            +91 94878 64811
          </Link>
        </MotionContainer>
      </section>
    </ProtectedComponets>
  );
};

export default Intro;
