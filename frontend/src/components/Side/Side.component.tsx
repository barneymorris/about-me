import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Props } from "./Side.types";
import { loaderDelay } from "@/constants";
import { StyledSideElement } from "./Side.styled";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export const Side: React.FC<Props> = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isHome || prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, [isHome, prefersReducedMotion]);

  return (
    <StyledSideElement orientation={orientation}>
      {prefersReducedMotion ? (
        <>{children}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition
              classNames={isHome ? "fade" : ""}
              timeout={isHome ? loaderDelay : 0}
            >
              {children}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </StyledSideElement>
  );
};
