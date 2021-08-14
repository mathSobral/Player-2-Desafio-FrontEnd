import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import loginImage from "../../../assets/images/loginImage.png";
import CustomTypography from "../../CustomTypography";
import { Container, Content, Image } from "./styles";

const LateralFold: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <Content>
        <Image alt="Logo" src={loginImage} />
        <div>
          <CustomTypography variant="h2" color={colors.textTertiary}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </CustomTypography>
        </div>
        <div>
          <CustomTypography variant="body" color={colors.textTertiary}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sapien mi, commodo ut pellentesque non, fermentum at risus. Sed eu
            augue sit amet leo scelerisque cursus vitae ac dolor
          </CustomTypography>
        </div>
      </Content>
    </Container>
  );
};

export default LateralFold;
