import React from "react";
import { InputBase, InputBaseProps } from "@material-ui/core";
import { Container } from "./styles";

interface CustomTextFieldProps {
  children?: React.ReactNode;
}

const CustomTextField: React.FC<CustomTextFieldProps & InputBaseProps> = ({
  children,
  ...props
}) => {
  return (
    <Container>
      <InputBase {...props}>{children}</InputBase>
    </Container>
  );
};

export default CustomTextField;
