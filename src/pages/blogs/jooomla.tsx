import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { MoreArticles } from "../components/moreArticles"
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"

const blogJoomlaData: BlogData[] = [
	{
		title: 'Buscador para el componente K2',
		description: [
			'El buscador de K2 que lleva por default se configura con el <span>módulo K2 tools. </span>Luego de seleccionar la funcionalidad del módulo como caja de búsqueda, configuramos sus parámetros:',
		]
	}, {
		title: '¿Por qué debe escoger Joomla Como Su Gestor de Contenido?',
		description: [
			'Millones de usuarios utilizan este magnifico y potente gestor de contenidos en todo el mundo. Es un sistema de gestión de contenidos de código abierto. Puede crear y controlar el sitio de manera efectiva; por otra parte, usted puede personalizarlo! Puede incorporar numerosas extensiones de terceros que están fácilmente disponibles. Algunas de pago y muchas gratuitas. La disponibilidad de numerosas <span>plantillas</span> es otra ventaja añadida, y el proceso de actualización puede hacerse de manera efectiva.',
		]
	}, {
		title: 'Tutorial permisos correctos de archivos y carpetas joomla',
		description: [
			'Los sistemas operativos como Unix y Linux utilizan <span>permisos de acceso</span>, esto significa que saben cómo hacer frente a las solicitudes de acceso a los<span> archivos y carpetas</span>. </span><span style="box-sizing: border-box;">Hay tres tipos de acceso:',
		]
	}, {
		title: 'Es Mi Sitio Joomla Movil Fácil',
		description: [
			'Este artículo te encantará. La mejor manera de hacer tu <span>pagina web </span>o <span>sitio</span> <span>joomla móvil</span> <span>Facil</span> es usando una plantilla especialmente pensada para móviles o celulares y totalmente gratuita.',
			'El uso de moviles o celulares para navegar por la web está creciendo de forma astronómica y, sin embargo, la mayoría de las webs no están optimizadas para estos dispositivos. Los móviles suelen tener un tamaño de pantalla limitado y debería cambiar la forma de presentar el contenido en estas pantallas.'
		]
	}, {
		title: 'Como ingresar metadatos joomla ',
		description: [
			' Los metadatos son datos sobre datos. Suelen definir el título del documento, estilos, enlaces, base, scripts y otra información meta.',
			'Es información sobre la página web y se define en la sección &lt;head&gt; del documento. La sección &lt;head&gt; es un contenedor de <span>metadatos</span>. Esta información es utilizada por los motores de búsqueda para determinar la relevancia que las páginas dan a la solicitud de búsqueda que se está procesando en un momento dado en un determinado buscador.'
		]
	},{
		title: "Declaraciones Jdoc en Joomla ",
		description: [
			' La salida visual de un sitio joomla es controlada por las plantillas, en éstas se deben incluir una serie de diferentes declaraciones llamadas <span>declaraciones jdoc, </span> las cuales están incluidas especificamente en el archivo index.php e indican dónde debería localizarse la salida de otras partes de Joomla o sus extensiones en la página web.',
		]
	},{
		title: "Como hacer un diseño web efectivo",
		description: [
			' Usted sueña con hacer de su sitio un gran sitio, tal vez un blog,  ya tiene el borrador de como lo quiere y con que funcionalidades debería contar.',
			' Si ya tiene el sitio, usted está dispuesto a rediseñarlo con tal de garantizar su éxito.',
			'<span>Hacer un diseño de pagina web efectivo</span> no consiste solo en que tan bien se ve, es importante como funciona y debe funcionar perfectamente bien.'
		]
	},{
		title: "Como usar palabras clave en joomla",
		description: [
			'Antes de  empezar a crear su sitio Joomla es importante llevar a cabo un proyecto de investigación de palabras clave para identificar cuáles son las principales palabras clave para su sitio y las palabras clave asociadas que complementan o son relevantes para las palabras clave principales. La razón de esto es que las palabras clave deben estar en el centro del diseño de su sitio web - la estructura del sitio (categorías de contenido, grupos de productos y así sucesivamente), elementos de menú, artículos de contenido y así sucesivamente todos deben ser optimizados para hacer el mejor uso de su núcleo y palabras clave asociadas.',
		]
	},{
		title: "Cómo quitar los enlaces ocultos de las plantillas Joomla",
		description: [
			'Gracias a una interfaz de salida basada en la <span>plantilla</span> y un montón de potentes opciones de personalización, Joomla es uno de los sistema de gestión de contenidos (CMS)  más populares en uso hoy en día. Millones de sitios alrededor de la Web se han construido usando Joomla, y un grupo de herramientas libres, plug-ins y <span>plantillas</span> hacen que sea aún más fácil para casi cualquier persona crear un sitio profesional e interesante.',
		]
	},{
		title: "Tutorial como crear una plantilla joomla básica",
		description: [
			'Este tutorial pretende ser una introducción a la creación de <span>plantillas</span> en joomla. Se centrará en los archivos indispensables y el código que debe tener una <span>plantilla</span> básica.',
		]
	}
]

const Joomla = () => {
	return (
		<Layouts>
			<JoomlaWrapper>
				<CustomBreadcrumbs />

				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<Extra />
					</Grid>

					<Grid item xs={12} md={6}>
						<Box display="flex" flexDirection="column" gap={2}>
							{blogJoomlaData.map((item, index) => (
								<BlogItem key={index} {...item} />
							))}

							<MoreArticles />
						</Box>
					</Grid>

					<Grid item xs={12} md={3}>
						<PopularArticles />
					</Grid>
				</Grid>
			</JoomlaWrapper>
		</Layouts>
	)
}

const JoomlaWrapper = styled(Box)({
	gap: '5px',
	paddingTop: '10px',
	display: 'flex',
	flexDirection: 'column',
})

export { Joomla }	