import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { Bank } from "../../../../redux/banks/banksTypes";
import CustomTypography from "../../../CustomTypography";
import {
  ArrowDownFill,
  ArrowRight,
  Close,
  People,
  Speaker,
} from "../../../Icons";
import {
  Container,
  HeaderWrapper,
  ContentWrapper,
  DispatchIconWrapper,
  BankInfoWrapper,
  HeaderActionsWrapper,
  PeopleCounterWrapper,
  CustomTooltipWrapper,
  TooltipProps,
} from "./styles";
import { ThemeContext } from "styled-components";
import MoreButton from "../../MoreButton";
import { deleteBank } from "../../../../redux/banks/banksActions";

export interface BankCardProps extends Bank {}

const BankCard: React.FC<BankCardProps> = ({ code, fullName, ispb }) => {
  const { colors } = useContext(ThemeContext);
  const [active, setActive] = useState<boolean>(false);
  const [tootlipProps, setTooptipProps] = useState<TooltipProps>({
    applyRight: false,
  });
  const dispatch = useDispatch();

  const handleMoreClick = (event: React.MouseEvent<HTMLElement>) => {
    const { x } = event.currentTarget.getBoundingClientRect();
    const distance = window.innerWidth - x;
    if (distance <= 73) setTooptipProps({ applyRight: true, right: 33 });
    else setTooptipProps({ applyRight: false });
  };

  const handleMoreButtonOpen = () => {
    setActive(true);
  };

  const handleMoreButtonClose = () => {
    setActive(false);
  };

  const handleDeleteBank = () => {
    dispatch(deleteBank(ispb));
  };

  return (
    <Container active={active}>
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
          <MoreButton
            onClick={handleMoreClick}
            onOpen={handleMoreButtonOpen}
            onClose={handleMoreButtonClose}
          >
            <CustomTooltipWrapper {...tootlipProps} onClick={handleDeleteBank}>
              <Close className="close-icon" />
              <CustomTypography variant="body" color={colors.textQuaternary}>
                Deletar Banco
              </CustomTypography>
              <ArrowDownFill className="arrow" />
            </CustomTooltipWrapper>
          </MoreButton>
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
