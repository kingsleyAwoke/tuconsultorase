import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface BtnDemoplantillasProps {
    icon: ReactNode;
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#2a6496',
        },
    },
});

const BtnDemoplantillas = ({ icon }: BtnDemoplantillasProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" startIcon={icon}>
                Leer más
            </Button>
        </ThemeProvider>
    );
};

export { BtnDemoplantillas };