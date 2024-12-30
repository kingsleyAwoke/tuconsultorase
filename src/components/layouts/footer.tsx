import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const footerItems = [
  'Diseño de paginas web',
  'Desarrollo Plantillas Joomla',
  'Acelerar Joomla',
  'Seguridad del Sitio',
  'Tiendas online',
  'Servicios Seo',
  'Limpieza sitio hackeado',
  'Formación Joomla',
]

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {footerItems.map((item, index) => (
          <FooterItem key={index}>
            <Typography variant="h2">{item}</Typography>
          </FooterItem>
        ))}

        <FooterItemLink to="/contactenos">
          <Typography variant="h2">Contactenos</Typography>
        </FooterItemLink>
      </FooterContainer>
    </FooterWrapper>
  )
}

const FooterWrapper = styled(Box)(({ theme }) => ({
  padding: '50px 10px 10px 10px',

  [theme.breakpoints.down('md')]: {
    padding: '30px 5px 5px 5px',
  }
}))

const FooterContainer = styled(Box)(({ theme }) => ({
  padding: '10px 20px',
  rowGap: '8px',
  columnGap: '30px',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.common.footerBg,
  userSelect: 'none',

  [theme.breakpoints.down('md')]: {
    padding: '10px 10px',
    flexDirection: 'column',
  }
}))

const FooterItem = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
}))

const FooterItemLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',

  "&:hover": {
    textDecoration: 'underline',
    color: theme.palette.common.hoverLinkColor,

    '& h2': {
      color: theme.palette.common.hoverLinkColor,
    }
  },

  '& h2': {
    color: theme.palette.common.activeLinkColor,
    textShadow: `${theme.palette.common.black} 1px 1px`,
  }
}))

export { Footer }