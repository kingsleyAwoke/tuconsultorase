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
		title: 'Como especificar dimensiones de imagen.',
		description: [
			'<h2>¿Por qué declarar el alto y ancho de las imágenes? Porque esto es necesario.</h2>',
			'<strong>Cómo especificar dimensiones de imagen: </strong>Cuando un navegador Web muestra su <strong>página web</strong> tiene que averiguar muchas cosas antes de que pueda ver su contenido. Una de las cosas más simples e importantes que debe hacer es insertar sus imagenes con suficiente información en torno a ellas. Usted sólo puede hacer esto si sabe de qué tamaño son sus imágenes.',
			'<br>Si usted no le dice al navegador el tamaño de las imágenes, éste debe "construir" la página no una vez, sino dos veces (o más veces dependiendo de la cantidad de imágenes que tenga en la página). Se construirá una vez para mostrar todo el texto, y luego se va a esperar hasta que cada imagen se haya descargado. Cuando una imagen se descarga, el navegador puede determinar el tamaño de la imagen y reconstruirá la <strong>página web</strong> para ajustar el texto alrededor de esa imagen. Este proceso va a suceder para cada imagen en su página.',
			'<br>Si especifica las dimensiones de la imagen, ya se sabe el tamaño de las imágenes y se puede utilizar esa información para dar forma a la página. No tendrá que reconstruir la página tantas veces como imagenes tenga.',
			'<br><strong>Cómo especificar dimensiones de imagen</strong>',
			'<br>Para especificar las dimensiones de la imágen, se inserta un pequeño trozo de código en las etiquetas de imagen.',
			'<br>Aquí está un ejemplo etiqueta de imagen sin dimensiones de la imagen ...',
			'<br>&lt;img src="/image.jpg"/&gt;',
			'<br>El siguiente es un ejemplo etiqueta de imagen con dimensiones de imagen incluidos (alto y ancho) ...',
			'<br>&lt;IMG SRC="imagen.jpg" WIDTH=178 HEIGHT=180 &gt;',
			'<br>La adición de la altura y la anchura de las imágenes puede realmente ayudar a sus <strong>páginas web</strong> para que se carguen más rápido y se ven mejor.',
			'<br>Para saber más sobre como diseñar una <strong>pagina web</strong>  para seo lea Diseño de páginas web para seo'
		]
	}
]

const ComoEspecifcar = () => {
	useEffect(() => {
		document.title = 'Como especificar dimensiones de imagen. - Consultoria SEO';
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

export { ComoEspecifcar }	