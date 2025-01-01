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
		title: 'Servicio de redacci &oacute;n de contenido',
		description: [
			'<font>Tener contenido adecuado, relevante, pertinente y de calidad para un sitio web se ha convertido en una muy importante herramienta de marketing.</font> <font> Un contenido de calidad establece una marca como ninguna otra manera al tiempo que otorga reconocimiento en su&aacute;rea de marketing.</font> <font> Un buen contenido es la mejor oportunidad que su sitio web tiene de estar en el codiciado primer puesto en los resultados naturales de b&uacute;squeda de Google u otro importante motor de b&uacute;squeda.</font> <font>Usted tiene que escribir el texto que apele a su p&uacute;blico objetivo inmediato.</font> <font> Se ve a menudo que los redactores independientes han fracasado al momento de estar a la altura de las expectativas de muchos marketing y gerentes de empresas.</font> <font> Despu&eacute;s de todo su sitio web tiene un contenido potente que llevar&aacute;a sus clientes a su sitio web al instante y los persuadir&aacute;a comprar.</font>',
			'<br><font>Si usted necesita contenido de alta calidad, art&iacute;culos originales para promover su sitio web, entonces usted est&aacute;en el lugar correcto para comprar art&iacute;culos!</font> <font>Aqu&iacute;creamos s&oacute;lo los mejores art &iacute;culos para ayudar a dirigir el tr&aacute;fico, conseguir backlinks y promover sus productos y servicios en l&iacute;nea.',
			'<br><font>Ud. recibir&aacute;contenido optimizado para atraer tr&aacute;fico de motores de b&uacute;squeda.</font><font> Nuestro</font>Personal de <strong>servicio de redacci &oacute;n de contenido </strong>se especializa en Redacci&oacute;n <strong>SEO</strong> de contenidos, Escritura de contenido Web, Redacci&oacute;n de Comunicados de Prensa, Escritura de Blog, Escritura de bolet&iacute;n, Escritura Folleto de Ventas, Escritura de Cartas de Venta, Comentarios sobre productos y Servicios de Reescritura.',
			'<br>La importancia de contar con un excelente <strong>servicio de redacci&oacute;n de contenido</strong> se traducir&aacute;en m&aacute;s visitas y m&aacute;s conversiones.'
		]
	}
]

const Redaccionde = () => {
	useEffect(() => {
		document.title = 'Redacción de contenido - Consultoria SEO';
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

export { Redaccionde }	