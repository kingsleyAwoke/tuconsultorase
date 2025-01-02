import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Robot from '../../assets/image/popularArticules/robots.jpg';

const blogSeoData: BlogData[] = [
	{
		title: 'Importancia del archivo robots.txt para la seguridad y el seo',
		description: [
            `<img src=${Robot} alt="" max-width="100%" height="auto">`,
			'Su archivo robots.txt permite indicarle a los motores de búsqueda las páginas que pueden acceder. Por ejemplo, si se especifica en el archivo robots.txt que no desea que los motores de búsqueda puedan acceder a su página de error 404 personalizada, la página no va a ser capaz de aparecer en los resultados de búsqueda y los usuarios de Internet no serán capaces de encontrarla.',
            '<br>Limitar el acceso de los motores de búsqueda a determinadas páginas de su sitio es esencial tanto para la privacidad de su sitio como para <strong>optimización SEO</strong>. En este artículo se explica porque y conocerá cómo crear un buen archivo robots.txt.',
            '<br /> <strong>Cómo trabaja el archivo robots.txt</strong>',
            '<br>Los motores de búsqueda envían pequeños programas llamados <abbr title=" también conocido como bot y Crawler, un rastreador es un programa que los motores de búsqueda utilizan para buscar información en la web. El acto de rastreo en un sitio web se refiere a cuando el rastreador comienza a buscar a través de los documentos contenidos en el sitio web.">" arañas "</abbr> a su sitio y puedan llevar información a los motores de búsqueda para que las páginas de su sitio pueden ser indexadas en los resultados de búsqueda y encontradas por los usuarios de Internet. Su archivo Robots.txt puede indicarle a estos programas para que no puedan buscar páginas de su sitio que usted designe mediante un comando de " Disallow ". Por ejemplo, el siguiente comando Robots.txt:',
            '<br>User-agent *',
            '<br>Disallow: /error404',
            '<br>Bloquearía todos los robots de los buscadores para visitar la siguiente página en su sitio web: http://su-sitio.com/',
            '<br>Dese cuenta que antes del comando Disallow, usted tiene el comando: <br />User-agent: *',
            '<br>La parte " User-agent:" especifica qué robot desea bloquear. Usted también puede decir lo siguiente: <br />User-agent: Googlebot',
            '<br>Este comando sólo bloqueará el robots de Google, mientras que otros robots seguirían teniendo acceso a la página: http://su-sitio.com/error404',
            '<br>Sin embargo, utilizando el carácter " *", se está especificando que los comandos',
            '<br>siguientes se refieren a todos los robots. Su archivo robots.txt se encuentra en el directorio principal de su sitio. Por ejemplo: http://su-sitio.com/robots.txt',
            '<br><strong>¿Por qué algunas páginas necesitan ser bloqueadas?</strong>',
            '<br>El siguiente video explica las diferentes opciones para evitar el rastreo de contenido en tu página web.',
            '<br><iframe src="https://www.youtube.com/embed/w5-vgPqxrnk" frameborder="0" width=" 450 " height=" 325 "></iframe>',
            '<br>Hay tres razones por las cuales usted podría querer bloquear una página mediante el archivo robots.txt.',
            '<br>En primer lugar, si usted tiene una página en su sitio, que es un duplicado de otra página, usted no quiere que los robots la indexen debido a que resultaría en contenido duplicado y puede hacerle daño a su <strong>SEO</strong>.',
            '<br>La segunda razón es cuando tiene una página en su sitio que no desea que los usuarios puedan acceder a ella a menos que tomen una acción específica. Por ejemplo, si usted tiene una página de agradecimiento, donde los usuarios reciben información específica porque ellos le dieron su dirección de correo electrónico, es probable que no quiera que la gente tenga la posibilidad de encontrar esa página haciendo una búsqueda en Google.',
            '<br>La tercera razón por la que usted desea bloquear páginas o archivos es cuando se quiere proteger los archivos privados en su sitio, como su cgi-bin y/o impedir que su ancho de banda sea utilizado por robots de indexación de archivos de imagen: <br />User-agent: * <br />Disallow: /images /  <br />Disallow: /cgi-bin /',
            '<br>En todos estos casos, tendrá que incluir un comando en el archivo robots.txt que le indique a los motores de búsqueda que no accedan a esa página, para que no la indexen, y así no se muestre en los resultados de búsqueda y de ese modo no enviar a los visitantes a la misma.',
            '<br>Echemos un vistazo a cómo se puede <strong>probar el archivo robots.txt</strong> que ha creado en su sitio. Con una cuenta en las herramientas para webmasters de Google, usted puede probar el archivo robots.txt, seleccionando la opción " probador de robot.txt " en la opción " Rastreo " en la barra de menú lateral. Si usted agregó: <br />User-agent: * <br />Disallow: /coloso',
            '<br>y en la parte inferior coloca http://su-sitio.com/coloso y selecciona el user agent, la herramienta le mostrará en color rojo la línea Disallow:/coloso, indicando así que ese directorio está bloqueado para cada uno de los user-agent con los que haga la prueba. Si comenta esa línea con # y repite la prueba haciendo clic en el botón probar, éste dirá permitido.',
            '<br>Nótese aquí que usted tiene un comando "Allow" que es útil si quiere hacer una excepción y permitir que el robot acceda a una página que usted ha bloqueado. <br />User-agent: * <br>Disallow: /images/ <br>Al colocar el comando: <br>Allow: /Googlebot',
            '<br>Debajo del comando de Disallow, estaría permitiendo que sólo el robot de Google pueda acceder al directorio de imágenes de su sitio.',
            '<br>Una vez que haya especificado los comandos de las páginas y archivos que desea bloquear en el block de notas guárdelo como robots.txt.',
            '<br><strong>Instalar el archivo robots.txt</strong>',
            '<br />Una vez que tenga el archivo robots.txt, puede cargarlo en el directorio principal (www) de su sitio web. Usted puede hacer esto usando un programa FTP como Filezilla. La otra opción es contratar a un programador web para crear e instalar el archivo robots.txt, haciéndole saber qué páginas desea bloquear. Si usted elige esta opción, un buen programador web puede completar el trabajo en una hora aproximadamente.',
            '<br /><strong>Conclusión</strong>',
            '<br>Es importante actualizar el archivo robots.txt si agrega páginas, archivos o directorios en su sitio que usted no desea sean indexados por los motores de búsqueda o accedidos por los usuarios de Internet. Esto garantizará la <strong>seguridad</strong>de su sitio web y los mejores resultados posibles con su posicionamiento web.',
            '<br><strong>Ejemplo de un archivo robots.txt</strong>'
		]
	}
]

const Importancia = () => {
	useEffect(() => {
		document.title = 'Importancia del archivo robots.txt para la seguridad y el seo - Consultoria SEO';
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
                            <BlockWrapper>
                            User-agent: * <br />
                            Disallow: /administrator/ <br />
                            Disallow: /cache/ <br />
                            Disallow: /cli/ <br />
                            Disallow: /components/ <br />
                            Disallow: /images/ <br />
                            Disallow: /includes/ <br />
                            Disallow: /installation/ <br />
                            Disallow: /language/ <br />
                            Disallow: /libraries/ <br />
                            Disallow: /logs/ <br />
                            Disallow: /media/ <br />
                            Disallow: /modules/ <br />
                            Disallow: /plugins/ <br />
                            Disallow: /templates/ <br />
                            Disallow: /tmp/ <br />
                            Sitemap: http://tuconsultoraseo.com/sitemap.xml
                            </BlockWrapper>
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

const BlockWrapper = styled(Box)(({ theme }) => ({
    padding: '6px',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
    boxShadow: '0 0 0 0.5px'
}));

export { Importancia }	