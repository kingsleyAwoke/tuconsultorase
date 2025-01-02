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
		title: 'Dónde se inserta el código de Google Analytics en Joomla! 2.5',
		description: [
			'Generalmente, en cada <strong>plantilla</strong> hay un espacio reservado para incrustar c&oacute;digo especial, incluso en algunas hay espacio para Google Analytics. Haga clic en extensiones --&gt; gestor de <strong>plantilla</strong>s, y una vez all&iacute;, seleccionar su <strong>plantilla</strong> predeterminada. Entre sus par&aacute;metros suele haber una casilla para incrustar all&iacute; el c&oacute;digo que debemos colocar de Google analitycs.',
            '<br>Otras veces, las <strong>plantillas</strong> no son profesionales, no poseen esta casilla para insertar el c&oacute;digo de Google Analytics, por lo que debermos hacerlo a mano en el archivo index.php de Joomla! en la secci&oacute;n head, justo antes de la etiqueta &lt;/head&gt;. Esto, adem&aacute;s de ser delicado, puede generar un error 500, debemos tener en cuenta que en cuanto actualicemos el software de Joomla!, es muy probable que debamos volver, nuevamente, a ingresar el c&oacute;digo en el index.php.',
            '<br><strong>Esta soluci&oacute;n no es recomendable. </strong>Implica recordar constantemente que debemos ingresarlo para cada actualizaci&oacute;n y corremos el riesgo de equivocarnos, borrando parte del c&oacute;digo de la <strong>plantilla</strong> o introducirlo en la secci&oacute;n equivocada.', 
            '<br>En tuconsultoraseo.com recomendamos, si la <strong>plantilla</strong> no permite la opci&oacute;n de incrustar este c&oacute;digo, usar alg&uacute;n plugin o extensi&oacute;n que permita a&ntilde;adir el c&oacute;digo de Google Analytics.-'
		]
	}
]

const Donde = () => {
	useEffect(() => {
		document.title = 'Dónde se inserta el código de Google Analytics en Joomla! 2.5 - Consultoria SEO';
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

export { Donde }	