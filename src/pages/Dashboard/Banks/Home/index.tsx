import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { ThemeContext } from "styled-components";
import CustomTypography from "../../../../components/CustomTypography";
import Header from "../../../../components/Dashboard/Header";
import Navbar from "../../../../components/Navbar";
import ContentContainer from "../../../../components/Dashboard/ContentContainer";
import { RootState } from "../../../../redux/rootReducer";
import { fetchBanks } from "../../../../redux/banks/banksActions";
import BankCard from "../../../../components/Dashboard/Banks/BankCard";
import { ButtonWrapper, BanksWrapper } from "./styles";
import SearchSection from "../../../../components/Dashboard/SearchSection/Index";

const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const { banks } = useSelector((state: RootState) => state.banks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBanks());
  }, [dispatch]);

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
        <SearchSection />
        <BanksWrapper>
          {banks?.map((bank) => (
            <BankCard key={bank.fullName} {...bank} />
          ))}
        </BanksWrapper>
      </ContentContainer>
    </>
  );
};

export default Home;
