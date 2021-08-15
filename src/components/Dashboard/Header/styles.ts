import styled from "styled-components";
import {
  drawerWidth,
  defaultContainer,
  header,
} from "../../../constants/sizes";

export const Container = styled.div`
  height: ${header.height}px;
  background: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.textTertiary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${defaultContainer.paddingHorizontal +
  drawerWidth.contracted}px;
  padding-right: ${defaultContainer.paddingHorizontal}px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  padding-left: ${defaultContainer.paddingHorizontal +
  drawerWidth.contracted}px;
  padding-right: ${defaultContainer.paddingHorizontal}px;
  & div {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.border};
  }
`;

export const ChildrenWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const AlertWrapper = styled.div`
  min-width: 217px;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
`;

export const NameDropdownWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  & svg {
    margin-left: 11px;
  }
  & div {
    margin-left: 3px;
  }
`;
