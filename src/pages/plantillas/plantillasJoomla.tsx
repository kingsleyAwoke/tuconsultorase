import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Typography, Box } from '@mui/material';

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { PopularArticles } from "../components/popularArticles";
import { plantillas1, plantillas2 } from "../../assets/image/image";
import ContactAuthorSection from "../components/ContactAuthorSection";

interface PlantillasJoomlaData {
    title: string;
    image: string;
    description: string[];
}

const plantillajoomlaData: PlantillasJoomlaData[] = [
	{
		title: 'Plantilla Bootstrap Atomicai',
		image: plantillas1,
		description: [
			'La <strong>plantilla bootstrap Atomicai </strong> est &aacute;basada en el Framework Bootstrap para joomla 2.5 y 3.X. <strong>Atomicai</strong> esta construida sobre <strong>Bootstrap</strong>http://getbootstrap.com',
			'<br>Twitter <strong>Bootstrap</strong> es un framework o conjunto de herramientas de software libre para dise &ntilde;o de sitios y aplicaciones web, contiene plantillas de dise &ntilde;o con tipograf &iacute;a, formularios, botones, cuadros, men &uacute;s de navegaci &oacute;n y otros elementos de dise &ntilde;o basado en HTML y CSS, as &iacute;como, extensiones de JavaScript opcionales adicionales.</br>La<strong> plantilla bootstrap Atomicai </strong>es una plantilla de negocio, personal o adaptable basada en el sistema de grillas de <strong>Bootstrap</strong> que es muy f &aacute;cil de utilizar, permitiendo agilizar el proceso de maquetaci &oacute;n. La <strong>plantilla bootstrap </strong>es una plantilla ligera, permite incluir en c &oacute;digo de Google analytics y usa la fuente tipogr &aacute;fica <strong>Font Awesome</strong>, que es una fuente de iconos que permite insertar iconos sociales y s &iacute;mbolos en lugar de im &aacute;genes, haciendo la plantilla a &uacute;n m &aacute;s ligera.',
			'<br><strong>Atomi</strong><strong>ca</strong>i cuenta con dise &ntilde;o adaptable (responsitive) a diversos dispositivos como tables, laptops, mobiles (es joomla mobil amigable) y permite modificar el c &oacute;digo basandose en Bootstrap y/o agregar m &oacute;dulos de joomla. Dise &ntilde;o simple, limpio y elegante que es f &aacute;cil de editar. El dise &ntilde;o es flexible y se puede adaptar a otros temas de negocios o individuales.'
		]
	},{
		title: '',
		image: plantillas2,
		description: [
			'Ver demo plantilla AtomicaI',
			'<br><strong>Posiciones de la Plantilla Boostrap Atomicai</strong>: </br>',
			'<img src="/images/posiciones plantilla boostrap atomicai.jpg" alt="posiciones plantilla boostrap atomicai" />',
			'Atomicai cuenta con 14 posiciones de m&oacute;dulo. Para ver todas las posiciones:'
		]
	}
]

const PlantillasJoomlaData: React.FC<PlantillasJoomlaData> = ({ title, image, description }) => {
    const handleClick = () => {
        alert('Learn More clicked!');
    };

    return (
        <Box>
            <Typography variant="h1" style={{ fontSize: '1.5rem', marginBottom: '10px', textAlign: 'center', color: '#333' }}>{title}</Typography>
            <Box>
                <img src={image} alt={title} height='auto' width='350' />
            </Box>
            <Typography variant="body1">
                <span dangerouslySetInnerHTML={{ __html: description.join(' ') }} />
            </Typography>
        </Box>
    );
};

const PlantillasJoomla = () => {
	useEffect(() => {
        document.title = 'Plantillas para Joomla gratis - Consultoria SEO';
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
							{plantillajoomlaData.map((item, index) => (
								<PlantillasJoomlaData key={index} {...item} />
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

export { PlantillasJoomla }	