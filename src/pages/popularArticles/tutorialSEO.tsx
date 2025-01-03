import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import EnSus from '../../assets/image/popularArticules/Ensus.jpg';

const blogSeoData: BlogData[] = [
	{
		title: 'Tutorial SEO Optimización Para Motores de Búsqueda',
		description: [
			`<img src=${EnSus} alt="Tutorial SEO. La carrera por las primeras posiciones en los resultados de busqueda" title="Tutorial SEO. La carrera por las primeras posiciones en los resultados de busqueda" height='228' width='340'>`,
			'<br><strong>Tutorial SEO. Optimización Para Motores de Búsqueda:</strong> esta es una guía paso a paso de SEO que le enseñará cómo optimizar un sitio web para la búsqueda, con <em>completas herramientas <strong>SEO</strong> gratuitas!</em> ¿Eres propietario de un sitio web y te preocupa que tu sitio no aparece en Google? ¿Planea un sitio web y desea hacerlo fácil de buscar desde el principio? Sea cual sea su situación, este tutoríal le enseñará todo lo básico de <strong>SEO</strong> y le propondrá consejos importantes de <strong>SEO</strong> para ayudarle a optimizar sus <strong>páginas web</strong> para ser encontrado en los motores de búsqueda.',
			'<br>Nuestro tutoríal <strong>SEO </strong>cubre una metodología "sombrero blanco" que se adhiere a las directrices de los motores de búsqueda. uestra empresa ofrece servicios de Internet marketing, herramientas de software y formación de <strong>SEO</strong>. De hecho, cientos de personas han asistido a los cursos de formación en salones de clases y aulas virtuales tanto a nivel local como internacional. Esta experiencia combinada hace a Estela Silva y su equipo de consultores especialmente cualificados para presentar este útil <strong>Tutorial SEO Optimización Para Motores de Búsqueda</strong> altamente ético y así enseñarte las mejores prácticas que reflejan los últimos avances en consultas de búsqueda.',
			'<h2 style="color: #428bca;">¿Qué es SEO?</h2>',
			'<strong>La optimización de motores de búsqueda (SEO) es la ciencia y el arte de aumentar el tráfico a un sitio web, ayudando a que su clasificación en los resultados de búsqueda orgánica (no pagados) sea más alta. Incluye consejos de <strong>SEO</strong> y estrategias que son dignas de confianza para mejorar tanto los factores internos y externos de su sitio web que influyen en su clasificación (conocidos como factores o elementos "en la página" y "fuera de la página") para SEO.</strong> La optimización implica algunos conocimientos de programación web combinado con la escritura, la comercialización, la marca y otras habilidades del rompecabezas y de este modo clasificar competitivamente en los resultados de las consultas de búsqueda. Si usted hace todo de este modo (o al menos, mejor que sus competidores), se puede lograr un mejor posicionamiento en las secciones orgánicas de resultados de los buscadores de páginas. Y usted puede tener un sitio web capaz de mantener sus objetivos de ingreso.',
			'<h2 style="color: #428bca;">¿Cómo funciona el ranking o clasificación de página web?</h2>',
			'Los motores de búsqueda quieren mostrar los "mejores" resultados posibles - los expertos más relevantes y más páginas web de calidad que satisfagan al buscador. Para ello, los motores de búsqueda analizan más de 200 factores para determinar la relevancia y la pertinencia de un sitio con respecto a la consulta de búsqueda. Algunos de estos factores se tejen en la página web (factores «on-page"). Otros son señales de confianza basados en enlaces de sitios de buena reputación y (en algunos casos) la participación en medios sociales. No hay una sola <strong>página web</strong>, incluso con la mejor optimización de motores de búsqueda en el mundo, que pueda ser perfecta en todos los más de 200 factores de clasificación. Por otra parte, nadie sabe <em>con precisión cuáles son los factores que incluyen o cómo se ponderan para determinar los resultados de búsqueda para una palabra clave o consulta dada. Entonces, ¿Cómo se hace <strong>SEO</strong>?</em> En este tutorial <strong>SEO </strong>te enseñamos un enfoque de "ganarle al líder" para buscar la mejor clasificación en un motor de búsqueda. Cuando Google o Bing piensan que un sitio es altamente gratificante para los usuarios, les premia con una alta clasificación en los resultados de las consultas de búsqueda. Una vez que sepa qué opciones estructurales y de contenido trabajaban para los "líderes", Ud. puede hacerlo aún mejor al hacer sus páginas lo "menos imperfectas"!',
			'<br>No hay secretos en la optimización de motores de búsqueda o trucos - sólo las metodologías a seguir con el fin de ayudar a un sitio que ofrece valor a los usuarios para convencerles de ser elegido en los resultados de búsqueda. El <strong>SEO</strong>de hoy debe estar comprometido no sólo a la optimización de un sitio web, sino también con lo que es un sitio de calidad que atrae los enlaces de forma natural y es digno de la clasificación. Vale la pena repetirlo:',
			'<br><div style="border-left: 4px solid #f1f1f1; color: green;"><blockquote><strong>El trabajo de optimización de motores de búsqueda no puede hacer a un sitio cutre volar.</strong><br>El trabajo <strong>SEO</strong> <strong>consiste en rediseñar el sitio web para que sea un águila.</strong><strong><br>- Estela Silva</strong></blockquote></div>',
			'La creación de un sitio web que pueda alcanzar una alta clasificación implica más que conocimientos técnicos, o la escritura de contenido, o enlaces, o la presentación a los motores de búsqueda por sí solo; se requiere un esfuerzo integral. una metodología SEO probada formal fuertes herramientas de optimización de motores de búsqueda. Este tutorial <strong>SEO </strong>es una guía de instrucciones que abarca todo eso y más. <em>Es como tomar un curso de formación</em> <strong><em>SEO gratis!</em></strong>',
			'<br>Antes de empezar, usted debe entender que estar entre los 3 primeros lugares en los resultados del motor de búsqueda se puede lograr, pero no sin un gran esfuerzo. Sus <strong>páginas web </strong>deben obtener alta clasificación de contenido de muy alta calidad <em>y</em>la implementación de las mejores prácticas de los conceptos básicos de optimización <strong>SEO</strong>. Sin embargo, incluso los mejores sitios, manteniendo una <strong>clasificación superior SEO orgánica</strong> requieren un seguimiento constante de palabras clave y reelaboración de contenidos. El posicionamiento en buscadores nunca descansa - pero tampoco lo hace su competencia.',
			'<h2 style="color: #428bca;">¿Qué hay en este tutorial SEO?</h2>',
			'Esta guía <strong>SEO</strong> de instrucciones sigue la metodología de colocación de palabra clave demostrada que Estela Silva ha enseñado a cientos de estudiantes de todo el mundo en nuestros renombrados <strong>cursos de formación de SEo</strong>. Y también hemos proporcionado <strong>herramientas SEO gratuitas, presentaciones, infografias y videos</strong> para ayudarle en cada paso del camino.',
			'<br>Para asegurarse de que su educación está bien fundamentada y es eficaz, estas páginas abarcan una amplia gama de temas relacionados con el marketing en Internet. Aquí aprenderás consejos de <strong>SEO </strong>para:',
			'<ul style="list-style-type: none"><li>Paso 1: <strong style="color: #428bca;">Búsqueda de palabras clave - Cómo Seleccionar Palabras clave</strong></li><li>Paso 2: <strong style="color: #428bca;">Investigación Competitiva - ¿Quién es su competencia en SEO?</strong></li><li>Paso 3: <strong style="color: #428bca;">Análisis de la competencia SEO - Como espiar a su competencia</strong></li><li>Paso 4: <strong style="color: #428bca;">Elegir Palabras clave para SEO</strong></li><li>Paso 5: <strong style="color: #428bca;">Consideraciones clave al escribir contenido</strong></li><li>Paso 6: <strong style="color: #428bca;">Cómo utilizar palabras clave en contenido</strong></li><li>Paso 7: <strong style="color: #428bca;">Cómo optimizar el contenido del sitio web para SEO</strong></li><li>Paso 8: <strong style="color: #428bca;">Cómo presentar un sitio Web en los motores de búsqueda</strong></li><li>Paso 9: <strong style="color: #428bca;">Sitemaps - ¿Cómo crear un mapa del sitio?</strong></li><li>Paso 10: <strong style="color: #428bca;">El uso de Rich Media</strong></li><li>Paso 11: <strong style="color: #428bca;">Cómo optimizar el contenido multimedia para el SEO</strong></li><li>Paso 12: <strong style="color: #428bca;">Cómo estructurar tu página web</strong></li><li>Paso 13: <strong style="color: #428bca;">Construcción de Enlaces - Cómo atraer enlaces de calidad</strong></li><li>Paso 14: <strong style="color: #428bca;">Cómo evitar sanciones de Google</strong></li><li>Paso 15: <strong style="color: #428bca;">Seguimiento de Backlinks y Poda de Enlaces</strong></li><li>Paso 16: <strong style="color: #428bca;">Consejos Técnicos SEO</strong></li><li>Paso 17: <strong style="color: #428bca;">SEO Movil</strong></li><li>Paso 18: <strong style="color: #428bca;">Cómo controlar el posicionamiento en buscadores y el progreso SEO</strong></li><li>Conclusión: <strong style="color: #428bca;">Repetir - SEO: El trabajo que nunca termina</strong></li></ul>',
			'<strong>Listo para aprender?</strong> <em>Vamos al comienzo del Tutorial <strong>SEO </strong>de Tu Consultora <strong>SEO</strong>!</em> Comienza con la investigación de palabras clave.',
			'<br>Si te parece útil este tutorial gratuito de <strong>SEO </strong>copia (Ctrl+C) y pega (Ctrl+V) este código en tu sitio web:'
		]
	}
]

const TutorialSEO = () => {
	useEffect(() => {
		document.title = 'Tutorial SEO Optimización Para Motores de Búsqueda - Consultoria SEO';
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

export { TutorialSEO }	