import React, { useContext } from "react";
import Form from "../../components/Login/Form";
import Logo from "../../components/Login/Logo";
import LateralFold from "../../components/Login/LateralFold";
import CustomTypography from "../../components/CustomTypography";
import { ThemeContext } from "styled-components";
import {
  Container,
  Rectangle,
  Content,
  FormSection,
  ImageSection,
  FormWrapper,
  CopyrightWrapper,
} from "./styles";

const Login: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <>
      <Rectangle />
      <Container>
        <Content>
          <FormSection>
            <FormWrapper>
              <Logo />
              <Form />
            </FormWrapper>
            <CopyrightWrapper>
              <CustomTypography color={colors.copyrightText}>
                Copyright © 2010-2021 - Informem-se Company S.L. All rights
                reserved.
              </CustomTypography>
            </CopyrightWrapper>
          </FormSection>
          <ImageSection>
            <LateralFold />
          </ImageSection>
        </Content>
      </Container>
    </>
  );
};

export default Login;
