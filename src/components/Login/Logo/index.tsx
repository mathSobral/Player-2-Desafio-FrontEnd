import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import logoImg from "../../../assets/images/logo.png";
import CustomTypography from "../../CustomTypography";
import { Container, LogoImg } from "./styles";

const Logo: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <LogoImg alt="Logo" src={logoImg} />
      <CustomTypography variant="h2" color={colors.textPrimary}>
        Dispare mensagens quando e para quem você quiser.
      </CustomTypography>
    </Container>
  );
};

export default Logo;
