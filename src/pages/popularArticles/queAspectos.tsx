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
		title: 'Que aspectos considerar en e-commerce para garantizar su exito',
		description: [
			'<strong>He encontrado  empresas de comercio electrónico</strong><strong> qu</strong>e eligen su tecnología basada principalmente en la estética y en segundo lugar en la funcionalidad. Los aspectos del negocio en cuanto a tecnología de comercio electrónico a menudo se pasan por alto.',
            '<br>En realidad, los aspectos del negocio en cuanto a tecnología son generalmente los que diferencian los negocios ganadores de los perdedores.',
            '<br><strong>Los imperativos de negocio</strong>',
            '<br>Hay un universo entero de funciones de negocio que son controlados por la tecnología. Por lo tanto voy a centrar esta discusión en tres de las decisiones más importantes que deben hacerse en materia de tecnología para su negocio de comercio electrónico: Compras, Formas de pago, y la Organización de las actividades comerciales.',
            '<br><strong>Lo importante sobre Compras</strong>',

            '<br>Hay muchas opciones de  carrito de la compra. Pero no todos son iguales. Hay algunos puntos clave a considerar al elegir un carrito de compras para su  sitio de comercio electrónico. La forma más fácil de evaluarlos es la',
            '<br><strong style="display: flex; align-tems: center; justify-content: center">Imágenes y descripciones</strong><br/>La cesta de la compra debe presentar las imágenes con mucho gusto. Los compradores de la tienda son atraídos por el aspecto visual de la tienda, en primer lugar. A continuación, debe ser rico en la descripción de características del producto. En otras palabras, no se conforme con una descripción superficial del producto, detállelo en profundidad, sus clientes necesitan toda esa información, si es posible señale porque ese artículo le será de utilidad.',
            '<br><strong style="display: flex; align-tems: center; justify-content: center">Introducción de datos</strong><br/>A continuación, debe tener en cuenta la facilidad con la que puede introducir datos. Si la cantidad de artículos a cargar en su catálogo es muy grande (mayor a unos pocos cientos de artículos), es muy probable que le irrite la entrada de datos y el mantenimiento. Un buen software de comercio electrónico debe ser capaz de importar los productos desde un archivo .csv o una base de datos.',
            '<br><strong style="display: flex; align-tems: center; justify-content: center">Los impuestos y envío</strong><br/>un área a considerar de muchas soluciones de carro de compras es el cálculo de gastos de envío y los impuestos. El software de carrito de compras debe ser capaz de calcular los impuestos tomando en cuenta la ubicación del cliente. El envío debe tener opciones de envío internacional también. Estos deben enlazar directamente con los sitios de envío en tiempo real. Los  impuestos no deberían limitarse a una sola área geográfica, y deben reflejar la información correcta y al día.',
            '<br><strong style="display: flex; align-tems: center; justify-content: center">Descuentos, rebajas, cupones...</strong><br/>Los descuentos, rebajas y estructura de precios pueden potenciar su venta. La mayoría de los carros de compras ofrecen alguna versión de flexibilidad de los precios. Pero el control total sobre estas características es importante para crear una rica experiencia de comercio electrónico.',
            '<br><strong>La pasarela de pago</strong><br/>El principio general es que el software no debe limitar las formas de pago.&nbsp;Las formas de pago puede aceptar &nbsp;su decisión comercial y no debe imponerse.',
            '<br>Algunos de los modos comunes de pago son las siguientes:',
            '<ul><li>Efectivo</li><li>Tarjeta de crédito</li><li>Tarjeta de débito</li><li>Cuentas en línea de PayPal, por ejemplo.</li></ul>',
            '<strong>Organización de las actividades comerciales–</strong>',
            '<br/>Necesitará gastar algunos recursos, con el fin de construir y mantener un próspero negocio de comercio electrónico.',
            '<br>La organización no tiene por qué ser complicada, simplemente adecuada.',
            '<br>Es necesario un seguimiento de la información del cliente, las ventas y la rentabilidad, sus proveedores, las propias compras a los mayoristas, los salarios y los impuestos.&nbsp;Estas son algunos aspectos mínimos de organización.&nbsp;También podría tener un programa de afiliados y estructurarlo.',
            '<br>En el caso de las pequeñas empresas de comercio electrónico, una simple hoja de cálculo resuelve este aspecto.&nbsp;Sin embargo, si usted planea crecer, esto se convierte en una forma absurda de organizar su negocio, aunque puede servir para las primeras etapas de operación',
            '<br>Usted debe considerar una solución de gestión de relaciones con clientes (GRC) desde el principio de la gestión de datos de clientes.',
            '<br>Un sistema de GRC debe ser intuitivo y proporcionar un acceso rápido y completo a la información que busca.&nbsp;Cuanto más difícil es el acceso a la información adecuada y pertinente sobre los clientes, más tiempo se tiene que esperar para que interactúe, y menos precisas serán sus respuestas.',
            '<br>Un ejemplo de GRC es el programa de tarjeta de recompensas que ofrece muchos negocios.&nbsp;La tienda ofrece a sus clientes una tarjeta gratuita que les da acceso a ofertas y descuentos cuando se pase la tarjeta durante la facturación.',
            '<br>Al mismo tiempo, esa tarjeta también rastrea todo lo que el cliente compra y permite a la tienda &nbsp;crear un perfil de cliente muy detallado basado en sus hábitos de compra.&nbsp;Armado con esta información, la tienda puede ofrecer a sus clientes cupones dirigidos y otros programas que motiven a sus clientes a comprar más productos de la tienda. Amazon.com hace uso de este recurso.',
            '<br>Me encantaria conocer tu opinión sobre este artículo, tus comentarios serán bienvenidios.'
		]
	}
]

const QueAspectos = () => {
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

export { QueAspectos }	