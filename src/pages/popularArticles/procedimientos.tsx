import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Security from '../../assets/image/popularArticules/security.jpg';

const blogSeoData: BlogData[] = [
	{
		title: 'Procedimientos de Seguridad Recomendados',
		description: [
			`<img src=${Security} alt="Procedimientos de seguridad recomendados por tuconsultoraseo" height='255' width= '255' title="Procedimientos de seguridad recomendados">`,
			'<br>Un atacante puede falsificar una solicitud para entrar a la <strong>pagina web</strong> destino de la victima, utilizando las credenciales del atacante; esto se conoce como inicio de sesi &oacute;n <strong>CSRF </strong> (Cross Site Request Forgery) o <strong>Falsificaci &oacute;n por &nbsp;</strong> Petici &oacute;n en sitios cruzados. M &aacute;s tarde el atacante puede iniciar sesi &oacute;n en el sitio con leg &iacute;timas credenciales y ver informaci &oacute;n privada o modificarla. Otra forma de entender CSRF es un ataque que obliga a un usuario a ejecutar acciones no deseadas en una aplicaci &oacute;n web en la que est &aacute;autenticado actualmente.',
			'<br>Si bien los siguientes m &eacute;todos le ayudan a prevenir ataques a su sitio, es importante darse cuenta que a medida que un administrador del sistema realice buenas pr &aacute;cticas de <strong>seguridad</strong>, impidir &aacute;que la <strong>seguridad </strong>del sitio se vea comprometida.',
			'<br>Medidas de administradores de sitios:',
			'<ol><li>No navegue por otros sitios en el mismo navegador, mientras est &aacute;conectado a su sitio.</li><li>Evite el uso de la caracter &iacute;stica &quot;recuerdame &quot;o &quot;rememberme &quot;en sitios de terceros puede mitigar el riesgo SCRF.</li><li>No hacer clic en enlaces de spam o de correos electr &oacute;nicos.</li><li>Cierre la sesi &oacute;n en su sitio despu &eacute;s de haber terminado.</li><li>No permanezca conectado a su sitio, mientras no est &aacute;haciendo nada.</li><li>Aseg &uacute;rese de que la direcci &oacute;n en la barra del navegador coincide con la direcci &oacute;n de su sitio.</li></ol>',
			'Existen varias extensiones para navegadores para prevenir SCRF, aunque pueden interferir significativamente en el funcionamiento de muchos sitios.',
			'<br>Los sitios web pueden establecer varias contramedidas CSRF, aqu &iacute;algunas:',
			'<br><ul><li>Limitar el tiempo de vida de las cookies de sesi &oacute;n.</li><li>La exigencia de un elemento secreto, espec &iacute;fico del usuario en todos los env &iacute;os de formularios y URLs &nbsp;impide CSRF</li></ul>',
			'<br>Mediante la pr&aacute;ctica de estos h&aacute;bitos de navegaci &oacute;n segura eliminar&aacute;la mayor&iacute;a de las amenazas a su sitio web.'
		]
	}
]

const Procedimientos = () => {
	useEffect(() => {
		document.title = 'Procedimientos de Seguridad Recomendados - Consultoria SEO';
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

export { Procedimientos }	