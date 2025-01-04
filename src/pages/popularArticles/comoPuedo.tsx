import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Infeccio from '../../assets/image/popularArticules/infeccion.jpg';

const blogSeoData: BlogData[] = [
	{
		title: '¿Cómo puedo saber si mi sitio está infectado?',
		description: [
			`<img src=${Infeccio} alt="¿Como puedo saber si mi sitio esta infectado?" title="¿Cómo puedo saber si mi sitio está infectado?" width='259' height='194'>`,
			'<br>Una se&ntilde;al de que su sitio o <strong>pagina web </strong>puede haber sido infectado con software maligno es si su sitio muestra una advertencia en el navegador, como &quot;Este sitio puede da&ntilde;ar tu equipo&quot;o algo parecido. Una advertencia como esto significa que Google ha detectado algo sospechoso en su sitio, y puede haber sido infectado sin su conocimiento.',
			'<br>Google y otras compa&ntilde;&iacute;as emiten advertencias sobre sitios web comprometidos con el fin de proteger a los visitantes de su sitio. TuConsultoraSeo puede ayudarle a averiguar qu &eacute;hacer a continuaci&oacute;n y c&oacute;mo sacar su sitio de la lista negra.',
			'<br><strong>Otras se &ntilde;ales de que su sitio puede estar infectado</strong>:',
			'<ul><li>Usted ve extra &ntilde;os resultados de los motores de b &uacute;squeda para su sitio, como publicidad de productos farmac &eacute;uticos, ejemplo; viagra.</li><li>En herramientas para webmaster de Google puede consultar las palabras clave de contenido que no tienen que ver con el contenido de su sitio.</li><li>Los visitantes ven una advertencia de su software antivirus cuando visitan su sitio</li><li>Su sitio redirige a un dominio desconocido cuando ingresa al mismo desde su navegador, o cuando intenta acceder a &eacute;l desde los motores de b &uacute;squeda</li><li>Te das cuenta de que los permisos o archivos han sido modificados.</li><li>Usted recibe notificaciones de correo electr &oacute;nico de Google o su proveedor de alojamiento web acerca de posible malware en su sitio</li><li>Se da cuenta de que nuevos y extra &ntilde;os usuarios han sido a &ntilde;adidos.</li></ul>',
			'<strong>&iquest;C &oacute;mo se pudo infectar mi sitio?</strong>',
			'<br>Existen varias formas por las que la <strong>seguridad </strong>de sitios se ven comprometidas, algunas son:',
			'<ul><li>Anuncios publicitarios proporcionados por redes publicitarias. Muchas redes de anuncios de publicidad &nbsp;toman medidas oara protegerse de los anuncios infecciosos, sin embargo; este sistema no es totalmente infalible.</li><li>Los sitios tienen software obsoleto, tales coomo plugins o contrase &ntilde;as robadas o permisos inseguros.</li><li>Utilizar computadores infectados para actualizar si sitio web tambi&eacute;n puede infectar el sitio.</li></ul>',
			'<b>Si su sitio ha sido infectado, es importante que lo coloque fuera de l &iacute;nea hasta que haya identificado y eliminado el software maligno. Si sus visitantes acceden a su sitio, mientras todav &iacute;a est &aacute;infectado, sus computadores pueden estar en peligro!</b>',
			'<br>Usted no querr&aacute;que sus visitantes sean infectados y lo culpen a usted; asi como la reputaci&oacute;n de su sitio se vea afectada por esta causa.',
			'<br>Su primer paso en la limpieza es aprender a identificar y eliminar software maligno.',
			'<br>En TuConsultoraSeo podemos ayudarle identificar y eliminar el software maligno.'
		]
	}
]

const ComoPuedo = () => {
	useEffect(() => {
		document.title = '¿Cómo puedo saber si mi sitio está infectado? - Consultoria SEO';
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

export { ComoPuedo }	