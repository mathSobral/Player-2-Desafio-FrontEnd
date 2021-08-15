import React, { useContext } from "react";
import FormFold from "../../components/Login/FormFold";
import Logo from "../../components/Login/Logo";
import DescriptionFold from "../../components/Login/DescriptionFold";
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
              <FormFold
                onSubmit={(values) => console.log(JSON.stringify(values))}
              />
            </FormWrapper>
            <CopyrightWrapper>
              <CustomTypography color={colors.copyrightText}>
                Copyright © 2010-2021 - Informem-se Company S.L. All rights
                reserved.
              </CustomTypography>
            </CopyrightWrapper>
          </FormSection>
          <ImageSection>
            <DescriptionFold />
          </ImageSection>
        </Content>
      </Container>
    </>
  );
};

export default Login;
