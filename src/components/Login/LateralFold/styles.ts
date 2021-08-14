import styled from "styled-components";
import { breakpoints } from "../../../constants/sizes";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  ${breakpoints.md} {
    width: 90%;
  }
`;

export const Image = styled.img`
  max-width: 420px;
  margin-bottom: 45px;
  ${breakpoints.md} {
    width: 90%;
  }
`;
