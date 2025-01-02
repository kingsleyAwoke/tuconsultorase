import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";

import { Extra } from "../components/extra";
import { Layouts } from "../../components/layouts/layouts";
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles";
import ContactAuthorSection from "../components/ContactAuthorSection";

const blogSeoData = [
	{
		title: 'Inline small CSS',
		description: [
			'Los <strong>peque &ntilde;os archivos CSS en l &iacute;nea</strong>&nbsp;(<strong>Inline small CSS</strong> ) significan simplemente que usted debe embeber el contenido de su archivo css en el HTML en lugar de guardarlo en un archivo externo CSS. Esto reduce la cantidad de archivos que el navegador tiene que descargar antes de mostrar la p&aacute;gina web, por tanto contribuyen a <strong>acelerar </strong>la carga de la <strong>p&aacute;gina web</strong>.',
            'Si usted est &aacute;usando un archivo CSS externo, el navegador primero debe cargar el archivo HTML, y luego descargar el archivo CSS. Una vez en el c&oacute;digo del html el CSS, el navegador s&oacute;lo tiene que descargar su archivo HTML. La descarga de un archivo es m&aacute;s r&aacute;pido que la descarga de dos.',
            '<h2>C&oacute;mo colocar CSS en l&iacute;nea</h2>',
            'Usted copia el contenido de su archivo CSS externo y lo pega entre las etiquetas de estilo en la secci&oacute;n de&lt;head &gt;de su archivo HTML.',
            '&lt;style type=&quot;text/css &quot;&gt;',
            '&lt;/style &gt;',
            'Lo importante es recordar que este c&oacute;digo debe colocarse en la secci&oacute;n head del HTML. Tambi&eacute;n debe utilizar las etiquetas de estilo apropiadas HTML. Copie y pege el contenido de su archivo CSS externo entre las etiquetas de estilo:',
            // Add additional content as HTML strings
            '<h3>&iquest;Que gana con esto?</h3>',
            'Este es contenido adicional que se incluye dentro del array de descripción.',
            'Puede agregar más información, imágenes o cualquier otro componente aquí.',
            'Poner su CSS en la secci&oacute;n head del HTML de su <strong>pagina web</strong>evitar&aacute;que el navegador tenga que realizar dos descargas, ya que el navegador no est &aacute;solicitando un archivo externo para cargar el CSS. Es decir; el navegador ahorrar&aacute;una solicitud http adicional por cada hoja de estilo externa.',
            '<h3>Ventajas y desventajas</h3>',
            'Si bien esto ahorra que el navegador tenga que ir y volver al servidor una vez m &aacute;s (ventaja) tambi&eacute;n significa que el archivo CSS ya no se almacenan en cach &eacute;(desventaja).',
            '<br>Los c&oacute;digos JavaScript y CSS que est &aacute;n embebidos en el documento HTML son descargados cada vez que el documento HTML es llamado. Esto reduce el n&uacute;mero de peticiones HTTP, pero incrementa el tama&ntilde;o del documento HTML.',
            '<br>Si el c&oacute;digo JavaScript y CSS est &aacute;n en archivos externos cacheados por el navegador, el tama&ntilde;o de el documento HTML se reduce sin incrementar el n&uacute;mero de peticiones HTTP.',
            '<br>Si su CSS es peque&ntilde;o y simple no importa que sea descargado cada vez que la p&aacute;gina es cargada. Si el CSS es grande y complejo, lo que a menudo tienden a ser, entonces es posible que desee considerar la posibilidad de almacenar en cach&eacute;el archivo CSS como una mejor opci&oacute;n.'
		]
	}
];

const InlineSmall = () => {
	useEffect(() => {
		document.title = 'Inline small CSS - Consultoria SEO';
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
                        {blogSeoData[0].description.slice(0,7).map((desc, index) => (
								<Box key={index} dangerouslySetInnerHTML={{ __html: desc }} />
							))}
							<Block>
								&lt;HEAD &gt;<br />
								&nbsp;&nbsp;&lt;STYLE type=&quot;text/css &quot;&gt;<br />
								&nbsp;&nbsp;&nbsp;&nbsp;H1 &#123;border-width: 1; border: solid; text-align: center7&#125;<br />
								&nbsp;&nbsp;&lt;/STYLE &gt;<br />
								&lt;/HEAD &gt;
							</Block>
							{/* Render the description starting from a specific index (e.g., index 8) */}
							{blogSeoData[0].description.slice(7).map((desc, index) => (
								<Box key={index} dangerouslySetInnerHTML={{ __html: desc }} />
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
	);
};

const SeoWrapper = styled(Box)({
	gap: '5px',
	paddingTop: '10px',
	display: 'flex',
	flexDirection: 'column',
});

const Block = styled(Box)({
	padding: '10px',
	boxShadow: '0 0 0 0.5px #000',
	borderRadius: '5px',
	color: 'darkred',
	fontFamily: 'monospace', // Optional: Change font for code
	whiteSpace: 'pre-wrap', // Optional: Preserve whitespace
});

export { InlineSmall };