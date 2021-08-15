import React from "react";
import { Bell } from "../../Icons";
import { AlertPin, Container, StyledButton } from "./styles";

export interface AlertButtonProps {
  hasAlert?: boolean;
  onClick?: () => void;
}

const AlertButton: React.FC<AlertButtonProps> = ({ hasAlert, onClick }) => {
  return (
    <Container>
      <StyledButton onClick={onClick}>
        <Bell />
      </StyledButton>
      {hasAlert && <AlertPin />}
    </Container>
  );
};

export default AlertButton;
