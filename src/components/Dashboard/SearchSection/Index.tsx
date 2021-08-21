import React, { useContext, useMemo, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "styled-components";
import CustomTextField from "../../CustomTextField";
import CustomTypography from "../../CustomTypography";
import { RootState } from "../../../redux/rootReducer";
import {
  setBanksFilter,
  clearBanksFilter,
} from "../../../redux/banks/banksActions";
import { Container, TitleWrapper, SearchFieldWrapper } from "./styles";
import { IconButton } from "@material-ui/core";
import { Search } from "../../Icons";

const SearchSection: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const { banks } = useSelector((state: RootState) => state.banks);
  const dispatch = useDispatch();

  useEffect(() => {
    /**
     * Clean up function when umount
     */
    return () => {
      dispatch(clearBanksFilter());
    };
  }, [dispatch]);

  const changeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setBanksFilter({ fullName: event.target.value }));
    },
    [dispatch]
  );

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    [changeHandler]
  );

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
          onChange={debouncedChangeHandler}
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
