import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Bank } from "../../../../redux/banks/banksTypes";
import CustomTypography from "../../../CustomTypography";
import { ArrowRight, More, People, Speaker } from "../../../Icons";
import {
  Container,
  HeaderWrapper,
  ContentWrapper,
  DispatchIconWrapper,
  BankInfoWrapper,
  HeaderActionsWrapper,
  PeopleCounterWrapper,
  MoreButtonWrapper,
} from "./styles";
import { ThemeContext } from "styled-components";

export interface BankCardProps extends Bank {}

const BankCard: React.FC<BankCardProps> = ({ code, fullName, ispb }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <HeaderWrapper>
        <Button>
          <CustomTypography
            variant="functionalLabel"
            color={colors.cardTitleText}
          >
            Disparando agora...
          </CustomTypography>

          <ArrowRight />
        </Button>
        <HeaderActionsWrapper>
          <PeopleCounterWrapper>
            <People />
            <CustomTypography variant="h4" color={colors.pageTitleText}>
              23
            </CustomTypography>
          </PeopleCounterWrapper>
          <MoreButtonWrapper>
            <Button>
              <More />
            </Button>
          </MoreButtonWrapper>
        </HeaderActionsWrapper>
      </HeaderWrapper>
      <ContentWrapper>
        <DispatchIconWrapper>
          <Speaker />
        </DispatchIconWrapper>
        <BankInfoWrapper>
          <CustomTypography variant="h4">{`${fullName} - ${code}`}</CustomTypography>
          <CustomTypography variant="h4">ISPB: {ispb}</CustomTypography>
        </BankInfoWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default BankCard;
