import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection"
import JoomlaError from '../../assets/image/popularArticules/joomla-error-reporting.jpg';

const blogSeoData: BlogData[] = [
	{
		title: 'Como encontrar HTTP Error 500 en joomla!',
		description: [
			'A veces, después de instalar una extensión para Joomla, usted recibe un error HTTP 500 (Error interno del servidor) en su sitio. La mejor manera de encontrar la razón de ello es comprobar el informe de errores, verá una lista de los mensajes de error generados por su sitio web',
            '<h3 style="color: #4cb2cf">Cómo visualizar el informe de errores en Joomla!</h3>',
            '<ul><li>Entra al <em>Administrador de</em> back-end de Joomla! y vaya a <em>Configuración global.</em></li><li>Seleccione la pestaña <em>Servidor</em>.</li></ul>',
            '<ol><li>Vaya a <em>Reporte de Errores</em>.</li><li>Cambie al <em>máximo</em> en la lista desplegable.</li></ol>',
            `<img src=${JoomlaError} alt="joomla-error-reporting" width="617" height="529">`,
            '<br>Cuando haya terminado, haga clic en <em>Guardar.-</em>',
            '<ul><li>Ahora, vaya a su sitio web (Inicio) y pulse <em>F5</em> (en el teclado) para actualizar su navegador web. Verá una lista de los últimos mensajes de error generados por su sitio web.</li><li>En este listado podrá encontrar información útil y detallada acerca de cada error que incluye: parte de la información sobre el cliente que recibe el error, descripción del error y la información acerca de qué carpeta o archivo genera el error.</li></ul>'
		]
	}
]

const ComoEncontrar = () => {
	useEffect(() => {
		document.title = 'Como encontrar HTTP Error 500 en joomla! - Consultoria SEO';
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
							{blogSeoData.map((item, index) => (
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
	)
}

const SeoWrapper = styled(Box)({
	gap: '5px',
	paddingTop: '10px',
	display: 'flex',
	flexDirection: 'column',
})

export { ComoEncontrar }	