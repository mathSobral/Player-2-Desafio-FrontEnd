import React, { useContext } from "react";
import { useSelector /*, useDispatch */ } from "react-redux";
import { ThemeContext } from "styled-components";
import CustomTextField from "../../CustomTextField";
import CustomTypography from "../../CustomTypography";
import { RootState } from "../../../redux/rootReducer";
import { Container, TitleWrapper, SearchFieldWrapper } from "./styles";
import { IconButton } from "@material-ui/core";
import { Search } from "../../Icons";

const SearchSection: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const { banks } = useSelector((state: RootState) => state.banks);
  return (
    <Container>
      <TitleWrapper>
        <CustomTypography variant="h3" weight="bold">
          Bancos
        </CustomTypography>
        {banks && banks.length && (
          <CustomTypography
            variant="h4"
            color={colors.pageTitleText}
            weight="500"
          >
            {` ${banks.length} bancos`}
          </CustomTypography>
        )}
      </TitleWrapper>
      <SearchFieldWrapper>
        <CustomTextField
          className="search-text-field"
          placeholder="Digite o nome do banco"
          customInputProps={{
            endAdornment: (
              <IconButton>
                <Search />
              </IconButton>
            ),
          }}
        />
      </SearchFieldWrapper>
    </Container>
  );
};

export default SearchSection;
