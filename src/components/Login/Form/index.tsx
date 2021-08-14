import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import CustomTextField from "../../CustomTextField";
import CustomTypography from "../../CustomTypography";
import { ThemeContext } from "styled-components";
import CalendarSvg from "../../Icons/Calendar";
import {
  ButtonWrapper,
  Container,
  LabelWrapper,
  SignUpLinkWrapper,
} from "./styles";

const Form: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <LabelWrapper>
        <CustomTypography variant="functionalLabel">E-mail</CustomTypography>
      </LabelWrapper>
      <CustomTextField placeholder="E-mail" />
      <LabelWrapper>
        <CustomTypography variant="functionalLabel">Senha</CustomTypography>
      </LabelWrapper>
      <CustomTextField placeholder="Senha" endAdornment={<CalendarSvg />} />
      <ButtonWrapper>
        <Button>
          <CustomTypography variant="buttonText" color={colors.textTertiary}>
            Entrar
          </CustomTypography>
        </Button>
      </ButtonWrapper>
      <SignUpLinkWrapper>
        <CustomTypography color={colors.textQuaternary}>
          Não tem uma conta?
        </CustomTypography>
        <CustomTypography variant="buttonText" color={colors.primary}>
          Cadastre-se
        </CustomTypography>
      </SignUpLinkWrapper>
    </Container>
  );
};

export default Form;
