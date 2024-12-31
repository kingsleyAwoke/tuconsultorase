import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection"

const blogSeoData: BlogData[] = [
	{
		title: 'Alta en buscadores',
		description: [
			'Usted puede tener un excelente sitio web, la&uacute;ltima tecnolog&iacute;a de comercio electr&oacute;nico y los mejores trabajos de dise &ntilde;o gr&aacute;fico. Ahora viene la parte dif&iacute;cil de elegir una empresa de <strong>SEO</strong>. Nuestro servicio de <strong>alta en buscadores</strong> profesional est&aacute;dise&ntilde;ado para una presentaci&oacute;n m &aacute;s r&aacute;pida y completa de su sitio web a trav&eacute;s de la web. Damos de alta su sitio web en los principales motores de b&uacute;squeda, directorios y sitios de enlace de calidad siempre siguiendo las directivas de ellos, esto le ayudar&aacute;a aumentar su tr&aacute;fico del sitio web y obtendr&aacute;clientes potenciales',
			'<br>Ofrecemos la optimizaci&oacute;n de motores de b&uacute;squeda, la usabilidad web, marketing en buscadores, construcci&oacute;n de v&iacute;nculo, alta en los motores de b&uacute;squeda. Disfrutamos de la entrega de las primeras posiciones en Google, el c&oacute;digo sem&aacute;ntico y visitantes de calidad a los sitios web de calidad. Para nosotros, el verdadero&eacute;xito de cualquier emprendimiento de negocios significa el logro de las metas de los negocios del cliente, as&iacute;como los objetivos comerciales con los insumos m &iacute;nimos implicados. Nos aseguramos de que nuestros clientes obtienen el valor real de su inversi&oacute;n para el&eacute;xito de de negocio.',
			'<br><strong>Alta en buscadores: </strong>Todos los detalles de los sitios web se verifican antes del alta. No vamos a enviar una direcci&oacute;n URL incorrecta. Se le notifica y se le solicita actualizar su informaci&oacute;n si encuentra alg&uacute;n error. Ofrecemos un servicio de <strong>alta en buscadores</strong> a los sitios que cumplen con nuestra pol&iacute;tica de sitios aceptados.',
			''
		]
	}
]

const AltaEnBuscadores = () => {
	useEffect(() => {
        document.title = 'Alta en buscadores - Consultoria SEO';
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

export { AltaEnBuscadores }	