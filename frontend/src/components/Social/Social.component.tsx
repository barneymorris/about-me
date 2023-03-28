import React from "react";
import { StyledSocialList } from "./Social.styled";
import { Side } from "../Side/Side.component";
import { Icon } from "../Icon/Icon.component";
import { Props } from "./Social.types";

export const Social: React.FC<Props> = ({ isHome, socials }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {socials &&
        socials.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);
