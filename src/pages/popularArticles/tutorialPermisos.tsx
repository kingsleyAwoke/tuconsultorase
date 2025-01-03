import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Permisos from '../../assets/image/popularArticules/permisos.jpg'

const blogSeoData: BlogData[] = [
	{
		title: 'Tutorial permisos correctos de archivos y carpetas joomla',
		description: [
			'Los sistemas operativos como Unix y Linux utilizan <strong>permisos de acceso</strong>, esto significa que saben cómo hacer frente a las solicitudes de acceso a los<strong> archivos y carpetas</strong>. Hay tres tipos de acceso:',
			'<ul><li>Ejecución: Se denotan con X, los archivos con accesso de ejecución pueden ser ejecutados como programas por parte del usuario.</li><li>Lectura: Se denotan con r (de read), los arcivos con accesso de lectura se pueden mostrar al usuario.</li><li>Escritura:  Se denotan con W (de write), los archivos con accesso de escritura pueden ser modificados por el usuario.</li></ul>',
			'<br>Los permisos se dividen en 3:',
			'<ul><li>Usuario. Es el propietario del archivo</li><li>Grupo. Son otros archivos que están en la misma carpeta o grupo.</li><li>Otros. Todos los demás.</li></ul>',
			'<br>El servidor web debe ser capaz de leer sus páginas web con el fin de ser capaz de mostrarlas en el navegador. Los siguientes permisos se deben configurar para que su sitio web funcione correctamente:',
			'<ul><li>Todas las carpetas necesitan ser ejecutables por otros. El valor de los permisos es 755, legibles por usuario, grupo y otros.Se ajusta automáticamente cuando se crea la carpeta.</li><li>Todos los archivos, bien sea imágenes, archivos HTML, PHP, log, ico deben ser leídos por otras personas. El valor del permiso es 644. Se ajustan automáticamente al cargar el archivo.</li><li>Todos los archivos CGI, los que se encuentran en la carpeta cgi-bin, necesitan ser ejecutables por otros. El valor es 755 (legible por usuario, grupo y otros, modificable por el usuario, ejecutable por el usuario, grupo y otros. No se ajusta automáticamente al cargar archivos. Es necesario cambiar los permisos de archivos manualmente.</li></ul>',
			'<ol><li><strong>permisos correctos de archivos y carpetas joomla</strong>: Ingrese a su cuenta de Cpanel.</li><li><strong>permisos correctos de archivos y carpetas joomla</strong>: Abra el administrador de archivos y navegue hasta el archivo o carpeta que desea cambiar.</li><li><strong>permisos correctos de archivos y carpetas joomla</strong>: Haga clic en el archivo o carpeta.</li><li><strong>permisos correctos de archivos y carpetas joomla</strong>: Haga clic en Cambiar permisos en el menú superior.</li><li> <strong>permisos correctos de archivos y carpetas joomla</strong>: Haga clic en tantas casillas como sea necesario para crear los permisos adecuados. Los números de permisos debajo de las casillas de verificación se actualizarán automáticamente.</li><li><strong>permisos correctos de archivos y carpetas joomla</strong>: Por último haga clic en el botón cambiar permisos cuando esté listo. El nuevo nivel de permisos se guarda y la pantalla se actualiza para mostrar el archivo o carpeta modificado.</li></ol>',
			`<img src=${Permisos} alt="permisos correctos en archivos y carpetas joomla.jpg" title="permisos correctos en archivos y carpetas joomla.jpg" width="593" height="363">`,
			'<br>Una parte parte importante de tener un sitio web Joomla <strong>seguro</strong>es establecer los permisos correctos para los archivos de Joomla y carpetas. Le recomendamos que siga estas sugerencias para sus permisos:',
			'<ul><li>* Establezca los permisos para las carpetas de Joomla a <strong>755</strong></li><li>* Establezca los permisos para los archivos de Joomla a <strong>644</strong></li><li>* Establezca los permisos para el archivo configuration.php a <strong>444</strong></li><li>* Nunca use 777 (acceso completo) permisos!</li><li>¡Si te gusto el artículo por favor comparte!</li></ul>'
		]
	}
]

const TutorialPermisos = () => {
	useEffect(() => {
		document.title = 'Tutorial permisos correctos de archivos y carpetas joomla - Consultoria SEO';
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

export { TutorialPermisos }	