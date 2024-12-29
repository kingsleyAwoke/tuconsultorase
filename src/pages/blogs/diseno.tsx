import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { MoreArticles } from "../components/moreArticles"
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"

const blogDisenoData: BlogData[] = [
	{
		title: 'Problemas de Diseño de Paginas Flash',
		description: [
			'A pesar de que los sitios web desarrollados y diseñados en flash son hermosos, desafortunadamente <span>la tecnología Flash es una mala elección</span> para la mayoría de los websites comerciales. Esta tecnología rompe estándares y convenciones web. Los sitiosweb flash son generalmente agradables a la vista, pero no cumplen con una serie de criterios mínimos para los sitios web orientados a negocios.',
		]
	},{
		title: 'Centrarse en el Diseño o en la Optimizacion para Motores de Busqueda',
		description: [
			'"¿Debería centrarse en una fantástica experiencia de diseño y el usuario o en la optimización de motores de búsqueda?"',
			'Existe un montón de casos en los que el diseño alucinante ha afectado negativamente el<span>SEO</span> de un sitio web. Si bien es razonable esperar que un sitio web bien diseñado, resulte en un aumento y retención de los visitantes, debe ser lo suficientemente objetivo para darse cuenta de que un buen aspecto del website no es la meta del mismo.',
			'La mayoría de los diseñadores web intencionalmente ignoran el SEO, ya que "limita sus posibilidades artísticas". Pero el punto es que no hay necesidad de obviar todas las características de diseño por el bien de la optimización. Los diseñadores deben trabajar en conjunto con especialistas en SEO y desarrolladores para encontrar una fórmula que satisfaga tanto las preferencias de los usuarios y los requisitos de los motores de búsqueda.',
			'El diseño o el rediseño de un cibersitio requiere una vigilancia cuidadosa, ya que el diseño puede hacer daño inminente al SEO del mismo. El diseño tiene un gran impacto en el SEO efectivo de su site.',
			'¿Cuáles son esos errores de diseño? ',
			'Aquí están los errores más comunes que los diseñadores web cometen:'
		]
	},{
		title: 'Fundamentos de un Buen Diseñador Web',
		description: [
			'El diseño web es tanto una ciencia, como una forma de arte.Mientras la mitad del trabajo se basa en cómo hacerlo y la codificación; la otra mitad se basa en tener un sentido intuitivo de lo que parece bueno y lo que no.Cualquier <span>diseñador</span> de <span>páginas web</span> que se precie va a desarrollar un fuerte núcleo de los fundamentos para hacerse destacar entre el resto de la manada.',
			'Así que, ¿cómo desarrollar estos fundamentos? No hay sustituto para la experiencia, pero una educación sólida - ya sea formal o no - también ayuda enormemente.También es muy recomendable seguir desafiándose a si mismo e ir más allá de los límites de su zona de confort.Eso significará la diferencia entre luchar por encontrar y mantener a los clientes y la otra cara: los clientes son los que te encuentran.',
			'Aquí están los fundamentos absolutos que todos los buenos <span>diseñadores</span> web deben poseer si quieren llegar a niveles sublimes.'
		]
	}
]

const Diseno = () => {
	return (
		<Layouts>
			<DisenoWrapper>
				<CustomBreadcrumbs />

				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<Extra />
					</Grid>

					<Grid item xs={12} md={6}>
						<Box display="flex" flexDirection="column" gap={2}>
							{blogDisenoData.map((item, index) => (
								<BlogItem key={index} {...item} />
							))}
						</Box>
					</Grid>

					<Grid item xs={12} md={3}>
						<PopularArticles />
					</Grid>
				</Grid>
			</DisenoWrapper>
		</Layouts>
	)
}

const DisenoWrapper = styled(Box)({
	gap: '5px',
	paddingTop: '10px',
	display: 'flex',
	flexDirection: 'column',
})

export { Diseno }	