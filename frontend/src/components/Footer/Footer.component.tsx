import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyledFooter, StyledSocialLinks } from "./Footer.styled";
import { Icon } from "../Icon/Icon.component";

// TODO Add this to Strapi
const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/betelgeusexru",
  },
  {
    name: "Telegram",
    url: "https://t.me/betelgeusexru",
  },
  {
    name: "Habr",
    url: "https://career.habr.com/betelgeusexru",
  },
];

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>
    </StyledFooter>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
