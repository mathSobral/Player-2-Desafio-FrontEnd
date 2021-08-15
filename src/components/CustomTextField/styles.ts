import styled from "styled-components";

export interface IErrorWrapperProps {
  error?: boolean;
}

export const Container = styled.div<IErrorWrapperProps>`
  width: 100%;

  & .MuiTextField-root {
    width: 100%;
  }

  & .MuiInputBase-root {
    border: 2px solid ${(props) => props.theme.colors.border};
    border-radius: 4px;
    padding: 10px;
    font-size: 14px;
  }
  & .MuiInputBase-root {
    border: 1px solid
      ${(props) => (props.error ? "red" : props.theme.colors.border)};
  }
  & .MuiInputBase-root:hover,
  .MuiInputBase-root:focus-within {
    border: 1px solid
      ${(props) => (props.error ? "red" : props.theme.colors.primary)};
  }
  & .MuiFormHelperText-root {
    margin-left: 10px;
  }
`;

export const ErrorWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  & svg {
    transform-origin: center;
    transform: scale(1.3);
    margin-top: 1px;
  }
`;
