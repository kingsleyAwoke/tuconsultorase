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
		title: 'Dise&ntilde;o de paginas web Joomla',
		description: [
			'En el <strong>dise&ntilde;o de paginas web joomla</strong> la salida visual es controlada por las <strong>plantillas</strong>, &eacute;stas se pueden hacer seg&uacute;n sus requerimientos. Tenemos dos formas de hacer el dise&ntilde;o que desee:',
			'<br>Plantilla joomla personalizada y una nueva <strong>plantilla </strong>joomla adaptada a sus necesidades espec&iacute;ficas.',
			'<br>Plantilla Joomla Personalizada,<br> Hay miles de <strong>plantillas</strong> disponibles en varios sitios web a trav&eacute;s de la web, algunas de estas <strong>plantillas</strong>son gratuitas y algunas tienen un cargo. La forma moderna de los negocios para los dise&ntilde;adores de <strong> plantilla </strong>web es poner en marcha un club de plantilla. Los club de plantilla cobran una cantidad por un a &ntilde;o, el acceso a cientos de <strong>plantillas</strong>. Pero usted debe saber, que cientos, si no miles de personas la est &aacute;n utilizando, nosotros personalizamos las <strong>plantillas</strong>, nuestra manera preferida de dise&ntilde;o de un nuevo sitio web es tener una <strong>plantilla </strong>extraordinaria, fuera de lo com&uacute;n y transformarla, en exactamente lo que quiere usted para el dise&ntilde;o de su presencia/sitio web en l&iacute;nea.',
			'<br>Tuconsultoraseo puede dise&ntilde;ar y construir una nueva plantilla Joomla desde cero. Todo lo que necesitamos es el esquema de su empresa corporativa: color, su logotipo, una idea b&aacute;sica del tipo de men&uacute;(desplegable, men&uacute;superior de una sola planta, men&uacute;lateral de varios niveles, etc) y la estructura de su dise&ntilde;o preferido. A partir de esta informaci&oacute;n b&aacute;sica, utilizando nuestra amplia experiencia de creaci&oacute;n de <strong>plantillas </strong>Joomla, nuestro equipo de expertos crear&aacute;una plantilla a medida que ofrece, el estilo, la innovaci&oacute;n y lo m&aacute;s importante de todo, la satisfacci&oacute;n del visitante.',
			'<br>Joomla Est &aacute;ndares de <strong>Dise&ntilde;o Web</strong><br />Todos nuestros <strong>dise&ntilde;os de paginas web/plantillas </strong>son XHTML y CSS compatibles, nunca ponemos en marcha una p&aacute;gina web con errores de javascript o cualquier mala codificaci&oacute;n. Desarrollado para ser accesible a los que utilizan lectores de pantalla y otras tecnolog&iacute;as asistida.',
			'<br>Compatibilidad del navegador con nuestros <strong>dise&ntilde;os Web</strong>',
			'<br>compatibles en todos los navegadores principales: Google Chrome, Mozilla Firefox, Opera, Safari e IE9 +.',
			'<br>Desarrollamos para la&uacute;ltima versi&oacute;n de Internet Explorer (IE), si una nueva versi&oacute;n se ha publicado recientemente, vamos a desarrollar sin costo adicional para las dos&uacute;ltimas versiones de IE.',
			'<br>Nuestros servicios de <strong>dise&ntilde;o paginas web Joomla</strong><br />son utilizados por los principales medios de comunicaci&oacute;n creativos y empresas de medios digitales. Ellos reconocen que somos m&aacute;s especializados de lo que pueden manejar, o simplemente le resulte m&aacute;s rentable contratar a verdaderos expertos Joomla para obtener el trabajo de manera r&aacute;pida y profesional.',
			'<br>Nuestro objetivo es alcanzar sus objetivos de negocio, el <strong>dise&ntilde;o de p&aacute;ginas web </strong>es in&uacute;til si no est &aacute;cumpliendo con sus objetivos:',
			'<br>Si usted quiere un nuevo sitio web o una importante revisi&oacute;n de su sitio web existente, somos la empresa de <strong>dise&ntilde;o</strong> web para usted. Consulte nuestra p&aacute;gina de Joomla Web Design Portfolio y navegue por el resto del sitio para ver nuestra gama completa de servicios de <strong>dise&ntilde;o web </strong>Joomla.'
		]
	}
]

const DisenoPaginas = () => {
	useEffect(() => {
        document.title = 'Diseño de Páginas web - Consultoria SEO';
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

export { DisenoPaginas }	