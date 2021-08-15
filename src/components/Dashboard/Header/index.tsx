import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import CustomTypography from "../../CustomTypography";
import { ArrowDown } from "../../Icons";
import AlertButton from "../AlertButton";
import {
  Container,
  ChildrenWrapper,
  AlertWrapper,
  NameDropdownWrapper,
  Divider,
} from "./styles";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <>
      <Container>
        <ChildrenWrapper>{children}</ChildrenWrapper>
        <AlertWrapper>
          <AlertButton hasAlert />
          <NameDropdownWrapper>
            <CustomTypography variant="body" color={colors.textQuaternary}>
              Olá,
            </CustomTypography>
            <CustomTypography
              variant="body"
              weight="bold"
              color={colors.primary}
            >
              Beleza Rara
            </CustomTypography>
            <ArrowDown />
          </NameDropdownWrapper>
        </AlertWrapper>
      </Container>
      <Divider>
        <div />
      </Divider>
    </>
  );
};

export default Header;
