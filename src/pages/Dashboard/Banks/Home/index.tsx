import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ThemeContext } from "styled-components";
import CustomTypography from "../../../../components/CustomTypography";
import Header from "../../../../components/Dashboard/Header";
import Navbar from "../../../../components/Navbar";
import ContentContainer from "../../../../components/Dashboard/ContentContainer";
import { ButtonWrapper } from "./styles";

const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <>
      <Header>
        <CustomTypography variant="h2" color={colors.pageTitleText}>
          Bancos
        </CustomTypography>
        <ButtonWrapper>
          <Button>
            <CustomTypography variant="buttonText" color={colors.textTertiary}>
              + Criar Banco
            </CustomTypography>
          </Button>
        </ButtonWrapper>
      </Header>
      <Navbar />
      <ContentContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: 50,
          }}
        >
          <h1>Página Bancos</h1>
        </div>
      </ContentContainer>
    </>
  );
};

export default Home;
