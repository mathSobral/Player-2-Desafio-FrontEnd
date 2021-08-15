import styled from "styled-components";
import { defaultContainer, breakpoints } from "../../constants/sizes";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0px ${defaultContainer.paddingHorizontal}px;
`;
export const Content = styled.div`
  width: ${defaultContainer.Width}px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const FormSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-right: ${defaultContainer.paddingHorizontal}px;
  ${breakpoints.sm} {
    width: 100%;
    padding-right: 0px;
  }
`;

export const FormWrapper = styled.div`
  max-width: 420px;
  margin: auto 0;
  height: 550px;
  ${breakpoints.sm} {
    max-width: none;
  }
`;

export const CopyrightWrapper = styled.div`
  ${breakpoints.sm} {
    display: none;
  }
`;

export const ImageSection = styled.div`
  width: 50%;
  height: 550px;
  margin: auto 0;
  ${breakpoints.sm} {
    display: none;
  }
`;

export const Rectangle = styled.div`
  position: absolute;
  background: ${(props) => props.theme.colors.backgroundGradient};
  height: 100%;
  width: 50%;
  top: 0;
  right: 0;
  border-radius: 64px 0px 0px 0px;
  z-index: -1;
  ${breakpoints.sm} {
    display: none;
  }
`;

export const ActivityIndicatorWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
