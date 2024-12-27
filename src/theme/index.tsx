import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sx: true
    sm: true
    md: true
    lg: true
    xl: true
    xl2: true
  }

  interface CommonColors {
    mainBg: string

    headerBg: string
    headerBorderBg: string
    blogSectionBg: string

    firstBorderColor: string

    menuActiveBg: string
    menuActiveColor: string

    footerBg: string

    activeLinkColor: string
    hoverLinkColor: string

    inputBorderColor: string
    activeBorderColor: string

    firstButtonBg: string
    secondButtonBg: string

    secondButtonBorder: string

    secondTypographyColor: string
    thirdTypographyColor: string
    fourthTypographyColor: string
    fifthTypographyColor: string
  }

  // interface Palette {
  //   mainBg: PaletteColor;
  // }

  // interface PaletteOptions {
  //   mainBg: PaletteColorOptions;
  // }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    // mainBg: true;
  }
}

const MuiThemeProvider = ({ children }: any) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sx: 450,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xl2: 1536,
      }
    },
    palette: {
      mode: "dark",
      common: {
        black: '#000',
        white: '#fff',

        mainBg: '#fff',

        headerBg: '#f8f8f8',
        headerBorderBg: '#e7e7e7',
        blogSectionBg: '#185359',

        firstBorderColor: '#00000026',

        menuActiveBg: '#e7e7e7',
        menuActiveColor: '#555',

        footerBg: '#185359',

        activeLinkColor: '#428bca',
        hoverLinkColor: '#2a6496',

        inputBorderColor: '#333',
        activeBorderColor: '#227ab4',

        firstButtonBg: '#efefef',
        secondButtonBg: '#428bca',

        secondButtonBorder: '#357ebd',

        secondTypographyColor: '#0000ff',
        thirdTypographyColor: '#3266cc',
        fourthTypographyColor: '#4cb2cf',
        fifthTypographyColor: '#227ab4',
      }

      // mainBg: { main: '#141416', light: '#24262f', contrastText: "#fff" },
      // primary: { main: '#fff', light: '#f55b00', dark: '#1e0500', contrastText: 'rgba(0,0,0,0.87)' },
    },
    typography: {
      allVariants: { color: "#333" },
      htmlFontSize: 14,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 800,
      fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif'
    }
  })

  theme.typography.h1 = {
    ...theme.typography.h1,

    fontSize: 63,
    fontWeight: 500,
    color: theme.palette.common.white,

    [theme.breakpoints.down('lg')]: {
      fontSize: 45,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 36,
    },
  }

  theme.typography.h2 = {
    ...theme.typography.h2,

    fontSize: 24,
    fontWeight: 500,
    color: theme.palette.common.white,

    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
  }

  theme.typography.h3 = {
    ...theme.typography.h3,

    fontSize: 21,
    fontWeight: 500,
    color: theme.palette.common.white,

    [theme.breakpoints.down('md')]: {
      fontSize: 19,
    },
  }

  theme.typography.h4 = {
    ...theme.typography.h4,

    fontSize: 16,
    fontWeight: 500,

    [theme.breakpoints.down('md')]: {
      fontSize: 13,
    },
  }

  theme.typography.h5 = {
    ...theme.typography.h5,

    fontSize: 14,
    fontWeight: 400,

    [theme.breakpoints.down('md')]: {
      fontSize: 12,
    },
  }

  theme.typography.body1 = {
    ...theme.typography.body1,

    fontSize: 12,
    fontWeight: 400,

    [theme.breakpoints.down('md')]: {
      fontSize: 11,
    },
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export { MuiThemeProvider };