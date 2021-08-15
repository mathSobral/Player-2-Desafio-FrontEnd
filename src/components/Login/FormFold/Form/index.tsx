import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import CustomTextField from "../../../CustomTextField";
import CustomTypography from "../../../CustomTypography";
import { ThemeContext } from "styled-components";
import CalendarSvg from "../../../Icons/Calendar";
import { useFormik } from "formik";
import * as yup from "yup";
import { ButtonWrapper, LabelWrapper, StyledForm } from "./styles";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve possuir no mínimo 8 caracteres de comprimento")
    .required("A senha é obrigatória"),
});

export interface FormValues {
  email: string;
  password: string;
}
export interface FormProps {
  onSubmit(values: FormValues): void;
}

const FormFold: React.FC<FormProps> = ({ onSubmit }) => {
  const { colors } = useContext(ThemeContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <LabelWrapper>
        <CustomTypography variant="functionalLabel">E-mail</CustomTypography>
      </LabelWrapper>
      <CustomTextField
        id="email"
        name="email"
        placeholder="E-mail"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        errorText={(formik.touched.email && formik.errors.email) as string}
      />
      <LabelWrapper>
        <CustomTypography variant="functionalLabel">Senha</CustomTypography>
      </LabelWrapper>
      <CustomTextField
        type="password"
        id="password"
        name="password"
        placeholder="Senha"
        customInputProps={{ endAdornment: <CalendarSvg /> }}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        errorText={
          (formik.touched.password && formik.errors.password) as string
        }
      />
      <ButtonWrapper>
        <Button type="submit">
          <CustomTypography variant="buttonText" color={colors.textTertiary}>
            Entrar
          </CustomTypography>
        </Button>
      </ButtonWrapper>
    </StyledForm>
  );
};

export default FormFold;
