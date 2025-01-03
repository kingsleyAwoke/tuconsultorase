import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Paginas from '../../assets/image/popularArticules/paginas.png';

const blogSeoData: BlogData[] = [
	{
		title: 'Como afecta el número de página indexadas la clasificación de su sitio',
		description: [
			`<img src=${Paginas} alt="Como afecta el número de página indexadas la clasificación de su sitio" title="Como afecta el número de página indexadas la clasificación de su sitio" width='300' height='168'>`,
			'<br>Cuantas más páginas de su sitio indexen los motores de búsqueda; mejor, ya que esto ofrece más oportunidades de que su sitio web se encuentre.',
			'<br>Un número bajo (en relación al número total de <strong>páginas web</strong>o URL de su web) probablemente indica que es necesario mejorar la arquitectura de los enlaces internos ya que esto está impidiendo que los motores de búsqueda rastreen todas las páginas de su sitio web. Quizás desee crear el mapa del sitio en formato XML de su sitio web y enviarlo a Google™. También podría construir enlaces a páginas internas de su sitio para ayudar a los bots de Google™ a rastrear e indexar sus páginas.',
			'<br>Entre las consecuencias de páginas no encontradas y no indexadas están:',
			'<ul><li>Falta de visitas a páginas no indexadas</li><li>Si no es posible encontrar la página, no es posible clasificarla en los SERPs, (<strong>posicionarla</strong>) o resultados de búsqueda.</li><li>No es posible asignarle PageRank</li></ul>',
			'¿Por que es necesario el proceso de rastreo y la indexación?',
			'<br><strong><em>¿Qué es elrastreo</em></strong>',
			'<br>El rastreo de los motores de búsqueda se refiere a los robots navegan por las <strong>páginas</strong> en la <strong>web</strong>. Si usted tiene un sitio recién lanzado, el robot de Google tendrá que encontrar (crawl) las <strong>páginas web</strong>de su sitio para saber de su existencia en la web. Dicho esto, el trabajo del bot (robot) no termina con el rastreo. Se debe indexar las páginas también.',
			'<br><strong><em>¿Qué es la indexación?</em></strong>',
			'<br>Una vez que el bot ha encontrado una página mediante el rastreo, entonces tiene que añadir la página a la lista de otras páginas rastreadas que pertenecen a la misma categoría. Este proceso se conoce como la indexación.',
			'<br>No todas las direcciones URL rastreadas se indexan, y es posible que Google detecte algunas URL por otros medios, como, por ejemplo, los enlaces de entrada de otros sitios, (los llamados backlinks), de allí la importancia de enlazar sus páginas internas desde sitios de terceros.',
            'Hay muchas maneras de saber si su sitio web ha sido rastreado e indexado por los robots de Google.',
			'<br>En la consola de búsqueda de Google, de ahora en adelante CBG usted puede consultar varias páginas que le ayudarán a determinar problemas de rastreo.',
			'<br><ul><li>La página de estadísticas de rastreo, en la sección rastreo; proporciona información sobre la actividad de Googlebot en tu sitio durante los últimos 90 días.</li><li>En la página de estado de indexación, en la sección índice de Google; se proporcionan estadísticas sobre cuántas de tus direcciones URL Google ha podido rastrear o indexar.</li><li>Explorar como Google. La CBG<span></span>permite ver una página tal como lo hace Google. Esto resulta de especial utilidad si estás solucionando problemas relacionados con el bajo rendimiento de una página en los resultados de la búsqueda, su <strong>posicionamiento</strong>. Si se ha pirateado tu sitio, la herramienta Explorar como Google puede ayudarte a identificar como Google está viendo su sitio.</li></ul>',
			'<br>Esta herramienta permite comprobar si el sitio se puede rastrear, permite explorar un máximo de 500 URL a la semana por cada cuenta de la CBG o  la URL y todas las páginas directamente enlazadas a ella con un límite de 10 al mes por cuenta de CBG.',
			'<br><strong>Consulta la página de estado de indexación:</strong>',
			'<ol className="ordered-list"><li> En la página principal de la CBG, haz clic en el sitio que quieras.</li><li>En el Panel de control, haz clic en Índice de Google y, a continuación, en <strong>Estado de indexación</strong>.</li></ol>',
			'<br>Esta página tiene 2 pestañas:',
			'<br><strong>Opción Básica: </strong>que muestra el Total de páginas indexadas: el número total de URL que se encuentran actualmente en el índice de Google.',
			'<br><strong>Pestaña Avanzadas</strong>:',
			'<br>Nos da además de las páginas indexadas, las páginas bloqueadas por robots y las páginas eliminadas. Esta información depende de marcar o desmarcar las casillas correspondientes y clicando el botón “actualización”',
			'<ul><li><strong>Bloqueadas por robots</strong>: el total de direcciones URL que Google no puede rastrear porque no se lo permite tu archivo robots.txt.</li><li>Un aumento sustancial en el número de páginas rastreadas e indexadas indica que Google puede acceder regularmente a tu contenido y que el sitio se está indexando.</li><li>Un descenso repentino en el número de <strong>páginas web</strong>indexadas, ello puede indicar que el servidor no funciona, que está sobrecargado o que Google tiene problemas para acceder al contenido.</li><li>Un gran número de páginas duplicadas puede significar que tu sitio tiene problemas con la canonización, el contenido duplicado o las páginas generadas automáticamente, o que alguien lo ha pirateado. En muchos casos, Google te mandará un mensaje cuando detecte problemas con tu sitio, así que asegúrate de definir las preferencias de notificación</li></ul>',
			'<br>Toda esta información puede encontrar en la ayuda de la Consola de búsqueda de Google (CBG).',
			'<br>Espero que este artículo haya sido no solo de tu interés sino de utilidad para ti. ¡¡Espero lo compartas!!'
		]
	}
]

const ComoAfecta = () => {
	useEffect(() => {
		document.title = 'Como afecta el número de página indexadas la clasificación de su sitio - Consultoria SEO';
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

export { ComoAfecta }	