import React, { useState, useEffect, useRef, useCallback } from "react";
import Head from "next/head";
import {
  StyledHamburgerButton,
  StyledMenu,
  StyledSidebar,
} from "./Menu.styled";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Link from "next/link";
import { KEY_CODES } from "@/constants";

// TODO Move it to Strapi
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

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  let menuFocusables = useRef<HTMLElement[]>([]);
  let firstFocusableEl = useRef<HTMLElement>();
  let lastFocusableEl = useRef<HTMLElement>();

  const setFocusables = useCallback(() => {
    if (navRef.current && buttonRef.current) {
      const btn = buttonRef.current as HTMLButtonElement;

      menuFocusables.current = [
        btn,
        ...Array.from(navRef.current.querySelectorAll("a")),
      ];
      firstFocusableEl.current = menuFocusables.current[0];
      lastFocusableEl.current =
        menuFocusables.current[menuFocusables.current.length - 1];
    }
  }, []);

  const handleBackwardTab = useCallback(
    (e: KeyboardEvent) => {
      if (document.activeElement === firstFocusableEl.current) {
        e.preventDefault();
        lastFocusableEl.current?.focus();
      }
    },
    [firstFocusableEl, lastFocusableEl]
  );

  const handleForwardTab = useCallback(
    (e: KeyboardEvent) => {
      if (document.activeElement === lastFocusableEl.current) {
        e.preventDefault();
        firstFocusableEl.current?.focus();
      }
    },
    [firstFocusableEl, lastFocusableEl]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case KEY_CODES.ESCAPE:
        case KEY_CODES.ESCAPE_IE11: {
          setMenuOpen(false);
          break;
        }

        case KEY_CODES.TAB: {
          if (menuFocusables && menuFocusables.current.length === 1) {
            e.preventDefault();
            break;
          }
          if (e.shiftKey) {
            handleBackwardTab(e);
          } else {
            handleForwardTab(e);
          }
          break;
        }

        default: {
          break;
        }
      }
    },
    [handleBackwardTab, handleForwardTab, menuFocusables]
  );

  const onResize = (e: UIEvent) => {
    const target = e.currentTarget as Window;

    if (target.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    setFocusables();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [onKeyDown, setFocusables]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref: wrapperRef, handler: () => setMenuOpen(false) });

  return (
    <StyledMenu>
      <Head>
        <body className={menuOpen ? "blur" : ""} />
      </Head>

      <div ref={wrapperRef}>
        <StyledHamburgerButton
          onClick={toggleMenu}
          menuOpen={menuOpen}
          ref={buttonRef}
          aria-label="Menu"
        >
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburgerButton>

        <StyledSidebar
          menuOpen={menuOpen}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          <nav ref={navRef}>
            {navLinks && (
              <ol>
                {navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link href={url} onClick={() => setMenuOpen(false)}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ol>
            )}

            <a href="/resume.pdf" className="resume-link">
              Resume
            </a>
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default Menu;
