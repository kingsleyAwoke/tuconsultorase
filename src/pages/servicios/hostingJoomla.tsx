import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection"
import Hosting from '../../assets/image/servicio/hosting.png'

const blogSeoData: BlogData[] = [
	{
		title: 'Hosting Joomla',
		description: [
			`<img src="${Hosting}" alt="Fundamentos de Diseño Web" height="68" width="69" style="display: flex; align-items: center" />`,
			'Nuestro objetivo es proporcionar a todas la personas y negocios lo que necesiten para expresarse en internet a trav &eacute;s de la venta de bienes y servicios. Hacer una correcta elecci &oacute;n de alojamiento para su sitio joomla o cualquier otro tipo es esencial y determina el &eacute;xito o fracaso de su sitio web. La ventaja de alojar su sitio web con nosotros no solo es nuestro competitivo precio en el mercado sino que nuestro servidores est &aacute;n optimamente configurados para hospedar su sitio y ya tiene ganado un 50% del &eacute;xito del mismo. El resto depende de usted.',
			'<br>Si Ud. encarga su p &aacute;gina web con nosotros, el <strong>hosting </strong>ser &aacute;gratuito por un a &ntilde;o.'
		]
	}
]

const HostingJoomla = () => {
	useEffect(() => {
		document.title = 'Hosting Joomla - Consultoria SEO';
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

export { HostingJoomla }	