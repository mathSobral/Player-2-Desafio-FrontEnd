import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React, { HTMLAttributes } from "react";
import { H2, H3, H4, Body, FunctionalLabel, ButtonText } from "./styles";

export type RuleNames =
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "functionalLabel"
  | "buttonText";

export interface ICustomButtonProps {
  variant?: RuleNames;
  weight?: string;
  color?: string;
  children?: React.ReactNode;
}

const CustomTypography: React.FC<
  ICustomButtonProps & HTMLAttributes<HTMLDivElement>
> = ({ variant, weight, color, children, ...props }) => {
  const style = {
    fontWeight: weight ? weight : undefined,
    color: color ? color : undefined,
  } as CSSProperties;

  switch (variant) {
    case "h2":
      return <H2 style={style}>{children}</H2>;
    case "h3":
      return <H3 style={style}>{children}</H3>;
    case "h4":
      return <H4 style={style}>{children}</H4>;
    case "body":
      return <Body style={style}> {children}</Body>;
    case "functionalLabel":
      return <FunctionalLabel style={style}>{children}</FunctionalLabel>;
    case "buttonText":
      return <ButtonText style={style}>{children}</ButtonText>;
    default:
      return <div style={style}>{children}</div>;
  }
};

export default CustomTypography;
