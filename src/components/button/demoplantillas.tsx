import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface BtnDemoplantillasProps {
    icon: ReactNode;
}

const BtnDemoplantillas = ({ icon }: BtnDemoplantillasProps) => {
    return (
        <Button variant="contained" color="primary" startIcon={icon} />
    );
};

export { BtnDemoplantillas };