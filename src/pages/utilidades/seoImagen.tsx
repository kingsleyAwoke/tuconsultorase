import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";

import { Extra } from "../components/extra";
import { Layouts } from "../../components/layouts/layouts";
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles";
import { BlogItem } from "../components/blogitem";
import ContactAuthorSection from "../components/ContactAuthorSection";
import SEOimagen from '../../assets/image/utilidade/seoimagen.png';
import { SearchForm } from "../components/searchForm";


const UtilidadesSEOImagenData: BlogData[] = [
    {
        title: 'herramienta seo imagen',
        description: [
            '"La directiva de Google dice:"',
            '<ul><li style="color: #4cb2cf;">&quot;Intenta utilizar texto en lugar de imágenes para mostrar nombres, contenido o enlaces importantes. El rastreador de Google no reconoce el texto integrado en imágenes. Si debes utilizar imágenes para contenido textual, considera la posibilidad de utilizar el atributo "ALT" para incluir algunas palabras de texto descriptivo&quot;</li><li style="color: #4cb2cf;">Asegúrate de que los elementos &lt;title &gt;y los atributos "alt" de tu sitio sean descriptivos y precisos</li></ul>',
            `<img src="${SEOimagen}" alt="Fundamentos de Diseño Web" height="80" width="150";"/>`,
            'Esta herramienta analiza que tan optimizadas están las imágenes de una página web. Usted ingresa la<strong> url del dominio</strong> a analizar y pulsa enter o el botón <strong>&quot;analizar imagenes&quot;</strong> y la herramienta le entregará información importante  acerca de las imágenes de su página web.',
            '<ul><li>nombre de la imagen</li><li>Atributo alt texto de la imagen (o la advertencia de que no existe ningún texto alternativo)</li><li>dimensiones de la imagen (o la advertencia de que no existen las dimensiones de la imágen)</li><li>la propia imagen se mostrará si es posible a través de un enlace a la misma.</li></ul>',            
            'Estas son las principales cosas que Google recomienda para las imágenes y esta herramienta permite al usuario saber qué tan bien lo está haciendo.',
            '<strong>Lo que esta herramienta puede ayudar a determinar</strong>',
            '<small>Esta herramienta SEO imagen puede ayudar a responder preguntas como :</small>',
            '<ul><li>¿Pueden las personas con deficiencias visuales entender mis imágenes?</li><li>¿Puede Google entender mis imágenes?</li><li>¿Están mis imágenes causando problemas de velocidad de carga a mi página?</li><li>¿Estoy utilizando texto alternativo correctamente?</li></ul>',
            '<small>Ud. puede leer</small> Cómo optimizar el contenido multimedia para <strong>SEO</strong> y Especificar dimensiones de imágen.',
            '<br>Acepta http y https.',
            '<br><strong>Escriba la URL del <em>dominio</em></strong> sin &#47; al final<strong>.&ndash;</strong><span>URL :</span>',
            ''
        ]
    }
];

const SeoImagen = () => {

    useEffect(() => {
        document.title = 'seo imagen - Consultoria SEO';
    }, []);

    return (
        <Layouts>
            <SeoImagenWrapper>
                <CustomBreadcrumbs />

                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Extra />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            {UtilidadesSEOImagenData.map((item, index) => (
                                <BlogItem key={index} {...item} />
                            ))}
                            <SearchForm initialText="http://example.com" buttonText="Examinar esta url"/>
                            <ContactAuthorSection />
                        </Box>
                    </Grid>
                        
                    <Grid item xs={12} md={3}>
                        <PopularArticles />
                    </Grid>
                </Grid>
            </SeoImagenWrapper>
        </Layouts>
    );
}

const SeoImagenWrapper = styled(Box)({
    gap: '5px',
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
});

export { SeoImagen };