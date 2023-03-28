import { srConfig } from "@/constants";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { StyledContactSection } from "./Contact.styled";
import { Props } from "./Contact.types";
import { useTranslation } from "next-i18next";

export const Contact: React.FC<Props> = ({ email }) => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation("contact");

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const animate = async () => {
      const sr = (await import("scrollreveal")).default;

      if (sr && sr.reveal && revealContainer.current) {
        sr.reveal(revealContainer.current, srConfig());
      }
    };

    animate();
  }, []);

  return (
    <StyledContactSection id="contacts" ref={revealContainer}>
      <h2 className="numbered-heading overline">{t("Contact.Title")}</h2>

      <h2 className="title">{t("Contact.Main")}</h2>

      <p>{t("Contact.Desc")}</p>

      <a className="email-link" href={`mailto:${email}`}>
        {t("Contact.Button")}
      </a>
    </StyledContactSection>
  );
};
