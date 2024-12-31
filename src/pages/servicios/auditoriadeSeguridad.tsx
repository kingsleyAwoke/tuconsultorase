import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { PopularArticles } from "../components/popularArticles";
import { BlogItem } from "../components/blogitem";
import ContactAuthorSection from "../components/ContactAuthorSection"

const blogSeoData: BlogData[] = [
	{
		title: 'Auditoria de seguridad joomla-joomla expertos',
		description: [
			'Entendemos la <strong>seguridad </strong>web.&nbsp;Como expertos en Joomla puede confiar en nosotros para ayudarle con la <strong>seguridad </strong>de su sitio web Joomla.&nbsp;Podemos ayudarle a endurecer la seguridad de su sitio web Joomla.',
			'<br>Nuestros servicios de auditor &iacute;a de <strong>seguridad </strong>de Joomla reducir &aacute;n las posibilidades de que su sitio Joomla sea hackeado, podemos ayudar a garantizar que en caso de sufrir un incidente de hacking usted este preparado con copias de seguridad y contar con un plan contra desastres.',
			'<br>Podemos endurecer la <strong>seguridad</strong> de su sitio web Joomla existente, ofrecer consejos sobre la configuraci &oacute;n del  servidor y las mejores pr &aacute;cticas para los administradores de sitios web.',
			'<br><strong>Auditor &iacute;as de </strong>Seguridad <strong>de Joomla</strong>',
			'<br>Una auditor &iacute;a de <strong>seguridad </strong> Joomla puede ayudar a prevenir que su sitio web de sea hackeado.',
			'<br>&iquest;Qu &eacute;haremos?',
			'<br>Analizar la configuraci &oacute;n de su p &aacute;gina web, versiones de la lista de componentes, m &oacute;dulos y la versi &oacute;n de plugins, recomendar mejoras donde m &aacute;s se necesitan. Analizar la configuraci &oacute;n de <strong>seguridad </strong>de su servidor.',
			'<br>La entrega final de este proceso ser &aacute;un informe de <strong>seguridad </strong>por escrito, con la formulaci &oacute;n de recomendaciones de cambios urgentes y consejos.'
		]
	}
]

const AuditoriadeSeguridad = () => {
	useEffect(() => {
		document.title = 'Auditoria de Seguridad Joomla! - Consultoria SEO';
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

export { AuditoriadeSeguridad }	