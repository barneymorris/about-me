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
import { useSelector } from "react-redux";
import { selectLangState } from "@/store/lang.slice";

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

export const Nav: React.FC<Props> = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const [isLanguageModalOpened, setIsLanguageModalOpened] = useState(false);
  const lang = useSelector(selectLangState);

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
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );

  useEffect(() => {
    console.log("newlang", lang);
  }, [lang]);

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

            <Menu />
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
                    {lang.includes("ru") && (
                      <div>
                        <img
                          className="flag"
                          src="/images/russia.jpg"
                          alt="russia"
                        />
                      </div>
                    )}

                    {!lang.includes("ru") && (
                      <div>
                        <img className="flag" src="/images/usa.png" alt="usa" />
                      </div>
                    )}
                  </div>

                  {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
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
                          <Link href={url}>{name}</Link>
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
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
};
