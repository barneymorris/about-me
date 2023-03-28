import React from "react";
import { StyledLinkWrapper } from "./Email.styled";
import { Props } from "./Email.types";
import { Side } from "../Side/Side.component";

export const Email: React.FC<Props> = ({ isHome, email }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);
