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
		title: '&iquest;Necesita Programadores php?',
		description: [
			'Encuentre experimentados <strong>programadores php </strong>en tuconsultoraseo.com.',
			'<br>PHP es un lenguaje de scripting de c &oacute;digo abierto que est &aacute;dise&ntilde;ado para producir p&aacute;ginas web din &aacute;micas. <strong>Desarrollamos </strong>su requerimiento de aplicaciones en PHP.',
			'<br>Ofrecemos dise&ntilde;o y servicios personalizados de soporte y programaci&oacute;n para sistemas de bases de datos MySQL, as&iacute; como la instalaci&oacute;n y optimizaci&oacute;n de blogs, foros, galerias de fotos y sistemas de carritos de compra, como osCommerrce y Zen Cart. Comuniquese con nosotros.-',
			'<br>PHP ofrece muchas caracter&iacute;sticas avanzadas para los <strong>programadores de PHP</strong> y desarrolladores profesionales. PHP puede ser usado en los principales sistemas operativos, incluyendo Linux, muchas variantes Unix (incluyendo HP-UX, Solaris y OpenBSD), Microsoft Windows, Mac OS X y otros. Es apoyado por la mayor &iacute;a de los servidores web, as &iacute;, como Apache y Microsoft Internet Information Server. Solicite un presupuesto para su aplicaci&oacute;n php',
			'<br><strong>Habilidad de base de datos: </strong>Mysql 5.x',
			'<br><strong>Procesos y Metodolog&iacute;as:</strong>',
			'<br>Desarrollo Web, E-Commerce, Gesti&oacute;n de Contenido.',
			'<br><strong>Sistemas operativos:</strong>',
			'<br>Linux, Windows Server'
		]
	}
]

const Programadores = () => {
	useEffect(() => {
		document.title = 'Programadores PHP - Consultoria SEO';
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

export { Programadores }	