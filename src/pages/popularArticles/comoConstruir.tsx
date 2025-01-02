import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";

import { Extra } from "../components/extra";
import { Layouts } from "../../components/layouts/layouts";
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles";
import { BlogItem } from "../components/blogitem";
import ContactAuthorSection from "../components/ContactAuthorSection";
import { Paso1, Paso2, Paso3, Por } from '../../assets/image/image';

// Define BlogData type if not already defined
interface BlogData {
    title: string;
    description: string[];
}

const blogSeoData: BlogData[] = [
    {
        title: 'Cómo construir un cotizador, calculadora o fórmula en Joomla',
        description: [
            // Your description content...
            'En la siguiente página usted podrá construir su propio módulo calculadora para su sitio Joomla: http://andrewart.net/jcg/.  Ud. podrá crear calculadoras o cotizadores en línea sin tener conocimientos en PHP, CSS o HTML.',
            // ... (rest of the content)
        ]
    }
];

const ComoConstruir = () => {
    useEffect(() => {
        document.title = 'Cómo construir un cotizador, calculadora o fórmula en Joomla - Consultoría SEO';
    }, []);

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const selectElement = document.getElementById('ecommerce-select') as HTMLSelectElement;
        const selectedValue = selectElement.options[selectElement.selectedIndex].text;
        alert('You selected: ' + selectedValue);
    };

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
                            {blogSeoData.map((item, index) => (
                                <BlogItem key={index} {...item} />
                            ))}

                            <form onSubmit={submit}>
                                <ul>
                                    <li>
                                        <label>Seleccione su solución de e-commerce</label>
                                        <select id="ecommerce-select">
                                            <option value="1">Magento</option>
                                            <option value="2">OpenCart</option>
                                            <option value="3">PrestaShop</option>
                                        </select>
                                    </li>
                                    <div>
                                        <label>Este Cotizador de aplicaciones de e-commerce es para efectos de prueba.</label>
                                    </div>
                                </ul>
                                <input type="submit" id="calc-button" name="submit_cotizacin_tienda_online" value="Obtener precio!" />
                            </form>

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

export { ComoConstruir };