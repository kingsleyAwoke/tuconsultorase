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
		title: 'Como las p &aacute;ginas en cache optimizan el rendimiento del sitio',
		description: [
			'El almacenamiento de las p&aacute;ginas en cach&eacute;es otro m&eacute;todo que puede ayudar a mejorar el tiempo de carga de sus <strong>p&aacute;ginas web </strong>y as &iacute;optimizar su sitio para los motores de b&uacute;squeda.',
			'<br>El tiempo de carga de la p &aacute;gina puede significativamente afectar la experiencia del usuario &nbsp;y la capacidad para que los visitantes de su sitio se conviertan en compradores o en clientes potenciales.',
			'<br>De hecho, los experimentos de Google han revelado que la diferencia s &oacute;lo de medio de segundo en el tiempo de carga puede causar una reducci &oacute;n de hasta 20% en el tr &aacute;fico web.',
			'<br>Por esta raz&oacute;n, las compa&ntilde;&iacute;as de motores de b &uacute;squeda est &aacute;n considerando el tiempo de carga como un factor cada vez m&aacute;s importante para determinar la clasificaci&oacute;n de su sitio en los resultados de b&uacute;squeda.',
			'<br>Esto significa que usted tendr &aacute;que tomar medidas para reducir el tama &ntilde;o de los archivos de imagen y sus p &aacute;ginas como parte de su estrategia de <strong>SEO</strong>.',
			'<br>Afortunadamente, los m&eacute;todos tales como la compresi&oacute;n de archivos GZIP, la deflaci&oacute;n de archivos, optimizaci&oacute;n del tama&ntilde;o del archivo HTML&nbsp;y el uso de hojas de estilo CSS externas &nbsp;y los archivos JavaScript externos pueden ayudar a que sus p &aacute;ginas se carguen m &aacute;s r &aacute;pido y crear una mejor experiencia de usuario.',
			'<br>En este art&iacute;culo, vamos a discutir otra manera de optimizar los tiempos de carga y &nbsp;proporcionar a sus visitantes con una mejor experiencia de usuario,&nbsp;aumentando as&iacute;sus posibilidades de clasificaci&oacute;n en los resultados de b&uacute;squeda.',
			'<br>Explicaci&oacute;n de almacenamiento en cach&eacute;de p&aacute;ginas y sus beneficios',
			'<br>Las p&aacute;ginas en cach&eacute;se sirven en versiones HTML est&aacute;ticas a fin de evitar potencialmente consultas que requieren mucho tiempo a su base de datos. Las p&aacute;ginas en cach&eacute;se crean cuando las compa&ntilde;&iacute;as de motores de b&uacute;squeda como Google almacenan una versi&oacute;n de&quot;back-up&quot;de la <strong>p&aacute;ginaweb</strong>&nbsp;que se entregan a un usuario en lugar de la versi &oacute;n m&aacute;s reciente de su p&aacute;gina.',
			'<br>Cuando realizamos una b&uacute;squeda en un motor de b&uacute;squeda como Google, los resultados de la misma dan al usuario la opci&oacute;n de ver la cach&eacute;de la p&aacute;gina web la&uacute;ltima vez que la accedi&oacute;, en lugar de la versi &oacute;n &quot;live &quot;o &quot;en vivo &quot;haciendo clic en el tringulito del enlace de color verde:',
			'<br>Si el usuario opta por la versi&oacute;n en cach&eacute;de la <strong>p&aacute;gina web</strong>, se les entregar&aacute;una versi&oacute;n de la p&aacute;gina en la que se le notifica que una versi&oacute;n m&aacute;s reciente de la p&aacute;gina tambi&eacute;n est &aacute;disponible y que est &aacute;n viendo una versi&oacute;n en cach&eacute;:',
			'<br>El beneficio para el usuario de ver una versi&oacute;n en cach&eacute;de la p&aacute;gina es que se puede obtener la informaci&oacute;n que est &aacute;n buscando m&aacute;s r&aacute;pidamente. De hecho, la p&aacute;gina de almacenamiento en cach&eacute;puede reducir la carga del servidor hasta un 80%. Esto es especialmente beneficioso para los sitios web de alto tr&aacute;fico que hacen uso de la informaci&oacute;n de base de datos con el fin de servir la p&aacute;gina al usuario.',
			'<br>Otro beneficio de las <strong>p &aacute;ginas web</strong>almacenadas en cache se refiere al hecho de que &eacute;stas son copias de seguridad realizadas por Google y aunque no es recomendable, podemos utilizarlas para restaurar nuestras web en caso de que fallen los procesos de copias de seguridad.',
			'<br>Las p&aacute;ginas en cach&eacute;tambi&eacute;n permiten al usuario ver la versi&oacute;n en cach&eacute;de la p&aacute;gina en caso de que la versi &oacute;n actual no est &aacute;disponible debido a la saturaci&oacute;n de la l&iacute;nea, la reciente eliminaci&oacute;n de la p &aacute;gina web o si la p&aacute;gina tarda mucho tiempo en cargar.',
			'<br>La desventaja de entregar la versi&oacute;n en cach&eacute;de las p&aacute;ginas es que el usuario no est &aacute;viendo la versi&oacute;n m &aacute;s reciente de la p&aacute;gina. Sin embargo, para los sitios que no incluyen caracter&iacute;sticas din&aacute;micas y no a&ntilde;aden nueva informaci&oacute;n a menudo, esto es una manera&oacute;ptima para que el usuario vea el sitio r&aacute;pidamente.',
			'<br>M&eacute;todos de almacenamiento en cach&eacute;',
			'<br>Hay tres m&eacute;todos que se pueden utilizar para el almacenamiento en cach&eacute;de sus p&aacute;ginas web:',

			'<ol><li><b>Almacenamiento en cach &eacute;de PHP Alternativa</b></li><br>Cach&eacute;PHP Alternativa (APC) es un marco de c&oacute;digo abierto que se almacena en la cach&eacute;de datos mediante c&oacute;digo PHP intermedio. La mayor&iacute;a de los programadores web que est &aacute;n familiarizados con el lenguaje de programaci&oacute;n PHP pueden configurar f&aacute;cilmente Alternative PHP cach&eacute;para su sitio.<br><br><li><b>QuickCache</b></li><br>QuickCache&nbsp;es una soluci&oacute;n de almacenamiento en cach&eacute;de la p&aacute;gina que fue conocido antes como&nbsp;jpcache QuickCache almacena en cach&eacute;los resultados de la p&aacute;gina en vez de la compilaci&oacute;n de la p&aacute;gina PHP, por lo que es una versi&oacute;n superior a la cach&eacute;de PHP Alternativa.&nbsp;QuickCache&nbsp;puede descargarse r&aacute;pidamente de su p&aacute;gina web y se puede reducir el tiempo de carga de la p &aacute;gina hasta el 80%.<br><br><li><b>WP Super Cache</b></li><br>Si usted tiene un sitio web Wordpress,&nbsp;WP Super Cache&nbsp;se puede instalar en cuesti &oacute;n de segundos y sin ning &uacute;n conocimiento de programaci &oacute;n.</ol>'
		]
	}
]

const ComoLas = () => {
	useEffect(() => {
		document.title = 'Como las páginas en cache optimizan el rendimiento del sitio - Consultoria SEO';
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

export { ComoLas }	