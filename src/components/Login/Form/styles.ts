import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
  margin-bottom: 4px;
  margin-top: 12px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
  & .MuiButton-root {
    width: 100%;
    height: 43px;
    background-color: ${(props) => props.theme.colors.buttonPrimary};
    text-transform: none;
  }
  & .MuiButton-root:hover {
    background-color: ${(props) => props.theme.colors.buttonSecondary};
  }
`;

export const SignUpLinkWrapper = styled.div`
  display: flex;
  & div:first-child {
    margin-right: 3px;
  }
`;
