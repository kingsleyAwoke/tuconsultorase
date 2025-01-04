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
		title: 'Problemas de seguridad de joomla',
		description: [
			'A continuaci &oacute;n ofrecemos una lista de los <strong>problemas de seguridad de Joomla</strong>m&aacute;s comunes que afectan un sitio web Joomla, impactando su sitio y su presencia en Internet. &iquest;Cu&aacute;ntos de ellos le podr&iacute;a afectar a usted?',
			'<h2>Problemas de seguridad de joomla. Una contrase&ntilde;a d&eacute;bil del administrador</h2>',
			'Debido a que el gestor de contenidos Joomla pide un nombre de usuario y contrase&ntilde;a en la instalaci&oacute;n se debe utilizar un nombre de usuario&quot;fuerte&quot;y una contrase&ntilde;a.&nbsp;La forma m&aacute;s com&uacute;n de acceder a su sitio Joomla por los&quot;hackers&quot; es el usuario final utilizando un nombre de usu ario&quot;d&eacute;bil&quot;y una contrase&ntilde;a, los siguientes nombres de usuario y las combinaciones de contrase&ntilde;a y las credenciales m&aacute;s comunes que utilizan los hackers en un&quot;d&iacute;a a d&iacute;a&#39;rutinario.',
			'<ul><li>admin - administrador</li><li>admin - 1234</li><li>admin - contrase &ntilde;a</li></ul>',
			'Un nombre de usuario y una contrase&ntilde;a d&eacute;bil puede lograr que su sitio web sea hackeado, haciendo que usted dedique una infinidad de horas en&nbsp;la restauraci&oacute;n de su sitio para que este&#39;c&oacute;mo era&#39;&nbsp;Si est&aacute;utilizando&quot;admin&quot;como nombre de usuario, su sitio esta en riesgo. Sabemos que en el mundo moderno utilizamos tantas contrase&ntilde;as, usamos un n&uacute;mero de diferentes combinaciones de contrase&ntilde;as, el cambio de letras por n&uacute;meros, en diferentes sitios y servicios que cambiamos el orden de las palabras, pero si no utilizamos un nombre de usuario y contrase&ntilde;as fuertes van a ser dif&iacute;cil para otras personas como los hackers que puedan adivinar. Los software permiten a los hackers ejecutar millones de consultas por segundo. Podemos configurar el servidor para bloquear&los <span sytle="color: #2a6496">ataques de&#39;fuerza bruta&#39;</span>, crear una contrase&ntilde;a segura, entre otros.',
			'<h2>Problemas de seguridad de joomla. Regalar o dejar los detalles de acceso Login</h2>',
			'Usted no creer&iacute;a cu&aacute;ntas personas del foro Joomla publican sus datos de acceso para que el mundo los vea. Tambien los dejan a disposici&oacute;n en la oficina o publican su nombre de usuario y contrase&ntilde;a para que el mundo puede comprender su sitio web&nbsp;Recuerde, usted debe mantener estos datos en secreto y seguros es una de las mejores maneras de asegurar su sitio web.',
			'<br>Problemas de seguridad de joomla. Cuentas de correo electr &oacute;nico Hackedas',
			'<br>Si usted necesita que un webmaster tenga accesso a su sitio para realizar una tarea determinada, aseg&uacute;rese de volver a cambir su contrase&ntilde;a tan pronto como se Identif&iacute;que!',
			'<br>Problemas de seguridad de Joomla. No actualizar los archivos Joomla principales',
			'<br>Joomla est&aacute;construido con una gran cantidad de archivos de PHP y una base de datos MySQL (o MS-SQL), estos archivos se actualizan constantemente en la p&aacute;gina de la comunidad de Joomla Github con nuevas versiones, las caracter&iacute;sticas y los parches de<strong></strong><strong>seguridad</strong>para el CMS Joomla&nbsp;En el momento de escribir este art&iacute;culo la versi&oacute;n 2.5 de Joomla ya est&aacute;funcionando en la versi&oacute;n 2.5.6, eso significa que el n&uacute;cleo de Joomla ha lanzado 6 actualizaciones desde enero de 2012.',
			'<br>En promedio los desarrolladores del Core Joomla liberan una actualizaci&oacute;n cada dos meses, la liberaci&oacute;n de nuevas versiones y parches de <strong>seguridad</strong>para la comunidad de Joomla para mantener este gestor de contenido actualizado y seguro.',
			'<br>Mantener actualizados los archivos del n&uacute;cleo hasta la fecha es una de las mejores maneras de evitar la actividad de piratas inform&aacute;ticos en su sitio, en la actualidad Joomla le informa de una actualizaci&oacute;n en el&aacute;rea del administrador y puede actualizar su sitio web Joomla con s&oacute;lo un par de clics.',
			'<h2>Problemas de seguridad de Joomla. Una copia de seguridad de rutina</h2>',
			'No puedo decirle cu&aacute;ntas veces somos contactados por los clientes potenciales que han sido hackeados y cuando se le pregunta si tienen una copia de <strong>seguridad</strong>reciente y&nbsp;limpia, contestan&quot;mi hosting hace eso por m&iacute;,&iquest;no es as&iacute;&quot;&nbsp&iexcl;No!, A menos que usted pague por un servicio de copias de <strong>seguridad</strong>adicionales son su responsabilidad, usted s&oacute;lo&quot;alquila&quot;un espacio web para hospedar su sitio y toda la responsabilidad de la realizaci&oacute;n de copias de seguridad recae en usted.',
			'<br>Una rutina de copia de <strong>seguridad</strong> es esencial para todos los sitios web en el mundo, debe establecer uno ahora!',
			'<br>Puede leer <span sytle="color: #2a6496">    importancia de realizar copias de <strong>seguridad</strong></span>',
			'<h2>Problemas de seguridad de Joomla. Hosting baratos</h2>',
			'&iquest;Por qu&eacute;NO contratar un proveedor de alojamiento barato?',
			'<br>Los proveedores de alojamiento de bajo costo o baratos utilizan servidores compartidos que pueden acoger hasta 1.000 sitios web. El alojamiento compartido por s &iacute;mismo no es malo, pero si usted paga el monto m&iacute;nimo para su hospedaje sabe que no va a ser configurado para la velocidad o la <strong>seguridad </strong>&oacute;ptima.',
			'<br>&iexcl;El alojamiento barato se vende como pan caliente!',
			'<br>Cuando algo sale mal (y pasar&aacute;) la empresa de alojamiento har&aacute;todo para&nbsp;venderle a usted&nbsp;(y as&iacute;aumentar las ventas) un paquete m&aacute;s caro que afirman es&quot;m&aacute;s seguro&quot;- y no lo es, para una <strong>seguridad</strong> &oacute;ptima, proveedores de hosting medianos como nosotros ofertamos los mejores paquetes de hospedaje para Joomla y cuidamos a todos nuestros clientes de hosting Joomla.',
			'<h2>Problemas de seguridad de Joomla: Acepta la subida de archivos sin restricciones</h2>',
			'El peor truco que hemos visto es permit&iacute;r a los usuarios, una vez registrados subir lo que quisieran.&nbsp;Esto es una locura absoluta, la limpieza del sitio es un proceso largo y costoso.&nbsp;Si usted tiene un foro o permite cargas por cualquier otra raz &oacute;n, por favor, establecezca restricciones en los tipos de archivo, el tama&ntilde;o de archivo y en su&#39;.htaccess &#39;.',
			'<h2>Problemas de seguridad de Joomla. Extensiones de Terceros mal codificadas</h2>',
			'Vamos a publicar una lista de add-ons/extensiones mal codificadas que hemos encontrado.&nbsp;Hemos visto algunos que acceden a la base de datos con una consulta URL, esto significa que alguien podr&iacute;a escribir un fragmento de c&oacute;digo en una barra de URL en un navegador y acceder a su base de datos.&nbsp;Ya estos complementos mal codificadas son reportados al Directorio de Extensiones de Joomla (JED) y separados de sus anuncios, por desgracia la gente los descarga y empieza a utilizar desde sus sitios respectivos.&nbsp;Hay sitios web que listan las extensiones con problemas conocidos, si usted es serio acerca de la <strong>seguridad</strong> de su sitio web y la de sus usuarios, usted debe comprobar cada una de sus extensiones de terceros.',
			'<h2>Problemas de seguridad de Joomla. Eliminar extensiones instaladas que ya no utililiza</h2>',
			'Esto es obvio, si ya no usa extensiones que haya instalado y nunca las utiliz &oacute;, elim &iacute;nelas.&nbsp;Esto s &oacute;lo puede causarte problemas y no ofrece nada positivo a cambio.&nbsp;La eliminaci &oacute;n de las extensiones no utilizadas mejora en gran medida la <strong>seguridad</strong> de su sitio web!',
			'<h2>Problemas de seguridad de Joomla. Sitio Web Re-hackeado</h2>',
			'Oh cielos - una y otra vez.',
			'<br>Alrededor del 20% de nuestros trabajos contra&nbsp;la pirater &iacute;a proviene de otros desarrolladores o propietarios de sitios que han limpiado un incidente de hacking y muy r &aacute;pidamente han sido re-hackeados. De-hackear un sitio web Joomla es una habilidad, puede superponer un juego limpio de archivos a los archivos actuales, pero &iquest;qu &eacute;pasa con los archivos nuevos que se han a &ntilde;adido?',
			'<br>Nuestras exploraciones se establecen en marcha para encontrar cualquier cosa que no deber &iacute;a estar all &iacute;, rep &oacute;rtelo a nosotros y tome las medidas necesarias contra el problema encontrado.',
			'<br>Una cosa es segura, nuestros clientes nunca se re-hackeado por el mismo incidente.',
			'<br>Problemas de seguridad de Joomla. No hay medidas de seguridad de un sitio web Joomla suficientes',
			'<br>Cambiar el prefijo de base de datos, cambiar la Identificaci &oacute;n del admin, restringir los l &iacute;mites de carga, &nbsp;bloquear todas las inyecciones SQL, etc',
			'<br>Algunos de estos son b &aacute;sicos, algunos son complicados y se debe hacer por los profesionales de Joomla.&nbsp;Desde nuestro punto de vista, si usted es un negocio serio y no ha implementado estas y otras medidas de <strong>seguridad</strong> de Joomla, usted est &aacute;pidiendo ser hackeado y puesto en rid &iacute;culo.',
			'<br>Su sitio web es su ventana en l &iacute;nea de su tienda, los correos electr &oacute;nicos de spam en su nombre, los enlaces salientes a sitios de pornograf &iacute;a, la informaci &oacute;n del usuario pueden ser utilizados para arruinar su reputaci &oacute;n y perder clientes potenciales.&nbsp;Lo vemos un n &uacute;mero de veces cada mes.',
			'<br>Problemas de seguridad de Joomla y Acceso a detalles del &nbsp;servidor tomado de ordenadores infectados',
			'<br>Malware, spyware y otras infecciones inform &aacute;ticas representan la gran mayor &iacute;a de los hackeos de sitios web.&nbsp;El conocimiento de los virus y las mejores antivirus de calidad ha reducido esta forma de pirater &iacute;a, sin embargo, siguen sucediendo y hemos visto un incidente de esto en los &uacute;ltimos dos meses.',
			'<br>Ejecutar controles peri &oacute;dicos de todo el sistema &nbsp;para evitar acceder a su sitio web, tenga cuidado con los vigilantes en su navegaci &oacute;n por Internet y la apertura de correos electr &oacute;nicos.&nbsp;No arriesgue su reputaci &oacute;n de empresa, mantenga los equipos limpios y libres de infecciones con el beneficio adicional de ayudar a mantener su sitio web limpio.',
			'<br>Si usted est &aacute;preocupado por la <strong>seguridad</strong> de su sitio web o si cree que puede haber ca &iacute;do ya en manos de los hackers, no dude en ponerse en contacto.'
		]
	}
]

const Problemas = () => {
	useEffect(() => {
		document.title = 'problemas de seguridad de Joomla - Consultoria SEO';
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

export { Problemas }	