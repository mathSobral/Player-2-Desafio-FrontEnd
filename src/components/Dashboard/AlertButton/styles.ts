import styled from "styled-components";
// import { drawerWidth, defaultContainer } from "../../../constants/sizes";

export const Container = styled.div`
  height: 100%;
  max-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const AlertPin = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #117df9;
  position: absolute;
  margin-left: 10px;
  margin-top: -15px;
`;
