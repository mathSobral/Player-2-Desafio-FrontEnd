import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpLinkWrapper = styled.div`
  display: flex;
  & div:first-child {
    margin-right: 3px;
  }
`;

export const CustomLink = styled.a`
  text-decoration: none;
`;
