import React, { createContext, useState, useEffect, useMemo } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { MuiThemeProvider, useMediaQuery } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

const ThemeContext = createContext({});

interface ThemeProviderProps {
  children: React.ReactNode;
}
/**
 * The ThemeProvider is a wrapper to JssThemeProvider that allows switch themes.
 * */
export function CustomThemeProvider({ children }: ThemeProviderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [selectedTheme, setSelectedTheme] = useState<DefaultTheme>(light);

  /**
   * Load last selected theme or the prefered color scheme.
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem("@rhisa/lastTheme");

    if (savedTheme) {
      setSelectedTheme(savedTheme === "light" ? light : dark);
    } else {
      setSelectedTheme(prefersDarkMode ? dark : light);
    }
  }, [prefersDarkMode]);

  /**
   * Switch the theme mode between light, dark or an auto value based on css prefers-color-scheme.
   */
  function switchTheme(themingMode: string) {
    if (themingMode === "light" || themingMode === "dark") {
      setSelectedTheme(themingMode === "light" ? light : dark);
      localStorage.setItem("@rhisa/lastTheme", themingMode);
    } else {
      setSelectedTheme(prefersDarkMode ? dark : light);
      localStorage.removeItem("@rhisa/lastTheme");
    }
  }

  /**
   * Generate a theme to be used on Material-ui components.
   */
  const muiTheme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: `"Red Hat Display", "Roboto", "Helvetica", "Arial", sans-serif`,
          fontSize: 16,
        },
        palette: {
          background: {
            default: selectedTheme.colors.background0,
          },
          primary: {
            main: selectedTheme.colors.primary,
          },
          secondary: {
            main: selectedTheme.colors.primary,
          },
          text: {
            primary: selectedTheme.colors.textPrimary,
            secondary: selectedTheme.colors.textSecondary,
          },
        },
      }),
    [selectedTheme]
  );

  return (
    <ThemeContext.Provider value={{ switchTheme }}>
      <ThemeProvider theme={selectedTheme}>
        <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default CustomThemeProvider;
