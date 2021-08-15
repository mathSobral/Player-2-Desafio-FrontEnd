import React, { useContext } from "react";
import CustomTypography from "../../CustomTypography";
import { ThemeContext } from "styled-components";
import Form, { FormProps } from "./Form";
import { Container, SignUpLinkWrapper, CustomLink } from "./styles";

const FormFold: React.FC<FormProps> = ({ onSubmit }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Form onSubmit={onSubmit} />
      <SignUpLinkWrapper>
        <CustomTypography color={colors.textQuaternary}>
          Não tem uma conta?
        </CustomTypography>
        <CustomLink href={window.location.href}>
          <CustomTypography variant="buttonText" color={colors.primary}>
            Cadastre-se
          </CustomTypography>
        </CustomLink>
      </SignUpLinkWrapper>
    </Container>
  );
};

export default FormFold;
