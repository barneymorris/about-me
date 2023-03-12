import { loaderDelay, navDelay } from "@/constants";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { selectLangState } from "@/store/lang.slice";
import { TSrapiHeroMain } from "@/types/strapi.types";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { StyledHeroSection } from "./Hero.styled";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

type Props = TSrapiHeroMain;

export const Hero: React.FC<Props> = ({
  name_en,
  name_ru,
  heading_en,
  heading_ru,
}) => {
  const lang = useSelector(selectLangState);
  const { t } = useTranslation("hero");
  const { locale } = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const one = <h1>{t("Hero.NamePreambule")}</h1>;
  const two = (
    <h2 className="big-heading">{lang === "ru-RU" ? name_ru : name_en}</h2>
  );
  const three = (
    <h3 className="big-heading">
      {lang === "ru-RU" ? heading_ru : heading_en}
    </h3>
  );
  const four = (
    <>
      <p>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
          Upstatement
        </a>
        .
      </p>
    </>
  );

  const five = (
    <a
      className="email-link"
      href="https://www.newline.co/courses/build-a-spotify-connected-app"
      target="_blank"
      rel="noreferrer"
    >
      Check out my course!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};
