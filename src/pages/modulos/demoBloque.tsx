import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Button, Box } from '@mui/material';

import { Extra } from "../components/extra";
import { Layouts } from "../../components/layouts/layouts";
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles";
import ContactAuthorSection from "../components/ContactAuthorSection";
import blogImage from '../../assets/image/blog/blog-6.png';

interface DemoModuloData {
    title: string;
    image: string;
    description: string[];
}

const demoModuloData: DemoModuloData[] = [
    {
        title: 'Demo Modulo Bloque Boostrap',
        image: blogImage,
        description: [
            'Coloque un bloque Bootstrap con contenido personalizado en cualquier posición de modulo. Imagen en miniatura (thumbnails) con enlace a articulo, botón con enlace a articulo e iconos Font Awesome en botón boostrap, titulo y párrafo con selector de colores, selector de clase de botón Bootstrap. Recuerde: su plantilla debe trabajar con bootstrap y Font Awesome. Programación limpia y eficiente. Recuerde su web debe trabajar con bootstrap y font awesome. License free',
            '<br>Demo Modulo Jumbotron Bootstrap para joomla.'
        ]
    }
];

const BlogItem: React.FC<DemoModuloData> = ({ title, image, description }) => {
    const handleClick = () => {
        alert('Learn More clicked!');
    };

    return (
        <Box>
            <Typography variant="h1" style={{ color: 'purple', fontSize: '1.5rem', marginBottom: '10px', textAlign: 'left' }}>{title}</Typography>
            <Box boxShadow="0 0 0 0.5px lightblue" borderRadius='5px'>
                <img src={image} alt={title} style={{ width: '300px', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }} />
            </Box>
            <Typography variant="body1" style={{ color: 'skyblue', textAlign: 'left' }}>
                <span dangerouslySetInnerHTML={{ __html: description.join(' ') }} />
            </Typography>
            <Button variant="contained" color="primary" onClick={handleClick} style={{ marginTop: '10px' }}>
                Leer documentación del Modulo
            </Button>
        </Box>
    );
};

const DemoBloque = () => {
    useEffect(() => {
        document.title = 'Demo del Modulo Bloque Boostrap para Joomla - Consultoria SEO';
    }, []);

    return (
        <Layouts>
            <SeoWrapper>
                <CustomBreadcrumbs />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Extra />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            {demoModuloData.map((item, index) => (
                                <BlogItem key={index} {...item} />
                            ))}
                            <ContactAuthorSection />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <PopularArticles />
                    </Grid>
                </Grid>
            </SeoWrapper>
        </Layouts>
    );
};

const SeoWrapper = styled(Box)({
    gap: '5px',
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
});

export { DemoBloque };