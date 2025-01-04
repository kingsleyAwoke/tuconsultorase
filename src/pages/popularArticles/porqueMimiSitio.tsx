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
		title: 'Porque Mi Sitio No Aparece en los Resultados de Búsqueda',
		description: [
			'Los principales buscadores a los que me voy a referir en el presente artículo son Google, Yahoo y Bing, cada uno de ellos tiene sus propias directrices, las cuales comparten en su mayoría ya que todos ellos persiguen el mismo objetivo: devolver resultados altamente pertinentes para cada consulta que realizan los usuarios, lo que cambia entre ellos es lo optimizados que están sus algoritmos de clasificación. Para la mayoría de estos buscadores, los resultados de búsqueda son devueltos de su  índice de búsqueda. El índice de los buscadores está en constante evolución, ellos añaden nuevo y actualizado contenido de la web. El contenido cambiante, así como las actualizaciones de sus algoritmos de clasificación, pueden causar que las URLs cambien de posición en los resultados de búsqueda, y posiblemente, aunque menos probable, sea eliminado.',
			'<br>Si Ud. no ha dado de alta su sitioweb en estos buscadores, ellos pueden haberlo indexado a través de enlaces desde otros cibersitios, bien porque Ud. mismo los creó allí o porque el contenido de sus artículos o <strong>páginas web</strong> son lo suficientemente atractivos, útiles y ricos que fueron enlazados por los propietarios de esos sitioswebs, ahora; si no existen enlaces desde webs de terceros al suyo y Ud. no dió de alta su website en ellos es probable que no esté indexado en estos buscadores, de allí la importancia de dar de alta su cibersitio en los principales buscadores y así obtener visitas de cada uno de ellos lo que es una manera de mejorar el volumen de visitas al website.',
			'<br>El primer paso sería entonces dar de alta su website en ellos:',
			'<br>Es importante destacar que al momento de escribir el presente artículo los resultados de búsqueda de Yahoo Search son gestionados por Bing. Si quieres que se incluya tu sitioweb, Envía tu web a Yahoo Search, luego de enviar la URL de tu sitioweb podrás registrarte en las Herramientas para administradores de web de Bing.',
			'<br>Enviar una URL al índice de Google',
			'<br>Para utilizar Herramientas para Webmaster de Google solo debes tener un cuenta gmail e iniciar sesion con ella.',
			'<br>Si su sitio no aparece en los resultados de búsqueda o se está desempeñando mal; Ud. debería verificar si ha sido indexado por los distintos buscadores.',
			'<h2>Métodos para comprobar que su website ha sido indexado por buscadores</h2>',
			'En el caso de Yahoo puedes comprobarlo visitando Yahoo Search;"Yahoo Search, allí empieza por escribir una oración que coincida con el título o descripción de la página. Lo mismo puede hacer con Google y Bing.',
			'<h3>Compruebe su website realizando una consulta en el buscador</h3>',
			'Haga una búsqueda en Google con [sudominio].com. Si su cibersitio no aparece en los resultados, o si ocupa una mala posición en los resultados, esto es una señal de que su website puede tener una acción manual contra spam por violaciónes de las directrices para webmasters. Si ellos encuentran algunos problemas con su site pueden hacérselo saber saber a través de Mensajes del Sitio o Problemas de Seguridad de su Herramientas para Webmaster de Google.También debe revisar si su sitioweb cumple las directrices para webmasters.  Una vez que esté seguro de que todos los problemas se han abordado, presentar una solicitud de reconsideración.',
			'<br>En el caso de Yahoo si buscas a través de la dirección URL del sitioweb, no siempre sabrás si el sitio se ha indexado.',
			'<h3>Operador Site</h3>',
			'No importa el buscador, si se trata de Google o Bing, introduce una búsqueda que contenga la palabra "site:" (sin comillas) delante del sitioweb sin espacio en blanco despúes de site. Por ejemplo: site:tuconsultoraseo.com. Si su site se muestra como resultado al realizar una búsqueda para su URL, entonces está incluido en sus respectivos índices Sin embargo, si su cibersitio anteriormente era mostrado utilizando este operador y ya no aparece, seguramente no está indexado, puede que haya sido retirado por violaciones a sus respectivas directrices para webmasters o que haya sido objeto de ataques de malware. Lea por favor <span style="color: #2a6496">Como Quitar la Advertencia de Malware por parte de Google </span> o quizá su sebsite sufrió la acción de malos enlaces, al respecto de éste último lea ¿Se Deben Monitorear los Backlinks?Enlaces Negativos: Como Afectan su Sitio y su Marca. Revise las pautas de cada buscador y luego, una vez que haya solucionado cualquier problema, envíe una solicitud de reconsideración a cada buscador en el que desea que su sitio- web aparezca.',
			'<br><span style="color: #2a6496">Solicitud de desautorización de enlaces de Google</span>',
			'<br><span style="color: #2a6496">Desvincular vínculos de Bing</span>',
 			'<br>Para ayudarles a indexar su web Ud. debería enviarles un sitemap. Para enviar un sitemap a estos buscadores Ud. deberia previamente crear una cuenta en cada uno de ellos. En Herramientas para webmaster de Google, tiene la opción de envio de sitemap, igualmente en la Herramienta de Webmaster de Bing.',
			'<br>El siguiente enlace le permitirá crear una cuenta en <span style="color: #2a6496">Bing Webmaster Tools.</span>',
			'<br>En el caso de Herramientas para Webmaster de Google puede leer <span style="color: #2a6496">Como Configurar Herramientas para Webmaster de Google</span>.',
			'<br>Otro método para a indexar su sitio-web consiste en solicitar a los buscadores el rastreo de URLs de su sitio para luego ser indexado:',
			'<br>En el caso de Bing puede utilizar la opción de Recuperar como Bingbot en herramienta para webmaster de Bing y en el caso de Google puede usar Explorar como Google en Herramienta para Webmaster de Google, Lea <span style="color: #2a6496">Procesar Páginas con Explorar como Google</span>, recuerde que Ud. debe previamente tener una cuenta para cada herramienta y haber incluido su sitioweb.',
			'<br>Si su site está bien enlazado con los otros en la web, lo más probable es que sea añadido durante el próximo rastreo. Los buscadores no se pueden garantizar que todas las páginas aparezcan constantemente en sus índices o que aparezcan con un rango o clasificación concreta, las directrices para webmasters de cada buscador dan consejos muy útiles para mantener un cibersitio fácil de rastrear por ellos. Siguiendo estas recomendaciones debería aumentar la probabilidad de que su sitioweb se muestre constantemente en los resultados de búsqueda.',
			'<h4>Otros aspectos para comprobar y corregir las posibles causas del problema:</h4>',
			'<ul style="color: #2a6496"><li><b>Avisele a Google sobre nuevo contenido</b></li></ul>',
			'<h3>Si su sitio es muy nuevo, es posible que no sabemos de ella todavía. <span style="color: #2a6496">Dile a Google sobre su sitioweb.</span></h3>',
			'<ul style="color: #2a6496"><li><b>Asegúrese de que Google puede encontrar y rastrear su sitioweb</b></li></ul>',
			'El rastreo es cómo Googlebot descubre páginas nuevas y actualizadas que se añadirán al índice de Google. Su proceso de rastreo comienza con una lista de direcciones URL de páginas web, generadas a partir de los procesos de rastreo anterior, y aumentada con los datos de sitemaps del sitioweb proporcionadas por los webmasters. Como visita Googlebot cada uno de estos cibersitios, detecta enlaces en cada página y los agrega a su lista de páginas para rastrear. Los nuevos sitios, los cambios en los sitiosweb existentes y enlaces muertos se observan y se utilizan para actualizar el índice de Google.',
			'<ul><li>Compruebe si hay <span style="color: #2a6496">errores de rastreo</span></li><li>La página <strong>Errores de rastreo</strong>en las Herramientas para webmasters de Google proporciona detalles sobre las URL de su sitioweb que intentan rastrear y no podían acceder. Revise estos errores, y corregir cualquier puedas. La próxima vez que Googlebot rastrea su site, se dará cuenta de los cambios y los utilizan para actualizar el índice de Google.</li><li>Revise su archivo robots.txt. La <span style="color: #2a6496">herramienta de prueba de robots.txt</span> permite analizar el archivo robots.txt para ver si está bloqueando Googlebot cualquier URL o directorios en su web.</li><li>Asegúrese de que las URLs no han sido <span style="color: #2a6496">bloqueados con etiquetas meta</span>.</li><li>Revise la estructura del sitioweb y <span style="color: #2a6496">asegúrese de que es de fácil acceso</span>. La mayoría de los motores de búsqueda están basadas en texto. Si utiliza JavaScript, DHTML, imágenes o multimedia como Silverlight para crear la navegación y enlaces, el robot de Google y otras arañas pueden tener problemas para rastrearlo.</li><li>Si ha reestructurado recientemente su site o trasladado a un nuevo dominio, las páginas que previamente tuvieron un buen desempeño pueden ahora clasificar mal. Para evitar esto, utilice 301 redirecciones ("RedirectPermanent") en su archivo .htaccess para redireccionar elegantemente usuarios, Googlebot y otras arañas. (En Apache, puede hacer esto con un archivo .htaccess;. En IIS, puede hacerlo a través de la consola administrativa) Para obtener más información acerca de 301 redirecciones HTTP, consulte <span style="color: #2a6496">http://www.ietf.org/rfc/rfc2616 .txt.</span></li></ul>',
			'<h3>Asegúrese de Google índexa su sitioweb</h3>',
			'<ul><li>Compruebe su cibersitio en <span style="color: #2a6496">las estadísticas de índicelas estadísticas de índice. Estas estadísticas muestran cómo está representado en el índice de Google.</span></li><li>Revise la estructura de su website. Lea <span style="color: #2a6496">Importancia de la Estructura de Navegación Asegurarse de que su contenido está basado en texto legible y.</span>ayuda a que sea más accesible a los seres humanos y para el robot de Google ayuda a que sea más accesible a los seres humanos y para el robot de Google.</li> </ul>',
			'<h3>Asegúrese de que su contenido es relevante y útil</h3>',
			'<ul><li>Entender cómo los usuarios están llegando a su sitioweb mediante la revisión de la página de <span >consultas de búsqueda Evite el relleno de palabras clave</span>, sin embargo, porque esto puede hacer que su ranking pueda sufrir una sanción, además de degradar la experiencia de usuario para sus lectores.</li><li>Comprender cómo Google ve su website. La página de <span className="primary-color">Contenido Palabras clave</span> muestra las palabras clave y frases que utilizan otros cibersitios cuando se enlazan con el suyo. La comprensión de cómo otras personas ven su web puede ayudar a determinar la mejor forma de llegar a su audiencia.</li><li>Los enlaces entrantes a su sitio de Google ayudan a determinar la relevancia y pertinencia de su website para la consulta del usuario. Los enlaces naturales a su sitio se desarrollan como parte de la naturaleza dinámica de la web y se crean cuando otros sitios encontran su contenido valioso y piensan que sería útil para sus visitantes.</li><li>Lea Diagnostique la <span className="primary-color">Calidad de su Contenido en Línea</span></li></ul>'
		]
	}
]

const PorQueMimiSition = () => {
	useEffect(() => {
		document.title = 'Porque Mi Sitio No Aparece en los Resultados de Búsqueda - Consultoria SEO';
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

export { PorQueMimiSition }	