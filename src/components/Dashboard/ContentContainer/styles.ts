import styled from "styled-components";
import {
  drawerWidth,
  defaultContainer,
  breakpoints,
} from "../../../constants/sizes";

export const Container = styled.div`
  height: 100%;
  background: ${(props) => props.theme.colors.background1};
  padding-left: ${defaultContainer.paddingHorizontal +
  drawerWidth.contracted}px;
  padding-right: ${defaultContainer.paddingHorizontal}px;
  ${breakpoints.sm} {
    padding-left: ${defaultContainer.paddingHorizontal}px;
  }
`;
