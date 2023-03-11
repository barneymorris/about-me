import { KEY_CODES, srConfig } from "@/constants";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
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

export const Jobs = () => {
  // TODO Move it to Strapi
  const jobsData = [
    {
      node: {
        frontmatter: {
          company: "MoySklad/Kladana",
          title: "Senior Frontend Developer / Teamlead",
          url: "https://www.moysklad.ru",
          range: "March 2022 - Present",
          list: [
            "Creating complex kernel for microfrontend solution",
            "Writing complex gitlab pipelines. Edit k8s configs. Get acquainted how deploy works. Deploy and escort this process to production",
            "Become a mentor for several middle and junior developrs, was a team lead with 5+ developers",
            "Get acquainted how microservices works in Java, written several microservices by myself",
            "Rewrite legacy GWT (Java) code for React, instruct non-frontend developers how to do it",
            "Internationalization some of React microfrontend service with react-i18-next for Indian users",
          ],
        },
      },
    },

    {
      node: {
        frontmatter: {
          company: "SberAuto",
          title: "Frontend Developer",
          url: "https://www.sberauto.com",
          range: "August 2021 - March 2022",
          list: [
            "Maintain and create components for modern CRM with React and Typescript",
            "Create and integrate into company Storybook solution",
            "Creating a complex form wizards, including this https://sberauto.com/sell_car_sberauto",
            "Follow certain design system from designers. Pixel-perfect layout. Extends existing components",
            "Inegreate Material UI framework for some services",
            "Deep optimization for prevent rerendering components",
          ],
        },
      },
    },
    {
      node: {
        frontmatter: {
          company: "AnatomiyaSna",
          title: "Frontend Developer",
          url: "https://www.anatomiyasna.ru",
          range: "October 2020 - August 2021",
          list: [
            "Write brand new journal site with news about anatomy of dreams, using Next.js and React",
            "Rewirte a e-commerce site that has been written with 10k jQuery code in one single file to modern React + Next.js solituon. Increase speed of site loading with deep code optimization and analysis.",
            "Integrate all of this stuff with API that has been written on PHP and Node.js",
          ],
        },
      },
    },
    {
      node: {
        frontmatter: {
          company: "Freelance",
          title: "Freelance",
          url: "https://www.freelance.ru",
          range: "January 2019 - October 2020",
          list: [
            "Create HTML pages for customers",
            "Hook up this HTML pages into Wordpress",
            "Create web parsers for scaffoding infromation around the world",
            "Create bots for Telegram",
            "Create simple e-commerce sites with WooCommerce",
          ],
        },
      },
    },
  ];

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState<number | null>(null);
  const tabs = useRef<HTMLButtonElement[]>([]);
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

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>

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
