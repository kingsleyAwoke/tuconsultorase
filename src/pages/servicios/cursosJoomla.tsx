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
		title: 'Formaci&oacute;n joomla',
		description: [
			'Nuestro plan de formaci &oacute;n de este excelente CMS lo proporcionamos de la siguiente manera:',
			'<ul><li>One to one de <strong>formacion joomla</strong> - a trav &eacute;s de Skype.</li><li>Cursos presenciales de <strong>formacion Joomla</strong>(en su lugar de trabajo)</li><li>Cursos de <strong>formacion Joomla </strong>fuera de sitio (hoteles, centros de conferencias).</li></ul>',
			 '<h2 style="color: #428bca;">Paquetes de Capacitaci &oacute;n CMS Corporativos</h2>',
			'Hemos preparado una serie de materiales de informaci &oacute;n que explican m &aacute;s acerca de lo que debe buscar en un sistema de gesti &oacute;n de contenidos y por qu &eacute;se recomienda el sistema de gesti &oacute;n de contenidos Joomla para nuestros clientes.',
		]
	},{
		title: 'Cursos de formaci &oacute;n adaptables o Tailored CMS',
		description: [
			'Todos nuestros cursos de formaci &oacute;n de CMS son 100% personalizables - vamos a hablar sobre sus necesidades y dise &ntilde;ar un paquete para satisfacer las necesidades de formaci &oacute;n espec &iacute;ficas de su organizaci &oacute;n.',
			'<br>Con la cada vez mayor importancia de Internet y de la web, en particular, tiene que tomar la decisi &oacute;n correcta a la hora de la pr &oacute;xima renovaci &oacute;n de su sitio web.Creemos que nuestros paquetes CMS integrados son el camino a seguir.',
			'<br>&iquest;Por qu &eacute;necesita un sistema de gesti &oacute;n de contenidos?',
			'<br>&iquest;Por qu &eacute;el CMS es ideal para usted y su organizaci &oacute;n?',
			'<br>&iquest;Qu &eacute;tan f &aacute;cil es instalar Joomla.?',
			'<br>&iquest;C &oacute;mo elegir entre Joomla y otros CMS competidores?',
			'<br>&iquest;C &oacute;mo los usuarios no t &eacute;cnicos pueden crear y mantener p &aacute;ginas?',
			'<br>&iquest;C &oacute;mo utilizar las funciones incorporadas de CMS?',
			'<br>&iquest;C &oacute;mo extender su sitio mediante la instalaci &oacute;n de extensiones (componentes, m &oacute;dulos, plugins)?.'
		]
	}
]

const CursosJoomla = () => {
	useEffect(() => {
		document.title = 'Cursos Joomla! - Consultoria SEO';
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

export { CursosJoomla }	