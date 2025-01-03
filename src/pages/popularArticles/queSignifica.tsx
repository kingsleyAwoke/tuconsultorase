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
		title: 'Que significa Minify CSS',
		description: [
			'&iexcl;Sencillo! simplemente que debe comprimir el CSS para que la carga sea m &aacute;s r &aacute;pida.',
			'<br>Minificaci&oacute;n &nbsp;o compresi&oacute;n de c&oacute;digo css es la pr&aacute;ctica de eliminar caracteres innecesarios para reducir su tama&ntilde;o, la eliminaci&oacute;n de espacios innecesarios, y la optimizaci&oacute;n del c&oacute;digo CSS; mejorando de este modo los tiempos de carga.',
			'<br>Cuando los archivos Javascript y CSS se comprimen, todos los comentarios son retirados, as&iacute;como &quot;espacios en blanco&quot;innecesarios, como tambi&eacute;n los enter (nueva l&iacute;nea) y tabuladores. Adem&aacute;s el c&oacute;digo puede ser formateado a &uacute;n m&aacute;s en una sola l&iacute;nea en lugar de varias.',
			'<br>En el caso de CSS, esto mejora el rendimiento del tiempo de carga debido a que el tama&ntilde;o del archivo descargado se reduce significativamente. Existen dos herramientas populares para minifying, reducir o comprimir el c&oacute;digo CSS son&nbsp;CSS Compressor Google Minify. Muchas herramientas tambi&eacute;n permiten minify/comprimir c&oacute;digo Javascript, aprende m&aacute;s en MinifyJS.com.',
			'<br>El c&oacute;digo CSS correctamente minimizado (comprimido) mejora la velocidad de la <strong>p&aacute;gina web </strong>y ya sabemos que la velocidad de carga es uno de los m&aacute;s de 200 factores de <strong>seo o posicionamiento en buscadores</strong>.',
			'<br>No importa c&oacute;mo usted utiliza su CSS (inline-small>inline small css</Link>, archivos externos, archivo externo combinado) mientras m&aacute;s peque&ntilde;o, mejor y contribuir&aacute;a que sus <strong>p&aacute;ginas web </strong>se cargan m&aacute;s r&aacute;pido.'
		]
	}
]

const QueSignifica = () => {
	useEffect(() => {
		document.title = 'Que significa Minify CSS - Consultoria SEO';
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

export { QueSignifica }	