import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "./components/extra"
import { Layouts } from "./../components/layouts/layouts"
import { CustomBreadcrumbs } from "./components/breadcrumbs"
import { PopularArticles } from "./components/popularArticles"
import { BlogItem } from "./components/blogitem"
import ContactAuthorSection from "./components/ContactAuthorSection"

const mapaSitioData: BlogData[] = [
	{
		title: 'Mapa del sitio',
		description: [
			'<ul><li>Contactenos</li><li>Blog</li><ul><li>SEO</li><li>joomal!</li><li>e-commerce</li><li>Seguridad</li></ul><li>Utilidades seo</li><li>Plantilla joomla gratis y de pago</li><li>Módulos para Joomla!</li><li>Portafolio de Páginas Web</li><li>Servicios</li></ul>',
		]
	}
]

const MapaSitio = () => {
	useEffect(() => {
        document.title = 'mapa del sitio - Consultoria SEO';
    }, []);
	return (
		<Layouts>
			<MapaSitioWrapper>
				<CustomBreadcrumbs />

				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<Extra />
					</Grid>

					<Grid item xs={12} md={6}>
						<Box display="flex" flexDirection="column" gap={2}>
							{mapaSitioData.map((item, index) => (
								<BlogItem key={index} {...item} />
							))}

							<ContactAuthorSection />
						</Box>
					</Grid>

					<Grid item xs={12} md={3}>
						<PopularArticles />
					</Grid>
				</Grid>
			</MapaSitioWrapper>
		</Layouts>
	)
}

const MapaSitioWrapper = styled(Box)({
	gap: '5px',
	paddingTop: '10px',
	display: 'flex',
	flexDirection: 'column',
})

export { MapaSitio }	