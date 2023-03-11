import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyledCredit, StyledFooter, StyledSocialLinks } from "./Footer.styled";
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

// TODO Add this to strapi or something else
const githubInfo = {
  stars: 999,
  forks: 1337,
};

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

      <StyledCredit tabIndex={-1}>
        <a href="https://github.com/bchiang7/v4">
          <div>Designed &amp; Built by Brittany Chiang</div>

          {githubInfo.stars && githubInfo.forks && (
            <div className="github-stats">
              <span>
                <Icon name="Star" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          )}
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
