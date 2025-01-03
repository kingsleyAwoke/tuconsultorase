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
		title: 'Enlaces negativos: Como afectan su sitio y su marca',
		description: [
			'&iquest;Existen enlaces que apuntan a su sitio web y sabotean sus esfuerzos por conseguir un buen ranking?',
			'<br>Sea inteligente acerca de la colocaci&oacute;n de enlaces a su sitio. Si no lo es, entonces corre el riesgo de crear una gran cantidad de enlaces artificiales que echar&aacute;n a perder todo lo que ha intentado lograr con sus esfuerzos para atraer tr&aacute;fico a su sitio o <strong>pagina web</strong>y marketing de contenidos.',
			'<br><strong>&iquest;Qu &eacute;son los enlaces artificiales?</strong>',
			'<br>A menudo los m&eacute;todos que se esconden bajo el disfraz de&quot;conseguir tr&aacute;fico r&aacute;pido&quot;, los enlaces artificiales, son enlaces enga&ntilde;osos y manipuladores que apuntan hacia un sitio web y son de dudosa procedencia. Ellos crean una experiencia de usuario terrible y contaminan Internet. El uso de estos enlaces artificiales puede resultar en una ca&iacute;da significativa de rankings en los motores de b&uacute;squeda y est &aacute;n siendo detectados m &aacute;s r&aacute;pidamente por Google.',
			'<br>Como ejemplos de enlaces artificiales, tambi&eacute;n conocidos como malos enlaces, que apuntan a un sitio web, se incluyen los siguientes:',
			'<br>&middot;Backlinks de compras y sistemas de enlace forzado',
			'<br>&middot;Spamming de comentarios y opiniones falsas (intencional o sabotaje)',
			'<br>&middot;Art &iacute;culos de terceros, modificados o plagiados',
			'<br>Aseg&uacute;rese de que sus esfuerzos no sean saboteados por la asunci&oacute;n de los siguientes 7 indicadores de prevenci&oacute;n contra v&iacute;nculos artificiales!',
			'<ol><li><strong>Publicaci&oacute;n de contenido en sitios que enlazan a su sitio web.&nbsp;</strong>Los art &iacute;culos, visitas, foros de mensajes, comunicados de prensa, etc, son incre&iacute;bles m&eacute;todos para aumentar la exposici &oacute;n de usted y su sitio web. La clave es la creaci&oacute;n de contenido significativo, valioso, &uacute;nico que proporcione una buena experiencia de usuario. Evite conectar palabras clave irrelevantes a su contenido</li><br><li><strong>Sea consistente con su marca.&nbsp;</strong>Desde las p&aacute;ginas de redes sociales, a sus art &iacute;culos y el contenido de su invitado, crean se&ntilde;ales potentes de su marca. Cuanto m&aacute;s fuerte sea la se&ntilde;al, mayor ser&aacute;su capacidad de ser buscado por los usuarios.</li><br><li><strong>Contratar a una empresa SEO y/o servicios de escritores o publicadores?&nbsp;</strong>Compre de manera inteligente!solicite ejemplos de su trabajo o servicios pregunte por las carteras de art &iacute;culos, p&aacute;ginas web, y mucho m&aacute;s para asegurar que son el sistema m&aacute;s adecuado para usted y su marca. No se detenga ah&iacute;! Una vez contratados, discuta con ellos la estrategia, revise su trabajo, de su opini&oacute;n, y desp&iacute;dalos si no entregan a tiempo su trabajo.</li><br><li><strong>Publicar en los medios sociales, foros, blogs y comentarios? </strong>Sin spam y no automatizar comentarios. Crear relaciones cordiales con los que te siguen, tus seguidores, y por supuesto. Contactar con el autor o los usuarios, proporcionando informaci&oacute;n pertinente y espec&iacute;fica.</li><br><li><strong>Limpia tu perfil de v&iacute;nculo de retroceso de mala calidad o artificiales. </strong>Realiza una actividad rutinaria de an&aacute;lisis y revisi&oacute;n de backlink, para saber de d &oacute;nde viene el tr&aacute;fico. &iquest;provienen todos los enlaces de sitios web de alta calidad? &iquest;se relacionan con su sitio web? &iquest;C&oacute;mo es la experiencia del usuario en estos enlaces? &iquest;cualquier cosa mediocre est &aacute;bien? &iquest;proceden de sitios pornogr &aacute;ficos? &iquest;ilegales? Ud. debe quitar o solicitar la eliminaci&oacute;n de esos v &iacute;nculos a los sitios donde se generaron, en caso de que no sean eliminados debe utilizar la herramienta de desautorizaci&oacute;n de Google.&nbsp;(tambi&eacute;n puede utilizar Google Webmaster Tools&nbsp;para entender mejor la salud de su sitio web y que se le avise si algo anda mal.)</li><br><li><strong>No compre enlaces, ni participe en esquemas de enlaces, no fuerce sus v&iacute;nculos.&nbsp;</strong>Si usted ha contratado a una firma de <strong>SEO</strong>o un servicio de v &iacute;nculo de retroceso, aseg&uacute;rese que no est &aacute;comprando enlaces en su nombre o que est &aacute;participando en esquemas de enlaces. Evite forzar sus v&iacute;nculos, ellos deben ser relevantes al contenido de su sitio web y que nos facilita contexto de calidad.</li><br><li><strong>Proporcionar un mejor servicio al usuario.&nbsp;</strong>El usuario debe estar siempre en primer plano en todos sus esfuerzos. No debe decepcionarse, su decepci&oacute;n se traducir&aacute;en el perjuicio de su credibilidad. Una mejor experiencia de calidad dar &aacute;lugar a m&aacute;s conversiones y m&aacute;s exposici&oacute;n.</li></ol>',
			'<br>Si usted est &aacute;preocupado acerca de los v&iacute;nculos naturales que conducen a su <strong>pagina web</strong>, no se asuste! Utilice las sugerencias anteriores para crear una gran experiencia de usuario y un perfil de tr&aacute;fico saludable a la direcci&oacute;n de su sitio web. &iquest;Qu &eacute;m&eacute;todos naturales a trabajado usted? S&iacute;, los m&eacute;todos manuales realizados por Usted mismo consumen tiempo pero le garantizan enlaces de calidad&iquest;Ha tropezado con m&eacute;todos artificiales de enlace y le gustar&iacute;a advertir a otros autores sobre ellos? H&aacute;ganos saber en la secci&oacute;n de comentarios a continuaci&oacute;n - nos encantar&iacute;a saber de usted!'
			
		]
	}
]

const Enlaces = () => {
	useEffect(() => {
		document.title = 'Enlaces negativos: Como afectan su sitio y su marca - Consultoria SEO';
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

export { Enlaces }	