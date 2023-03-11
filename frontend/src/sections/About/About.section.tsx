import React, { useEffect, useRef } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { StyledAboutSection, StyledPic, StyledText } from "./About.styled";
import Image from "next/image";
import { srConfig } from "@/constants";

export const About = () => {
  const revealContainer = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const animate = async () => {
      const sr = (await import("scrollreveal")).default;

      if (sr && sr.reveal) {
        sr.reveal(revealContainer?.current as HTMLDivElement, srConfig());
      }
    };

    animate();
  }, [prefersReducedMotion]);

  // TODO Add this to Strapi
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Deep React optimization",
    "Redux",
    "Webpack",
    "HTML & CSS",
    "Node.js",
    "Golang",
    "Microservices",
    "A little bit of RabbitMQ",
    "Linux administation",
    "Gitlab CI/CD",
    "Docker",
    "A little bit of k8s",
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Boris and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              in my schoolhood when I decided to earn some money — turns out
              creating some HTML and CSS templates was a not big deal!
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working at{" "}
              <a href="https://moysklad.ru/">an CRM system for warehouses</a>,{" "}
              <a href="https://sberauto.com/">a start-up</a>,{" "}
              <a href="https://www.anatomiyasna.ru/">a ecommerce site</a>, and{" "}
              <a href="https://freelance.ru/">as a freelancer</a>. My main focus
              these days is maintain complex microfrontend kernel, rewrite
              legacy GWT (Java code) to React and make things amazing at{" "}
              <a href="https://moysklad.ru">Moysklad/Kladana</a>
              for a variety of clients.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image
              className="img"
              src="/images/me.jpg"
              width={960}
              height={400}
              quality={95}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};
