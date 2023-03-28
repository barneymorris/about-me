import React from "react";
import { Props } from "./Icon.types";
import { External } from "./External/External.component";
import { IconHabr } from "./Habr/Habr.component";
import { IconTelegram } from "./Telegram/Telegram.component";
import { IconGitHub } from "./Github/Github.component";
import { Folder } from "./Folder/Folder.component";

export const Icon: React.FC<Props> = ({ name, onClick }) => {
  switch (name) {
    case "Habr": {
      return (
        <div onClick={onClick}>
          <IconHabr />
        </div>
      );
    }

    case "Telegram": {
      return (
        <div onClick={onClick}>
          <IconTelegram />
        </div>
      );
    }

    case "Github": {
      return (
        <div onClick={onClick}>
          <IconGitHub />
        </div>
      );
    }

    case "Folder": {
      return (
        <div onClick={onClick}>
          <Folder />
        </div>
      );
    }

    default:
      return (
        <div onClick={onClick}>
          <External />
        </div>
      );
  }
};
