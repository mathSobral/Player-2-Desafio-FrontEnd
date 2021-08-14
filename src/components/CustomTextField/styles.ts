import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 10px;

  & .MuiInputBase-root {
    width: 100%;
    border: 2px solid ${(props) => props.theme.colors.border};
    border-radius: 4px;
    padding: 10px;
    font-size: 14px;
  }
  & .MuiInputBase-root {
    border: 1px solid ${(props) => props.theme.colors.border};
  }
  & .MuiInputBase-root:hover,
  .MuiInputBase-root:focus-within {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
