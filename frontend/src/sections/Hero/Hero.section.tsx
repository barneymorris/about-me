import { loaderDelay, navDelay } from "@/constants";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { TStrapiHeroMain } from "@/types/strapi.types";
import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { StyledHeroSection } from "./Hero.styled";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

type Props = TStrapiHeroMain;

export const Hero: React.FC<Props> = ({
  name_en,
  name_ru,
  heading_en,
  heading_ru,
  description_en,
  description_ru,
}) => {
  const { locale } = useRouter();
  const { t } = useTranslation("hero");

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
    <h2 className="big-heading">{locale === "ru" ? name_ru : name_en}</h2>
  );
  const three = (
    <h3 className="big-heading">{locale === "ru" ? heading_ru : heading_en}</h3>
  );
  const four = (
    <>
      <p
        dangerouslySetInnerHTML={{
          __html: locale === "ru" ? description_ru : description_en,
        }}
      />
    </>
  );

  const five = (
    <a className="email-link" href="#contact">
      {t("Hero.ButtonText")}
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
