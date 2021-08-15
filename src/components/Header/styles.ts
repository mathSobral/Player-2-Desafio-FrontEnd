import styled from "styled-components";
import { drawerWidth, defaultContainer } from "../../constants/sizes";

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${defaultContainer.paddingHorizontal + drawerWidth.contracted}px;
`;
