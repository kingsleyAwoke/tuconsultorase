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
		title: 'Por que son malos los enlaces rotos',
		description: [
			'Ellos no solo brindan una mala experiencia de navegaci&oacute;n al usuario sino que impiden a las ara&ntilde;as el rastreo de todo el sitio, por lo que afectan el <strong>seo</strong>. Si su sitio tiene enlaces rotos, las ara&ntilde;as se abstendr&aacute;n de rastrear el sitio.',
			'<br>Tienen un impacto negativo en los motores de b &uacute;squeda como Yahoo, Google, Altavista etc.',
			'<br>Los sitios que tienen enlaces rotos, las ara&ntilde;as lo consideran sitios de spam. Un sitio de spam tiene mala navegaci&oacute;n. Los visitantes no quieren regresar a un sitio con mala navegaci&oacute;n.',
			'Los enlaces rotos influyen en su reputaci&oacute;n.',
			'<br>Tendr&aacute;problemas para conseguir nuevos clientes ya que los enlaces rotos no funcionan para la informaci&oacute;n que est&aacute;n buscando.',
			'<h2>Naturaleza de los enlaces rotos</h2>',
			'<br>Con el tiempo muchos sitios web cambian, se eliminan p &aacute;ginas, desaparecen dominios, estas situaciones generan que muchos enlaces se conviertan en obsoletos, ya que no llevan a p &aacute;ginas v &aacute;lidas y generan un c &oacute;digo http 404, la conocida p &aacute;gina no encontrada.',
			'<br>Esto ocurre con mucha frecuencia en enlaces internos de sitios. Con los enlaces externos la situaci&oacute;n es peor ya que la p &aacute;gina destino puede cambiar de ubicaci &oacute;n o nombre sin previo aviso. Los servidores externos pueden reducirse o extinguirse para siempre o sus dominios expirar o venderse.',
			'<br>Frente a todo esto se hace vital contar con herramientas que permitan hacer un seguimiento a los enlaces para constatar su estado. Existen infinidad de&uacute;tiles herramientas en l&iacute;nea que le facilitan este trabajo, si coloca en los motores de b&uacute;squeda&ldquo;comprobar enlaces rotos &rdquo;, &ldquo;herramienta para comprobar enlaces rotos&rdquo;, &ldquo;validar enlaces rotos&rdquo;, los podr&aacute;encontrar y utilizar.',
			'<br>Este proceso de comprobaci &oacute;n debe hacer regularmente y los resultados negativos deben corregirse a la brevedad posible.',
			'<br>No olvides compartir este art &iacute;culo.'
		]
	}
]

const PorQue = () => {
	useEffect(() => {
		document.title = 'Por que son malos los enlaces rotos - Consultoria SEO';
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

export { PorQue }	