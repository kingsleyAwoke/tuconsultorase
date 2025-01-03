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
		title: 'Importancia de Palabras Clave de Contenido para Seo',
		description: [
			'Al hacer clic en palabras clave de contenido en la Consola de búsqueda, anteriormente llamada Herramientas para webmaster de Google, en la sección índice podemos ver la cantidad de apariciones de <strong>palabras clave</strong>en las <strong>paginas web</strong> de nuestro sitio.',
			'<br>Si deseamos <strong>posicionar</strong>de forma natural para una determinada <strong>palabra clave</strong>entonces necesitamos más contenido para esa palabra clave en particular.',
			'<br>Cuanto más contenido de calidad se encuentre en las paginas de tu sitio con las palabras clave que deseas <strong>posicionar</strong>, más alta será la clasificación en los resultados de búsqueda, esto es lo que llamamos <strong>Palabras Clave de Contenido para Seo.</strong>',
			'<br>No existe ningún "truco" que hará que su sitio salte a la primera posición para <strong>palabras clave</strong> específicas, es el contenido de valor con <strong>palabras clave</strong> incluidas en él y su frecuencia lo que le dirá a Google de que trata su sitio cuando lo rastrea.',
			'<br>La importancia de cada palabra clave refleja la frecuencia con la que se encuentra en las paginas de su sitio.',
			'<br>Ud. puede saber donde están esas palabras clave haciendoles clic, entonces la Cónsola de búsqueda le mostrará las <strong>páginas web</strong> donde se encuentra, es decir; páginas de su blog por ejemplo.',
			'<br>Es una excelente herramienta ya que para cada palabra clave que muestra nos dice su importancia en términos porcentuales de modo que sólo debemos crear contenido rico, útil, relevante para la palabra clave a <strong>posicionar</strong>.',
			'<br>Si queremos <strong>posicionar</strong> la palabra clave <strong>seo </strong>y ésta tiene una importancia del 31% entonces procederemos a crear ese íncreíble contenido que incluira la palabra <strong>seo.</strong>',
			'<br>Por lo tanto no podemos dispersarnos escribiendo contenido sobre los patitos blancos en el lago azul, a menos que usted desee <strong>posicionar</strong> esas palabras clave.',
			'<br>Pero esta herramienta también puede informanos sobre palabras clave sospechosas, palabras que usted no ha escrito y que podrían indicar que su sitio ha sido hacheado, como propietario del mismo debe estar atento a esto, como webmaster también, como desarrollador de <strong>paginas web.</strong>',
			'<br>Si ve palabras clave de contenido como "viagra", "prescripción", "cialis" y nota que al pulsar sobre la palabra clave, Google ha encontrado esas palabras en la lista de url que muestra pero usted no las escribió, puede que su sitio haya sido hackeado.',
			'<br>Para ampliar más la  información lea Cómo seleccionar palabras clave, Como mejorar el posicionamiento seo y aumentar el tráfico, El valor de una buena palabras clave y Palabras clave de contenido.'
		]
	}
]

const ImportancialPalabras = () => {
	useEffect(() => {
		document.title = 'Importancia Palabras Clave de Contenido para Seo - Consultoria SEO';
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

export { ImportancialPalabras }	