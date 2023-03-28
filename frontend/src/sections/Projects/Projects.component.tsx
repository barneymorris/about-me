import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { srConfig } from "@/constants";
import { Icon } from "@/components/Icon/Icon.component";
import { StyledProject, StyledProjectsSection } from "./Projects.styled";
import { Props } from "./Projects.types";
import {
  TStrapiProjectMainItem,
  TStrapiProjectsMain,
} from "@/types/strapi.types";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const Projects: React.FC<Props> = ({ projects }) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { locale } = useRouter();
  const { t } = useTranslation("projects");

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const animate = async () => {
      const sr = (await import("scrollreveal")).default;

      if (sr && sr.reveal && revealArchiveLink.current && revealTitle.current) {
        sr.reveal(revealTitle.current, srConfig());
        sr.reveal(revealArchiveLink.current, srConfig());
        revealProjects.current.forEach((ref, i) =>
          sr.reveal(ref, srConfig(i * 100))
        );
      }
    };

    animate();
  }, []);

  const GRID_LIMIT = 6;
  const firstSix = projects.data.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects.data : firstSix;

  const projectInner = (item: TStrapiProjectMainItem) => {
    return (
      <div className="project-inner">
        <header>
          <div className="project-top">
            <div className="folder">
              <Icon name="Folder" />
            </div>
            <div className="project-links">
              {item.github && (
                <a
                  href={item.github}
                  aria-label="Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="Github" />
                </a>
              )}
            </div>
          </div>

          <h3 className="project-title">
            <a href={item.github} target="_blank" rel="noreferrer">
              {locale === "ru" ? item.title_ru : item.title_en}
            </a>
          </h3>

          <div className="project-description">
            {locale === "ru" ? item.desc_ru : item.desc_en}
          </div>
        </header>

        <footer>
          {item.tech && (
            <ul className="project-tech-list">
              {item.tech.map((tech: string, i: number) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <StyledProjectsSection>
      <h2 ref={revealTitle}>{t("Projects.Title")}</h2>

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map((item, i) => (
                <StyledProject key={i}>
                  {/* @ts-ignore */}
                  {projectInner(item.attributes)}
                </StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map((item, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}
                >
                  <StyledProject
                    key={i}
                    // @ts-ignore
                    ref={(el) => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${
                        i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                      }ms`,
                    }}
                  >
                    {/* @ts-ignore */}
                    {projectInner(item.attributes)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? "Less" : "More"}
      </button>
    </StyledProjectsSection>
  );
};
