import React from "react";
import { Props } from "./Icon.types";
import { External } from "./External/External.component";
import { IconHabr } from "./Habr/Habr.component";
import { IconTelegram } from "./Telegram/Telegram.component";
import { IconGitHub } from "./Github/Github.component";

export const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case "HabrCareer": {
      return <IconHabr />;
    }

    case "Telegram": {
      return <IconTelegram />;
    }

    case "Github": {
      return <IconGitHub />;
    }

    default:
      return <External />;
  }
};
