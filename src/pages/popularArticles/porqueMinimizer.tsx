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
		title: 'Porque minimizar redirecciones',
		description: [
			'Porque minimizar redirecciones: Hay muchas buenas razones para tener redirecciones, pero hay que tener en cuenta que estropean la experiencia del usuario y causan problemas de velocidad. La utilización de un redireccionamiento obliga al navegador a buscar nuevamente la página web perdiendo un tiempo, a veces, notable.',
			'<br>Las redirecciones web se consiguen utilizando los códigos de estado 301 y 302. He aquí un ejemplo de las cabeceras HTTP 301 en una respuesta:',
			'<br>HTTP/1.1 301 Moved Permanently',
			'<br>Location: http://ejemplo.com/nuevauri',
			'<br>Content-Type: text/html',
			'<br>Un redireccionamiento 301 es permanente y una redirección 302 es temporal.',
			'<br>Tal vez una de las redirecciones más usadas ​​en la web es la redirección 301 permitiendo redirigir todo el sitio de la no-www a la versión www de una página web.',
			'<br>El navegador automáticamente lleva al usuario a la página especificada en el campo Location. Toda la información necesaria para el redireccionamiento está en el encabezado. Ni un archivo con 301 ni uno con 302 es cacheado en la práctica a menos que tenga otras cabeceras, como Expires o Cache-Control.',
			'<br>La etiqueta meta refresh y JavaScript son otras formas de dirigir a los usuarios a una URL diferente, pero si usted tiene que hacer un redireccionamiento. Conozca otros tipos de redirecciones.',
			'<br>¿Cómo afectan las redirecciones la velocidad de la <strong>pagina web</strong>?',
			'<br>Hacen que sus páginas se cargan más lentamente, ya que se pierde tiempo para ir a un lugar sólo para ser redirigido a otro.',
			'<br>Google sugiere eliminar redirecciones que no sean absolutamente necesarios. Google sugiere la eliminación de ellas port:',
			'<ul><li>Nunca enlace a una página que sabes que tiene una redirección en ella. Esto sucede cuando se ha creado manualmente la redirección, pero no se actualizo el vínculo en el código HTML para que apunte a la nueva ubicación.</li><li>No requieren más de una redirección para llegar a cualquiera de sus destinos.</li></ul>',
			'<h2><em>No olvide que su <strong>página web </strong>no carga solo HTML</em></h2>',
			'Prácticamente todas las <strong>páginas web </strong>requieren otras cosas para cargar. Usted puede pensar que no vuelve a dirigir en el código HTML, pero ¿qué pasa con los archivos CSS, imágenes o secuencias de comandos externos?',
			'Por otra parte, asegúrese de que todos los enlaces internos a su <strong>página  web </strong>utilizan sistemáticamente la URL canónica.',
			'Quiza le interese leer Redireccionamientos engañosos'
		]
	}
]

const PorqueMinimizer = () => {
	useEffect(() => {
		document.title = 'Porque minimizar redirecciones - Consultoria SEO';
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

export { PorqueMinimizer }	