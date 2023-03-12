import { useLanguage } from "@/hooks/useLanguage";
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
            setLanguage("ru");
            onClose();
          }}
        >
          <img className="flag" src="/images/russia.jpg" alt="russia" />
        </div>

        <div
          onClick={() => {
            setLanguage("en");
            onClose();
          }}
        >
          <img className="flag" src="/images/usa.png" alt="usa" />
        </div>
      </StyledList>
    </StyledModal>
  );
};
