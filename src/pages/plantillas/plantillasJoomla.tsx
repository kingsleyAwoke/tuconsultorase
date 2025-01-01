import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from '@mui/material';

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { PopularArticles } from "../components/popularArticles";
import ContactAuthorSection from "../components/ContactAuthorSection";
import { BlogItem } from "../components/blogitem";

const blogItem: BlogData[] = [
	{
		title: 'Plantilla Bootstrap Atomicai',
		description: [
			'La <strong style="color: #428bca;">plantilla bootstrap Atomicai </strong> est &aacute;basada en el Framework Bootstrap para joomla 2.5 y 3.X. <strong>Atomicai</strong> esta construida sobre <strong>Bootstrap </strong>http://getbootstrap.com',
			'<br>Twitter <strong>Bootstrap</strong> es un framework o conjunto de herramientas de software libre para dise &ntilde;o de sitios y aplicaciones web, contiene plantillas de dise &ntilde;o con tipograf &iacute;a, formularios, botones, cuadros, men &uacute;s de navegaci &oacute;n y otros elementos de dise &ntilde;o basado en HTML y CSS, as &iacute;como, extensiones de JavaScript opcionales adicionales.',
			'</br>La<strong> plantilla bootstrap Atomicai </strong>es una plantilla de negocio, personal o adaptable basada en el sistema de grillas de <strong>Bootstrap</strong> que es muy f &aacute;cil de utilizar, permitiendo agilizar el proceso de maquetaci &oacute;n. La <strong>plantilla bootstrap </strong>es una plantilla ligera, permite incluir en c &oacute;digo de Google analytics y usa la fuente tipogr &aacute;fica <strong>Font Awesome</strong>, que es una fuente de iconos que permite insertar iconos sociales y s &iacute;mbolos en lugar de im &aacute;genes, haciendo la plantilla a &uacute;n m &aacute;s ligera.',
			'<br><strong>Atomi</strong><strong>ca</strong>i cuenta con dise &ntilde;o adaptable (responsitive) a diversos dispositivos como tables, laptops, mobiles (es joomla mobil amigable) y permite modificar el c &oacute;digo basandose en Bootstrap y/o agregar m &oacute;dulos de joomla. Dise &ntilde;o simple, limpio y elegante que es f &aacute;cil de editar. El dise &ntilde;o es flexible y se puede adaptar a otros temas de negocios o individuales. Ver demo plantilla AtomicaI',
			'<strong>Posiciones de la Plantilla Boostrap Atomicai</strong>: ',
			'<br>Atomicai cuenta con 14 posiciones de m&oacute;dulo. Para ver todas las posiciones:',
			'<ol><li>Haga clic en Extensiones &gt;Gestor de plantillas</li><li>Haga clic en Opciones</li><li>Habilitar vista previa del m &oacute;dulo Posiciones</li><li>Escriba el siguiente URL en su navegador para ver todas las posiciones de m &oacute;dulo: su-sitio.com/?tp=1</li></ol>',
			'<br><strong>Instalaci &oacute;n Atomicai:</strong>',
			'<br>Despu &eacute;s de descargar Atomicai',
			'<ol><li>Vaya al Administrador de Joomla (www.su-sitio.com/administrator) -&gt;Extensiones -&gt;Instalar/Desinstalar</li><li>En el &quot;Gestor de Extensiones &quot;elija la primera opci &oacute;n &quot;Subir paquete &#39;.</li><li>Haga clic en el bot &oacute;n &quot;Examinar ...&quot;para seleccionar el archivo zip desde el computador.</li><li>Haga clic en el bot &oacute;n &quot;Subir e Instalar &quot;.</li></ol>',
			'<br>Instale el m &oacute;dulo bootstap Jumboron y coloquelo en la posici &oacute;n atomicai-jumbotron, lea la documentaci &oacute;n del modulo boostrap jumbotron',
			'<br>Instale el m &oacute;dulo bootstrap Bloque y coloquelos en las posiciones atomicai-topa-1, atomicai-topb1, atomicai-topc-1 hasta atomicai-topc-3. ( 9 modulos bloque). Lea la documentaci &oacute;n del m&oacute;dulo bloque',
			'<br>Descargar plantilla Boostrap AtomicaI'
		]
	}
]

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
							{blogItem.map((item, index) => (
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

export { PlantillasJoomla }	