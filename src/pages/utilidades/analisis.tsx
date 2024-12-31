import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";

import { Extra } from "../components/extra";
import { Layouts } from "../../components/layouts/layouts";
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles";
import { BlogItem } from "../components/blogitem";

const UtilidadesAnalisisData: BlogData[] = [
    {
        title: 'Problemas de Diseño de Paginas Flash',
        description: [
            '<h3>Por favor, ingrese la url a analizar. Por ejemplo: "http://tuconsultoraseo.com"</h3>',
            '',
        ]
    }
];

const Analisis = () => {
    const [text, setText] = useState('http://');

    useEffect(() => {
        document.title = 'Analisis de página web';
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Analizando URL: ${text}`);
    };

    return (
        <Layouts>
            <AnalisisWrapper>
                <CustomBreadcrumbs />

                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Extra />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            {UtilidadesAnalisisData.map((item, index) => (
                                <BlogItem key={index} {...item} />
                            ))}
                            {/* Styled form */}
                            <form  
                                onSubmit={handleSubmit} 
                                style={{
                                    padding: '5px',
                                    margin: '5px'
                                }}
                            >
                                <input 
                                    type="search"
                                    maxLength={255} 
                                    name="URL" 
                                    value={text} 
                                    onChange={(e) => setText(e.target.value)} 
                                    id='search-box' 
                                    style={{
                                        backgroundColor: '#EFE',
                                        border: 'solid 2px #6C8',
                                        padding: '1px 3px 3px 3px',
                                        display: 'inline',
                                        margin: '0 15px 0 10px'
                                    }}
                                />
                                <input 
                                    type="submit" 
                                    id='search-btn' 
                                    name="comprobar" 
                                    value="Analisis URL" 
                                    style={{
                                        backgroundColor: '#EFE',
                                        border: 'solid 1px #806666',
                                        padding: '3px 10px 3px 10px',
                                        margin: '0 10px 0 0',
                                        display: 'inline'
                                    }}
                                />
                            </form>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <PopularArticles />
                    </Grid>
                </Grid>
            </AnalisisWrapper>
        </Layouts>
    );
};

const AnalisisWrapper = styled(Box)({
    gap: '5px',
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
});

export { Analisis };