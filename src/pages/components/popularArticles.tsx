import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PrimaryButton } from "../../components/button/customButton";
import { CustomActiveLink } from "../../components/Link/customLink";

interface PopularArticleItem {
	title: string;
	href: string;
}

const popularArticleItems: PopularArticleItem[] = [
	{ title: "Importancia del archivo robots.txt para la seguridad y el seo", href: "#" },
	{ title: "Optimización interna de una pagina web", href: "#" },
	{ title: "Dónde se inserta el código de Google Analytics en Joomla! 2.5", href: "#" },
	{ title: "htaccess en joomla!", href: "#" },
	{ title: "Las directrices para webmaster de Google", href: "#" },
	{ title: "Como construir un cotizador, calculadora o formula en joomla", href: "#" },
	{ title: "mo encontrar HTTP Error 500 en joomla!", href: "#" },
	{ title: "Inline small CSS", href: "#" },
	{ title: "Causas de disminucion de visitas o trafico web", href: "#" },
	{ title: "Que aspectos considerar en e-commerce para garantizar su exito", href: "#" },
	{ title: "Como quitar la advertencia de malware por parte de Google", href: "#" },
	{ title: "Enlaces negativos: Como afectan su sitio y su marca", href: "#" },
	{ title: "Tutorial SEO Optimización Para Motores de Búsqueda", href: "#" },
	{ title: "Como agregar encabezados Expires", href: "#" },
	{ title: "Que significa Minify CSS", href: "#" },
	{ title: "Como las páginas en cache optimizan el rendimiento del sitio", href: "#" },
	{ title: "Como especificar dimensiones de imagen.", href: "#" },
	{ title: "Que características debe tener una contraseña para que sea segura en Joomla", href: "#" },
	{ title: "Qué hacer si recibe una acción manual contra spam", href: "#" },
	{ title: "Configuracion seo en Joomla", href: "#" },
	{ title: "Enlaces pagados y publicidad", href: "#" },
	{ title: "Recursos bloqueados Herramientas Para Webmaster de Google", href: "#" },
	{ title: "Redireccionamientos engañosos", href: "#" },
	{ title: "Tutorial permisos correctos de archivos y carpetas joomla", href: "#" },
	{ title: "Porque minimizar redirecciones", href: "#" },
	{ title: "Importancia de las copias de seguridad", href: "#" },
	{ title: "Como crear una pagina personalizada 404 en joomla", href: "#" },
	{ title: "Importancia de usar un nombre de usuario y contraseña fuerte", href: "#" },
	{ title: "Como usar el atributo alias en joomla", href: "#" },
	{ title: "Como afecta el número de página indexadas la clasificación de su sitio", href: "#" },
	{ title: "Como Configurar Herramientas para Webmasters de Google", href: "#" },
	{ title: "Por que son malos los enlaces rotos", href: "#" },
	{ title: "Cómo quitar los enlaces ocultos de las plantillas Joomla", href: "#" },
	{ title: "problemas de seguridad de Joomla", href: "#" },
	{ title: "Como proteger un directorio usando cpanel", href: "#" },
	{ title: "¿Cómo puedo saber si mi sitio está infectado?", href: "#" },
	{ title: "Joomla contenido duplicado", href: "#" },
	{ title: "Como Probar el Archivo robots.txt", href: "#" },
	{ title: "Tutorial como crear una plantilla joomla básica", href: "#" },
	{ title: "Porque Mi Sitio No Aparece en los Resultados de Búsqueda", href: "#" },
	{ title: "Procedimientos de Seguridad Recomendados", href: "#" },
	{ title: "Procesar paginas con explorar como Google", href: "#" },
	{ title: "Cómo optimizar el contenido multimedia para SEO", href: "#" },
	{ title: "Importancia Palabras Clave de Contenido para Seo", href: "#" },
	{ title: "Cómo Recuperarse del Efecto Google Panda", href: "#" },
	{ title: "Proteja su sitio contra ataques de fuerza bruta", href: "#" },
	{ title: "Como proteger su contenido", href: "#" },
	{ title: "Las Vulnerabilidades Lógicas", href: "#" },
	{ title: "Cómo crear un mapa del sitio", href: "#" },
	{ title: "Por que Disminuyen las Paginas Indexadas en Mi Sitemap.xml", href: "#" },
]

const PopularArticles = () => {
	return (
		<PopularArticlesWrapper>
			<Box display="flex" flexDirection="row" justifyContent="center">
				<PrimaryButton>
					<Typography variant="body1">Articulos Populares</Typography>
				</PrimaryButton>
			</Box>

			<Box component="ul" sx={{ listStyle: 'disc', pl: 3, m: 0 }}>
				{popularArticleItems.map((item, index) => (
					<li key={index}>
						<CustomActiveLink to={item.href}>
							<Typography variant="h5" component="p">
								{item.title}
							</Typography>
						</CustomActiveLink>
					</li>
				))}
			</Box>
		</PopularArticlesWrapper>
	)
}

const PopularArticlesWrapper = styled(Box)(({ theme }) => ({
	gap: '10px',
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '10px',

	'& h5': {
		fontWeight: '600',
	},
}))

export { PopularArticles }