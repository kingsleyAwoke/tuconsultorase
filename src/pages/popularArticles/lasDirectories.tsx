import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection"

const blogSeoData: BlogData[] = [
	{
		title: 'Las directrices para webmaster de Google',
		description: [
            'Una directriz es una norma o instrucción sobre cómo realizar una actividad.',
			'Google se ha tomado el trabajo de publicar una serie de directrices o prácticas para ayudar a su rastreador a encontrar, clasificar e indexar los sitios:',
			'<h2 style="color: green">Directrices para webmaster</h2>',
			'Los sitios web que infrinjan estas normas pueden perder su ranking y ser penalizados por Google',
			'Ellos dan especial atención a las "<em>Directrices de calidad</em>" en las que se refieren a prácticas ilícitas y que dan lugar a severas sanciones.',
			'<br>Si Google nos da una serie de normas para posicionar nuestros sitios ¿por qué algunos insisten en trucos, atajos, conocimientos "especiales" o prácticas engañosas?',
			'<h2 style="color: green">Existen 3 tipos de directrices:</h2>',
			'<ul><li>Directrices de diseño y de contenido</li><li>Directrices técnicas</li><li>Directrices de calidad</li></ul>',
			'Indudablemente un sitio de  calidad no puede infringir directrices.',
			'<br>Los algoritmos de calidad del sitio de Google, están dirigidos a ayudar a las personas a encontrar los sitios "de alta calidad", estos algoritmos apoyan las directrices de Google.',
			'<br>Por ejemplo: actividades como repetición de palabras clave, la compra de enlaces que mejoran el PageRank o el uso de texto invisible; son actividades webspam, estas tácticas intentan que sus sitios aparezcan en los primeros resultados de búsqueda.',
			'<br>Esto es perjudicial para los sitios web relevantes porque quedan enterrados y se vuelven más difíciles de encontrar.',
			'<br>Afortunadamente los algoritmos de Google pueden detectar la gran mayoría del spam y rebajar su posición de forma automática. Para el resto, cuentan con equipos que revisan manualmente los sitios.',
			'<br>Si usted quiere revisar si su sitio se ve afectados por una acción manual de webspam, diríjase a Herramientas para webmasters de Google y haga clic en "Acciones Manuales" bajo "tráfico de búsqueda." Es probable que aparezca un mensaje que dice:',
			'<br>"No se encuentra ninguna acción contra spam web manual"',
			'<br>Si ve este mensaje, entonces su sitio no tiene una degradación directa por razones de spam web. Si su sitio está en la fracción muy pequeña (2%) de recibir una acción manual de spam, lo más probable es que le avisen en las Herramientas para webmasters.',
			'<br>Una acción de web spam manual puede aplicarse a todo el sitio o a una sección específica del sitio',
			'<br>Una vez que haya corregido cualquier violación de las directrices de calidad, el siguiente paso es solicitar una reconsideración.',
			'<h3 style="color: green">La lista de acciones manuales incluyen</h3>',
			'Enlaces no naturales a sus vínculos de sitio. (La compra de enlaces o participar en esquemas de enlaces para manipular PageRank es una violación de de Google Directrices para webmasters)',
			'<ul><li>Enlaces no naturales a su sitio.</li><li>Sitio hackeado</li><li>Contenido con poco o ningún valor añadido (Contenido delgado)</li><li>Correo no deseado</li><li>Paginas y dominios puerta</li><li>Spam generado por el usuario</li><li>Encubrimiento y/o redireccionamientos engañosos.</li><li>Texto oculto y/o relleno de palabras clave</li><li>Freehosts Spammy (“ <cite title="si una parte significativa de las páginas de los sitios alojados en un servidor son spam, podemos tomar acción manual sobre el servidor en su conjunto. Google" style="color: green">si una parte significativa de las páginas de los sitios alojados en un servidor son spam, podemos tomar acción manual sobre el servidor en su conjunto. Google</cite>”.)</li><li>Discrepancia de imágenes.</li></ul>',
			'Sin embargo; existen otras directrices que conviene respetar y acatar. Mi preferida es crear un sitio útil, rico en información.',
			'<br>El texto completo de esta directriz estable: "<cite title="Crear un sitio útil con mucha información, escribir páginas que describan con claridad y precisión el contenido" style="color: green">Crear un sitio útil con mucha información, escribir páginas que describan con claridad y precisión el contenido</cite>".',
			'<h4>Otras directivas de Google:</h4>',
			'<ul><li>Una <strong>página web </strong>debe contener un número razonable de enlaces. Lo que importa aquí, es no abrumar a los lectores del sitio con un número excesivo de enlaces. Si hay más de 100 enlaces <strong><em>probablemente </em></strong>no ésta siguiendo esta pauta.</li><li>"<cite title="Asegúrate de que tu servidor web admita la cabecera HTTP &quot;If-Modified-Since&quot;. Esta función permite que tu servidor web avise a Google si el contenido de tu sitio ha cambiado desde la última vez que lo rastreamos. El uso de esta función te permitirá ahorrar ancho de banda y reducir gastos generales" style="color: green">Asegúrate de que tu servidor web admita la cabecera HTTP "If-Modified-Since". Esta función permite que tu servidor web avise a Google si el contenido de tu sitio ha cambiado desde la última vez que lo rastreamos. El uso de esta función te permitirá ahorrar ancho de banda y reducir gastos generales</cite>". Para asegurarte si tu servidor web admite la cabecera If-Modified-Since, utiliza nuestra herramienta gratuita If Modified.</li><li>Crear un mapa del sitio para los usuarios.</li><li>"<cite title="Hacer esfuerzos razonables para asegurar que la publicidad no afectan el posicionamiento en buscadores. Por ejemplo, los anuncios de AdSense de Google y DoubleClick enlaces deben estar bloqueados del rastreo de un archivo robots.txt" style="color: green">Hacer esfuerzos razonables para asegurar que la publicidad no afectan el posicionamiento en buscadores. Por ejemplo, los anuncios de AdSense de Google y DoubleClick enlaces deben estar bloqueados del rastreo de un archivo robots.txt</cite>". <span>Muchos sitios web y páginas web han perdido su clasificación en Google o se han eliminado de Google por completo porque no siguieron esta pauta. </span>Aprender más sobre enlaces de pago y publicidad</li><li>Piense en las palabras que podrían introducir los usuarios para localizar tus páginas y asegúrate de que esas palabras están incluidas en tu sitio.</li><li>"<cite title="Intenta utilizar texto en lugar de imágenes para mostrar nombres, contenido o enlaces importantes. El rastreador de Google no reconoce el texto integrado en imágenes. Si debes utilizar imágenes para contenido textual, considera la posibilidad de utilizar el atributo &quot;ALT&quot; para incluir algunas palabras de texto descriptivo" style="color: green">Intenta utilizar texto en lugar de imágenes para mostrar nombres, contenido o enlaces importantes. El rastreador de Google no reconoce el texto integrado en imágenes. Si debes utilizar imágenes para contenido textual, considera la posibilidad de utilizar el atributo "ALT" para incluir algunas palabras de texto descriptivo</cite>". Para averiguar si sus imágenes respetan esta pauta utilice nuestra herramienta gratuita seo imagen.</li><li>"<cite title="Asegúrate de que los elementos &lt;title&gt; y los atributos &quot;alt&quot; de tu sitio sean descriptivos y precisos" style="color: green">Asegúrate de que los elementos &lt;title &gt;y los atributos "alt" de tu sitio sean descriptivos y precisos</cite>".</li><li>Busca los enlaces dañados y corrige el código HTML. </li><li>Les invito a conocer y respetar las directrices de Google y entre todos construiremos un internet rico y valioso, al tiempo que nuestros sitios estarán bien indexados y posicionados.</li></ul>'
		]
	}
]

const LasDirectories = () => {
	useEffect(() => {
		document.title = 'Las directrices para webmaster de Google - Consultoria SEO';
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

export { LasDirectories }	