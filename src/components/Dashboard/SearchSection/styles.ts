import styled from "styled-components";
import { breakpoints } from "../../../constants/sizes";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${breakpoints.sm} {
    flex-direction: column;
    height: auto;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  & div:last-child {
    margin-left: 12px;
    margin-top: 5px;
  }
  ${breakpoints.sm} {
    width: 100%;
    justify-content: flex-start;
    padding-top: 24px;
    padding-bottom: 12px;
  }
`;

export const SearchFieldWrapper = styled.div`
  width: 280px;
  & .MuiInputBase-root {
    background-color: ${(props) => props.theme.colors.background0};
  }
  & .MuiIconButton-root {
    padding: 0;
  }
  ${breakpoints.sm} {
    width: 100%;
    padding-bottom: 12px;
  }
`;
