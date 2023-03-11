import React from "react";
import { Props } from "./Icon.types";
import { External } from "./External/External.component";

export const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    default:
      return <External />;
  }
};
