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
		title: 'Qué hacer si recibe una acción manual contra spam',
		description: [
			'¿Qué hacer si recibe un recibe una acción manual contra spam web?',
			'<br>Hemos escrito dos articulos acerca de como evitar las sanciones de Google de nuestro TUTORIAL <strong>SEO</strong> y como recuperarse del efecto Google panda.',
			'<br>Recuerde que Google ha hecho pública sus directivas para webmaster,  todo dueño de sitios o <strong>paginas web</strong> debería conocerlas…y respetarlas si quiere que su sitio no enfrente una sanción. Respetar las directivas de los motores de búsqueda es una sabia desición <strong>SEO.</strong>',
			'<br>¿Dónde ver la lista completa de acciones manuales?',
			'<ol><li>En el Panel de control de Herramientas para webmasters de Google, haz clic en Tráfico de búsqueda.</li><br><li>Haz clic en Acciones manuales.</li><br><li>Revisa todas las acciones manuales que aparecen en la lista. Cuando hayas solucionado estos problemas y estés seguro de que tu sitio respeta las directrices para webmasters, haz clic en Solicitar una revisión para enviar una solicitud de reconsideración a Google.</li></ol>',
			'Si no tiene acciones manuales en herramientas para webmaster, ¡felicitaciones! Pero no por eso deje de leer el presente artículo ya que no tener acciones manuales no significa que no podrá tenerlas en el futuro. Ojalá no. ;-)',
			'<br>Si usted hubiera recibido una acción manual del equipo de Google spam web, entonces usted necesita seguir el siguiente proceso en el mismo orden en que se presenta aquí. Recuerde que usted tiene que seguir estrictamente el procedimiento y debe dar atención a los detalles. Si no cumple con alguno de los pasos, o lo hace en un orden diferente, nunca será revocada la pena.',
			'<ul style="list-style-type: none;"><li>Paso 1 - Análisis de los vínculos de retroceso</li><li>Paso 2 - Auditar los malos enlaces</li><li>Paso 3 - Auditar Anchor text</li><li>Paso 4 - Enviar solicitud de eliminación de enlace</li><li>Paso 5 - Enviar dos recordatorios</li><li>Paso 6 - Crear un archivo de desautorizar</li><li>Paso 7 - Desautorizar enlaces</li><li>Paso 8 - Enviar solicitud de reconsideración</li></ul>',
			'<br><strong>Paso 1 [Análisis de los vínculos de retroceso]</strong>',
			'<br>Descarga el perfil de vínculo de retroceso de la herramienta webmaster y analice la lista de vínculos en todo el sitio y dominios únicos. Lea seguimiento de backlinks y limpieza o remoción de enlaces. La remoción de malos enlaces a nuestro sitio es un paso vital en <strong>SEO</strong>.',
			'<br><strong>Paso 2 [Auditar malos enlaces]</strong>',
			'<br>Navegue a través de todos los dominios y compruebe los tipos de spam siguientes:',
			'<ul><li>Enlaces no naturales a sus vínculos de sitio. (La Compra de enlaces o participar en esquemas de enlaces para manipular PageRank es una violación de de Google Directrices para webmasters)</li><li>Enlaces no naturales a su sitio.</li><li>Discordancia de imágenes.</li><li>Sitio hackeado o pirateado.</li><li>Proveedores de DNS dinámicos y host libres de contenido malintencionado.</li><li>Contenido con poco o ningún valor añadido</li><li>Spam generado por el usuario</li><li>Encubrimiento o/y redireccionamientos engañosos</li><li>Texto oculto y/o relleno de palabras clave</li><li>Freehosts Spammy (“si una parte significativa de las <strong>páginas web</strong>    de los sitios alojados en un servidor son spam, podemos tomar acción manual sobre el servidor en su conjunto”.) </li><li>Enlaces pagad os.</li><li>Enlaces desde FFA (free for all links), y granjas de enlaces.</li><li>Enlaces desde sitios maliciosos.</li><li>Spam en estado puro.</li><li>Dominios estacionados.</li></ul>',
			'Si los dominios caen en uno o más de tipos de spam enumerados anteriormente, anótelo en  una hoja y márquelo como un mal dominio.',
			'<br><strong>Paso 3 [Auditoría Anchor Text]</strong>',
			'<br>Identifique la densidad del texto ancla de los enlaces entrantes. La densidad del texto ancla es un criterio.',
			'<br>La densidad ideal de texto de anclaje será de aproximadamente:',
			'<ul><li>30% - Coincidencia exacta Principal Palabra clave (Ej: zapatillas Nike)</li><li>15% - Variación de coincidencia exacta (por ejemplo: zapatos baratos Nike, descuentos.</li><li>Zapatillas Nike)</li><li>20% - palabra clave secundaria (Zapatos Nike Sport)</li><li>5% - la variación de palabras clave secundaria (zapatos baratos Nike Sport)</li><li>10% - Marca (por ejemplo: Nike)</li><li>10% - URL (por ejemplo: bazarzapatillas.com)</li><li>10% - Genérico (por ejemplo: Haga clic aquí)</li></ul>',
			'<strong>Paso 4 [Enviar solicitud de eliminación de enlace]</strong>',
			'<br>Obtenga el correo electrónico de contacto del propietario del sitio web para que usted pueda solicitar la eliminación de los vínculos de retroceso recopilados en la lista. Si el correo electrónico de contacto no está disponible en el sitio se puede utilizar el formulario de contacto. Si usted no encuentra como comunicarse, puede utilizar la base de datos "whois.com" para recoger los detalles del propietario. Pruebe todas las formas posibles para recoger los datos, que sea LinkedIn, o página de fans en FB o la pagina de twitter.',
			'<br>Escriba un correo cortés explicando a los propietarios del sitio que necesita eliminar los enlaces. Incluya un enlace desde donde se muestre el vínculo a su sitio.',
			'<br>Envíe todos los mensajes, de forma individual y guarde una prueba de ello. Se recomienda utilizar el correo electrónico de su dominio con el nombre de "Esta dirección de correo electrónico está siendo protegida contra los robots de spam. Necesita tener JavaScript habilitado para poder verlo. " donde se solicite la eliminación de enlace.',
			'<br><strong>Ejemplo  de correo de solicitud de eliminación de enlace:</strong>',
			'<br><em>Hola, </em><br/><em>yo soy [Nombre], y trabajo para [Inserte su dominio]. Estoy tratando de eliminar algunos backlinks que apuntan a nuestro sitio web [Inserte su dominio] .com. Yo realmente agradezco su ayuda en la eliminación de estos enlaces. </em><br/><em>Aquí hay un enlace muestra </em><br/><em>URL Muestra Enlace: [backlink] </em><br/><em>Los enlaces pueden dañar mucho nuestro ranking y estaré agradecido si usted puede eliminar el enlace. Si usted pudiera por favor envía una nota de confirmación que me deje saber que el enlace ha sido eliminado, se lo agradecería muchísimo. </em><br/><em>Si usted tiene alguna pregunta no dude en escribirme a [E-mail] </em><br/><em>Gracias de antemano! </em><br/><em>Espero saber de usted pronto. </em><br/><em>Webmaster, </em><br/><em>[Inserte su dominio]</em>',
			'<br><strong>Paso 5 [Enviando 2 recordatorios]</strong>',
			'<br>Espere un tiempo de 3-5 días y si usted no tiene noticias de los propietarios del sitio, enviar otro recordatorio y posteriormente enviar el segundo recordatorio después de 5 días contados desde el primer aviso',
			'<br><strong>Paso 6 [Crear un archivo denegar enlace]</strong>',
			'<br>Sólo alrededor del 20-30% de los propietarios del sitio responderá. Algunos de ellos incluso le cobrarán para eliminar los enlaces. Cree un archivo de desautorizar enlaces bien formateado.(Más adelante lo explico) Al crear el archivo de desautorizar trate de desautorizar todo el dominio en lugar de direcciones URL individuales a menos que la URL tenga un mayor valor que el dominio. Este archivo contiene los enlaces que desea que Google ignore. El archivo a crear debe ser un archivo de texto  (tipo .txt y debe estar codificado en UTF-8  o en ascii de 7 bits) que contenga los enlaces que quieres desautorizar, uno por línea. Si quieres que Google ignore todos los enlaces de un dominio, añade la línea “domain: ejemplo.com”',
			'<br><strong>Paso 7 [desautorizar enlaces]</strong>',
			'<br>Ingrese a su cuenta Web Master Tool y diríjase a https://www.google.com/webmasters/tools/disavow-links-main, y cargue su archivo de desautorizar enlaces.',
			'<br>Nota: Si subes un archivo nuevo, éste sustituirá los que hayas subido anteriormente.',
			'<br>Es posible que Google tarde un poco en procesar la información que hayas subido. Quizá unas cuantas semanas.',
			'<br><strong>Paso 8 [Enviar solicitud de reconsideración]</strong>',
			'<br>Si el sitio no aparece en los resultados de búsqueda y ud. ha realizado los pasos anteriores y esperado su procesamiento puede enviar una solicitud de reconsideración.',
			'<br>¿Qué debería  incluir una solicitud de reconsideración?',
			'<br>En el siguiente video Matts Cutts explica que cuanta más información se proporcione para que la argumentación sea clara y convincente, más fácil será para Google evaluarla.',
			'<br>Para solicitar la reconsideración de tu sitio (Salvando nuestro posicionamiento y esfuerzos <strong>SEO</strong>):',
			'<br><ol><li>Inicia sesión en Herramientas para webmasters de Google con tu cuenta de Google.</li><li>Asegúrate de haber añadido y verificado el sitio para el que quieras solicitar la reconsideración.</li><li>Solicita la reconsideración del sitio</li></ol>',
			'<br>Tan pronto como se haya enviado el archivo denegar enlaces, tienes que enviar una solicitud de reconsideración.',
			'<br><strong>9. Prevención de Sanciones futuras</strong>',
			'<br>Es muy importante que usted proteja su sitio contra cualquier vulnerabilidad y actividades que pueden dar lugar a una sanción. Una sanción o penalización de parte de los motores de búsqueda podrían derrumbar sus esfuerzos <strong>SEO</strong>. Usted debe tener mucho cuidado en sus estrategias de promoción, contenido, etc Vamos a ver cómo se puede evitar una pena en el futuro:',
			'<ul><li><strong>Realice una auditoria de enlaces periódicamente</strong>: Es muy raro pero el personal descontento o competidores desleales pueden comprar o crear malos enlaces a su sitio.</li><br><li><strong>Elegir el proveedor de servicios</strong>: La mayor parte del daño ya está hecho por los proveedores de servicios de aficionados, profesionales independientes que encuentras en lugares como digitalpointforos.</li><br><li><strong>Sea consciente de las Estrategias:</strong>Ya sea que lo haga usted mismo, su personal o un proveedor de servicios, obtenga un plan detallado de lo que piensan hacer. Eso le dará una idea clara de qué tipo de vínculos piensan conseguir y la forma en que los “construirán”. Usted tiene todo el derecho a pedir a su proveedor de servicios o su personal la estrategia que utilizará para cerar enlaces. Si el plan incluye cualquiera de los puntos enumerados en el paso 2, rechazadelos de plano.</li><br><li><strong>Enlaces desde tu sitio:</strong>Usted puede tener la tentación de vincular sus sitios asociados, pero nunca lo haga a menos que el sitio está relacionado. Si usted necesita vincularlos, utilice la etiqueta "rel = nofollow".</li><br><li><strong>Gestión de Contenidos:</strong>Compruebe si existe plagio cuando usted contrate a un proveedor de servicios de creación de contenidos. Puede usar copyscape.com para comprobar el contenido duplicado. Google odia el contenido duplicado, contenido pobre etc. Asegúrese de que el contenido es único fresco, útil e informativo con la cantidad adecuada de palabras clave.</li><br><li><strong>Protección del sitio de vulnerabilidades:</strong>Elija el proveedor de alojamiento adecuado que asegure un tiempo de actividad del 99,99%, con fuertes medidas de seguridad. Los ataques de malware, el tiempo de inactividad arruinarán el rendimiento del sitio y pueden dar lugar a una sanción. Así que debes elegir tu hosting sabiamente.</li></ul>',
			'<br>Si Ud. considera que es mejor contratar este trabajo <strong>SEO</strong> a una empresa con experiencia, sólo consultenos.'
		]
	}
]

const QueHacer = () => {
	useEffect(() => {
		document.title = 'Qué hacer si recibe una acción manual contra spam - Consultoria SEO';
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

export { QueHacer }	