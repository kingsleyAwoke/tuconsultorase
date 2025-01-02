import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";

import { Extra } from "../components/extra";
import { Layouts } from "../../components/layouts/layouts";
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles";
import { BlogItem } from "../components/blogitem";
import { SearchForm } from "../components/searchForm";

const utilidadesHerramientaData: BlogData[] = [
	{
		title: 'Herramienta If-Modified',
		description: [
			'La directiva de Google dice: Asegúrate de que tu servidor web admita la cabecera HTTP "If-Modified-Since". Esta función permite que tu servidor web avise a Google si el contenido de tu sitio ha cambiado desde la última vez que lo rastreamos. El uso de esta función te permitirá ahorrar ancho de banda y reducir gastos generales',
			'<br>Herramienta en línea gratuita que permite verificar si su sitio web/página web apoya si modificado ( If-Modified ) desde la cabecera http. Es una herramienta            <strong>SEO</strong> que ayuda a acelerar la indexación google bot. Google buscará este tipo de encabezados y actualizará la pagina si se han realizado modificaciones desde el último rastreo. Muestra todos los detalles de la página web, como última fecha de modificación, tipo de contenido, longitud del contenido, control de caché, etc ...',
			'<br>El servidor responde con un <strong>200</strong> código (<em>Ok</em>) si la página se ha modificado o con un código <strong>304</strong> (<em>no modificado</em>) si la página no se ha modificado.',
			'<br>Además comprueba encabezados HTTP.',
			'<br><strong>Ingrese la URL que desea analizar</strong>:',
		]
	}
]

const Herramienta = () => {
	useEffect(() => {
        document.title = 'herramienta seo imagen - Consultoria SEO';
    }, []);
	return (
		<Layouts>
			<HerramientaWrapper>
				<CustomBreadcrumbs />

				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<Extra />
					</Grid>

					<Grid item xs={12} md={6}>
						<Box display="flex" flexDirection="column" gap={2}>
							{utilidadesHerramientaData.map((item, index) => (
								<BlogItem key={index} {...item} />
							))}
							<SearchForm initialText="http://tuconsultoraseo.com" buttonText="¿apoya If-Modified?"/>
						</Box>
					</Grid>

					<Grid item xs={12} md={3}>
						<PopularArticles />
					</Grid>
				</Grid>
			</HerramientaWrapper>
		</Layouts>
	)
}

const HerramientaWrapper = styled(Box)({
	gap: '5px',
	paddingTop: '10px',
	display: 'flex',
	flexDirection: 'column',
})

export { Herramienta }	