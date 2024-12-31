import React from 'react';
import { Box, Typography } from '@mui/material';

interface DemoItemProps {
    title: string;
    image: string;
    description: string[];
    btn: React.ReactNode;
}

const DemoItem: React.FC<DemoItemProps> = ({ title, image, description, btn }) => {
    return (
        <Box
            sx={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.2s',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            }}
        >
            <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
            <Typography variant="h6" sx={{ margin: '16px 0' }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '16px' }}>
                {description.join(' ')}
            </Typography>
            {btn}
        </Box>
    );
};

export { DemoItem };