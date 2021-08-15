import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Container } from "./styles";

export interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <style>{`body {background-color: ${colors.background1}}`}</style>
      <Container>{children}</Container>
    </>
  );
};

export default ContentContainer;
