import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Image from '../../assets/image/popularArticules/image.jpg';

const blogSeoData: BlogData[] = [
	{
		title: 'Causas de disminucion de visitas o trafico web',
		description: [
			'Es de vital importancia que antes de comprobar las causas de disminución de visitas Usted. sepa como recuperarse del efecto Google Panda ya que esta es una razón de pérdidas de visitas.',
			'<br>Existen diversas causas o razones <strong> seo</strong> por las que un sitio o <strong>pagina web</strong>  puede perder visitas, conozca cuales son:',
			`<br><img src=${Image} alt="Causas de disminucion de visitas o trafico web " title="Causas de disminucion de visitas o trafico web" style="max-width: 100%; height: auto; display: block" >`
		]
	}
]

const Causesa = () => {
	useEffect(() => {
		document.title = 'Causas de disminucion de visitas o trafico web - Consultoria SEO';
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

export { Causesa }	