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
		title: 'Publicidad Pago por Clic',
		description: [
			'<strong>Publicidad Pago por </strong><font><strong>clic </strong>(PPC) es un modelo de <strong>publicidad </strong>de Internet utilizado en sitios web, en la que los anunciantes pagan s&oacute;lo cuando el cibernauta hace clic en su anuncio.</font><font>Con los motores de b&uacute;squeda, los anunciantes suelen pujar por frases de palabras clave relevantes para su mercado objetivo.</font><font>Los sitios de contenido suelen cobrar un precio fijo por clic en lugar de utilizar un sistema de licitaci&oacute;n.</font><font>El concepto de <strong>pago por clic</strong> gu&iacute;a a los empresarios dedicados en cuanto a la forma de ampliar el negocio de la manera m &aacute;s sofisticada.</font><font>Un hombre convertirse en un hombre de negocios realmente inteligente, siguiendo los consejos y trucos de <strong>PPC</strong>.</font>',
			'<br><font>Los anunciantes disfrutan de la <strong>publicidad </strong>PPC porque es simple, tienen un mayor control sobre su campa&ntilde;a publicitaria, y reciben una mejor retroalimentaci&oacute;n sobre su desempe&ntilde;o. Aunque existen muchos proveedores de PPC, Google AdWords, Yahooo! Search Marketing y Microsoft adCenter son los tres operadores de red m&aacute;s grandes, y los tres operan bajo un modelo basado en la oferta-</font><font>El programa de Google llamado AdWords ofrece <strong>pago </strong>dirigido por clic en los anuncios a trav&eacute;s de sus propios sitios web en los buscadores y una gran cantidad de sitios asociados. </font><font>Google encabeza la lista con su creciente participaci&oacute;n en la b&uacute;squeda de pago, principalmente de su <strong>pago </strong>por clic, servicio de AdWords.</font>',
			'<br><font>La clave para las campa&ntilde;as de PPC eficaz est &aacute;en su estrategia de palabras clave y la calidad de su an&aacute;lisis a los visitantes.</font><font>Muchas empresas establecen sus campa&ntilde;as de publicidad PPC sin mucha planificaci&oacute;n. Las c</font><font>ampa&ntilde;as deben estructurarse de modo que las palabras clave improductivos puedan ser filtrados y las de alto rendimiento mejoradas.</font><font>Para maximizar el rendimiento de la publicidad PPC, usted debe hacer una oferta sobre las frases de palabras clave seleccionadas, escribir persuasivamente, moviendo el texto del anuncio, y tener una p &aacute;gina bien escrita, as&iacute; obtendr &aacute;clics a trav &eacute;s del anuncio.</font><font>Si usted sabe c &oacute;mo atraer clics al anuncio y ofrecer una soluci&oacute;n a un problema, usted ser &aacute;recompensado con un buen &iacute;ndice de ventas.</font>',
			'<h2 style="color: #428bca;">&iquest;Por qu &eacute;elegir TuConsultoraSeo para su campa&ntilde;a de pago por clic?</h2>',
			'<ul><li><font>Un plan personalizado es dise&ntilde;ado para cada campa&ntilde;a de PPC, mientras que el desarrollo del plan tiene en cuenta los puntos fuertes de nuestros clientes y las directrices establecidas por los motores de b&uacute;squeda m&aacute;s importantes.</font></li><li><font>Informamos regularmente al cliente sobre el progreso de las campa&ntilde;as.</font></li><li><font>Nuestro equipo est &aacute;permanentemente actualizado sobre nuevas tendencias de marketing digital y le ayudar&aacute;en sus futuros planes de comercializaci&oacute;n de su negocio.</font></li><li><font>na bien orientada<strong> publicidad de pago por clic </strong>le entregara un excelente retorno de su inversi&oacute;n.</font></li></ul>',
			'<br>Dependiendo de sus requerimiento se dise&ntilde;ar&aacute;una campa&ntilde;a eficaz de <strong>publicidad pago por clic, </strong>expliquenos en el siguiente formulario qu&eacute;necesita, nos pondremos en contacto con usted con una propuesta, s&oacute;lo entonces usted cancelar&iacute;a el servicio.',
			'<br><strong>No olvide indicarnos su sitio o url.</strong>',
			'<iframe allowtransparency="true" frameborder="0" src="https://services.codeeta.com/widget/v3/47769/?responsive=pc&amp;parent=https%3A%2F%2F&amp;embed=script&amp;widget_id=47769" height="528"></iframe>'
		]
	}
]

const PublicidadPago = () => {
	useEffect(() => {
		document.title = 'Publicidad Pago por Clic - Consultoria SEO';
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

export { PublicidadPago }	