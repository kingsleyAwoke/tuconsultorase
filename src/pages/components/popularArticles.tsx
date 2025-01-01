import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PrimaryButton } from "../../components/button/customButton";
import { CustomActiveLink } from "../../components/Link/customLink";

interface PopularArticleItem {
	title: string;
	url: string;
}

 export const popularArticleItems: PopularArticleItem[] = [
	{ title: 'Importancia del archivo robots.txt para la seguridad y el seo', url:'/importancia'},
    { title: 'Optimización interna de una pagina web', url:'/optimizacion-interna'},
    { title: 'Dónde se inserta el código de Google Analytics en Joomla! 2.5', url:'/donde'},
    { title: 'htaccess en joomla!', url:'/htaccess'},
    { title: 'Las directrices para webmaster de Google', url:'/las-directories'},
    { title: 'Como construir un cotizador, calculadora o formula en joomla', url:'/como-construir'},
    { title: 'Como encontrar HTTP Error 500 en joomla!', url:'/como-encontrar'},
    { title: 'Inline small CSS', url:'/inline-small'},
    { title: 'Causesa de disminucion de visitas o trafico web', url:'/causesa'},
    { title: 'Que aspectos considerar en e-commerce para garantizar su exito', url:'/que-aspectos'},
    { title: 'Como quitar la advertencia de malware por parte de Google', url:'/como-quitra'},
    { title: 'Enlaces negativos: Como afectan su sitio y su marca', url:'/enlaces'},
    { title: 'Tutorial SEO Optimización Para Motores de Búsqueda', url:'/tutorial-seo'},
    { title: 'Como agregar encabezados Expires', url:'/como-agregar'},
    { title: 'Que significa Minify CSS', url:'/que-significa'},
    { title: 'Como las páginas en cache optimizan el rendimiento del sitio', url:'/como-las'},
    { title: 'Como especificar dimensiones de imagen.', url:'/como-especifcar'},
    { title: 'Que características debe tener una contraseña para que sea segura en Joomla', url:'/que-características'},
    { title: 'Qué hacer si recibe una acción manual contra spam', url:'/que-hacer'},
    { title: 'Configuracion seo en Joomla', url:'/configuracion'},
    { title: 'Enlaces pagados y publicidad', url:'/enlaces-pagados'},
    { title: 'Recursos bloqueados Herramientas Para Webmaster de Google', url:'/recursos'},
    { title: 'Redireccionamientos engañosos', url:'/resireccionamientos'},
    { title: 'Tutorial permisos correctos de archivos y carpetas joomla', url:'/tutorial-permisos'},
    { title: 'Porque minimizar redirecciones', url:'/porque-minimizer'},
    { title: 'Importancia de las copias de seguridad', url:'/importancia'},
    { title: 'Como crear una pagina personalizada 404 en joomla', url:'/como-crear'},
    { title: 'Importancia de usar un nombre de usuario y contraseña fuerte', url:'/importancia-de-usar'},
    { title: 'Como usar el atributo alias en joomla', url:'/como-usar'},
    { title: 'Como afecta el número de página indexadas la clasificación de su sitio', url:'/como-afecta'},
    { title: 'Como Configurar Herramientas para Webmasters de Google', url:'/como-configurar'},
    { title: 'Por que son malos los enlaces rotos', url:'/por-que'},
    { title: 'Cómo quitar los enlaces ocultos de las plantillas Joomla', url:'/como-quitar'},
    { title: 'problemas de seguridad de Joomla', url:'/problemas'},
    { title: 'Como proteger un directorio usando cpanel', url:'/como-proteger'},
    { title: '¿Cómo puedo saber si mi sitio está infectado?', url:'/como-puedo'},
    { title: 'Joomla contenido duplicado', url:'/joomla-contenido'},
    { title: 'Como Probar el Archivo robots.txt', url:'/como-probar-el'},
    { title: 'Tutorial como crear una plantilla joomla básica', url:'/tutorial-como-crear'},
    { title: 'Porque Mi Sitio No Aparece en los Resultados de Búsqueda', url:'/porque-mi-sitio'},
    { title: 'Procedimientos de Seguridad Recomendados', url:'/procedimientos'},
    // { title: 'Procesar paginas con explorar como Google', url:'/procesar-pagaians'},
    { title: 'Cómo optimizar el contenido multimedia para SEO', url:'/como-recperarse'},
    { title: 'Importancia Palabras Clave de Contenido para Seo', url:'/importancia-palabras'},
    { title: 'Cómo Recuperarse del Efecto Google Panda', url:'/como-recuperarse-del'},
    { title: 'Proteja su sitio contra ataques de fuerza bruta', url:'/proteja-su-sitio'},
    { title: 'Como proteger su contenido', url:'/como-proteger'},
    { title: 'Las Vulnerabilidades Lógicas', url:'/las-vulnerabilidades'},
    { title: 'Cómo crear un mapa del sitio', url:'/como-crear-un'},
    { title: 'Por que Disminuyen las Paginas Indexadas en Mi Sitemap.xml', url:'/por-que-disminuya'}
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
						<CustomActiveLink to={item.url}>
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