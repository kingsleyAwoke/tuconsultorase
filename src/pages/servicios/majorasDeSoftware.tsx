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
		title: 'Mejoras de software',
		description: [
			'Si su sitio web se basa en secuencias de comandos para los carros de compras, blogs, foros, sistemas de gesti &oacute;n de contenidos, galer &iacute;as de fotos, formularios de contacto, u otras secuencias de comandos de software, podemos <strong>asegurarle </strong>si est &aacute;ejecutando la &uacute;ltima versi &oacute;n.',
			'<br>Si un script no funciona bien puede hacer sentir a los usuarios frustrados y perderlos para siempre. Ayudaremos a instituir un proceso de copia de <strong>seguridad </strong>fiable para su sitio web para mantener sus archivos importantes a salvo de fallas en el servidor o ataques de hacking.',
			'<br>No nos cansaremos de recalcar que nuestros <strong>expertos en seo </strong>(<strong>posicionamiento en buscadores</strong>) pueden optimizar sus metaetiquetas de titulo, metadescripciones, palabras clave de contenido y dem &aacute;s aspectos <strong>seo </strong>para que su sitio consiga ser encontrado por los usuarios interesados en sus productos y servicios.'
		]
	}
]

const MejorasDeSoftware = () => {
	useEffect(() => {
		document.title = 'Mejoras de Software - Consultoria SEO';
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

export { MejorasDeSoftware }	