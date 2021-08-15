import React from "react";
import {
  TextField,
  TextFieldProps,
  InputProps,
  FilledInputProps,
  OutlinedInputProps,
} from "@material-ui/core";
import CloseSvg from "../Icons/Close";
import { Container, ErrorWrapper } from "./styles";

interface CustomTextFieldProps {
  children?: React.ReactNode;
  customInputProps?:
    | Partial<InputProps>
    | Partial<FilledInputProps>
    | Partial<OutlinedInputProps>
    | undefined;
  errorText?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps & TextFieldProps> = ({
  children,
  customInputProps,
  errorText,
  ...props
}) => {
  return (
    <Container>
      <TextField
        InputProps={{ ...customInputProps, disableUnderline: true }}
        {...props}
        helperText={
          errorText && (
            <ErrorWrapper>
              <CloseSvg />
              <span> {errorText}</span>
            </ErrorWrapper>
          )
        }
      >
        {children}
      </TextField>
    </Container>
  );
};

export default CustomTextField;
