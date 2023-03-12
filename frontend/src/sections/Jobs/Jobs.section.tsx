import { KEY_CODES, srConfig } from "@/constants";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { TStrapiJobsMain } from "@/types/strapi.types";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import {
  StyledHighlight,
  StyledJobsSection,
  StyledTabButton,
  StyledTabList,
  StyledTabPanel,
  StyledTabPanels,
} from "./Jobs.styled";

type Props = TStrapiJobsMain;

export const Jobs: React.FC<Props> = ({
  title_en,
  title_ru,
  jobs_en,
  jobs_ru,
  anchor,
}) => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState<number | null>(null);
  const tabs = useRef<HTMLButtonElement[]>([]);
  const revealContainer = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { locale } = useRouter();

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

  const focusTab = useCallback(() => {
    if (tabFocus !== null && tabs.current[tabFocus]) {
      tabs.current[tabFocus]?.focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus !== null && tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus !== null && tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  }, [tabFocus]);

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus, focusTab]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (tabFocus !== null) {
      switch (e.key) {
        case KEY_CODES.ARROW_UP: {
          e.preventDefault();
          setTabFocus(tabFocus - 1);
          break;
        }

        case KEY_CODES.ARROW_DOWN: {
          e.preventDefault();
          setTabFocus(tabFocus + 1);
          break;
        }

        default: {
          break;
        }
      }
    }
  };

  type TJobsData = {
    node: {
      frontmatter: {
        company: string;
        list: string[];
        range: string;
        title: string;
        url: string;
      };
    };
  }[];

  const jobsData = (locale === "ru"
    ? jobs_ru
    : jobs_en) as unknown as TJobsData;

  return (
    <StyledJobsSection id={anchor} ref={revealContainer}>
      <h2 className="numbered-heading">
        {locale === "ru" ? title_ru : title_en}
      </h2>

      <div className="inner">
        <StyledTabList
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={(e) => onKeyDown(e)}
        >
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter;
              return (
                <StyledTabButton
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  // @ts-ignore
                  ref={(el) => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? 0 : -1}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}
                >
                  <span>{company}</span>
                </StyledTabButton>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, url, company, range, list } = frontmatter;

              return (
                <CSSTransition
                  key={i}
                  in={activeTabId === i}
                  timeout={250}
                  classNames="fade"
                >
                  <StyledTabPanel
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? 0 : -1}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}
                  >
                    <h3>
                      <span>{title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url} className="inline-link">
                          {company}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{range}</p>

                    <div>
                      <ul>
                        {list.map((item, key) => {
                          return <li key={key}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </StyledTabPanel>
                </CSSTransition>
              );
            })}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};
