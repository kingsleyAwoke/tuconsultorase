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
		title: 'Como crear pagina personalizada 404 en joomla',
		description: [
			'Crear una pagina personalizada en joomla involucra 4 pasos:',
			'<ol><li><strong>Como crear una pagina personalizada 404 en joomla. </strong>Crear un articulo descategorizado que sirve como su pagina &quot;404 &quot;. En la sessi &oacute;n robots colocamos &quot;no seguir, no indexar &quot;.</li><br><li><strong>Como crear una pagina personalizada 404 en joomla</strong>. Cree un item de men &uacute;asociado al art &iacute;culo creado en el paso 1. El tipo de elemento de men &uacute;es &quot;Mostrar un solo art &iacute;culo &quot;y copiamos su alias. Por ejemplo si el t &igrave;tulo del art &iacute;culo es &quot;pagina 404 &quot;, copiamos su alias &quot;pagina-404 &quot;</li><br><li><strong>Como crear una pagina personalizada 404 en joomla</strong>.Ubicamos el archivo error.php de la <strong>plantilla </strong>que est &aacute;usando en el sitio. Por ejemplo si la plantilla que esta usando es &quot;clean &quot;la ubicaci&oacute;n del archivo es templates/clean. Si no existe el archivo error. php solo copiamos el archivo error. phpdesde el directorio template/system de <strong>joomla</strong>, al directorio de la plantilla que est &aacute;usando.</li><br><li><strong>Como crear una pagina personalizada 404 en joomla. </strong>Modificamos el archivo error.php, a&ntilde;adiendo el siguiente c&oacute;digo inmediatamente debajo de la l&iacute;nea de&quot; restricted access &quot;: (&quot;acceso restringido &quot;):</li></ol>',
			'<code>if (($this-&gt;error-&lt;code) === "404") &#123; header("Location: /index.php?option=com_content&view=article&id=75");  exit;&#125;</code>',
			'<br>Donde debe sustituir el id=75 por el id del arculo personalizado del error 404 creado en el paso 1.',
			'<br>Esta soluci &oacute;n no es la mejor ya que no es tan personalizada y la url no es amigable.',
			'<br>La mejor soluci &oacute;n es la siguiente:',
			"<br><code>if (($this-&gt;error-&lt;code) === '404') &#123;header('Location: /pagina=404');  exit;&#125;</code>",
			'<br>No olvide agregar a su archivo robots.txt las siguientes l&iacute;neas en caso de que haya optado por la primera soluci&oacute;n:',
			'<br>User-agent: *',
			'<br>Disallow: /index.php?option=com_content &amp;view=article &amp;id=75',
			'<br>En caso de haber optado por la segunda soluci &oacute;n deber &aacute;agregar a su archivo robos.txt las siguientes l&iacute;neas: ','<br>User-agent: *',
			'<br>Disallow:/pagina-404',
			'<br>Esto&uacute;ltimo con el fin de bloquear todos los robots de los buscadores para visitar la <strong>pagina web </strong>en su sitio, no puedan indexarla y aparecer en los resultados de b &uacute;squeda:',
			'<br>http://su-sitio.com/pagina-404',
			'<br>Quiza le interese leer sobre &quot;Importancia del archivo robots.txt para la seguridad y el seo &quot;.'
		]
	}
]

const ComoCrear = () => {
	useEffect(() => {
		document.title = 'Cómo crear un mapa del sitio - Consultoria SEO';
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

export { ComoCrear }	