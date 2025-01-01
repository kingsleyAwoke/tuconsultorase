import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection"

const blogSeoData: BlogData[] = [
	{
		title: 'Servicio SEO',
		description: [
			'<iframe allowfullscreen frameborder="0" height="215" src="http://www.youtube.com/embed/El3IZFGERbM" width="360" className="center"></iframe>',
			'<br>El <strong>posicionamiento en buscadores</strong> u <b>optimizaci&oacute;n en motores de b &uacute;squeda,</b> en ingl &eacute;s <strong> Search Engine Optimization</strong> (<strong>seo</strong>) es el proceso de mejorar el volumen o la calidad del tr &aacute;fico a un sitio web en los motores de b &uacute;squeda a trav &eacute;s de prosicionamiento &quot;natural &quot;o sin pagar (&quot;<strong>org&aacute;nico</strong>&quot; o &quot;algor&iacute;tmico &quot;) en lugar de Search Engine Marketing (SEM ) que se ocupa de la inclusi &oacute;n pagada.',
			'<br>El &eacute;xito de su sitio o <strong>p &aacute;gina web</strong> no se mide por cuan bien y con estilo se ve, en cambio, se puede calcular por la popularidad de su sitio web. S &oacute;lo los primeros 10 SERPs (Search Engine P &aacute;ginas de Resultados) atraer &aacute;n al visitante. S &oacute;lo la parte superior de los primeros 10 resultados de b &uacute;squeda tienen la oportunidad de convertir un visitante en un nuevo cliente valioso.Conozca nuestras técnicas <strong>SEO</strong>',
			'<br>Nuestras t &aacute;cticas integradas de <strong>optimizaci &oacute;n de motores de b &uacute;squeda</strong> que cumplen con las directrices establecidas por cada uno de los principales motores de b &uacute;squeda aseguran la calidad, el destino del tr &aacute;fico relevante y las clasificaciones m &aacute;s altas.',
			'<ul><li>An&aacute;lisis del sitio inicial</li><li>An&aacute;lisis de palabras clave</li><li><font>Creaci&oacute;n de los meta-tags relevantes y otras etiquetas HTML</font></li><li><font>An&aacute;lisis de popularidad de enlaces</font></li><li><font> An&aacute;lisis de conversi&oacute;n de <strong>p&aacute;gina web</strong></font></li><li><font>An&aacute;lisis de mejora de uso del sitio</font></li><li><font>Optimizaci&oacute;n en la p &aacute;gina de todas las p&aacute;ginas pertinentes</font></li><li><font>Validaci&oacute;n de densidad de palabras clave</font></li><li><font>T&iacute;tulo y optimizaci &oacute;n etiquetas meta</font></li><li><font>Optimizaci&oacute;n robot.txt</font></li><li><font>Creaci&oacute;n del sitio</font></li><li><font>Creaci&oacute;n mapa del sitio Google</font></li><li><font>Optimizaci&oacute;n de contenido de la <strong>p &aacute;gina web</strong></font></li><li><font>Optimizaci&oacute;n de Imagen texto ALT</font></li><li><font>Presentaciones en motores de b &uacute;squeda</font></li><li><font>Pre informe &Iacute;ndice <strong>SEO</strong></font></li><li><font>Optimizaci &oacute;n archivo .htaccess</font></li><li><font>Informe <strong>SEO</strong>de p &aacute;ginas internas</font></li><li><font>Informe completo <strong>SEO. </strong></font></li></ul>'
		]
	}
]

const OptimizacionParaMotores = () => {
	useEffect(() => {
		document.title = 'Optimización para motores de búsqueda - Consultoria SEO';
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

export { OptimizacionParaMotores }	