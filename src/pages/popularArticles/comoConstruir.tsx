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

interface BlogData {
    title: string;
    description: string[];
}

const blogSeoData: BlogData[] = [
    {
        title: 'Cómo construir un cotizador, calculadora o fórmula en Joomla',
        description: [
            'En la siguiente página usted podrá construir su propio módulo calculadora para su sitio Joomla: http://andrewart.net/jcg/.  Ud. podrá crear calculadoras o cotizadores en línea sin tener conocimientos en PHP, CSS o HTML.',
            '<br>Es importante que entienda que usted sólo deberá generar su propio módulo personalizado que incluya los calculos que necesita con los parámetros adecuados, una vez haya creado el módulo, solo deberá probarlo, descargarlo e instalarlo en su sitio joomla.',
            '<br>Para generar su módulo personalizado, solo deberá ingresar en la página http://andrewart.net/jcg y efectuar 3 sencillos pasos:',
            `<br>Paso1:<br><img src=${Paso1} alt="Paso 1 del generador de módulo de calculadora para joomla" title="Paso 1 del generador de módulo de calculadora para joomla" width="480" height="114">`,
            `<br>Paso2:<br><img src=${Paso2} alt="Paso 2 del generador de módulo de calculadora para joomla" title="Paso 2del generador de módulo de calculadora para joomla" width="473" height="149">`,
            `<br>Paso3:<br><img src=${Paso3} alt="Paso 3 del generador de módulo de calculadora para joomla" title="Paso 3 del generador de módulo de calculadora para joomla" width="463" height="102">`,
            '<br>Finalmente Ud. podrá probar el funcionamiento de su módulo, incluir un botón reset para limpiar los campos, darle un nombre a su módulo y si está satisfecho con el comportamiento del mismo lo podrá descargar.',
            `<img src=${Por} alt="Probando y dando un nombre al módulo de calculadora para descargarlo" title="Probando y dando un nombre al módulo de calculadora para descargarlo" width="466" height="77">`,
            '<br>Puede crear largas y complejas calculadoras, fórmulas o cotizadores en línea con muy pocos clics. También puede ver los módulos de demostración.',
            '<br>El siguiente es un cotizador de tiendas on line utilizado el módulo generado con este magnífico modulo de calculadora:'
            
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