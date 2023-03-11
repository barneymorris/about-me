import { Icon } from "@/components/Icon/Icon.component";
import { srConfig } from "@/constants";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { StyledProject, StyledProjectsGrid } from "./Featured.styled";

export const Featured = () => {
  const featuredProjects = [
    {
      node: {
        frontmatter: {
          external: "External",
          title: "Title",
          tech: ["Tech0"],
          github: "Github",
          cover: "Cover",
          cta: "Cta",
          list: ["list0"],
          description:
            "bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba bla bla lba ",

          image:
            "https://www.ixbt.com/img/n1/news/2022/9/1/google_translate_large.JPG",
        },
      },
    },
  ];

  const revealTitle = useRef<HTMLHeadingElement>(null);
  const revealProjects = useRef<HTMLDivElement[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const animate = async () => {
      const sr = (await import("scrollreveal")).default;

      if (sr && sr.reveal) {
        sr.reveal(revealTitle?.current as HTMLHeadingElement, srConfig());
        revealProjects.current.forEach((ref, i) =>
          sr.reveal(ref, srConfig(i * 100))
        );
      }
    };

    animate();
  }, [prefersReducedMotion]);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Some Things I’ve Built
      </h2>

      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter } = node;
            const {
              external,
              title,
              tech,
              github,
              cover,
              cta,
              list,
              image,
              description,
            } = frontmatter;

            return (
              <StyledProject
                key={i}
                // @ts-ignore
                ref={(el) => (revealProjects.current[i] = el)}
              >
                <div className="project-content">
                  <div>
                    <p className="project-overline">Featured Project</p>

                    <h3 className="project-title">
                      <a href={external}>{title}</a>
                    </h3>

                    <div className="project-description">{description}</div>

                    {tech.length && (
                      <ul className="project-tech-list">
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {cta && (
                        <a href={cta} aria-label="Course Link" className="cta">
                          Learn More
                        </a>
                      )}
                      {github && (
                        <a href={github} aria-label="GitHub Link">
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && !cta && (
                        <a
                          href={external}
                          aria-label="External Link"
                          className="external"
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={external ? external : github ? github : "#"}>
                    <img src={image} alt={title} className="img" />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
};
