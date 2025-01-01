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
		title: 'Soporte Joomla',
		description: [
			'Nuestra ayuda y servicios de apoyo est&aacute;n disponibles en dos formas:',
			'<br><strong>Soporte Joomla 1</strong>: Servicios de apoyo contratado: est&aacute;n dise&ntilde;ados para permanentes relaciones con los clientes a largo plazo. No somos una &quot;entrada y salida r&aacute;pida&quot; de la empresa, preferimos estar con usted para el largo plazo, y para reflejar esto, nuestros servicios contratados se ofrece con un masivo 33% de descuento.',
			'<br><strong>Soporte Joomla 2: </strong>Ayuda bajo demanda:estos servicios son generalmente m&aacute;s&uacute;tiles para los nuevos clientes que tienen un problema grave que requiere asistencia de localizaci&oacute;n de fallas inmediata.'
		]
	}
]

const SoporteJoomla = () => {
	useEffect(() => {
		document.title = 'Soporte Joomla - Consultoria SEO';
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

export { SoporteJoomla }	