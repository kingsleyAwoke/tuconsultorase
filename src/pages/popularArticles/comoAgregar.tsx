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
		title: 'Como agregar encabezados Expires',
		description: [
			'<strong>C&oacute;mo agregar encabezados expires</strong>&nbsp;a su archivo htaccess. Esto ayudar&aacute;a mejorar el rendimiento de su sitio web, basado en las pautas recomendadas por Google y Yahoo.',
			'<br>Usar el almacenamiento en cach&eacute;del navegador y los encabezados de caducidad reducen el n&uacute;mero de peticiones HTTP, lo que mejora el rendimiento de su sitio a sus visitantes.',
			'<br>La primera vez que alguien visita su <strong>pagina web</strong>, su navegador obtendr&aacute;todas sus im&aacute;genes, archivos CSS, archivos JavaScript, etc Normalmente, esto sucede cada vez que el mismo visitante vuelve a su sitio.',
			'<br>Con los encabezados expire se le dice al navegador web del visitante que los archivos que especifique no cambian por un cierto tiempo, por ejemplo, un mes.',
			'<br>Esto significa que el navegador no tiene que volver a recuperar im&aacute;genes, CSS, JavaScript, etc cada vez que el visitante llega a su sitio.',
			'<br><u>Importante</u>: Para utilizar encabezados expires, el servidor debe ser Apache (y requiere el m&oacute;dulo mod_expires) y debe tener acceso a su archivo htaccess. Si usted no sabe lo que significa esto, hable con su empresa de alojamiento primero y pregunte si el servidor es apache y si tiene habilitado el modulo Expires.',
			'<br><em>&quot;Si aprovecha el almacenamiento en cach&eacute;, el documento puede ser recuperado de la memoria cach&eacute;y no desde la fuente hasta que haya transcurrido este tiempo. Despu&eacute;s de eso, se considera la copia cach&eacute;ha&quot;expirado&quot;y no es v&aacute;lida, y una nueva copia se debe obtener de la fuente.&quot;</em>',
			'<br>Fuente: Apache',
			'<h2>Comience por comprobar el rendimiento de su sitio</h2>',
			'Compruebe con​​&nbsp;Yahoo Yslow PageSpeed.',
			'<br>Tambi&eacute;n puede usar&nbsp;GTmetrix &nbsp;porque muestra tanto las herramientas de velocidad Google como &nbsp;de Yahoo. Los resultados se actualizan al instante, para que pueda obtener un resultado actualizado inmediatamente despu&eacute;s de que usted haya implementado los cambios.',
			'<br>Si utiliza GTmetrix, ingrese la url de la p&aacute;gina a analizar, haga clic en la pesta&ntilde;a PageSpeed y observe la memoria cach&eacute;del navegador (Leverage browser caching).',
			'<br><em>&quot;Los siguientes recursos cacheables tienen un tiempo de vida corto frescura. Especifique un vencimiento m&iacute;nimo de una semana en el futuro por los siguientes recursos:&quot;</em>',
			'<br>En la ficha Yslow, ves A&ntilde;adir Expira encabezados (Add Expires headers):',
			'<br><em>&quot;Hay X componentes est &aacute;ticos sin futuro lejano fecha de caducidad.&quot;&nbsp;</em>',
			'<h3>&iquest;Qu&eacute;tipo de archivos (extensiones) ha enumerado para aprovechar la cach&eacute;del navegador con encabezados Expire?</h3>',
			'En este caso archivos de imagenes, css, javascript',
			'<br>Pueden existir otro tipo de archivos...',
			'<br><strong>&iquest;Con que frecuencia modifica estos archivos?</strong>, decida por cu &aacute;nto tiempo pueden almacenarse en la cach &eacute;del navegador del visitante. Las opciones son:',
			'<br>segundos, minutos, horas, d&iacute;as, semanas, meses y a&ntilde;os',
			'<br>&iquest;Que debe a &ntilde;adir a su archivo .htaccess?',
			'<br>Podr&iacute;a ser&uacute;til a&ntilde;adir una&quot;directiva por defecto&quot;para una fecha de caducidad por defecto, luego de activar el modulo Mod_expires por lo que son las 2 filas va a a&ntilde;adir a .htaccess son:',
			'<ol style="background-color: #f1f1f1"><li>&lt;IfModule mod_expires.c &gt;</li><li># Enable expirations</li><li>ExpiresActive On</li><li># Default directive</li><li>ExpiresDefault &quot;access plus 1 month &quot;</li><li>&lt;/IfModule &gt;</li></ol>',
			'<br>Esas son las l&iacute;neas b&aacute;sicas. Agregue todas las l&iacute;neas para cada uno de los tipos de archivos (ya sabe, los que cre&oacute;anteriormente para su favicon, javascript, im&aacute;genes y css). Usted debe tener un fragmento de c &oacute;digo parecido a esto:',
			'<ol style="background-color: #f1f1f1"><li>&lt;IfModule mod_expires.c &gt;</li><li># Enable expirations</li><li>ExpiresActive On &nbsp;</li><li># Default directive</li><li>ExpiresDefault &quot;access plus 1 month &quot;</li><li># My favicon</li><li>ExpiresByType image/x-icon &quot;access plus 1 year &rdquo;</li><li>ExpiresByType image/jpg &quot;access plus 1 year &quot;</li><li>ExpiresByType image/jpeg &quot;accessplus &nbsp;1 year &quot;</li><li>ExpiresByType image/gif &quot;access plus 1 year &quot;</li><li>ExpiresByType image/png &quot;access plus 1 year &quot;</li><li>ExpiresByType text/css &quot;access 1 month &quot;</li><li>ExpiresByType application/pdf &quot;access 1 month &quot;</li><li>ExpiresByType text/x-javascript &quot;access 1 month &quot;</li><li>ExpiresByType application/x-shockwave-flash &quot;access 1 month &quot;</li><li>ExpiresByType image/x-icon &quot;access 1 year &quot;</li><li>ExpiresByType application/javascript &quot;access plus 1 year &quot;</li><li>ExpiresDefault &quot;access 2 days &quot;</li><li>&lt;/IfModule &gt;</li></ol>',
			'Realice otra prueba con GTmetrix y compare los resultados.'
		]
	}
]

const ComoAgregar = () => {
	useEffect(() => {
		document.title = 'Como agregar encabezados Expires - Consultora SEO';
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

export { ComoAgregar }	