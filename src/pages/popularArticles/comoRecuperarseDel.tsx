import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Panda from '../../assets/image/popularArticules/panda.jpg';
import GoogleWebmaster from '../../assets/image/popularArticules/google-webmaster.png';

const blogSeoData: BlogData[] = [
	{
		title: 'Cómo Recuperarse del Efecto Google Panda',
		description: [
			'Google Panda fue una de las actualizaciones más controvertidas del algoritmo de Google, pero con el tiempo nos ayudó mucho a eliminar contenido de baja calidad del motor de búsqueda y de todo lo que ha mejorado la calidad de los resultados de búsqueda. Aunque para muchos administradores de páginas web, las actualizaciones de panda de Google siguen siendo un dolor de cabeza, al saberlo, muchos buenos sitios web perdieron su posición en los motores de búsqueda debido a una penalización de panda. El 21 de mayo de 2014, Google lanzó la actualización Panda 4.0, que es la actualización de Panda más grande de 2014 y un importante cambio de clasificación para muchos sitios web. Si usted es uno de esos bloggers que perdieron su tráfico del sitio web después de Panda 4, voy a compartir algunos consejos sobre como recuperarse de Google Panda.',
			'<br>Antes de continuar es importante ser conciente de que es preferible evitar una sanción de Panda antes que tener que recuperarse de una sanción.-',
			'<br>Igualmente, antes de seguir adelante con los consejos de recuperación del efecto Panda, me gustaría que supieras que Google Panda es una penalización a nivel de dominio. Lo que quiero decir es que, si antes había tenido contenido de baja calidad, el  contenido era penalizado, ahora si usted tiene un baja calidad de contenido, el dominio completo será penalizado. Una de las formas más sencillas para deshacerse de la penalización Panda es deshacerse de contenido de baja calidad. Te voy a dar una breve idea de lo que le ayudará a comenzar con el proceso de recuperación.',
			'<br>Todos sabemos que Google lanzó el algoritmo Google Panda a nivel mundial, y te habrás dado cuenta que muchos bloggers hablan de un importante aumento del tráfico o caída de tráfico. Siempre hablamos de optimización <strong>SEO </strong> de entradas o artículos de blog y ya que el algoritmo de Google Panda se ha convertido en obligatorio, es vital hacer <strong>SEO </strong> adecuado a nivel de sitio y a nivel de contenido. En este artículo voy a hablar acerca de  <em>c<strong>cómo recuperarse del efecto Google Panda</strong> </em> , y lo que puede hacer para optimizar mejor su blog para el motor de búsqueda de Google, para que tu blog este blindado de las futuras <strong>actualizaciones de Google Panda </strong> en 2014-2015 y los próximos años. Panda es sólo un algoritmo, y como mencionó Matt Cutt, ahora los sitios también serán penalizadados por sobreoptimización <strong>SEO</strong> . Así que, yo sugeriría evitar cualquier práctica odiosa de <strong>SEO </strong> negro (si usted lo está haciendo), y centrarse más en la calidad del contenido y el aumento de su presencia en redes sociales de su sitio. En particular, <strong>Google + 1</strong>.',
			`<br><img src=${Panda} alt="Cómo Recuperarse del Efecto Google Panda" title="Cómo Recuperarse del Efecto Google Panda" width='554' height='313'>`,
			'<br>Antes de pasar adelante con los <em>consejos de recuperación Google Panda</em>, déjame decirte que el  contenido corto y de baja calidad es uno de los factores que conducen a una penalización, pero, aparte de ellos existen un par más de factores que conducen a una penalización Panda. Una cosa en particular, Google Panda en realidad advierte sobre la Importancia Palabras Clave de Contenido para <strong>SEO</strong>, y por qué es necesario tener una palabra clave de destino en una entrada o artículo de blog. Si usted ha sido penalizado y necesita (obviamente) recuperar el tráfico de visitas es crítico incluir sus palabras clave en sus artículos, en este sentido la recuperación será paulatina, poco a poco irá aumentando, y por la clasificación de las palabras clave objetivo ahora estará recibiendo más visitantes apuntados.',
			'<br>Es importante que Ud. lea acerca de Porque Necesita Palabras Clave, Consultoría de Palabras Clave en SEOy la Importancia de Palabras Clave de Contenido para SEO.',
			'<br>Como he mencionado anteriormente, <em>Google Panda es una penalización a nivel de dominio</em>, por lo que incluso un par de malos contenidos pueden afectar su puntuación total. El primer paso que hay que hacer es identificar <em>el contenido pobre</em> o contenido que no añade mucho valor. Un blog, con artículos con 30-50 palabras con una imagen y un enlace no agrega mucho valor a los lectores.',
			'<br>A menudo cuando detectamos contenido de baja calidad, tenemos un par de opciones: borrarlos, o actualizarlo con información detallada para que sea un contenido de calidad, por lo que sería conveniente y útil para los lectores.',
			'<br>De todas formas, antes de averiguar más acerca de la recuperación a partir del cambio del algoritmo Google panda, primero debe entender qué tipo de sitio web  puede ser afectado negativamente por Google Panda:',
			'<ul><li>Demasiados anuncios</li><li>Un sitio web con baja calidad (contenido pobre)</li><li>La mala gramática</li><li>Un sitio web que funciona como granja de contenido</li><li>Un sitio web con una estructura <strong>SEO</strong>inadecuada. Lea Importancia de la Estructura de Navegación</li><li>Sobre optimización <strong>SEO </strong>y prácticas negativas contra las directivas establecidas por los buscadores</li><li>El contenido duplicado</li><li>Un sitio web con páginas inútiles indexadas en Google</li><li>Tiempo de carga lento</li></ul>',
			'<br>Si usted no está seguro, sobre si la caída de tráfico a su website se debe a Panda o algo más, sugiero revisar esta infografía sobre Causas de disminución de visitas o tráfico web.',
			'<br>Éstos son algunos de los factores, por los que un sitio es penalizado:',
			'<ul><li>Bajo contenido de calidad : Demasiado corto, insuficientemente investigado.</li><li>La mala gramática</li><li>Bajo ratio texto/HTML</li><li>Demasiados enlaces rotos (404 enlaces)</li><li>Bajo CTR de los motores de búsqueda (metaetiquetas de título y descripción pobres y débiles.)</li><li>Uso excesivo de direccionamientos</li><li>Uso de redireccionamientos engañosos</li><li>Google sugiere minimizar o eliminar redirecciones</li></ul>',
			'Podría haber otros factores, pero estos son los que necesitan atención inmediata.',
			'<br>Ahora, antes de que avancemos, aquí menciono algunos factores que usted debe conocer acerca de Google Panda:',
			'<ul><li>Es una penalización a nivel de dominio.</li><li>Los contenidos de baja calidad pueden generar la caída de su clasificación de dominio.</li><li>Google Panda reduce la clasificación general de los sitios con baja calidad de contenidos.</li><li>La optimización <strong>SEO</strong>se vuelve importante.</li><li>La calidad de un artículo se toma como un factor primordial para el ranking.</li><li>Sitios web basados ​​en nichos son mejores que los sitios genéricos.</li></ul>',
			'Así que permitanme ser honesta. No hay manera de traer de vuelta el 100% de su tráfico de nuevo manteniendo el mismo contenido, pero con una buena estrategia puede recuperarse de una penalización de Google Panda y recuperar y atraer más tráfico del que tenía anteriormente.',
			'<h2>Cómo saber si el algorítmo Google Panda ha afectado su sitio web?</h2>',
			'Esta es la primera cosa que usted debe hacer como webmaster o como <strong>consultor SEO</strong>. La reciente actualización de Google Panda se puso en marcha el 21 de mayo de 2014, vaya a su herramienta para webmaster de Google y vea los gráficos de tráfico para la fecha antes mencionada y compárelo con los últimos 10 días. Si usted ve una caída o aumento significativo en el tráfico, significa que su sitio web está recibiendo el efecto Google Panda.',
			'<br>Así que si usted es uno de los que están viendo un aumento en el tráfico, es el momento de tomar un descanso! Tomar un café o reunirse con sus amigos. Pero si usted es uno de aquellos que fueron afectados negativamente por el efecto panda, sugiero leer este artículo en serio, ya que tiene que trabajar muy duro para recuperarse del efecto Panda.',
			'<h3>Pasos para recuperarse de las actualizaciones de Google Panda:</h3>',
			'<strong style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;">Escribir contenido de calidad:</strong>',
			'<br>Estoy segura de que está cansado de leer "contenidos de calidad atrae tráfico dirigido". Cuando se dice contenidos de calidad, significa escribir un artículo completo junto con palabras clave específicas. Tu contenido debe estar optimizado para determinadas palabras clave y no debe ser sólo un contenido cutre. Un contenido de calidad escrito sin palabras clave específicas es un contenido inútil.',
			'<br>Google  se toma la calidad y longitud de contenidos muy en serio y hay ciertas cosas que usted debe tener en cuenta, entre ellas el número de palabras en el contenido del blog. Lea Importancia de Palabras clave de Contenido para <strong>SEO</strong>. Por ejemplo, un artículo sobre "Cómo recuperarse de Google Panda" se puede escribir en 5 sencillos pasos, o se podría escribir en detalle como pretende ser esta guía. Es lo que un lector preferiría, pero ¿qué hay de un motor de búsqueda? Cuando se escribe un artículo detallado, usted cubre más palabras clave y especialmente agrega más información en su artículo.  Incluso he probado y verificado esto después de que optimicé muchas entradas del blog antiguas.',
			'<br><strong style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;">Palabras LSI :</strong>',
			'<br>Lea lo siguiente ya que le permitira analizar,  razonar y comprender: Los motores de búsqueda utilizan algoritmos para decidir la clasificación de contenidos en los resultados de búsqueda. ¿Cómo cree que un motor de búsqueda le dará resultados exactos para su búsqueda? Aquí es donde las siglas LSI entran en este análisis, LSI es el acrónimo de "Indexación Semantica Latente" (en sus siglas en inglés),  ellas ayudan a los motores de búsqueda para entender las categorías exactas para su artículo. Junto con eso, se utiliza negrita, cursiva, palabra clave en etiquetas H1, H2 y H3 para hacer que su contenido  sea aceptado por los motores de búsqueda. Usted debe manter una cierta relación de densidad de palabras clave en sus contenidos.',
			'<br>Para evitar el exceso de optimización, por lo general mantenga la relación de optimización en torno al 70%, este porcentaje está trabajando muy bien para mí. Ud. puede analizar la optimización de su <strong>pagina web</strong>, utilizando nuestra herramienta gratuita Análisis de Página que le permitirá conocer que tan optimizadas están sus URLs o <strong>páginas web</strong>. Podrá conocer factores como tiempo de carga, palabras clave, densidad de palabras clave y más.',
			'<br>Mejorar estos aspectos le ayudará a optimizar su <strong>SEO</strong> con el tiempo.',
			'<br><strong style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;" style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;">Eliminar páginas innecesarias en los resultados de búsqueda de Google:</strong>',
			'<br>El primer paso para eliminar páginas innecesarias de los resultados de búsqueda, es ver las páginas que son parte de los resultados de búsqueda de Google desde su dominio. En el pasado, era bueno tener más páginas indexadas pero ahora es importante tener sólo las páginas importantes y que existan más páginas indexadas pero importantes. Las páginas inútiles no agrega valor para el motor de búsqueda.',
			'<br>Usar la metaetiqueta NOINDEX no ayuda mucho al buscador ya que bloquea la indexación de búsquedas. Lo mismo sucede con las páginas de contacto, renuncia de responsabilidad, política de privacidad, página de noticias, porque no añaden mucho valor al motor de búsqueda. Si quieres puedes usar noindex para tales vínculos. Puede buscar en todas las páginas indexadas de su dominio escribiendo Sitio: SuNombredeDominio.com en  Google.com.',
			'<br>No te olvides de ir a la última página, al final podrás leer "<em>Para que veas los resultados más relevantes, omitimos ciertas entradas muy similares a las XXX que ya te mostramos", entonces; haga</em> clic en <em>repetir la búsqueda e incluir los resultados omitidos</em>. Google coloca el posible contenido duplicado y el contenido de baja calidad de cualquier dominio en resultados segundo nivel.',
			'<br>En Joomla puede para cada artículo, en la parte derecha, en robots, seleccionar el estado adecuado, hablaremos de ello en el futuro.  Otro consejo que usted debe tener en cuenta: Siempre mantenga sus vínculos internos como Dofollow. Google sugiere que usted utilice noindex cuando no desea que los robots indexen cualquier página o contenido y Robots.txt para detener el rastreo de la parte administrativa y la parte privada de un sitio web.',
			'<br>Usted puede hacer una búsqueda rápida en Google con "Site: NombredeDominio.com" para averiguar las páginas que están indexadas en Google de el dominio en cuestión. ReemplaceNombredeDominio.com con el nombre de dominio real.',
			'<br>Si tu blog Joomla administrator están indexadas en Google, sólo tiene que utilizar la herramienta de eliminación de URL de Google Webmaster y deshacerse de el directorio completo. Asegúrese de agregar los directorios en su archivo robots.txt, como:',
			'<br>Disallow: /administrator/',
			'<br><strong style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;" style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;">Retire el contenido de baja calidad:</strong>',
			'<br>Ahora bien, si en el pasado escribió contenido que no está bien escrito, muy corto o no optimizado, deberá revisarlo y mejorarlo. Google está tomando el contenido de baja calidad muy en serio y por lo tanto usted debe empezar a trabajar en sus viejos artículos de baja calidad y convertirlos en artículo de alta calidad. Trabaje en los detalles de <strong>SEO</strong> y en la longitud del artículo. Esto también le ayudará en la vinculación interna de sus artículos. Personalmente cada día, estoy gastando 1-2 horas para trabajar en contenidos antiguos y optimizarlos. Incluso si a usted no lo golpea el efecto Google Panda, debe hacerlo para que su blog se vea mejor y dar más calidad a sus lectores. Esto también le ayudará a tener una comunidad alrededor de su blog, construir su marca y credibilidad.',
			'<br>Ahora la pregunta que puede surgir sería ¿que es un contenido de baja calidad?. No existe una guía sobre contenido de baja calidad, pero aquí hay algunas pautas para la misma:',
			'<ul><li>¿Es útil para los lectores?</li><li>¿Está bien documentado?</li><li>¿Es el contenido proviene de una fuente confiable?</li><li>¿Qué tan dispuesto está un cliente a facilitar detalles de la tarjeta de crédito?</li><li>Para ayudarle a entender este asunto puede leer  Su blog: su activo más preciado.</li></ul>',
			'<br>Y muchos otros factores más. Pero por ahora, he aquí mi corta guía para encontrar contenido de baja calidad en su sitio:',
			'<br>En Google analytics, Comportamiento &gt;Contenido del Sitio &gt;Todas las páginas, encuentre todas las páginas que recibieron &lt;10 visitas en 2 meses. Ahora analice el contenido del artículo y compruebe objetivamente si es útil  y relevante. Dependiendo del artículo, puede mejorarlo, borrarlo o aplicarle la metaetiqueta NOINDEX.',
			'<br>Buscar todos los artículos que están dando un porcentaje de abandonos superior al 85%. Trabajar en ellos para rebajar la tasa de rebote.',
			'<br>El contenido duplicado:',
			'<br>Google toma en serio el contenido duplicado. Demasiado contenido duplicado afectará su presencia buscador seguro. A Google tampoco le gusta las metadescripciones duplicadas ni los metatítulos duplicados ya que se consideran contenido idéntico. Estas páginas serán relegadas al índice complementario. ¿Que es el índice Suplementario o Complementario?. ¿Cómo proteger su contenido?. También asegúrese de que está utilizando la canonización de URL. Puede utilizar el archivo robots.txtpara detener la indexación de parte sus páginas.',
			'<br>Ud debe tomar en serio el plagio de contenido y tan pronto como ve cualquier sitio copiando su contenido, debes reportarlo al equipo de Google Usted debe presentar de inmediato una notificación de DMCA o pedir al webmaster que elimine el contenido de inmediato.',
			'<br><strong style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;">Aprender SEO:</strong>',
			'<br>Si usted está en los blogs profesionales o planea convertirse en blogger, usted debe aprender <strong>SEO</strong> primero. Sin <strong>SEO</strong>, su futuro seguirá siendo impredecible. Una vez que sepas lo básico de <strong>SEO</strong>, usted puede estar listo para ajustar su sitio web y cumplir con los nuevos cambios de los algoritmos y las directrices de los motores de búsqueda.',
			'<br>Usted debe comenzar con:',
			'<br><ul><li>Investigación de Palabra clave</li><li>Optimización de palabras clave</li><li>Cómo construir Backlinks</li><li><strong>SEO</strong>interno. Lea Otimización interna de una página web.</li><li>Robots.txt</li><li>Promoción en redes sociales</li><li>Con el fin de hacerselo a Ud. más facil y que disfrute una experiencia de calidad en nuestro sitio, hemos desarrollado un Tutorial <strong>SEO</strong>Optimización Para Motores de Búsqueda</li></ul>',
			'<br>Promoción en redes sociales:',
			'<br>La promoción en redes sociales realmente ayuda. Especialmente votos en Google+, Facebook le gusta, Tweers y delicius trabajaron para mí en su momento para aumentar mi ranking. Twitter ayuda a la indexación más rápido.',
			'<br>Siempre se puede empezar con la promoción en redes sociales mediante la creación de una página  en Facebook para su site. Si no, puede contratar a cualquier sitio que ofrezca este tipo de servicios. He optimizado mis viejos artículos con palabras clave específicas y promocionado en las redes sociales. Puedo ver gran mejora ranking y se puede intentar lo mismo para cualquier artículo de su blog también.',
			'<br><strong style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;">Enlaces externos:</strong>',
			'<br>Si usted es uno de los que están vendiendo los enlaces de pago o haciendo comentarios pagados sobre cualquier cosa, debe dejar de hacerlo, ya que esto afecta negativamente su posición en los motores de búsqueda. Enlaces pagados y publicidad.  Utilice enlaces a sitios externos con atributo "nofollow" cuando no quiera ceder pagerank.  Hay que tomar precauciones adicionales cuando se vincula a otros sitios, usted debe asegurarse de que enlace o la publicación de artículos como invitado está viniendo de bloggers en el nicho similar o relevante. No deje enlaces en cualquier sitio al suyo, por ejemplo sitios sobre malware, pornografía, viagra y esas cosas que no tienen nada que ver con su sitio.',
			'<br><strong style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;">Blog de Afiliados:</strong>',
			'<br>Si usted tiene un blog en línea para hacer dinero, es probable que el uso de una gran cantidad de anuncios y enlaces de afiliados sea considerado contenido pobre, ya que afecta negativamente la experiencia del usuario. Los principales contribuyentes en un foro para Webmaster han dicho que si hay demasiados anuncios en una <strong>página web</strong> dan una señal de un sitio web de baja calidad. Por favor, lea Enlaces pagados y publicidad.',
			'<br>También si usted tiene un blog de marketing de afiliados con poco contenido original, puede ser más propenso a ser afectados por este algoritmo. Usted debe tratar de usar menos anuncios o publicidad en una página. Los enlaces de afiliados deben usar exclusivamente enlaces nofollow.',
			'<h3 style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;">¿Cómo solicitar una reconsideración tras el cambio de SEO?</h3>',
			`<img src=${GoogleWebmaster} alt="" title="google-webmaster-reconsideración-pedido" width="550" height="194">`,
			'<br>Así que si su sitio fué afectado negativamente por Google panda y su tráfico cayó, espero que ahora, que he descrito los cambios en su sitio para que sea más amigable para los buscadores y en especial se deshizo de páginas de baja calidad lo ayuden a recuperar el tráfico perdido. Una vez que haya terminado todos los cambios esenciales, es el momento para iniciar sesión en herramienta para webmasters y poner una solicitud de reconsideración. A pesar de que lleva tiempo, pero es la mejor cosa que puedes hacer ahora. Esta es la página reconsideración de Google. Aunque, en la mayoría de los casos usted recibirá una respuesta de Google diciendo que su sitio no ha sido penalizado, debido a que el algoritmo de Google Panda no es una sanción, sino una nueva forma de clasificar el sitio web en el motor de búsqueda.',
			'<br><strong style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;">En Pocas palabras:</strong>',
			'<br>Los siguientes cambios funcionan para recuperarse del efecto Google Panda:',
			'<ul><li>Supresión de enlaces rotos</li><li>Páginas no-necesarias eliminadas de búsqueda (Noindex o error 404)</li><li>Optimización de palabra clave para todos los artículos viejos (Mejora de la calidad con la información actualizada). Lea Importancia de Palabras Clave de Contenido para <strong>SEO</strong></li><li>Promoción en redes sociales después de la optimización de palabras clave (Google+, Delicious, Digg)</li><li>Contenido duplicado eliminado</li></ul>',
			'<br>Aparte de todo lo anterior, se debe llevar a cabo la optimización <strong>SEO</strong> interna y la construcción de vínculo de retroceso. Por otra parte, la "construcción" vínculo de retroceso fue más específico para páginas internas en lugar de sólo la página principal. Los anuncios en realidad ayudan  disminuir visitas si son demasiados y además, si manipulan o afectan la clasificación (práctica contraria a las directrices de Google). Si su pagina web tiene enlaces de pago o anuncios que pasan pagerank, elimínelos lo antes posible, no espere una penalización, no importa el tiempo en que los ha venido adquiriendo, porque esperar una reconsideración posiblemente puede llevar mucho tiempo.',
			'<br>Existen muchos sitios con buena clasificación y con publicidad, probablemente debido a que la  proporción anuncios/contenido es aceptable, favorecen el contenido y no incluyen enlaces dofollow.',
			'<br><strong style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;">Reflexiones sobre Panda:</strong>',
			'<br>Usted puede optimizar su sitio para aprovechar al máximo del algoritmo de Google Panda.',
			'<br>Una cosa que todo el mundo debe recordar es que Google no realiza cambios manualmente. Los cambios no son más que un conjunto de algoritmos que siguen ciertas reglas. Si usted está siguiendo las directrices, no hay manera de que su sitio se vea afectado negativamente por cualquier cambio algorítmico. Ahora se está convirtiendo en un elemento esencial para todos los bloggers tener conceptos básicos de <strong>SEO</strong>.',
			'<br>Si usted fue afectado negativamente por el algoritmo Panda y está tratando de recuperarse, siga todos los pasos anteriores. Podría tomar algún tiempo antes de que Google vuelva a rastrear y volver a indexar su sitio web, pero una vez que lo hace, usted podría tener suerte y recuperar su tráfico perdido.',
			'<br><strong style="background-color:rgb(245, 250, 255); box-shadow: 0 0 0 0.5px green; padding: 10px; border-radius: 5px;">Actualización: Me puedes contratar para  entrenamiento de SEO</strong>',
			'<br>personal, en el que voy a revisar su sitio web y te ayudaré a recuperarlo desde actualizaciones de panda. Puede encontrar más detalles contactándome.',
			'<br><em>Háganos saber si usted fue víctima de Google Panda? ¿Qué medidas de recuperación está tomando para recuperarse de Google Panda?</em>'
			
		]
	}
]

const ComoRecuperarseDel = () => {
	useEffect(() => {
		document.title = 'Cómo Recuperarse del Efecto Google Panda - Consultoria SEO';
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

export { ComoRecuperarseDel }	