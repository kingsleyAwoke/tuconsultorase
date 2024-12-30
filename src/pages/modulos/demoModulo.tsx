import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { MoreArticles } from "../components/moreArticles"
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"

const blogSeoData: BlogData[] = [
	{
		title: 'Páginas con Texto Autogenerado',
		description: [
			'¿Google toma medidas sobre páginas generadas automáticamente que no proporcionan valor añadido? La respuesta es sí. Sin embargo; Google no es perfecto y si ves ejemplos de contenido autogenerado que se encuentra en los resultados de búsqueda que no agregan valor, como las páginas de resultados, Google quiere que envíe un informe de spam.',
		]
	}, {
		title: 'Como identificar y diagnosticar un sitio pirateado',
		description: [
			'La importancia de <span>identificar y diagnosticar un sitio pirateado</span> se traduce en pérdida de visitas, clientes y violación de directrices específicas de calidad de los motores de búsqueda, siendo éste motivo para que Google emprenda <span>acciones manuales</span> para resolver esta infracción, perjudicando nuestro <span>SEO</span> o <span>posicionamiento en los resultados de los motores de búsqueda</span>. Una vez solucionado el problema, puedes <span>enviar tu sitio para que se vuelva a revisar</span>.',
		]
	}, {
		title: 'Palabras clave de contenido para',
		description: ['Las <span>Palabras clave de contenido</span> en la Consola de búsqueda de google o Search Console. Bajo el Índice Google, encontrará <span>palabras clave de contenido</span>. Esta herramienta le permite saber a Google de que trata su website y ayuda a Google a interpretar el contenido de su sitio.',
			'Muestra las palabras clave que se utilizan en su sitio, su importancia expresadas en porcentaje y las URL`s en que las encontró. También muestra',
			'las variaciones encontradas de esas palabras clave. '
		]
	}, {
		title: 'Mejoras de HTML Search Console para SEO',
		description: ['Para acceder a la página Mejoras de HTML, de <span>Search Console</span> sigue estos pasos:',
			'1.En la página principal de Search Console, haz clic en un sitio.',
			'2.En el menú de la parte izquierda, haz clic en Aspecto de la búsqueda y, a continuación, en Mejoras de HTML',
			'',
			'A continuación se indican los datos que se pueden incluir en esta página.',
			'Errores del título: posibles errores en la etiqueta del título en tus páginas, como la falta de título en la página o títulos repetidos.',
			'Errores de metadescripciones: posibles errores generados por la falta o duplicación de metadescripciones, o por otras metadescripciones problemáticas.',
			'Contenido no indexable: páginas cuyo contenido no es indexable, como algunos archivos multimedia, vídeos o imágenes.',
			'',
			'Estos errores se refieren a contenido duplicado. El contenido duplicado es perjudicial para el <span>SEO</span> o para la <span>optimización para motores de búsqueda</span>.',
		],
	}, {
		title: 'Googlebot no puede acceder a los archivos CSS y JS',
		description: ['Ud. Llegó a este útil artículo porque seguramente recibió este mensaje "<span>Googlebot no puede acceder a los archivos CSS y JS</span> " en su cónsola de herramientas para webmaster de Google.'],
	}, {
		title: 'Como Probar el Archivo robots.txt',
		description: ['Las herramientas para webmaster de Google cuenta con una función que permite probar si el archivo robots.txt bloquea el acceso de los rastreadores web de Google a URL concretas del sitio debido a la importancia del archivo robots.txt para la seguridad y el <span>SEO</span>.',
			'Puedes probar si el rastreador Googlebot-Video puede rastrear la url de un video que quieres bloquear en la búsqueda de videos de Google o si el rastreador Adsbot-Google  puede rastrear la url de un anuncio que quieres bloquearle.'
		],
	}, {
		title: 'Porque Actualizar el Contenido Web',
		description: ['Bueno, según la forma en que lo veo, si no actualiza su sitio web todos los días con contenido nuevo y único, usted puede estar muerto para los motores de búsqueda, o perder una gran cantidad de visitantes diarios a su sitio. Yo no soy la única que piensa así. Este es sin duda el consenso entre los principales webmaster y sobre todo seos, ellos saben que uno de los factores más importantes para convertir un site en un site de éxito está en la constante actualización del contenido, bien sea un cibersitio, blog, canal de vídeo, podcast, etc., con nuevo contenido tan a menudo como sea posible. Por lo menos todos los días y aún más si es posible. '],
	}, {
		title: 'Los Mejores Lugares en mi Página Web Para Insertar Palabras Clave',
		description: ['¡Muy Bien! iremos directamente al punto. Esta es una lista de <span>los mejores lugares en mi página web para insertar palabras clave</span> y por tanto, mejorar mi <span>SEO</span>.'],
	}, {
		title: 'Como Construir Enlaces de Manera Correcta ',
		description: ['Con las constantes actualizaciones de Google Penguin, Panda y la introducción de Colibrí, el <span>SEO</span> es más complejo que nunca. Las sanciones a algunos de los sitios web más populares del mundo, y la disminución constante de la prominencia de PageRank, los métodos tradicionales de <span>SEO</span>&nbsp;ya no tienen la misma importancia.&nbsp;Mientras que muchas técnicas ya son obsoletas, otras son temidas por su posible resultado negativo.&nbsp;La construcción de links es una de estas técnicas que se encuentra bajo la estricta vigilancia del pingüino.&nbsp;Sin embargo, esto debe ser visto como una oportunidad y no una amenaza, debido a que sigue siendo una de las formas más importantes y eficaces para clasificar su sitio web mejor.&nbsp;Si se realiza correctamente, puede ser una excelente manera de obtener una ventaja competitiva sobre los demás sitios web.&nbsp;Aquí hay algunas consejos para webmasters y expertos de <span>SEO:</span>'],
	}, {
		title: 'Herramienta Libre Investigación de Palabras Clave de SEO ',
		description: ['¿Alguna vez has escrito algo para publicarlo en línea y quiere que la gente sea capaz de encontrarlo?'],
	}
]

const DemoModulo = () => {
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

							<MoreArticles />
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