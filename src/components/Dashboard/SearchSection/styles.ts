import styled from "styled-components";
// import { drawerWidth, defaultContainer } from "../../../constants/sizes";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  & div:last-child {
    margin-left: 12px;
    margin-top: 5px;
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
`;
