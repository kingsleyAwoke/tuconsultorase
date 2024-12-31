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
		title: 'Modulo Jumbotron Bootstrap para joomla',
		description: [
			'<ul><li>M&oacute;dulo para joomla 2.5 y joomla 3.X</li></ul>',
			'<br>Modulo para mostrar el &nbsp;componente Jumbotron de bootstrap que permite exhibir contenidos de forma destacada. F&aacute;cil de instalar y usar.',
			'Una vez que el m&oacute;dulo est&aacute; instalado:',
			'<ol><li>Asegurate que el m&oacute;dulo se publica.</li><li>A&ntilde;ade una posici&oacute;n al m&oacute;dulo.</li><li>Asigne el men&uacute;:</li></ol>',
			'<br>En todas las p&aacute;ginas',
			'En todas menos la seleccionada.',
			'En todas menos la seleccionada.',
			'<br>Recuerde: su plantilla debe trabajar con Bootstrap.',
			'<br><strong>Apoyo</strong>: comuniquese con nosotros.',
			'<br><strong>Configuraci&oacute;n de opciones avanzadas:</strong>',
			'<br><strong>Caracter&iacute;sticas Modulo Bootstrap Jumbotron para joomla</strong>',
			'<ul><li>Puede escribir y dar color al texto del header del jumbotron</li><li>Escribir y dar color al texto de parrafo</li><li>Definir si el p&aacute;rrafo ira o no centrado</li><li>Determinar si se mostrar&aacute; o no un bot&oacute;n boostrap</li><li>Escribir el texto del bot&oacute;n</li><li>Ingresar un link al bot&oacute;n</li><li>Elegir una clase de bot&oacute;n</li><li>Seleccionar una imagen de primer plano y su ancho</li><li>Seleccionar una imagen de segundo plano</li><li>Selecciona las posiciones X y Y de la imagen</li><li>Para joomla 2.5 y 3.X</li></ul>',
			'Demo Modulo Jumbotron Bootstrap para joomla',
			'Descargar Mod_jumbotron',
			
		]
	}
]

const Jumbotron = () => {
	useEffect(() => {
        document.title = 'Modulo jumbotron boostrap para joomla - Consultora SEO';
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

export { Jumbotron }	