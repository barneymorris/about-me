import React from "react";
import { StyledSocialList } from "./Social.styled";
import { Side } from "../Side/Side.component";
import { Icon } from "../Icon/Icon.component";
import { Props } from "./Social.types";

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

export const Social: React.FC<Props> = ({ isHome }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);
