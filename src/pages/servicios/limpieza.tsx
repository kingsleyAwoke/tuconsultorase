import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection"

const blogSeoData: BlogData[] = [
	{
		title: 'Limpieza sitio hackeado',
		description: [
			'Joomla sitio web hackeado! Limpieza de un sitio web hackeado',
			'<br>El equipo de expertos en <strong>seguridad</strong> de tuconsultoraseo limpia su website hackeado. Usted puede confiar en nosotros para ayudarle con incidentes de hacking de su sitioweb web Joomla, discretamente. Además de la limpieza de su cibersitio hackeado, lo aseguramos contra hackers futuros - y <strong>a diferencia de cualquier otra persona que opera en el ámbito de la seguridad de Joomla, garantizamos nuestro trabajo</strong>',
		 	'<h2 style="color: #428bca;">Ayuda - sitio web Joomla hackeado</h2>',
			'Tenemos una amplia gama de experiencia en lo que respecta a la solución de sitios hackeados. Si su <strong>website</strong><strong>Joomla ha sido hackeado entonces usted necesita nuestra ayuda. </strong>Ofrecemos tres servicios principales para la recuperación de un web hackeada:',
			'<br>La limpieza de un site Joomla hackeado in-situ',
			'<br>Limpieza completa con reconstrucción de los archivos del sitioweb',
			'<h2 style="color: #428bca;">La limpieza de un sitio Joomla hackeado y la mejora de la <strong>seguridad</strong><h2 style="color: #428bca;">',
			'Por desgracia, es muy común encontrar que sitiosweb web Joomla hackeados son operados por usuarios que por cualquier razón no tienen copias de <strong>seguridad </strong>viables disponibles. Existen dos métodos: revisión de los archivos por nuestro personal de forma exhaustiva y reposición de los archivos de forma nueva y limpia.',
			'<h2 style="color: #428bca;">Joomla Hacked - Sitioweb Hacked</h2>',
			'<h3 style="color: #428bca;">Método 1: Limpieza de los archivos de hackers de un sitioweb Joomla hackeado y endurecer la <strong>seguridad</strong></h3>',
			'La limpieza de Joomla después que su website ha sido hackeado implica la eliminación de código o archivos que no pertenecen a los archivos y carpetas de Joomla. Los archivos que han sido manipulados serán reemplazados por código limpio, nuevo, es un proceso de puesta al día de archivos. Esto requiere el escaneo automatizado y revisión meticulosa. Si bien este es el más rápido de los dos métodos es algo menos completo que el más completo "limpia re-generaciócompleta."',
			'<h4>Escanear Joomla Para Hacker Archivos</h4>',
			'<br>Joomla se construye a partir de cientos de carpetas que contienen miles de archivos. Todo el mundo ha instalado algunas de las miles de extensiones Joomla disponibles. Algunos cibersitios han modificado archivos del núcleo de Joomla, esto es una pesadilla cuando se trata de la limpieza de sitios web Joomla después de un incidente de hacking, saber lo que se necesita para mantener el sitio funcionando es una gran habilidad. Cuando vea los informes de sitios Joomla siendo hackeado una y otra vez - es invariablemente debido a los archivos que los hackers dejaron atrás, dejando puertas traseras para futuros ataques de hackers.',
			'<h4>La forma en que limpiamos tu Joomla</h4>',
			'<ul><li>Vamos a limpiar los archivos de hackers a finales de la próxima jornada de trabajo</li><li>Si los archivos de registro están disponibles vamos a trazar el vector inicial por el cual fue comprometido el website- por lo general un componente obsoleto - y vamos a actualizar el componente y el propio Joomla, si es necesario</li><li>Vamos a instalar nuestra propia protección anti hackers que aumente enormemente la <strong>seguridad</strong>del sitioweb</li></ul>',
			'<h3 style="color: #428bca;">Método 2: Más reelaboración en profundidad del sitio de Joomla para reforzar la <strong>seguridad</strong></h3>',
			'Este servicio está dirigido a los clientes que han hecho extensas personalizaciones de archivos del núcleo de Joomla. Nuestro servicio "limpieza de un website Joomla hackeado" estándar in situ por lo general incluye sobrescribir los archivos de Joomla con una copia limpia de Joomla. Para los clientes que han hecho extensas personalizaciones esto puede ser un problema - ya que el proceso de edición de los archivos principales está mal visto, entendemos plenamente que a veces las necesidades de negocio anulan las "mejores prácticas". A veces sólo tienes que conseguir el resultado final deseado ya que es el productivo.',
			'<br>En estas circunstancias, la obtención de un website Joomla funcional y limpio, implica mucho más trabajo. Tenemos que comparar sus archivos con los archivos "limpios" y asegurarnos de que sus ediciones están presentes, pero que un hacker no ha insertado algunas ediciones propias. Afortunadamente somos muy buenos en lo que hacemos y por lo que a pesar de que es una carga de trabajo adicional importante, hemos logrado mantener abajo las implicaciones de costos adicionales a un mínimo. Creemos que esta cuota representa una excelente relación calidad-precio.',
			'<h2 style="color: #428bca;">Nuestra garantía Joomla <strong>Seguridad</strong></h2>',
			'No somos comerciantes de entrar y salir - no nos limitamos a tomar el dinero y correr.',
			'<br>Después de aproximadamente siete días, comprobamos su cibersitio web de nuevo - y de nuevo después de unos treinta días.',
			'<br>Si por alguna razón su web se vuelve a comprometer en este plazo, vamos a limpiar su website Joomla hackeado de forma gratuita. No sólo eso, sino que su garantía de 30 días comienza de nuevo.',
			'<br>Podemos ofrecer esta garantía porque somos buenos en lo que hacemos. Sabemos que las probabilidades de una recurrencia de su problema son pocas - y que si algo sale mal merece ser protegido de nuevo. Si usted está pensando en usar uno de nuestros competidores pregúnteles si ofrecen una garantía similar, y si no lo hacen, pregúntese por qué no.'
		]
	}
]

const Limpieza = () => {
	useEffect(() => {
		document.title = 'Limpieza sitio hackeado - Consultoria SEO';
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

export { Limpieza }	