import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Agents from '../../assets/image/popularArticules/agentes.jpg';

const blogSeoData: BlogData[] = [
	{
		title: 'Como Probar el Archivo robots.txt',
		description: [
			'Las herramientas para webmaster de Google, conocidas ahora como la Consola de búsqueda de Google cuenta con una función que permite probar si el archivo robots.txt bloquea el acceso de los rastreadores web de Google a URL concretas del sitio debido a la<span style="color: #2a6496">importancia del archivo robots.txt para la seguridad y el <strong>SEO.</strong></span>',
			'<br>Puedes probar si el rastreador Googlebot-Video puede rastrear la url de un video que quieres bloquear en la búsqueda de videos de Google o si el rastreador Adsbot-Google puede rastrear la url de un anuncio que quieres bloquearle.',
			'<br>Estos son los <span style="color: #2a6496">rastreadores de Google</span>:',
			'<br>Veamos el siguiente ejemplo: si quieres que todas tus páginas aparezcan en la Búsqueda de Google, pero no quieres que se rastreen imágenes de tu directorio images, puedes configurar el archivo robots.txt del siguiente modo para evitar que el agente de usuario Googlebot-image rastree los archivos de tu directorio /images (pero permitir que Googlebot rastree todos los archivos):',
			'<pre style="background-color: #f1f1f1; box-shadow: 0 0 0 0.5px; padding: 15px; border-radius: 5px;">User-agent: Googlebot <br />Disallow: <br />User-agent: Googlebot-Image <br />Disallow: /images<br/>Puedes enviar una URL al <span className="primary-color">Probador de robots.txt.</span></pre>',
			'Como Probar el Archivo robots.txt',
			`<ol><li>Desde la <span style="color: #2a6496">página de inicio de Search Console, elige el sitio cuyo archivo robots.txt quieras probar.</li><br><li>Despliega el título Rastreo que hay en el panel de la izquierda y selecciona la herramienta Probador de robots.txt.</li><br><li>Haz cambios en el archivo robots.txt publicado en el editor de texto.</li><br><li>Desplázate por el código del archivo <code>robots.txt</code>para localizar las advertencias de sintaxis y los errores de lógica. El número de advertencias de sintaxis y de errores de lógica se muestra inmediatamente en la parte inferior del editor.</li><br><li>Escribe una extensión de la URL o la ruta en el cuadro de texto, en la parte inferior de la página.</li><br><li>Selecciona el agente de usuario que quieras simular en la lista desplegable que hay a la derecha del cuadro de texto<br><img src=${Agents} alt="agentes de usuario de Google" title="agentes de usuario de Google" width="189" height="147"></li><li>Haz clic en el botón PROBAR que hay junto a la lista desplegable de agentes de usuario para ejecutar la simulación.</li><br><li>Comprueba si en el botón PROBAR ahora pone ACEPTADA o BLOQUEADA para averiguar si la URL que ha introducido es bloqueado y rastreadores web de Google.</li></ol>
			`,
			'<br>Resulta muy útil probar el archivo robots.txt para todos los agentes de usuario. Muy aconsejable.'

		]
	}
]

const ComoProbar = () => {
	useEffect(() => {
		document.title = 'Como Probar el Archivo robots.txt - Consultoria SEO';
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

export { ComoProbar }	