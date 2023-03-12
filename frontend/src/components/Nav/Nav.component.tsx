import { loaderDelay } from "@/constants";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import useScrollDirection from "@/hooks/useScrollDirection";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IconLogo } from "../Images/Logo/Logo.component";
import { Props } from "./Nav.types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { StyledLinks, StyledHeader, StyledNav } from "./Nav.styled";
import Menu from "../Menu/Menu.component";
import { LanguageModal } from "../Modals/Language/Language.component";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

// TODO Add it to strapi
const navLinks = [
  {
    name: "About",
    url: "/#about",
  },
  {
    name: "Experience",
    url: "/#jobs",
  },
  {
    name: "Work",
    url: "/#projects",
  },
  {
    name: "Contact",
    url: "/#contact",
  },
];

export const Nav: React.FC<Props> = ({ isHome, nav, resumeLink }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const [isLanguageModalOpened, setIsLanguageModalOpened] = useState(false);
  const { locale } = useRouter();
  const { t } = useTranslation("nav");

  const scrollDirection = useScrollDirection({ initialDirection: "down" });
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prefersReducedMotion]);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? "fade" : "";
  const fadeDownClass = isHome ? "fadedown" : "";

  const Logo = (
    <div className="logo" tabIndex={-1}>
      {isHome ? (
        <Link href="/" aria-label="home">
          <IconLogo />
        </Link>
      ) : (
        <Link href="/" aria-label="home">
          <IconLogo />
        </Link>
      )}
    </div>
  );

  const ResumeLink = (
    <a
      className="resume-button"
      href={`${process.env.STRAPI_HOST}${resumeLink.link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("Nav.Resume")}
    </a>
  );

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        {prefersReducedMotion && (
          <>
            {Logo}

            <StyledLinks>
              <ol>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link href={url}>{name}</Link>
                    </li>
                  ))}
              </ol>
              <div>{ResumeLink}</div>
            </StyledLinks>

            <Menu nav={nav} />
          </>
        )}

        {!prefersReducedMotion && (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <>{Logo}</>
                </CSSTransition>
              )}
            </TransitionGroup>

            <StyledLinks>
              <ol>
                <TransitionGroup component={null}>
                  <LanguageModal
                    isOpen={isLanguageModalOpened}
                    onClose={() => setIsLanguageModalOpened(false)}
                  />

                  <div onClick={() => setIsLanguageModalOpened(true)}>
                    {locale?.includes("ru") && (
                      <div>
                        <img
                          className="flag"
                          src="/images/russia.jpg"
                          alt="russia"
                        />
                      </div>
                    )}

                    {!locale?.includes("ru") && (
                      <div>
                        <img className="flag" src="/images/usa.png" alt="usa" />
                      </div>
                    )}
                  </div>

                  {isMounted &&
                    nav?.data?.length &&
                    nav?.data.map(({ attributes }, i) => (
                      <CSSTransition
                        key={i}
                        classNames={fadeDownClass}
                        timeout={timeout}
                      >
                        <li
                          key={i}
                          style={{
                            transitionDelay: `${isHome ? i * 100 : 0}ms`,
                          }}
                        >
                          <Link href={attributes.anchor}>
                            {locale === "ru"
                              ? attributes.text_ru
                              : attributes.text_en}
                          </Link>
                        </li>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ol>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                    <div
                      style={{
                        transitionDelay: `${
                          isHome ? navLinks.length * 100 : 0
                        }ms`,
                      }}
                    >
                      {ResumeLink}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </StyledLinks>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <Menu nav={nav} />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
};
