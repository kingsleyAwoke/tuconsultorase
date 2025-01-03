import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection"

const blogSeoData: BlogData[] = [
	{
		title: 'Que caracter &iacute;sticas debe tener una contrase &ntilde;a para que sea segura en Joomla',
		description: [
			'<ul><li>debe ser de, al menos, 8 caracteres, siendo a partir de 12 lo correcto,</li><li>debe estar compuesta por letras (combinaci &oacute;n de may &uacute;sculas y min &uacute;sculas),</li><li>debe contener n &uacute;meros,</li><li>debe contener caracteres especiales permitidos, esto es $ &amp;/?</li><li>no deben ser palabras de diccionario,</li><li>no deben ser palabras que relacionen tu dominio,</li><li>no debe haber palabras que pertenezcan al nombre del dominio.</li></ul>'
		]
	}
]

const QueCaracteristicas = () => {
	useEffect(() => {
		document.title = 'Que características debe tener una contraseña para que sea segura en Joomla - Consultoria SEO';
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

export { QueCaracteristicas }	