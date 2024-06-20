import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const Tiendas = () => {
  //   PAGE TITLE
  useEffect(() => {
    document.title = 'Tiendas online - Consultoria SEO';
  }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='tiendas-container contact'>

          <div className="service-content">
            <div className='column'>
              <div className="service-content-head">
                <span>Tiendas online</span>
              </div>

              <div className="service-content-txt">

                <p>Una <strong>tienda en l &iacute;nea</strong>
                , tambi &eacute;n conocida como tienda virtual o tienda electr &oacute;nica; <strong>Tienda online </strong>
                se refiere a un comercio convencional que usa como medio principal para realizar sus transacciones, un sitio web de internet.</p>

                <p>Las <strong>Tiendas online </strong>
                son una de las herramientas m &aacute;s eficaces jam &aacute;s concebidas para la venta de mercanc &iacute;a y servicios. Una tienda en l &iacute;nea puede ser un medio incre &iacute;blemente eficaz para la venta de productos y servicios a clientes de todo el mundo que de otro modo nunca conocer &iacute;an su empresa. Su <strong>tienda online </strong>
                est &aacute;abierta las 24 horas del d &iacute;a, los 7 d &iacute;as de la semana, ofreciendo una atractiva presentaci &oacute;n de sus productos.</p>

                <p>En t &eacute;rminos m &aacute;s b &aacute;sicos una tienda online o carrito de compras es un software que le permite listar sus productos en su sitio web y recoge autom &aacute;ticamente el dinero cuando el cliente compra sus productos. El software de <strong>carrito de compra o comercio electr &oacute;nico </strong>
                le permite a &ntilde;adir im &aacute;genes de sus productos, descripciones, m &eacute;todos e impuestos de envio, precios, pol &iacute;ticas de devoluci &oacute;n de mercancia y muchos m &aacute;s. As &iacute;es como funciona:</p>

                <p>Un cliente visita su sitio y a &ntilde;ade productos a su carrito de compra, cuando est &aacute;dispuesto a realizar la compra, ingresa la informaci &oacute;n de envio de lo productos y los datos de su tarjeta de cr &eacute;dito en un formulario para que ud. sepa donde enviar &aacute;los productos, una vez que hace clic en enviar su pedido, el carrito de compra utiliza su pasarela de pago, (servicio de tarjetas de cr &eacute;dito para el procesamiento) para validar la tarjeta de cr &eacute;dito y luego transferir el dinero de su tarjeta de cr &eacute;dito a su cuenta bancaria. Entonces le toca a Ud. enviar los productos. Tambi &eacute;n puede vender productos digitales o descargables como libros electr &oacute;nicos, m &uacute;sica o software.</p>

                <p>Existe tambi &eacute;n una alternativa e inteligente soluci &oacute;n para empresas que s &oacute;lo necesitan vender un peque &ntilde;o n &uacute;mero de productos o servicios espec &iacute;ficos (incluso para productos descargables), Paypal &trade; pago est &aacute;ndar ofrece una manera conveniente y de bajo costo para las peque &ntilde;as empresas que se suman a las compras seguras en l &iacute;nea en su sitio web. Los clientes no necesitan una cuenta de PayPal &trade; para realizar pagos. Se puede utilizar una tarjeta de cr &eacute;dito. Y no hay cargos mensuales para usted como comerciante -.</p>

                <p>OpenCart, PrestaShop, Magento, Virtuemart, OsComerce, solo escoga</p>

                <p className='services-tel'>Ll &aacute;menos 584145142287 o <a href='tel:584145142287' title="Contactenos" className='primary-color'>cont&aacute;ctenos</a></p>

                <div className="author-section ">
                  <h4>Sobre la autora</h4>

                  <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                  <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                </div>

                <ul className='pagination-ul'>
                  <li className='pagination-li'><Link to='/servicios/optimizacion-para-motores' className='primary-color'>&lt;Anterior</Link></li>

                  <li className='pagination-li'><Link to='/servicios/mejoras-de-software' className='primary-color'>Siguiente&gt;</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tiendas