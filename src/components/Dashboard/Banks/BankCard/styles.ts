import styled from "styled-components";
// import { drawerWidth, defaultContainer } from "../../../constants/sizes";

export const Container = styled.div`
  width: 300px;
  height: 115px;
  background-color: ${(props) => props.theme.colors.background0};
  padding: 20px;
  flex-grow: 1;
  min-width: 20vmax;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.colors.boxShadowPrimary};
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  & .MuiButton-root {
    padding: 0;
    width: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 5px;
  }
  & .MuiButton-label {
    text-transform: none;
  }
`;

export const HeaderActionsWrapper = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`;

export const PeopleCounterWrapper = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 10px;
    margin-top: -2px;
  }
  & path {
    stroke: ${(props) => props.theme.colors.pageTitleText};
  }
`;

export const MoreButtonWrapper = styled.div`
  & .MuiButton-root {
    min-width: 0px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  column-gap: 12px;
`;

export const DispatchIconWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.cardIconBackground};
  width: 40px;
  height: 40px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    transform-origin: center;
    transform: scale(1.3);
  }
  & path {
    stroke: ${(props) => props.theme.colors.primary};
  }
`;

export const BankInfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  & div {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: left !important;
  }
`;
