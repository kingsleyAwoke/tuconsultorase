import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Config from '../../assets/image/popularArticules/configuracin.png';

const blogSeoData: BlogData[] = [
	{
		title: 'Configuracion seo en Joomla',
		description: [
			`<img src=${Config} alt="Como configurar seo en joomla" style="width: auto; height: auto">`,
			'<strong>SEO </strong>son las siglas de &nbsp;<strong><i>Search Engine Optimization.</i></strong> Las opciones de esta secci&oacute;n pueden cambiar el formato de las direcciones URL de <strong>p&aacute;ginas web</strong> del sitio, y esto puede tener un efecto significativo en los rankings de b&uacute;squeda de p&aacute;ginas individuales, as&iacute;como la creaci&oacute;n de URLs m&aacute;s amigables.',
			'<br><b>Sugerencia:</b> &nbsp;despu &eacute;s de realizar cualquier cambio en la configuraci &oacute;n de <strong>seo</strong>, actualice cualquiera de las p &aacute;ginas del sitio web que ya est &aacute;n abiertos en su navegador web (generalmente con Ctrl + R &nbsp;puede hacer esto). De no hacerlo, podr &iacute;a significar que el formato de los enlaces web interno para el sitio ya no coincida con el que Joomla est &aacute;a la espera y por lo tanto dar la apariencia de los enlaces rotos.',
			'<br><b>Consejo:</b>  &nbsp;Evitar si es posible alterar la configuraci&oacute;n de <strong>SEO</strong>, una vez se haya establecido un sitio web. Los cambios en cualquiera de los tres primeros par&aacute;metros siguientes significa que casi la totalidad de las direcciones URL de un sitio tambi&eacute;n va a cambiar y dar lugar a v&iacute;nculos rotos y tal vez una ca&iacute;da temporal en los buscadores.',
			'<ul><li>Representaci&oacute;n interna &nbsp;&nbsp;Las URL &acute;s de Joomla tienden a ser largas y dif&iacute;ciles de interpretar por los seres humanos y los motores de b&uacute;squeda. Este es un ejemplo t&iacute;pico de la direcci &oacute;n URL interna de una p&aacute;gina que muestra un elemento de contenido: www.ejemplo.com/index.php?option=com_contente&amp;view=articulo&amp;id=48&amp;iditem. Si esta opci&oacute;n de configuraci &oacute;n global est &aacute;ajustado a&quot;s&iacute;&quot;, la URL es modificada en una forma m&aacute;s corta y m&aacute;s f&aacute;cil de entender:&nbsp;www.ejemplo.com/index.php/inicio. El texto que identifica la direcci&oacute;n URL (en este caso &quot;inicio &quot;) se deriva del texto Alias ​​establecido para cada categor&iacute;a, elemento de contenido, y el elemento del men &uacute;. La configuraci&oacute;n por defecto es &quot;No &quot;.</li><br><li><b>Usar Apache mod_rewrite.</b> &nbsp;Cuando este par&aacute;metro se establece en&quot;S &iacute;, Joomla utilizar&aacute;la funci&oacute;n mod_rewrite de servidores web Apache para eliminar la parte &nbsp;<i>index.php</i>&nbsp;del URL. As&iacute;, cuando este est &aacute;habilitado la URL mostrada anteriormente se convertir &aacute;en:&nbsp; www.ejemplo.com/inicio <b>Nota: </b>Este par&aacute;metro se establece en&quot;No &quot;de forma predeterminada. No debe estar ajustado a&quot;S &iacute;&quot;a menos que el servidor web utilice el software de Apache y se ha instalado el m&oacute;dulo mod_rewrite en su sitio web. Para que  &nbsp;funcione, el archivo&nbsp;<i>htaccess.txt</i>&nbsp;instalado en el directorio ra&iacute;z del sitio web (o preferiblemente una copia de la misma) debe ser renombrado a .htaccess. Una m ala configuraci&oacute;n del archivo &nbsp;<i>htaccess</i>&nbsp;puede causar f&aacute;cilmente los principales errores de servidor, por lo que no modifique el archivo <i>htaccess a </i>  menos que entienda c &oacute;mo funciona. Si desea saber m&aacute;s sobre el archivo .htaccess puede leer htaccess en joomla</li><br><li><b>A&ntilde;ade sufijo a la URL</b>. Cuando se ajusta en&quot;S&iacute;&quot;, Joomla a&ntilde;ade .html al final de la mayor &iacute;a de las direcciones URL. Las direcciones URL que se muestran arriba se convertir&aacute;n entonces en:&nbsp;www.ejemplo.com/index.php/inicio.html  o&nbsp;www.ejemplo.com/inicio.html. Esta configuraci&oacute;n es en gran medida una cuesti&oacute;n de preferencia personal, pero teniendo en cuenta que es f&aacute;cil &nbsp;<i>confundir .htm</i>&nbsp;y sufijos .<i>html</i>&nbsp;al escribir las direcciones URL, es m &aacute;s conveniente tener esta funci &oacute;n desactivada. La configuraci&oacute;n por defecto es &quot;No &quot;.</li><br><li><b>Alias ​​Unicode.</b> (S &oacute;lo presentes en Joomla v1.6.x y posteriores.) Elija entre alias &quot;Unicode&quot;&quot;transliteraci&oacute;n &quot;.  &nbsp;Si se configura en s &iacute;, los caracteres no latinos est &aacute;n permitidos en el al&iacute;as &nbsp;y URL, si no, el t&iacute;tulo que incluye caracteres no latinos generar&aacute;un alias predeterminado de fecha y hora actuales por ejemplo &quot;2014-08-12-16-53 &quot;. El ajuste predeterminado es no. El cambio de este par&aacute;metro no cambia de forma retrospectiva los alias, s&oacute;lo cambia el comportamiento de la generaci &oacute;n autom&aacute;tica de alias para la creaci&oacute;n y edici&oacute;n de futuros contenidos. &quot;Transliteraci&oacute;n&quot;es el ajuste predeterminado. Quizas le interese Como usar el atributo alias en Joomla!.</li><br><li><b>A&ntilde;adir Nombre del sitio Para los t&iacute;tulos de p &aacute;gina.</b>&nbsp;(S &oacute;lo presente en Joomla v1.6.x y posteriores.) Anexa el nombre del sitio a los t&iacute;tulos de p&aacute;gina en la etiqueta &nbsp;<i>&lt;title &gt;</i>&nbsp;de cada encabezado de la <strong>p &aacute;gina web</strong>. (Este texto aparece en la barra superior de la ventana del navegador web y/o en la pesta&ntilde;a del navegador.).</li></ul>'
		]
	}
]

const Configuracion = () => {
	useEffect(() => {
		document.title = 'Configuracion seo en Joomla - Consultoria SEO';
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

export { Configuracion }	