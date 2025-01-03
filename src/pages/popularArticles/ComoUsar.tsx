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
		title: 'Como usar el atributo alias en Joomla',
		description: [
			'El atributo alias se usa en elementos de menú, categorías y artículos. El alias es el nombre interno de estos elementos. Joomla utiliza los alias para crear URLs amigables a los buscadores cuando SEF está activado. Existen limitaciones técnicas en relación al tipo de caracteres que pueden incluirse en las URLs. El alias debe estar formado por letras minúsculas y guiones altos (-).',
			'<br>Puede dejar el alias en blanco y joomla lo llenará con un valor predeterminado, el cual es el título. También puede ingresar el alias manualmente, de esta manera usted tendrá mayor control sobre la url generada:',
			'<br>Podrá controlar &nbsp;la longitud de la url generada.',
			'<br>Hace más fácil para los motores de búsqueda como google mostrar toda la URL en los resultados de busqueda sin tener que acortarla.',
			'<br>Los usuarios pueden comprender más sobre el contenido de la página. Cuando los motores de búsqueda indexan una página también pueden utilizar la URL como fuente de información acerca del contenido de la página.',
			'<br>Los caracteres no latinos son aquellos que forman parte del alfabeto hebreo, cirílico, chino, árabe etc. Estos caracteres son permitidos en el alias si se establece la opción unicode en Sí en la configuración global.Ejemplo. Si la opción unicode está establecida en No y el título incluye caracteres no latinos, el alías será por defecto la fecha y la hora actual, por ejemplo "2014-09-31-15-45-30".',
			'<br>Si usted deja espacios en blanco en el alias y/o guiones bajos en el alias, Joomla eliminará el espacio en blanco y el guión bajo (_) lo reemplazará con el guión alto (-).',
			'<br>Si modifica el título de un artículo, categoría o elemento de menú pero no modifica su viejo alias, el alias y la url que se crea a partir del alias no cambiará. En este caso cambie el título y deje en blanco su alias para generar uno nuevo de manera automática después de guardar el artículo. También puede modificar el alias manualmente.',
			'<br>Es recomendable incluir palabras clave en el alias y en el título para generar url con palabras clave y títulos con palabras clave.'
		]
	}
]

const ComoUsar = () => {
	useEffect(() => {
		document.title = 'Como usar el atributo alias en joomla - Consultoria SEO';
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

export { ComoUsar }	