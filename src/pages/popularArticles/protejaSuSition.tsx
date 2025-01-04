import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Ataques from '../../assets/image/popularArticules/ataques.jpg';

const blogSeoData: BlogData[] = [
	{
		title: 'Proteja su sitio contra ataques de fuerza bruta',
		description: [
			`<img src=${Ataques} alt="proteja su sitio contra ataques de fuerza bruta" width='275' height='183'>`,
			'<br>En el art&iacute;culo&quot;Importancia de usar un nombre de usuario y contrase&ntilde;a fuerte&quot; refimos su relevancia en funci&oacute;n de la seguridad del sitio.',
			'<br><font>Su &aacute;rea de inicio de sesi&oacute;n podr&iacute;a ser atacada en este mismo momento por los robots sistem&aacute;ticamente bombardeando con miles de combinaciones de nombre de usuario y contrase &ntilde;a. </font>He aqu &iacute;un ejercicio de 2 minutos para ver si su sitio est &aacute;experimentando ataques de&quot;Fuerza Bruta&quot;.',
			'<ul><li>Abra su cliente FTP y acceda a su sitio.</li><li>Navegue hasta la carpeta public_html/logs.</li><li>Descargue el archivo error.php a su escritorio</li><li>Abralo con un editor de texto</li></ul>',
			'&iquest;Qu &eacute;ves? &iquest;Ve miles de l&iacute;neas de este tipo?',
			'<br><div style="background-color: #f1f1f1; border-left: 5px solid rgb(129, 188, 240); padding: 15px 20px; font-size: 13px; border-radius: 5px; box-shadow: 0 0 0 0.5px">26/07/2013 19:18:23 INFO 123.456.78.90 Joomla FALLA: nombre de usuario y la con trase&ntilde;a no coinciden o usted no tiene una cuenta todav&iacute;a.</div>',
			'<br>Cada l&iacute;nea representa un intento fallido de acceder a su sitio. Usualmente vemos entre 10.000 y 40.000 intentos de conexi&oacute;n fallidos en funci &oacute;n de la popularidad y la edad del sitio. El sitio m&aacute;s popular confirmamos un registro de m&aacute;s de 100.000 entradas fallidas cada mes hasta que instalamos una extensi&oacute;n para detectar y contrarrestar los ataques de fuerza bruta. Por favor, h&aacute;ganos saber en los comentarios c&oacute;mo muchos de estos mensajes fueron encontrados en sus registros.',
			'<h3>&iquest;Qu&eacute;es un ataque de fuerza bruta?</h3>',
			'Un ataque de fuerza bruta es un m&eacute;todo de atacar un sitio web mediante el bombardeo sistem&aacute;tico de la p&aacute;gina de inicio de sesi&oacute;n con diferentes combinaciones nombre de usuario y contrase&ntilde;a.',
			'<br>Este m&eacute;todo de ataque de fuerza bruta a un sitio es muy com&uacute;n. La mayor&iacute;a de los administradores de Joomla utilizan el password predeterminado de Super Usuario de &#39;admin &#39;. Y, &iquest;puede usted creer que la contrase &ntilde;a m&aacute;s popular en el mundo es &#39;password &#39;? Seguido de combinaciones de &#39;123123 &#39;, &#39;123456 &#39;, &#39;qwerty o palabras comunes como &#39;b &eacute;isbol &#39;y &#39;mono &#39;.',
			'<br>Los hackers utilizan robots automatizados que est &aacute;n programados para rastrear la web en busca de la carpeta administrador de sitios Joomla y la carpeta para sitios de Wordpress. Una vez localizado van a trabajar presentando datos de acceso una y otra y otra vez. Estos scripts se ejecutan constantemente, completamente automatizado, d &iacute;a y noche. Cuando se produce un inicio de sesi &oacute;n exitoso el hacker recibir &aacute;una notificaci &oacute;n y es all &iacute;cuando su sitio est &aacute;en peligro.',
			'<br>El hecho es que, si se utiliza una conexi&oacute;n sencilla y una contrase &ntilde;a para acceder a su sitio, hay una alta probabilidad de los hackers finalmente la descubran.',
			'<h3>&iquest;C &oacute;mo contrarrestar los ataques de fuerza bruta en mi sitio Joomla?</h3>',
			'Usted puede contrarrestar esto en su sitio Joomla mediante la configuraci&oacute;n de un componente de seguridad.&nbsp;Utilice una combinaci&oacute;n de nombre de usuario y contrase&ntilde;a fuerte y cambielas regularmente y utilice una combinaci &oacute;n de min&uacute;sculas, may&uacute;sculas, n&uacute;meros, letras y s&iacute;mbolos. Esto lo explicamos en &quot;Importancia de usar un nombre de usuario y contrase&ntilde;a fuerte&quot;&nbsp;as &iacute;como tambi&eacute;n explicamos en dicho art&iacute;culo que es posible crear nombres de usuarios y contrase&ntilde;as extrafuertes y f&aacute;ciles de recordar.',
			'<br>Si necesita ayuda para asegurar su sitio, cont &aacute;ctenos.'
		]
	}
]

const ProtejaSuSition = () => {
	useEffect(() => {
		document.title = 'Proteja su sitio contra ataques de fuerza bruta - Consultoria SEO';
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

export { ProtejaSuSition }	