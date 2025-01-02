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
		title: 'Optimizaci&oacute;n interna de una pagina web',
		description: [
			'<strong>La optimizaci&oacute;n interna de una p&aacute;gina web</strong> se refiere a todas las t&eacute;cnicas que se realizan en el interior de la p&aacute;gina y que contribuyen a mejorar la posici&oacute;n que &eacute;sta ocupa en los resultados de los&nbsp; motores de b&uacute;squeda.',
			'<br>Las siguientes son algunas de las t&eacute;cnicas <strong>SEO</strong> en el interior de las p&aacute;ginas web:',
			'<br>A&ntilde;adir contenido &uacute;til, fresco a los visitantes y que les ayude a resolver un problema. Informaci&oacute;n de calidad y centrarse en el usuario.',
			'<br>Cuidar la navegabilidad del sitio. <span style="color: #4cb2cf">Una buena estructura de navegaci&oacute;n</span> es importante tanto para los usuarios como para la r&aacute;pida indexaci&oacute;n de su sitio.',
			'<br>Un buen consejo: utilice la ruta de navegaci&oacute;n',
			'<br>La estructura de los enlaces internos. Ud. debe asegurarse que todas las p&aacute;ginas de su sitio web est&aacute;n interrelacionadas unas con otras. Si la p&aacute;gina principal ha sido indexada, cerci&oacute;rese que el resto est&aacute;n enlazadas a ella para que se indexen tambi&eacute;n, pero aseg&uacute;rese que no hay m&aacute;s de 200 enlaces en una p&aacute;gina determinada.',
			'<br>Los sitios r&aacute;pidos en cargar, tambi&eacute;n se indexan m&aacute;s r&aacute;pido por Google.',
			'<br>Cree un perfil en Google+ y a&ntilde;ada un enlace a su sitio. Dado que Google+ es un producto de Google, su robot le prestar&aacute; atenci&oacute;n a estos enlaces.',
			'<br>Cree una cuenta en Google herramientas para webmaster y env&iacute;e su sitio',
			'<br>Compruebe si su c&oacute;digo HTML es v&aacute;lido, quite cualquier c&oacute;digo innecesario.',
			'<br>Evite las tablas.',
			'<br>Revise la relaci&oacute;n entre el texto y el c&oacute;digo HTML. Una buena relaci&oacute;n texto-HTML se situa entre un 25 y 70%. Puede usar la herramienta <strong style="color: #4cb2cf">SEOChat</strong> para verificar esta relaci&oacute;n en su sitio web.',
			'<br>Quite las im&aacute;genes innecesarias que enlentecen la carga del sitio',
			'<br>Compruebe sus url, ellas deben ser descriptivas, cortas y con las palabras clave colocadas al principio.',
			'<br>Est&eacute; seguro de evitar url duplicadas:',
			'<be>Su sitio web puede tener versiones www y no www apuntando al mismo contenido y en consecuencia tambi&eacute;n tendr&aacute; el problema de contenido duplicado, muchas veces el contenido duplicado se crea accidentalmente por el Id de sesi&oacute;n, c&oacute;digos de afiliados.',
			'<br>Puede lidiar con este problema de dos maneras:',
			'<br>Ud debe escoger la url de su preferencia y a&ntilde;adir una etiqueta rel can&oacute;nica a la otra URL duplicada',
			'<br>La otra forma es a&ntilde;adir redirecciones 301, permanentes, a la p&aacute;gina de su versi&oacute;n preferida.',
			'<br>Utilice&nbsp; &uacute;nicamente javascript y flash si es necesario.',
			'<br>Mantenga el tama&ntilde;o de la p&aacute;gina por debajo de 300K',
			'<br>Elimine cualquier texto oculto que no es visible a los usuarios.',
			'<br>La p&aacute;gina debe tener siempre una cierta calidad de texto sin formato.',
			"<br>Estos son algunos de los elementos b&aacute;sicos para facilitar el rastreo y la indexaci&oacute;n por parte de&nbsp; los robots de Google.",
			'<br>Si su p&aacute;gina no se indexa, le conviene saber los problemas potenciales a los que podr&iacute;a enfrentarse:',
			'<br>Es imprescindible que su sitio tenga un archivo robot.txt, pero es vital chequear qu&eacute; p&aacute;ginas&nbsp; no tienen el acceso permitido a Google bot. Esta es una de las principales razones por las que un contenido no se indexa.',
			'<br>Si ha adquirido un dominio de segunda mano, es posible que Google lo haya penalizado (probablemente por alguna historia de spam) y deba solicitar a Google una reconsideraci&oacute;n.',
			'<br>Problemas con el servidor. A veces &eacute;ste no permite que el robot de Google acceda a su sitio. Puede ser que el servidor se encuentra en mantenimientos o los DNS est&aacute;n obstaculizando la accesibilidad.',
			'<br>Meta Robos:&nbsp; La siguiente etiqueta se utiliza para asegurar que el sitio no es indexado por los motores de b&uacute;squeda.',
			'<br>&lt;meta name=&rdquo;robots&rdquo; content=&rdquo;NOINDEX, nofollow&rdquo;&gt;',
			'<br>El archive .htaccess que se encuentra en la carpeta ra&iacute;z se utiliza generalmente para corregir los errores que se arrastran y redirecciones. Una incorrecta configuraci&oacute;n puede conducir a la formaci&oacute;n de bucles infinitos que dificultan la carga y la indexaci&oacute;n. Si desea conocer m&aacute;s sobre el archivo .htaccess lea &quot;<strong style="color: #4cb2cf">.htacces en joomla</strong>&quot;',
			'<br>Use un archivo sitemap, puede generar uno en web-site-map',
			'<br>Puede enviar el sitemap utilizando la herramienta para webmaster de google en la secci&oacute;n Rastreo &gt; Sitemap.',
			'<br>Otros<strong style="color: #4cb2cf"> errores SEO</strong>:</Link> v&iacute;nculos rotos, errores 404, redireccionamientos incorrectos a p&aacute;ginas que puedan&nbsp; estar bloquedas por el bot de Google.',
			'<br>Use etiquetas de encabezado, ellas vas de h1 a h6. Ellas se utilizan para diferenciar el t&iacute;tulo de una p&aacute;gina del resto del contenido, la etiqueta m&aacute;s importante es la etiqueta h1 y la menos importante h6. Las etiquetas de cabecera tienen una jerarqu&iacute;a, usted no puede saltarse ninguna, por ejemplo de la 1 a la 3, ya que quebrar&aacute; la jerarqu&iacute;a y no es bueno para el <strong>SEO</strong>.'
		]
	}
]

const Optimizacion = () => {
	useEffect(() => {
		document.title = 'Optimización interna de una pagina web - Consultoria SEO';
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

export { Optimizacion }	