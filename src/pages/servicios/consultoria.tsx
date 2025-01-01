import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection"

const blogSeoData: BlogData[] = [
	{
		title: 'Como la Consultoria Seo Aumenta la Eficacia de su sitio Web',
		description: [
			'En TuConsultora <strong>Seo</strong>, examinamos su sitio web, analizamos el tipo experiencia que su sitio ofrece a los usuarios, teniendo en cuenta la usabilidad y la experiencia de búsqueda en general. Evaluamos las técnicas de conversión que utiliza, para asegurar un embudo de conversión efectivo.',
			'<br>Por último, nos aseguramos de que su sitio cumple con las directrices de los motores de búsqueda y técnicas de optimización recomendadas, mientras investigamos a fondo la competencia de su industria. La formulación de una estrategia integral de contenido y la aplicación de nuestras probadas técnicas de marketing de contenidos para aumentar la visibilidad y la marca de su sitio web son una parte importante de este proceso.',
			'Analizando todos estos aspectos juntos y le presentamos un plan de acción integral, diseñado para ayudarle a llevar su negocio al siguiente nivel - una alta clasificación para los términos de búsqueda preferidos y la conversión de visitantes en clientes.',
			'<h2>Mejorar la visibilidad del Search Engine y las tasas de conversión</h2>',
			'Todo el trabajo duro que has puesto en tratar de mejorar sus rankings en los motores de búsqueda y su tasa de conversión ¿ha dado los resultados que usted esperaba?',
			'<ul><li>¿Están los clientes potenciales encontrando su sitio web o tienda de comercio electrónico con facilidad?</li><li>¿Podría ser que los clientes potenciales no pueden siquiera saben que existe su sitio?</li><li>¿Están los términos de búsqueda específicos altamente posicionados en los resultados de búsqueda?</li><li>¿Atrae su sitio web actualmente a un gran número de visitantes diarios y mantener una alta tasa de conversión?</li></ul>mantener una alta tasa de conversión?</li></ul>',
			'Graduaciones más altas son importantes para generar tráfico de búsqueda orgánica, pero no son suficientes para mejorar sus ingresos de ventas en línea.',
			'<h2>Alto Ranking y Conversiones</h2>',
			'Tener un hermoso sitio web y lograr una excelente clasificación en los motor de búsqueda puede aumentar el tráfico dirigido a su sitio web, pero con el fin de proporcionar algún beneficio en el balance final, su tasa de conversión debe ser optimizado. ¿Su sitio web pertenecen a esta categoría?',
			'<br>Algunos webmasters e incluso algunos <strong>SEO</strong>s (especialistas optimizadores de motores de búsqueda) creen que su trabajo se realiza una vez que han logrado altas graduaciones para las palabras clave específicas. A partir de ese momento en adelante, ellos pueden sentir que el rendimiento general del sitio es responsabilidad de otra persona.',
			'<br>Los consultores o especialistas <strong>SEO</strong>, no estamos satisfechos hasta que nuestros clientes están alineando así, con un tráfico muy dirigido y un proceso de conversión efectivo para maximizar los ingresos de su sitio. Alto tráfico de visitantes que buscan precisamente lo que su sitio ofrece es la única manera de lograr esto.',
			'<br>Nuestro trabajo es comprender tanto cómo los usuarios interactúan con los sitios web y motores de búsqueda como lo que se requiere para indexar y clasificar su sitio web con eficacia. Como una <strong> compañía de SEO ético</strong>, sentimos que es nuestra responsabilidad.',
			'<br>Estela Silva</Link> hoy para una propuesta que describe todas las opciones disponibles para mejorar el rendimiento de su sitio y conseguir las primeras posiciones del motor de búsqueda por delante de su competencia, y aumentar su tasa de conversión!'
		]
	}
]

const Consultoria = () => {
	useEffect(() => {
		document.title = 'Consultoria Seo - Consultoria SEO';
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

export { Consultoria }	