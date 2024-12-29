import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import { MoreArticles } from "../components/moreArticles"

const blogSeguridadData: BlogData[] = [
	{
		title: 'Ventajas de Cloud Servers ',
		description: [
			'Cloud hosting es un tipo de alojamiento que se hace para los sitios web a través de servidores virtuales que utilizan recursos informáticos extraídos de las redes que sirven de fundamento de servidores web físicos. Tiene un modo de utility computing, haciéndolo disponible como un servicio y no como un producto; por lo tanto, se puede comparar con servicios públicos habituales como el gas y la electricidad. En esencia, los clientes aprovechan los servicios en función de sus demandas de sitios web y el juego para un solo uso.',
			'Cloud hosting es una gran alternativa al alojamiento de servidor dedicado y compartido y puede ser visto como alojamiento en clúster donde los sitios web se pueden alojar en varios servidores. La red de servidores de cloud hosting puede basarse desde diferentes lugares y diferentes centros de datos.',
			'<span>Los Beneficios</span>'
		]
	}, {
		title: 'Ventajas de elegir cloud servers',
		description: [
			'Los Servicios de computación en nube le ayudan a obtener acceso a las aplicaciones informáticas y software a través de la tecnología de Internet. Este tipo de servicio de vanguardia ha ganado popularidad entre las pequeñas y medianas empresas. De acuerdo con una encuesta realizada en el año 2014, se espera que muchas pequeñas empresas y compañías de lanzamiento gastan una enorme cantidad de dinero en ella. En este artículo se hace hincapié en los múltiples beneficios que son utilizados por ellos por su rápido crecimiento y desarrollo.',
		]
	}, {
		title: 'Como Protegerse contra ataques DDOS',
		description: [
			'Un ataque de denegación de servicios, también llamado ataque DoS, es un ataque a un sistema de computadoras o red que causa que un servicio o recurso sea inaccesible a los usuarios legítimos. Una ampliación del ataque DoS es el llamado ataque distribuido de denegación de servicio, también llamado ataque DDoS (de las siglas en inglés Distributed Denial of Service) el cual se lleva a cabo generando un gran flujo de información desde varios puntos de conexión. La forma más común de realizar un DDoS es a través de una botnet, siendo esta técnica el ciberataque más usual y eficaz por su sencillez tecnológica.',
		]
	}, {
		title: 'Como comprobar si mi sitio ha sido hackeado',
		description: [
			' Quiza usted como administrador de su sitio ha recibido una acción manual contra spam o un aviso de que usted no está cumpliendo las directrices de Google. Puede ser que su<span> pagina web</span> aparezca en los resultados de busqueda con la etiqueta "Este sitio puede haber sido modificado por terceros" o puede que usted buscando su sitio en los resultados de búsqueda de Google se consigue con algo como esto:',
		]
	}, {
		title: 'Elegir un proveedor de alojamiento calificado',
		description: [
			'Es probable que la decisión más crítica para la seguridad de su sitio o <span>pagina web</span> sea la elección de un <span>proveedor de alojamiento calificado</span> para su sitio.Sin embargo, debido a la amplia variedad de opciones de alojamiento y configuraciones, no es posible proporcionar una lista completa de todas las situaciones. He aquí nuestros consejos:',
		]
	}, {
		title: 'Como proteger un directorio usando cpanel',
		description: [
			'Es importante, por <span>seguridad</span> que usted sepa como proteger un directorio usando Cpanel. La <span>seguridad</span> de su sitio es vital, crítica y todo lo que pueda hacer para proteger su sitio siempre será poco.',
			'Este tutorial te mostrará cómo proteger un directorio usando cPanel. ',
			'En caso de usar joomla, usted puede proteger el directorio administrator de esta manera.',
			' Si quieres saber como proteger un directorio sigue leyendo.'
		]
	}, {
		title: '¿Cómo puedo saber si mi sitio está infectado?',
		description: [
			'Una señal de que su sitio o <span>pagina web</span> puede haber sido infectado con software maligno es si su sitio muestra una advertencia en el navegador, como "Este sitio puede dañar tu equipo" o algo parecido. Una advertencia como esto significa que Google ha detectado algo sospechoso en su sitio, y puede haber sido infectado sin su conocimiento. ',
		]
	}, {
		title: 'Las Vulnerabilidades Lógicas',
		description: [
			'<span>Las</span>vulnerabilidades lógicas</span> son problemas en la lógica de la aplicación web en lugar de un problema en el código fuente. <span>Las vulnerabilidades lógicas</span> pueden ser devastadores para una aplicación web. Para demostrar una vulnerabilidad lógica, voy a comprar 2 entradas para el concierto de un sistema de tickets en línea. Después elijo mi banda favorita, la ubicación y el número de entradas, antes de entrar en los detalles de la tarjeta de crédito de la URL en el navegador muestra lo siguiente:',
		]
	}, {
		title: ' Proteja su sitio contra ataques de fuerza bruta ',
		description: [
			' En el artículo "Importancia de usar un nombre de usuario y contraseña fuerte" refimos su relevancia en función de la seguridad del sitio. ',
			'He aquí un ejercicio de 2 minutos para ver si su sitio está experimentando ataques de "Fuerza Bruta".'
		]
	}, {
		title: 'Importancia del archivo robots.txt para la seguridad y el seo',
		description: [
			'Su archivo robots.txt permite indicarle a los motores de búsqueda las páginas que pueden acceder. Por ejemplo, si se especifica en el archivo robots.txt que no desea que los motores de búsqueda puedan acceder a su página de error 404 personalizada, la página no va a ser capaz de aparecer en los resultados de búsqueda y los usuarios de Internet no serán capaces de encontrarla.',
		]
	},
]

const Seguridad = () => {
	return (
		<Layouts>
			<SeguridadWrapper>
				<CustomBreadcrumbs />

				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<Extra />
					</Grid>

					<Grid item xs={12} md={6}>
						<Box display="flex" flexDirection="column" gap={2}>
							{blogSeguridadData.map((item, index) => (
								<BlogItem key={index} {...item} />
							))}
						</Box>

						<MoreArticles />
					</Grid>

					<Grid item xs={12} md={3}>
						<PopularArticles />
					</Grid>
				</Grid>
			</SeguridadWrapper>
		</Layouts>
	)
}

const SeguridadWrapper = styled(Box)({
	gap: '5px',
	paddingTop: '10px',
	display: 'flex',
	flexDirection: 'column',
})

export { Seguridad }	