import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ContactAuthorSection: React.FC = () => {
    return (
        <SectionWrapper>            
            <AuthorInfo>
                <Typography variant="h4">Sobre la autora</Typography>
                <Typography variant="body1">
                    Author: <StyledLink to="/contactnos" title='Estela Silva'>Estela Silva</StyledLink>
                </Typography>
                <Typography variant="body1">
                    Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.
                </Typography>
            </AuthorInfo>
        </SectionWrapper>
    );
};

const SectionWrapper = styled(Box)(({ theme }) => ({
    padding: '10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
    marginBottom: '20px',
    boxShadow: '0 0 0 0.5px'
}));

const AuthorInfo = styled(Box)(({ theme }) => ({
    marginTop: '10px',
}));

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    textDecoration: 'none',
    "&:hover": {
    textDecoration: 'underline',
    color: theme.palette.common.hoverLinkColor,
    },
}));

export default ContactAuthorSection;