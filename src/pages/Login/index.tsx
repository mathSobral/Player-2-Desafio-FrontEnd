import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormFold, { FormValues } from "../../components/Login/FormFold";
import Logo from "../../components/Login/Logo";
import DescriptionFold from "../../components/Login/DescriptionFold";
import CustomTypography from "../../components/CustomTypography";
import { ThemeContext } from "styled-components";
import { RootState } from "../../redux/rootReducer";
import { signIn } from "../../redux/auth/authActions";
import {
  Container,
  Rectangle,
  Content,
  FormSection,
  ImageSection,
  FormWrapper,
  CopyrightWrapper,
  ActivityIndicatorWrapper,
} from "./styles";
import { CircularProgress } from "@material-ui/core";

const Login: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleSignIn = ({ email, password }: FormValues) => {
    dispatch(signIn({ email, password }));
  };

  return (
    <>
      <Rectangle />
      <Container>
        <Content>
          <FormSection>
            <FormWrapper>
              <Logo />
              {loading ? (
                <ActivityIndicatorWrapper>
                  <CircularProgress />
                </ActivityIndicatorWrapper>
              ) : (
                <FormFold onSubmit={handleSignIn} />
              )}
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
