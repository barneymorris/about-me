import { Icon } from "@/components/Icon/Icon.component";
import { srConfig } from "@/constants";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { TStrapiFeaturesResponse } from "@/types/strapi.types";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { StyledProject, StyledProjectsGrid } from "./Featured.styled";
import { useTranslation } from "next-i18next";

type Props = TStrapiFeaturesResponse;

export const Featured: React.FC<Props> = ({ data }) => {
  const { locale } = useRouter();
  const revealTitle = useRef<HTMLHeadingElement>(null);
  const revealProjects = useRef<HTMLDivElement[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation("featured");

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
        {t("Featured.SomeThings")}
      </h2>

      <StyledProjectsGrid>
        {data &&
          data.map(({ attributes }, i) => {
            return (
              <StyledProject
                key={i}
                // @ts-ignore
                ref={(el) => (revealProjects.current[i] = el)}
              >
                <div className="project-content">
                  <div>
                    <p className="project-overline">
                      {t("Featured.FeaturedProject")}
                    </p>

                    <h3 className="project-title">
                      <a
                        href={attributes.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {locale === "ru"
                          ? attributes.project_title_ru
                          : attributes.project_title_en}
                      </a>
                    </h3>

                    <div className="project-description">
                      {locale === "ru"
                        ? attributes.project_description_ru
                        : attributes.project_description_en}
                    </div>

                    {attributes.skills.length && (
                      <ul className="project-tech-list">
                        {attributes.skills.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      <a
                        href={attributes.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta"
                      >
                        {t("Featured.LearnMore")}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a
                    href={attributes.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${process.env.STRAPI_ASSETS_HOST}${attributes.img}`}
                      alt={
                        locale === "ru"
                          ? attributes.project_title_ru
                          : attributes.project_title_en
                      }
                      className="img"
                    />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
};
