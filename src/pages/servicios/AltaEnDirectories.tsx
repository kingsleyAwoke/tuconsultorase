import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles";
import { BlogItem } from "../components/blogitem";
import ContactAuthorSection from "../components/ContactAuthorSection";

const blogSeoData: BlogData[] = [
	{
		title: 'Alta en Directorios',
		description: [
			'El<strong> Alta en Directorios</strong> ha demostrado ser un m &eacute;todo maravilloso para la obtenci &oacute;n de enlaces de calidad de un solo sentido. La calidad de los enlaces entrantes mejora su posicionamiento en los buscadores y su visibilidad en Internet. Ofrecemos un servicio de <strong>alta en directorios </strong>para los sitios que cumplen con nuestra pol &iacute;tica de sitios aceptados.',
			'<br>Ofrecemos dar de <strong>alta en directorios </strong>de calidad a su sitio de forma manual para comprobar que cada directorio es gestionado por personas y existe un control sobre los sitios y categorias. Esta alta de sitios web la realizamos para un notable n&uacute;mero de directorios de calidad, que ofrezcen enlaces no rec&iacute;procos de un solo sentido, para de este modo conseguir visitantes orientados a su nicho de mercado y mejorar su posicionamiento en buscadores. Mediante la utilizaci&oacute;n de los servicios de <strong>alta en directorios</strong>, recibir&aacute;el tr&aacute;fico adicional a su sitio de esos directorios de calidad que mejoran el ranking en los motores de b&uacute;squeda.',
			'<br>Los paquetes de directorios incluyen lo siguiente:',
			'<ul><li>El uso de diferentes texto ancla para lograr una buena clasificaci&oacute;n.</li><li>Otra carater&iacute;stica del servicio de<strong> alta en directorios </strong>es que se realiza en directorios gratuitos para evitar enlaces de pago que afectan negativamente la clasificaci&oacute;n.</li><li>Alta manual en la categor&iacute;a relacionada.</li><li>Informe de la presentaci&oacute;n que se hizo a los directorios de su sitio web.</li></ul>',
			'<br><strong>Ventajas del alta en directorios</strong>',
			'<ul><li>Mejora de la posici&oacute;n debido a que son una forma de enlaces (cualquiera que conozca la optimizac&oacute;n del Search Engine, sabe lo importante que es tener enlaces que apunten a su sitio para mejorar el ranking de sitios web)</li><li>Nuestros servicios de <strong>alta en directorios</strong> le ahorrar&aacute;tiempo y esfuerzo que puede utilizar en otro tipo de comercializaci&oacute;n o&aacute;rea t&eacute;cnica del sitio web. Usted recibir&aacute;enlaces relevantes para apoyar sus estrategias de optimizaci&oacute;n de motores de b&uacute;squeda.</li><li>Ayuda en la r&aacute;pida indexaci&oacute;n de su sitio en los motores de b&uacute;squeda.</li></ul>'
		]
	}
]

const AltaEnDirectories = () => {
	useEffect(() => {
        document.title = 'Alta en Directorios - Consultoria SEO';
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

export { AltaEnDirectories }	