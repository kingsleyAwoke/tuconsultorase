import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Vulnerabilidades from "../../assets/image/popularArticules/vulnerabilidades.jpg";

const blogSeoData: BlogData[] = [
	{
		title: 'Las Vulnerabilidades L&oacute;gicas',
		description: [
			`<img src=${Vulnerabilidades} alt="vulnerabilidades logicas" width='199' height='200'>`,
			'<br><strong>Las vulnerabilidades l&oacute;gicas</strong> son problemas en la l&oacute;gica de la aplicaci&oacute;n web en lugar de un problema en el c &oacute;digo fuente. <strong>Las vulnerabilidades</strong> l&oacute;gicas pueden ser devastadores para una aplicaci&oacute;n web.&nbsp;Para demostrar una vulnerabilidad l&oacute;gica, voy a comprar 2 entradas para el concierto de un sistema de tickets en l&iacute;nea.&nbsp;Despu&eacute;s elijo mi banda favorita, la ubicaci&oacute;n y el n&uacute;mero de entradas, antes de entrar en los detalles de la tarjeta de cr&eacute;dito de la URL en el navegador muestra lo siguiente:',
			'<br><strong><em>http://concerts/final.asp?concertID=5 &amp;quantity=2 &amp;price=200.00</em></strong>',
			'<br>Lo anterior significa que final.asp acepta tres par&aacute;metros de entrada, y proceder&aacute;a tratar de inyectar los tres, se har&aacute;a mano de forma autom&aacute;tica una lista de ataques de Internet para comprobar si final.asp es seguro.',
			'<br>Solo los seres humanos ser&iacute;an capaz de determinar que el verdadero significado de los par&aacute;metros que se pasa en la URL, que en este caso se refiere al n&uacute;mero de identificaci&oacute;n de conciertos, el n&uacute;mero de entradas que se compra y el precio de la transacci&oacute;n.&nbsp;&iquest; Y si se altera manualmente la direcci&oacute;n URL a la siguiente:',
			'<br><strong><em>http://concerts/final.asp?concertID=5 &amp;quantity=2 &amp;price=1.00</em></strong>',
			'<br>&iquest;La aplicaci &oacute;n web aceptar &aacute;la petici &oacute;n con el nuevo precio?&nbsp;&iquest;Enviar &aacute;los boletos y s&oacute;lo cargar &aacute;a mi tarjeta de cr&eacute;dito 1$ o va a negar la solicitud?&nbsp;Es decir; esto es un problema de l&oacute;gica y un ser humano ser &aacute;capaz de determinar si hay un problema con la l&oacute;gica de la aplicaci&oacute;n web; &iquest;el usuario es capaz de obtener el producto a un precio mucho m &aacute;s bajo?.',
			'<br>Uno puede tener la presunci&oacute;n err&oacute;nea de que tales <strong>vulnerabilidades l&oacute;gicas </strong>en una <strong>pagina web</strong>no son una ocurrencia com &uacute;n. No hace mucho tiempo, una empresa de publicidad en l&iacute;nea ofreci &oacute;50$ de anuncios gratuitos a los nuevos subscriptores que compraran 50$ o m&aacute;s en publicidad.',
			'<br>El sistema ten&iacute;a un defecto en su dise &ntilde;o.&nbsp;Cuando un nuevo suscriptor se registraba, incluso si el abonado no compra cualquier cosa,&eacute; o ella todav&iacute;a conseguia los 50$ de publicidad gratuita.',
			'<br>As&iacute;, la aplicaci &oacute;n web ten&iacute;a un gran defecto y el negocio estaba perdiendo un mont &oacute;n de dinero.',
			'<br>&iquest;Que te pareci &oacute;este tipo de vulnerabilidades?'
		]
	}
]

const LasVulnerabilidades = () => {
	useEffect(() => {
		document.title = 'Las Vulnerabilidades Lógicas - Consultoria SEO';
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

export { LasVulnerabilidades }	