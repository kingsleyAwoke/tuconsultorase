import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const LeeMas_Tiendas = () => {
//   PAGE TITLE
    useEffect(() => {
        document.title = 'Tiendas online - Consultoria SEO';
    }, []);
  return (
    <>
      <section className='seo-imgne analisis'>
        <BreadCrumb />
        <div className='main-section container seo-imgne-container'>
            
            <LeftContent />

            <div className="service-content">
                <div className='column'>
                    <div className="service-content-head">
                        <span title="Tips Consejos para sitios e-commerce">Tiendas online</span>
                    </div>
                    <p>Una <strong>tienda en línea</strong>, también conocida como tienda virtual o tienda electrónica <strong>Tienda online</strong> se refiere a un comercio convencional que usa como medio principal para realizar sus transacciones, un sitio web de internet.</p>

                    <p>Las <strong>Tiendas online</strong>
                            son una de las herramientas más eficaces jamás concebidas para la venta de mercancía y servicios. Una tienda en línea puede ser un medio increíblemente eficaz para la venta de productos y servicios a clientes de todo el mundo que de otro modo nunca conocerían su empresa. Su <strong>tienda online</strong>está abierta las 24 horas del día, los 7 días de la semana, ofreciendo una atractiva presentación de sus productos.</p>

                            <p>En términos más básicos una tienda online o carrito de compras es un software que le permite listar sus productos en su sitio web y recoge automáticamente el dinero cuando el cliente compra sus productos. El software de <strong>carrito de compra o comercio electrónico</strong>
                            le permite añadir imágenes de sus productos, descripciones, métodos e impuestos de envio, precios, políticas de devolución de mercancia y muchos más. Así es como funciona: 
                        </p>

                        <p>Un cliente visita su sitio y añade productos a su carrito de compra, cuando está dispuesto a realizar la compra, ingresa la información de envio de lo productos y los datos de su tarjeta de crédito en un formulario para que ud. sepa  donde enviará los productos, una vez que hace clic en enviar su pedido, el carrito de compra utiliza su pasarela de pago, (servicio de tarjetas de crédito para el procesamiento) para validar la tarjeta de crédito y luego transferir el dinero de su tarjeta de crédito a su cuenta bancaria. Entonces le toca a Ud. enviar los productos. También puede vender productos digitales o descargables como libros electrónicos, música o software. Existe también una alternativa e inteligente solución para empresas que sólo necesitan vender un pequeño número de productos o servicios específicos (incluso para productos descargables), Paypal ™ pago estándar ofrece una manera conveniente y de bajo costo para las pequeñas empresas que se suman a las compras seguras en línea en su sitio web. Los clientes no necesitan una cuenta de PayPal ™ para realizar pagos. Se puede utilizar una tarjeta de crédito. Y no hay cargos mensuales para usted como comerciante -.</p>

                        <p>OpenCart, PrestaShop, Magento, Virtuemart, OsComerce, solo escoga.</p>

                        <p className='services-tel'>Ll &aacute;menos 584145142287 o <a href='tel:584145142287' title="Contactenos" className='primary-color'>cont&aacute;ctenos</a></p>

                    <div className="service-content-txt">
                        <div className="author-section">
                            <h1>Sobre la autora</h1>

                            <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                            <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                        </div>
                    </div>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="/leemas_consultoria" className='primary-color'>&lt;Anterior</Link>
                        </li>

                        <li className='pagination-li'>
                            <Link to="/leemas_desarrollo" className='primary-color'>Siguiente&gt;</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <RightContent links={Links} />
        </div>

            <Footer />
        </section>
    </>
  );
}

export default LeeMas_Tiendas;
