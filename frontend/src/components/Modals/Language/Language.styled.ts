import styled from "styled-components";
import Modal from "@mui/material/Modal";

export const StyledModal = styled(Modal)`
  outline: none;
`;

export const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: none;
  max-width: 300px;
  margin: 0 auto;
  margin-top: 30vh;

  > div {
    width: 50%;
  }

  .flag {
    display: block;
    width: 125px;
    height: 70px;
  }
`;
