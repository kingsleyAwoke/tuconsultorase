import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { MoreArticles } from "../components/moreArticles"
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem";
import ContactAuthorSection from "../components/ContactAuthorSection";

const ServiciosAcelerarData: BlogData[] = [
	{
		title: 'Acelerar Joomla',
		description: [
			'Necesita ayuda para <strong>acelerar </strong>su sitioweb <strong>Joomla </strong>? En TuConsultoraSeo tenemos una gran cantidad de experiencia que muestra <strong>cómo </strong><strong>acelerar sitios web lentos en Joomla </strong>, de hecho es uno de los más solicitados servicios de ayuda para websites que ofrecemos.-',
			'<br>Podemos ayudarle - si usted se ha estado haciendo una de estas preguntas:',
			'<br>¿Por qué tarda en cargar mi web Joomla? ¿Por qué se tarda Joomla?',
			'<br>¿Cómo puedo acelerar Joomla? ¿Cómo puedo <strong>acelerar </strong>mi sitioweb <strong>Joomla </strong>?',
			'<br>¿Cómo acelerar - Optimizar el rendimiento Joomla?',
			'<br>Una razón importante para <strong>acelerar </strong>un sitioweb lento <strong>Joomla </strong>es que Google y otros motores de búsqueda utilizan ahora la velocidad como factor en sus algoritmos para ayudar a decidir el orden en que su sitio web se inserta en los resultados de búsqueda. Los websites lentos aparecen más abajo en los resultados del motor de búsqueda. Sitios web más rápidos, con el tiempo, subirán a la cima y ganarán más visitantes.-',
			'<br>No hay absolutamente ninguna razón para un cibersitio joomla lento - <strong> deben ser tan rápidos </strong>como cualquier otro sitio web, - podemos ayudar a aumentar la velocidad de su sitio Joomla. Podemos <strong>acelerar </strong>su web <strong>joomla </strong>. Como todos los sitiosweb, una serie de factores pueden afectar la velocidad de su site joomla!, reduciendo el rendimiento y hacer que el sitio web sea lento. Podemos encontrar la causa y la solución de problemas de velocidad sitio web con el fin de ayudar a <strong> acelerar </strong>web <strong>Joomla </strong>para usted.-',
			'<br>Nuestro experimentado equipo de expertos profesionales de optimización de velocidad web puede ayudar haciendo cambios en su site para alcanzar la velocidad requerida para escalar posiciones en los resultados de búsqueda.',
			'<br>Tenemos un historial comprobado para <strong>acelerar </strong>webs <strong>Joomla </strong>lentos como el suyo, por lo general con mejoras en la velocidad muy significativas y mejoras de rendimiento. Podemos ofrecer testimonios y se le pondrá en contacto con los clientes satisfechos que avalen el aumento de la velocidad de su sitioweb - resolvemos los problemas de velocidad sitio-Joomla. Ud. también puede evaluar la velocidad de TUConsultoraSeo utilizando GTmetrix.com, por ejemplo.-'
		]
	},{
		title: 'Cómo mejorar el rendimiento de Joomla y acelerar su sitio Joomla Lento',
		description: [
			'Utilizamos nuestra experiencia y conocimientos para examinar los factores de velocidad de sitiosweb tales como:',
			'<br>* La reducción del número total de imágenes en una página - incluyendo:',
			'<br>* El tamaño de archivo de imágenes - archivos de pequeño tamaño hacen a los sitiosweb más rápidos.* El tamaño de archivo de imágenes - archivos de pequeño tamaño hacen a los sitiosweb más rápidos.',
			'<br>* El tamaño y el número de hojas de estilo CSS separadas dentro de su <strong> plantilla </strong><strong>Joomla</strong>',
			'<br>* El tamaño y número de archivos JS Javascript separadas dentro de su <strong>plantilla </strong>CMS',
			'<ul><li>El número de gráficos dentro de las <strong>plantillas </strong>de la CMS,</li><li>El número de imágenes dentro de su artículo(s)</li><li>y dentro de los módulos tales como rotadores de imagen.</li></ul>',
			'<h2>Configuración del servidor. Acelerar el rendimiento para acelerar su website Joomla</h2>',
			'Algunos servidores y paquetes de alojamiento web están preconfiguradas mejor que otros en términos de lo bien que señalan a los navegadores web que los archivos se pueden almacenar en caché y por cuánto tiempo.',
			'<br>La carga del servidor de base de datos - paquetes de alojamiento más económicas son a menudo "más vendidos" - más cibersitios están alojados en servidores económicos, con un impacto negativo en la velocidad del site.',
			'<br>La compresión gzip - Joomla tiene una opción (desactivada por defecto) para comprimir el código HTML que emite, al enviarlo al navegador web hasta diez veces más pequeño y, por tanto, diez veces más rápido. Si bien esto puede ayudar un poco, es mejor que su servidor web pueda comprimir toda su producción de texto - incluyendo Javascript, CSS y HTML. Cuando disponga de esto producirá un aumento mucho mayor en velocidad.',
			'<br>También algunos sitiosweb añaden demasiada carga al instalar demasiados plugins, extensiones  en una sola <strong>página web</strong>. Utilice la menor cantidad de plugins para <strong>acelerar </strong>su <strong>joomla. </strong>',
			'<br>Joomla tiene una serie de niveles de almacenamiento en caché disponibles, así como add-ons de terceros  que pueden agregar capas adicionales de almacenamiento en caché. Estas opciones de caché pueden optimizar significativamente el rendimiento y la velocidad de sitios web Joomla - pero cada uno tiene sus propias advertencias y se pueden introducir más problemas para los incautos. Podemos guiarle a través de las opciones disponibles para usted y asegurarnos de que no es acorralado por estos temas.',
			'<br><strong>¿Es su sitio web Joomla lento</strong><strong>? Si tiene necesidad de ayuda para <strong>acelerar </strong>su sitio<strong>Joomla </strong>póngase en contacto con nosotros hoy para una discusión amistosa sobre sus requisitos de rendimiento. Podemos arreglar su sitio Joomla.',
			'<br>'
		]
	}
]

const Acelerar = () => {
	useEffect(() => {
        document.title = 'Acelerar Joomla! - Consultoria SEO';
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
							{ServiciosAcelerarData.map((item, index) => (
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

export { Acelerar }	