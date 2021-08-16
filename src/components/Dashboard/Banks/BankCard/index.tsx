import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import { Bank } from "../../../../redux/banks/banksTypes";
import CustomTypography from "../../../CustomTypography";
import {
  ArrowDownFill,
  ArrowRight,
  Close,
  More,
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
  MoreButtonWrapper,
  CustomTooltipWrapper,
  TooltipProps,
} from "./styles";
import { ThemeContext } from "styled-components";

export interface BankCardProps extends Bank {}

const BankCard: React.FC<BankCardProps> = ({ code, fullName, ispb }) => {
  const { colors } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLElement) | null>(
    null
  );
  const [tootlipProps, setTooptipProps] = useState<TooltipProps>({
    applyRight: false,
  });

  const handleMoreClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    const { x } = event.currentTarget.getBoundingClientRect();
    const distance = window.innerWidth - x;
    if (distance <= 73) setTooptipProps({ applyRight: true, right: 33 });
    else setTooptipProps({ applyRight: false });
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  return (
    <Container active={Boolean(anchorEl)}>
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
          <ClickAwayListener
            onClickAway={handleClickAway}
            mouseEvent="onMouseUp"
          >
            <MoreButtonWrapper>
              <Button onClick={handleMoreClick}>
                <More />
              </Button>
              <Popper
                id="popper"
                placement="top"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
              >
                <CustomTooltipWrapper {...tootlipProps}>
                  <Close className="close-icon" />
                  <CustomTypography
                    variant="body"
                    color={colors.textQuaternary}
                  >
                    Deletar Banco
                  </CustomTypography>
                  <ArrowDownFill className="arrow" />
                </CustomTooltipWrapper>
              </Popper>
            </MoreButtonWrapper>
          </ClickAwayListener>
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
