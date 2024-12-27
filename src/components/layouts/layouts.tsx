import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import './layouts.scss'
import { Header } from "./header/header";
import { Footer } from "./footer";

const Layouts = ({ children }: ComPropsObject) => {
  return (
    <LayoutsWrapper>
      <Header />

      <BodyContents>
        {children}
      </BodyContents>

      <Footer />
    </LayoutsWrapper>
  )
}

const LayoutsWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '50px 15px 0px 15px',

  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.common.white,

  minHeight: '100vh',
  overflowX: 'hidden',
  overflowY: 'auto',

  [theme.breakpoints.down('md')]: {
    padding: '50px 8px 0px 8px',
  }
}))

const BodyContents = styled(Box)(({ theme }) => ({
  flex: 1,
  gap: '10px',
  display: 'flex',
  flexDirection: 'column',
}))

export { Layouts }