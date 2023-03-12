import React, { useEffect, useRef } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { StyledAboutSection, StyledPic, StyledText } from "./About.styled";
import Image from "next/image";
import { srConfig } from "@/constants";
import { TStrapiAboutMain } from "@/types/strapi.types";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

type Props = TStrapiAboutMain;

export const About: React.FC<Props> = ({
  text_en,
  text_ru,
  title_en,
  title_ru,
  skills,
  anchor,
}) => {
  const { locale } = useRouter();
  const { t } = useTranslation("about");

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

  return (
    <StyledAboutSection id={anchor} ref={revealContainer}>
      <h2 className="numbered-heading">
        {locale === "ru" ? title_ru : title_en}
      </h2>

      <div className="inner">
        <StyledText>
          <div
            dangerouslySetInnerHTML={{
              __html: locale === "ru" ? text_ru : text_en,
            }}
          />

          <br />

          <p>{t("About.NamePreambule")}</p>

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
