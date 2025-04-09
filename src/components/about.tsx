import React from "react";
import { EaseInText, MotionContainer, ProtectedComponets } from ".";
import { myDevelopmentJourney } from "./data";

const About = () => {
  return (
    <ProtectedComponets pageName="About Me">
      <section className="pt-32 pb-14 max-w-6xl mx-auto padding overflow-clip ">
        <h2 className="font-sans text-2xl font-semibold text-center ">
          <EaseInText word="Know more about me" />
        </h2>
        <MotionContainer
          initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="mt-4"
        >
          <p>
            I embarked on my journey in web development out of pure curiosity,
            which soon turned into a passion for crafting seamless digital
            experiences. Over the years, I have honed my skills in modern web
            technologies, focusing on building high-performance, scalable, and
            visually appealing applications. My expertise lies in front-end and
            full-stack development, leveraging the latest frameworks and best
            practices to create dynamic and engaging user experiences.
          </p>{" "}
        </MotionContainer>
        <MotionContainer
          initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="mt-2"
        >
          <p>
            Beyond coding, I have a keen eye for design and enjoy exploring new
            UI/UX trends. I am also an active contributor to open-source
            projects, helping the developer community grow through shared
            knowledge and innovation.
          </p>{" "}
        </MotionContainer>
        <MotionContainer
          initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{
            once: true,
            amount: 0.75,
          }}
          className="mt-8"
        >
          <h3 className="text-lg font-medium md:text-center">
            My Development Journey My path in tech has been an exciting mix of
            learning, experimenting, and evolving
          </h3>{" "}
        </MotionContainer>

        <div className="mt-8 max-w-2xl mx-auto ">
          {myDevelopmentJourney.map(({ description, year },index) => (
            <MotionContainer
              initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{
                once: true,
                amount: 0.75,
              }}
              key={year}
              className="pb-6"
            >
              <p className="text-lg font-semibold">{year}</p>
              <p className="mt-2 font-sans">{description}</p>
            </MotionContainer>
          ))}
        </div>
      </section>
    </ProtectedComponets>
  );
};

export default About;
