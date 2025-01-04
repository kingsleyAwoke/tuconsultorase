import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Disminucion from '../../assets/image/popularArticules/disminucion.jpg';
import GoogleBot from '../../assets/image/popularArticules/Cuando-Googlebot.jpg';

const blogSeoData: BlogData[] = [
	{
		title: 'Por que Disminuyen las Paginas Indexadas en Mi Sitemap.xml',
		description: [
			'Últimamente se nos han presentado un número de clientes que nos escriben preguntando <strong>Por que Disminuyen las Paginas Indexadas en Mi Sitemap.xml. </strong>Sabemos que los motores de búsqueda recomiendan crear un sitemap.xml y enviarselos para ayudarlos a rastrear las páginas del sitio. Ud. rapídamente creó un sitemap.xml o le solicitó a un webmaster o consultor <strong>SEO</strong>que lo creara y lo envió a los buscadores en herramientas para webmaster en el caso de Google o en Bing Webmaster Tool en el caso de Bing. A los días Ud. comprobó en esas útiles herramientas como sus páginas se habían indexado satisfactoriamente pero luego del paso de unos dìas se ha conseguido con algo como esto:',
			`<img src=${Disminucion} alt="disminucion de paginas indexadas en sitemap" title="disminucion de paginas indexadas en sitemap" width="354" height="361">`,
			'<br>Ud. exclama ¡¡Sólo 120!!.  ¿Por qué Google me odia? ¿<strong>Por que Disminuyen las Paginas Indexadas en Mi Sitemap.xml</strong>? Las páginas indexadas en su sitemap.xml habían disminuido.',
			'<br>El número de URLs indexadas es casi siempre considerablemente inferior al número de URL rastreadas.',
			'<br>Existen varias  razones por las que  Ud. puede ver una disminución de páginas indexadas en su mapa del sitio en herramientas para webmaster de Google o en Bing Webmaster Tool:',
			`<img src=${GoogleBot} alt="Cuando Googlebot podría rastrear una URL o pagina web" title="Cuando Googlebot podría rastrear una URL o pagina web" width="auto" height="auto">`,
			'<h2>Errores o problemas por los que disminuyen las páginas indexadas en mi sitemap.xml</h2>',
			'<ul><li>Por errores 404</li><li>Paginas no canónicas</li><li>Páginas poco utiles</li><li>Páginas que contienen metaetiquetas noindex</li><li>El uso de la directiva Disallow en su archivo robots.txt, es decir; bloquedas por el archivo robots.</li><li>Por el uso de redirecciones.</li></ul>',
			'<br>Cuando las páginas no existen como es el caso de errores 404, la página no será indexada.',
			'<br>Cuando Ud, niega el acceso a la página en su archivo robots.txt, la pagina no será indexada.',
			'<br>El algoritmo Panda es aplicado en el proceso de indexación y si determina que su contenido no es de calidad no será indexado.',
			'<br>Los motores de búsqueda indexan paginas cuya respuesta HTTP sea 200 pero es importante destacar que no todas las páginas son indexadas aún y cuando puedan devolver el código de estado 200.',
			'<br>Si Ud. tuvo que hacer una redirección 301 o 302 de una página web que existía anteriormente (pero ahora no) a otra que ahora si existe y que habia sido indexada por los motores de búsqueda, ya el código de respuesta para la primera no será 200 OK. Si el código de respuesta es 302, redireccionamiento temporal, la página no será indexada y muy probablemente según nuestra experiencia la página que fue indexada en el pasado pero que ahora no existe será eliminada del índice.',
			'<br>Si una pagina web sufre un redireccionamiento 301 y la envia en Explorar como Google y su código de respuesta es 301, Ud. podrá enviarla al índice.',
			'<br>¿Como determinar que código de respuesta HTTP devuelve una página web?',
			'<br>Aqui tiene la respuesta: En herramientas para webmaster de Google, en Explorar como Google, una vez que ha colocado la URL para recuperarla, haga uso de la función Obtener y Procesar. Si en la ficha obtención la <strong>Respuesta HTTP descargada: es</strong>  HTTP/1.1 200 OK o 301 Moved Permanently, Ud. podrá enviarla al índice',
			'<br>¿Como determinar que código de respuesta HTTP devuelve una página web? n la ficha Procesamiento puede ver una representación correcta de la página y el estado del procesamiento es Completo, Ud. podrá enviar la URL al índice',
			'<br>Tambien podrá determinar el código de respuesta de una URL o página web utilizando nuestra herramienta If modified, una vez que ingrese la URL, puede obviar para el presente análisis si la pagina apoya o no If modify, lo que importa aqui son los códigos de respuesta HTTP, pruebe si desea, ingresar la siguiente URL: http://tuconsultoraseo.com/consultor-seo/obtener-cabeceras-de-una-peticion-http.html, verá que el código de respuesta es 301, o redireccionamiento permanente. Esta URL fue enviada al índice utilizando la función',
			'<br>Explorar como Google de herramientas para webmaster.',
			'<br>También puede ver si la pagina sufre un redireccionamiento permanente en nuestra herramienta comprobar redirección y ver el código de respuesta HTTP.',
			'<br>Allí también podrá comprobar que la respuesta no sea 404.',
			'<br>Es altamenente recomendable que Ud. lea:',
			'<br>Procesar Páginas con Explorar como Google',
			'<br>Como Recuperarse del Efecto Google Panda'
		]
	}
]

const PorDisminuya = () => {
	useEffect(() => {
		document.title = 'Por que Disminuyen las Paginas Indexadas en Mi Sitemap.xml - Consultoria SEO';
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

export { PorDisminuya }	