import styled from "styled-components";
// import { header } from "../../../constants/sizes";

export const ButtonWrapper = styled.div`
  height: 43px;
  width: 135px;
  & .MuiButton-root {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.buttonPrimary};
    &:hover {
      background-color: ${(props) => props.theme.colors.buttonSecondary};
    }
  }
  & .MuiButton-label {
    text-transform: none;
  }
`;

export const BanksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
