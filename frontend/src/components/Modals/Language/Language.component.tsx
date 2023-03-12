import { Icon } from "@/components/Icon/Icon.component";
import { useLanguage } from "@/hooks/useGetLanguage";
import React from "react";
import { StyledList, StyledModal } from "./Language.styled";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const LanguageModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { setLanguage } = useLanguage();

  return (
    <StyledModal open={isOpen} onClose={onClose}>
      <StyledList>
        <div
          onClick={() => {
            setLanguage("ru-RU");
            onClose();
          }}
        >
          <img className="flag" src="/images/russia.jpg" alt="russia" />
        </div>

        <div
          onClick={() => {
            setLanguage("en-US");
            onClose();
          }}
        >
          <img className="flag" src="/images/usa.png" alt="usa" />
        </div>
      </StyledList>
    </StyledModal>
  );
};
