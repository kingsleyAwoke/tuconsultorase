import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"

const blogSeoData: BlogData[] = [
	{
		title: 'Demo modulo jumbotron',
		description: [
			'<h1 style="color: #428bca;">Portal Jumbotron</h1>',
			'<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla sit amet enim ut hendrerit. Praesent rutrum dui a turpis porttitor mollis. In eu scelerisque ipsum',
			'<br>Demo Modulo Jumbotron Bootstrap para joomla',
			'<br><br>Descargar Mod_jumbotron'
		]
	}
]

const DemoModulo = () => {
	useEffect(() => {
        document.title = 'Demo modulo jombotron para joomla - Consultora SEO';
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

export { DemoModulo }	