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
		title: 'Tiendas online',
		description: [
			'Una <strong>tienda en l &iacute;nea</strong>, tambi &eacute;n conocida como tienda virtual o tienda electr &oacute;nica; <strong>Tienda online </strong>se refiere a un comercio convencional que usa como medio principal para realizar sus transacciones, un sitio web de internet.',
			'<br>Las <strong>Tiendas online </strong>son una de las herramientas m &aacute;s eficaces jam &aacute;s concebidas para la venta de mercanc &iacute;a y servicios. Una tienda en l &iacute;nea puede ser un medio incre &iacute;blemente eficaz para la venta de productos y servicios a clientes de todo el mundo que de otro modo nunca conocer &iacute;an su empresa. Su <strong>tienda online </strong>est &aacute;abierta las 24 horas del d &iacute;a, los 7 d &iacute;as de la semana, ofreciendo una atractiva presentaci &oacute;n de sus productos.',
			'<br>En t &eacute;rminos m &aacute;s b &aacute;sicos una tienda online o carrito de compras es un software que le permite listar sus productos en su sitio web y recoge autom &aacute;ticamente el dinero cuando el cliente compra sus productos. El software de <strong>carrito de compra o comercio electr &oacute;nico </strong>le permite a &ntilde;adir im &aacute;genes de sus productos, descripciones, m &eacute;todos e impuestos de envio, precios, pol &iacute;ticas de devoluci &oacute;n de mercancia y muchos m &aacute;s. As &iacute;es como funciona:',
			'<br>Un cliente visita su sitio y a &ntilde;ade productos a su carrito de compra, cuando est &aacute;dispuesto a realizar la compra, ingresa la informaci &oacute;n de envio de lo productos y los datos de su tarjeta de cr &eacute;dito en un formulario para que ud. sepa donde enviar &aacute;los productos, una vez que hace clic en enviar su pedido, el carrito de compra utiliza su pasarela de pago, (servicio de tarjetas de cr &eacute;dito para el procesamiento) para validar la tarjeta de cr &eacute;dito y luego transferir el dinero de su tarjeta de cr &eacute;dito a su cuenta bancaria. Entonces le toca a Ud. enviar los productos. Tambi &eacute;n puede vender productos digitales o descargables como libros electr &oacute;nicos, m &uacute;sica o software.',
			'<br>Existe tambi &eacute;n una alternativa e inteligente soluci &oacute;n para empresas que s &oacute;lo necesitan vender un peque &ntilde;o n &uacute;mero de productos o servicios espec &iacute;ficos (incluso para productos descargables), Paypal &trade; pago est &aacute;ndar ofrece una manera conveniente y de bajo costo para las peque &ntilde;as empresas que se suman a las compras seguras en l &iacute;nea en su sitio web. Los clientes no necesitan una cuenta de PayPal &trade; para realizar pagos. Se puede utilizar una tarjeta de cr &eacute;dito. Y no hay cargos mensuales para usted como comerciante -.',
			'<br>OpenCart, PrestaShop, Magento, Virtuemart, OsComerce, solo escoga'
		]
	}
]

const TiendasOnline = () => {
	useEffect(() => {
		document.title = 'Tiendas online - Consultoria SEO';
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

export { TiendasOnline }	