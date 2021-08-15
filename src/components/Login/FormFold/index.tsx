import React, { useContext } from "react";
import CustomTypography from "../../CustomTypography";
import { ThemeContext } from "styled-components";
import Form from "./Form";
import { Container, SignUpLinkWrapper, CustomLink } from "./styles";

export interface FormValues {
  email: string;
  password: string;
}
export interface FormProps {
  onSubmit(values: FormValues): void;
  initialValues?: FormValues;
}

const FormFold: React.FC<FormProps> = ({ onSubmit, initialValues }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Form onSubmit={onSubmit} initialValues={initialValues} />
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
