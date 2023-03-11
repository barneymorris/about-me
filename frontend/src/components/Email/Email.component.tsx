import React from "react";
import { StyledLinkWrapper } from "./Email.styled";
import { Props } from "./Email.types";
import { Side } from "../Side/Side.component";

// TODO Add this to strapi
const email = "barneymorris.us@gmail.com";

export const Email: React.FC<Props> = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);
