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
		title: 'Como proteger su contenido',
		description: [
			'Si bien es cierto que el robo de contenido puede ser una medida de cuan exitoso ha resultado, (ya que de otro modo no lo copiar &iacute;an), desafortunadamente es muy com &uacute;n, y los editores de contenido invertimos mucho tiempo y esfuerzo investigando, probando y redactando un buen contenido y necesitamos protegerlo de los piratas de contenido.',
			'<br>El <strong>contenido duplicado no es penalizado</strong> por los motores de b &uacute;squeda como Google, significa simplemente que el contenido duplicado no se muestra a los usuarios en los resultados de b &uacute;squeda. Desmitificando la &quot;penalizaci &oacute;n por contenido duplicado &quot; El Contenido duplicado y los m &uacute;ltiples problemas del sitio',
			'<br>Copiar y pegar contenido es tan facil que se convierte en la principal raz &oacute;n por la que el robo de contenido es tan com &uacute;n. Usted puede desactivar el bot &oacute;n derecho del mouse para impedir copiar el contenido tambi &eacute;n puede impedir que se seleccione contenido de su sitio, aunque no siempre funciona impedir que se robe el contenido de este modo.',
			'<br>Si ver que nuestro contenido ha sido robado por otra persona, es ya molesto, el que no se muestre nuestro contenido duramente elaborado, empeora aun mas la situaci &oacute;n.',
			'<br>De todo esto podemos deducir la necesidad de proteger nuestro contenido.',
			'<br><strong>Algunas maneras de proteger el contenido:</strong>',
			'<br>Las imagenes y videos: Podemos intentar proteger este tipo de contenido colocandoles marcas de agua, ello no las hace 100% seguras contra el robo, pero algunos ladrones de contenido se frenan ya que no les ser &aacute;facil usarlos en otros sitios.',
			'<strong>&iquest;Como detectar el contenido duplicado en su sitio?</strong>',
			'<br>>El m&eacute;todo m&aacute;s simple y m &aacute;s l&oacute;gico es copiar y pegar un fragmento de su contenido en el cuadro de b&uacute;squeda de Google y ver si alguna otra <strong>p&aacute;gina web</strong> aparece con el mismo contenido.',
			'<br>Copyscape es una excelente herramienta para detectar el contenido duplicado en su sitio.',
			'<br>Si su contenido est&aacute;indexado en Google y tiene una fecha que es anterior a la fecha del contenido plagiado, puede utilizar esta como evidencia de que el contenido fue robado a usted y no al rev &eacute;s',
			'<br>El contenido duplicado puede ser visto en Metadescripciones duplicadas de herramientas para webmaster y Etiquetas de t&iacute;tulo duplicadas. Estos contenidos pueden ser f&aacute;cilmente detectados a trav&eacute;s de la herramienta para webmaster de Google, Aspectos de b&uacute;squeda &gt;Mejoras de HTML, como se muestra en la figura de arriba.',
			'<br>Usted, por&uacute;ltimo puede presentar una notificaci&oacute;n de presunta infracci&oacute;n de derechos de autor, al DMCA, (Digital Millenium Copyright Act) para solicitarles la retirada de contenido infractor de derechos de autor. Google suele ser r&aacute;pido en la eliminaci&oacute;n de contenido robado, por lo que usted puede esperar que poco tiempo despues de presentar la queja, el contenido sea eliminado de su&iacute;ndice. Lidiar con el robo de contenido es tedioso y consume tiempo, pero si quiere proteger sus derechos y su posicionamiento <strong>SEO</strong>, es necesario hacerlo, sin embargo; con las herramientas adecuadas, como se describe en este art&iacute;culo, las probabilidades de &eacute;xito son buenas.'
		]
	}
]

const ComoProteger = () => {
	useEffect(() => {
		document.title = 'Como proteger su contenido - Consultoria SEO';
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

export { ComoProteger }	