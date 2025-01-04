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
		title: 'Tutorial como crear una plantilla joomla b&aacute;sica',
		description: [
			'Este tutorial pretende ser una introducci&oacute;n a la creaci&oacute;n de <strong>plantillas</strong> en joomla. Se centrar&aacute;en los archivos indispensables y el c&oacute;digo que debe tener una <strong>plantilla</strong> b&aacute;sica.',
			'<h2><strong>Estructura de directorios o carpetas de una plantilla joomla b &aacute;sica</strong>:</h2>',
			'<ul><li> Deber &aacute;crear una nueva carpeta en la carpeta templates y darle el nombre &ldquo;nueva<strong>plantilla </strong>&rdquo;.</li><li>Puede utilizar un editor de texto y crear 2 archivos: index.php y templateDetails.xml.</li><li>Deber &aacute;crear 2 carpetas en la carpeta &ldquo;nueva<strong>plantilla </strong>&rdquo;: images y css.</li><li>Dentro de la carpeta css debe crear el archivo template.css.</li></ul>',
			'A pesar de que est &aacute;muy bien para colocar todo el c&oacute;digo CSS directamente en el archivo index.php, muchos desarrolladores web prefieren colocar su c&oacute;digo CSS en un archivo independiente que puede ser enlazada desde varias p&aacute;ginas. Esto adem&aacute;s puede acortar el tiempo de carga de las paginas. Ya que el archivo independiente se puede almacenar en cach&eacute;.',
			'<h3><strong>La estructura de nuestra plantilla b &aacute;sica</strong>:</h3>',
			'<ul><li>/Nuevaplantilla</li><li>/CSS</li><li>Template.css</li><li>/images</li><li>index.php</li><li>templateDetails.xml.</li></ul>',
			'El Archivo <strong>templateDetails.xml </strong>sirve para instalar la <strong>plantilla </strong>en el CMS. Posee la siguiente informaci &oacute;n:',
			'<ul><li>Datos relacionados con la <strong>plantilla</strong>: nombre de la <strong>plantilla</strong>, autor, licencia, versi &oacute;n, etc;</li><li><strong>Estructura de carpetas, archivos y lenguajes;</strong> plantilla admite;</li><li>Opciones de configuraci &oacute;n de la<strong>plantilla</strong>.</li></ul>',
			'<strong>Creaci &oacute;n del archivo templateDetails.xm</strong> l con su editor de texto favorito, puede utilizar el bloc de notas.',
			'<br>&lt;?xml version=&quot;1.0 &quot;encoding=&quot;utf-8 &quot;?&gt;',
			'&lt;!DOCTYPE install PUBLIC &quot;-//Joomla! 1.6//DTD template 1.0//EN &quot;&quot;http://www.joomla.org/xml/dtd/1.6/template-install.dtd &quot;&gt;',
			'&lt;extension',
			'version=&quot;2.5 &quot;',
			'type=&quot;template &quot;',
			'client=&quot;site &quot;&gt;',
			'name &gt;AtomicaI &lt;/name &gt;',
			'&lt;creationDate &gt;17/09/2014 &lt;/creationDate &gt;',
			'&lt;author &gt;Estela Silva &lt;/author &gt;',
			'&lt;authorEmail &gt;Esta dirección de correo electrónico está siendo protegida contra los robots de spam. Necesita tener JavaScript habilitado para poder verlo.',
			'authorUrl &gt;http://tuconsultoraseo.com &lt;/authorUrl &gt;',
			'&lt;copyright &gt;Estela Silva &lt;/copyright &gt;',
			'&lt;license &gt;GNU / GPL &lt;/license &gt;',
			'&lt;version &gt;1.0.2 &lt;/version &gt;',
			'&lt;description &gt;Mi nueva <strong>plantilla</strong>&lt;/description &gt;',
			'&lt;files &gt;',
			'&lt;filename &gt;index.php &lt;/filename &gt;',
			'&lt;filename &gt;templateDetails.xml &lt;/filename &gt;',
			'&lt;folder &gt;images &lt;/folder &gt;',
			'&lt;folder &gt;css &lt;/folder &gt;',
			'&lt;/files &gt;',
			'&lt;positions &gt;',
			'&lt;position &gt;breadcrumb &lt;/position &gt;',
			'&lt;position &gt;left &lt;/position &gt;',
			'&lt;position &gt;right &lt;/position &gt;',
			'&lt;position &gt;top &lt;/position &gt;',
			'&lt;position &gt;user1 &lt;/position &gt;',
			'&lt;position &gt;user2 &lt;/position &gt;',
			'&lt;position &gt;user2 &lt;/position &gt;',
			'&lt;position &gt;user3 &lt;/position &gt;',
			'&lt;position &gt;user4 &lt;/position &gt;',
			'&lt;position &gt;footer &lt;/position &gt;',
			'&lt;/positions &gt;',
			'&lt;/extension &gt;',
			'Copie el c &oacute;digo anterior, peguelo en su editor de texto, cambie los &iacute;tems relacionados con la <strong>plantilla</strong>&nbsp;y gu &aacute;rdelo con extensi &oacute;n .xml:',
			'&lt;name &gt;<strong>plantilla</strong>&lt;/name &gt;',
			'&lt;creationDate &gt;17/09/2014 &lt;/creationDate &gt;',
			'&lt;author &gt;Estela Silva &lt;/author &gt;',
			'Esta dirección de correo electrónico está siendo protegida contra los robots de spam. Necesita tener JavaScript habilitado para poder verlo.',
			'&lt;authorUrl &gt;http://tuconsultoraseo.com &lt;/authorUrl &gt;',
			'&lt;copyright &gt;Estela Silva &lt;/copyright &gt;',
			'&lt;license &gt;GNU / GPL &lt;/license &gt;',
			'&lt;version &gt;1.0.2 &lt;/version &gt;',
			'&lt;description &gt;Mi nueva <strong>plantilla</strong>&lt;/description &gt;',
			'<br>El texto entre las etiquetas &lt;name &gt;&lt;/name &gt;es el nombre de la <strong>plantilla</strong>.',
			'<br>La secci &oacute;n &lt;files &gt;debe contener todos los archivos que se utilizar &aacute;n y que muy posiblemente a &uacute;n no conoce todav &iacute;a. &ndash;puede actualizarlo despu &eacute;s.',
			'<br>Deje las posiciones como est &aacute;n, luego podr &aacute;actualizarlas',
			'<br><strong>Creaci &oacute;n del archivo index.php b &aacute;sico</strong>:',
			'El archivo index.php es el n &uacute;cleo de cada p &aacute;gina que joomla entrega. Consiste en hacer una p &aacute;gina HTML, pero se coloca c&oacute;digo php en el lugar del contenido donde deber &aacute;ir. Contiene llamadas a archivos CSS y JavaScript llamadas a archivos CSS y JavaScript. Su contenido est &aacute;formado por etiquetas HTML y PHP.',
			'<h4>&iquest;C &oacute;mo trabaja la <strong>plantilla</strong> joomla?</h4>',
			'El c&oacute;digo de Joomla se coloca en las posiciones de m&oacute;dulo y la secci &oacute;n de componentes de la <strong>plantilla</strong>. &nbsp;Cualquier cosa agregada a la <strong>plantilla</strong> aparecer &aacute;en todas las p &aacute;ginas a no ser que se a &ntilde;ada a una de estas secciones a trav &eacute;s de Joomla (o c &oacute;digo personalizado).',
			'<br>Esta p&aacute;gina le mostrar&aacute;el c&oacute;digo escueto listo para cortar y pegar en su propio dise&ntilde;o.',
			'<br>Una <strong>plantilla</strong> Joomla comienza con las siguientes l &iacute;neas que se colocan en el archivo index.php:',
			'&lt;?php defined( &#39;_JEXEC &#39;) or die( &#39;Restricted access &#39;);?&gt;',
			'<br>&lt;!DOCTYPE html &gt;',
			'&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml &quot;',
			'xml:lang=&quot;&lt;?php echo $this-&gt;language; ?&gt;&quot;lang=&quot;&lt;?php echo $this-&gt;language; ?&gt;&quot;&gt;',
			'La primera l &iacute;nea &lt;?php defined( &#39;_JEXEC &#39;) or die( &#39;Restricted access &#39;);?&gt;',
			'se incorpora por motivos de seguridad, su objetivo es asegurar que el archivo PHP est &aacute;siendo ejecutado dentro de la sesi &oacute;n y contexto del CMS (de forma tal que si un usuario quiere vulnerar el sitio ejecutando un archivo en particular, le sea dif &iacute;cil realizarlo). Es por tanto altamente recomendable su uso en toda <strong>plantilla</strong> joomla.',
			'La segunda l &iacute;nea se refiere a la declaraci &oacute;n del tipo de documento (<span style="color: #2a6496">DOCTYPE</span>), &nbsp;la cual le dice al navegador (y rastreadores web) el tipo de p &aacute;gina HTML que est &aacute;utilizando. El tipo de documento utilizado anteriormente es HTML5 , una nueva versi &oacute;n de HTML que es en gran medida compatible con versiones anteriores, pero contiene muchas caracter &iacute;sticas nuevas. &nbsp;Es posible que desee investigar esta situaci &oacute;n y los deseos de sus clientes antes de decidir que DOCTYPE que desea utilizar. Sin embargo, esto se utiliza en Joomla &nbsp;y m &aacute;s alto.',
			'La tercera l&iacute;nea comienza nuestro documento HTML y describe en que lenguaje est &aacute;la p&aacute;gina web. Un documento HTML se divide en dos partes, la cabecera (head) y el cuerpo (body). El head contendr&aacute;la informaci&oacute;n sobre el documento y el body contendr&aacute;el c&oacute;digo del sitio web que controla el dise&ntilde;o.',
			'<strong>El Head </strong>',
			'&lt;head &gt;',
			'&lt;?php $app = JFactory::getApplication();?&gt','&lt;jdoc:include type=&quot;head &quot;/&gt;',
			'&lt;link rel=&quot;stylesheet &quot;href=&quot;&lt;?php echo $this-&gt;baseurl ?&gt;/templates/&lt;?php echo $this-&gt;template; ?&gt;/css/template.css &quot;type=&quot;text/css &quot;/&gt;',
			'&lt;/head &gt;',
			'Utilizando la l &iacute;nea &nbsp;&lt;?php $app = JFactory::getApplication();?&gt;es posible obtener informaci &oacute;n del sitio para mostrar dentro de la<strong>plantilla</strong>(por ejemplo: nombre del sitio, t &iacute;tulo de la p &aacute;gina, nombre del template, etc).',
			'La segunda l &iacute;nea crea e incorpora las etiquetas necesarias para rellenar la cabecera de la <strong>plantilla</strong>:',
			'Etiqueta &lt;base /&gt;',
			'Etiquetas &lt;meta /&gt;:',
			'content-type;',
			'robots;',
			'keywords;',
			'rights;',
			'language;',
			'generator;',
			'Etiqueta &lt;title /&gt;',
			'Etiquetas &lt;link /&gt;para cargar estilos CSS predeterminados, favicon y RSS;',
			'Etiquetas &lt;script /&gt;para cargar archivos y funciones JavaScript predeterminados.',
			'La tercera l &iacute;nea crea un enlace a su propia hoja de estilos, &nbsp;si se llama template.css y est &aacute;situado en la carpeta css.',
			'<strong>El BODY</strong>',
			'&lt;body &gt;',
			'&lt;img src=&quot;&lt;?php echo $this-&gt;baseurl ?&gt;/templates/&lt;?php echo $this-&gt;template; ?&gt;/images/logo.png &quot;/&gt;',
			'&lt;h1 &gt;&lt;?php echo $app-&gt;getCfg(&#39;sitename &#39;); ?&gt;&lt;/h1 &gt;',
			'&lt;jdoc:include type=&quot;message &quot;/&gt;',
			'&lt;?php if($this-&gt;countModules(&#39;breadcrumb &#39;)) : ?&gt;',
			'&lt;div id=&quot;breadcrumb &quot;&gt;',
			'&lt;jdoc:include type=&quot;modules &quot;name=&quot;breadcrumb &quot;style=&quot;xhtml &quot;/&gt;',
			'&lt;/div &gt;',
			'&lt;?php endif; ?&gt;',
			'&lt;?php if($this-&gt;countModules(&#39;left &#39;)) : ?&gt;',
			'&lt;div id=&quot;left &quot;&gt;',
			'&lt;jdoc:include type=&quot;modules &quot;name=&quot;left &quot;style=&quot;none &quot;/&gt;',
			'&lt;/div &gt;',
			'&lt;?php endif; ?&gt;',
			'&lt;jdoc:include type=&quot;component &quot;/&gt;',
			'&lt;?php if($this-&gt;countModules(&#39;right &#39;)) : ?&gt;',
            '&lt;div id=&quot;right &quot;&gt;',
			'&lt;jdoc:include type=&quot;modules &quot;name=&quot;right &quot;style=&quot;none &quot;/&gt;',
			'&lt;/div &gt;',
			'&lt;?php endif; ?&gt;',
			'&lt;/body &gt;',
			'&lt;/html &gt;',
			'La primera l &iacute;nea del body o cuerpo sirve para insertar una imagen en la p &aacute;gina, en este caso, el logo de la <strong>plantilla</strong>.',
			'La segunda l&iacute;nea, entre etiquetas H1 se utiliza $app para mostrar el nombre del sitio. Dicho nombre es obtenido de la configuraci &oacute;n del CMS.',
			'La tercera l &iacute;nea: &lt;jdoc:include type=&quot;message &quot;/&gt;',
			'Se utiliza para mostrar diferentes mensajes del CMS (por ejemplo: cuando un usuario se registra en el sitio, el CMS le informa que el registro fue exitoso o err &oacute;neo). Dichos mensajes aparecen en la zona en donde se incorpore la directiva. Aparecer &aacute;solo una vez en la <strong>plantilla</strong>.',
			'Las siguientes l &iacute;neas varian dependiendo de la posici &oacute;n del modulo',
			'&lt;?php if($this-&gt;countModules(&#39;posicion &#39;)) : ?&gt;',
			'&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id=&quot;posicion &quot;&gt;',
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;jdoc:include type=&quot;modules &quot;name=&quot;posicion &quot;style=&quot;xhtml &quot;/&gt;',
			'&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div &gt;',
			'&nbsp;&nbsp;&nbsp;&lt;?php endif; ?&gt;',
			'La function $this-&gt;countModules(&#39;posicion &#39;) lo que hace es contar la cantidad de m &oacute;dulos &nbsp;publicados en una determinada posici &oacute;n de la <strong>plantilla</strong>. Si es mayor o &nbsp;igual &nbsp;a 1, se',
			'ejecuta el c &oacute;digo siguiente. Esto se suele hacer para que no se muestre c &oacute;digo HTML vac &iacute;o en caso que un m &oacute;dulo no est &eacute;publicado.',
			'Por &uacute;ltimo, la sentencia &lt;jdoc:include type=&quot;component &quot;/&gt;. Esta l &iacute;nea permite mostrar el contenido de un componente. El contenido de los componentes suelen ocupar la zona principal de la <strong>plantilla</strong>.',
			'Para probarlo cree un art&iacute;culo y un&iacute;tem de men&uacute;que enlace a &ldquo;Mostrar un solo art &iacute;culo&rdquo;, el art&iacute;culo se mostrar&aacute;en la zona del componente. Vea el sitio.',
			'Elimine la sentencia y vea el sitio.',
			'Nota: Esta es una <strong>plantilla </strong> b&aacute;sica con algunas sentencias de utilidad para ayudarte a entender la creaci&oacute;n de <strong>plantillas </strong> joomla.',
			'Recuerda incluir las posiciones que faltan en el index.php.',
			'Descargar Plantilla Basica Joomla',
			'Si te ha parecido &uacute;til el art &iacute;culo comp &aacute;rtelo.'
		]
	}
]

const TutorialComoCrear = () => {
	useEffect(() => {
		document.title = 'Tutorial como crear una plantilla joomla básica - Consultoria SEO';
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

export { TutorialComoCrear }	