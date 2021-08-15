import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { RootState } from "../../../../redux/rootReducer";
import CustomTextField from "../../../CustomTextField";
import CustomTypography from "../../../CustomTypography";
import { ThemeContext } from "styled-components";
import CalendarSvg from "../../../Icons/Calendar";
import { ButtonWrapper, LabelWrapper, StyledForm } from "./styles";
import { FormProps } from "../";

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

const FormFold: React.FC<FormProps> = ({ onSubmit, initialValues }) => {
  const { colors } = useContext(ThemeContext);
  const { errorMessage } = useSelector((state: RootState) => state.auth);
  const formik = useFormik({
    initialValues: !!initialValues
      ? initialValues
      : {
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
      <CustomTypography variant="body" color={colors.alert} weight="600">
        {errorMessage}
      </CustomTypography>
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
