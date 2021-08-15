import styled from "styled-components";
import { drawerWidth } from "../../constants/sizes";

export interface ContainerProps {
  open?: boolean;
}

const transitionDuration = "225ms";

export const Container = styled.div<ContainerProps>`
  position: fixed;
  height: 100%;
  top: 0px;
  background: ${(props) => props.theme.colors.backgroundGradient};
  width: ${(props) =>
    props.open ? drawerWidth.expanded : drawerWidth.contracted}px;
  transition: width ${transitionDuration};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .MuiDrawer-root,
  .MuiDrawer-paper {
    width: ${(props) => drawerWidth}px;
    background: transparent;
    overflow: hidden;
    color: ${(props) => props.theme.colors.textTertiary};
    font-size: 14px;
  }
  & .MuiDrawer-paperAnchorDockedLeft {
    border: none;
  }
  & .MuiList-root {
    width: ${(props) => (props.open ? "100%" : `${drawerWidth.contracted}px`)};
    transition: width ${transitionDuration};
    height: 100%;
    & svg {
      transform-origin: center;
      transform: scale(1.2);
    }
    & .sign-out {
      position: absolute;
      bottom: 60px;
      width: 100%;
    }
    & .active {
      border-left: 3px solid white;
      padding-left: 13px;
    }
  }
  & .MuiDivider-root {
    margin-bottom: 28px;
    background-color: ${(props) => props.theme.colors.divider};
  }
`;

export const LogoWrapper = styled.div<ContainerProps>`
  display: flex;
  padding-top: 24px;
  width: ${(props) =>
    props.open ? drawerWidth.expanded : drawerWidth.contracted}px;
  height: 124px;
  & .MuiIconButton-edgeStart {
    margin-left: 0px;
  }
  & svg {
    transform: ${(props) => (props.open ? "scale(1.3)" : "scale(1)")};
    width: ${(props) => (props.open ? 32 : 23)}px;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  width: 100%;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  font-family: ${`"Red Hat Display","Roboto","Helvetica","Arial",sans-serif`};
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textTertiary};
  & div:last-child {
    margin-left: 15px;
  }
`;
