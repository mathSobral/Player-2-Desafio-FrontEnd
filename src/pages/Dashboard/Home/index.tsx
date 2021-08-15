import React, { useContext } from "react";
import CustomTypography from "../../../components/CustomTypography";
import Header from "../../../components/Dashboard/Header";
import Navbar from "../../../components/Navbar";
import { ThemeContext } from "styled-components";
import ContentContainer from "../../../components/Dashboard/ContentContainer";

const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <>
      <Header>
        <CustomTypography variant="h2" color={colors.pageTitleText}>
          Home
        </CustomTypography>
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
          <h1>Ir pra bancos</h1>
        </div>
      </ContentContainer>
    </>
  );
};

export default Home;
