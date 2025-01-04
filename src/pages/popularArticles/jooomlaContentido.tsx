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
		title: 'Joomla contenido duplicado',
		description: [
			'Al instalar el sistema Joomla los iconos de PDF y de impresi&oacute;n se muestran en la esquina superior de las p&aacute;ginas de los art&iacute;culos. Los motores de b&uacute;squeda siguen sus v&iacute;nculos, desde el contenido de la <strong>p&aacute;gina web </strong>de cada uno de estos enlaces y es evaluado de diferentes maneras por el motor de b&uacute;squeda&nbsp&iquest;C&oacute;mo funciona? el texto ancla, el&nbsp;t&iacute;tulo de la p&aacute;gina destino, los metadatos de la p&aacute;gina destino, el contenido de la <strong>p&aacute;gina </strong>de destino&nbsp;Todos estos se comparan con la p&aacute;gina de origen y su propio t&iacute;tulo, metadatos, el contenido. A los motores de b&uacute;squeda no les gusta el contenido duplicado.',
			'<br>Las <strong>p&aacute;ginas web </strong>con t&iacute;tulo id&eacute;ntico y descripciones meta id&eacute;nticas se consideran contenido id&eacute;ntico, el contenido duplicado a Google y otros motores de b&uacute;squeda, no les gusta esto y estas p&aacute;ginas ser&aacute;n relegados al&iacute;ndice complementario&nbsp;El&iacute;ndice complementario es la segunda base de datos de&nbsp;google - y ocupan lugares m&aacute;s bajo que la base de datos principal&nbsp;Entonces,&iquest;c&oacute;mo puedo comprobar si alguna de mis p&aacute;ginas se enumeran en este&iacute;ndice complementario&nbsp;Ir a google y&quot;site: sudominio&quot;&nbsp;Mira hacia abajo en la lista y que est&aacute;n etiquetados con&quot;Resultado Suplementario&quot;.',
			'<h4 style="color: #2a6496">En este punto Ud. me dice: Muy bien, &iquest;qu &eacute;debo hacer para remediar esto en Joomla?</h4>',
			'No muestre los iconos de impresi&oacute;n ni PDF.&nbsp;Este es el buen comienzo, pero no es completo porque podr&iacute;a haber otras razones para que sus <strong>p&aacute;ginas web </strong>est &aacute;n atrapados en el &iacute;ndice suplementario.&nbsp;En pocos d &iacute;as cubro otras t&aacute;cticas para <strong>p&aacute;ginas web </strong>de Joomla que figuran en el&iacute;ndice de resultados suplementarios cuando no est&aacute;n all&iacute;porque muestran iconos de PDF y de impresi&oacute;n.',
			'<br>Si quiere saber m &aacute;s sobre contenido duplicado puede leer<span style="color: #2a6496"> Como proteger su contenido</span>.',
			'<br>Si quiere saber m &aacute;s sobre <span style="color: #2a6496">el indice.',
			'<br>&iquest;Que opinan? &iexcl;compartan!'
		]
	}
]

const JoomlaContentido = () => {
	useEffect(() => {
		document.title = 'Joomla contenido duplicado - Consultoria SEO';
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

export { JoomlaContentido }	