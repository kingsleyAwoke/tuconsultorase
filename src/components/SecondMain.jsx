import { Link } from 'react-router-dom';
import FormacionJoomla from './FormacionJoomla';
import Desarrollo from './Desarrollo';

const SecondMain = () => {
  return (
    <section className='second-main-section container'>

      <Desarrollo />

      <div className="row">
        <h3>Acelerar Joomla</h3>

          <img src="\images\speed1.jpg" alt="Acelerar la carga de sitios joomla" width='400' height='200' />

          <p>¿Necesita ayuda para acelerar su sitio web? En Tu Consultora Seo tenemos una gran cantidad de experiencia que muestra cómo acelerar sitios web lentos, de hecho es uno de los servicios más solicitados que prestamos. Conozca como mejorar el rendimiento de su sitio, esto mejorará su posición en los buscadores como Google, Yahoo,etc.</p>

          <Link to='https://www.joomla.org/'><button className="primary-btn">Leer mas</button></Link>
      </div>

      <div className="row">
        <h3>Seguridad Joomla</h3>

          <img src="\images\seguridad joomla2.jpg" alt="Seguridad joomla" width='400' height='200' />

          <p>La seguridad puede ser complicada. Desde el momento en que su sitio está en línea, los hackers comienzan a sondearlo en busca de vulnerabilidades de seguridad.  Hay sitios web hackeados todos los días - sitios como el suyo.</p>
          <p>Es un aspecto que los propietarios de sitios pasan por alto con frecuencia y debe ser un prioritario en cualquier organización.</p>

          <Link to='/blog/seguridad'><button className="primary-btn">Leer mas</button></Link>
      </div>

      <div className="row">
        <h3>Contáctenos</h3>

          <img src="\images\Estela1.jpg" alt="Contactenos paginas web, seo, plantillas joomla responsitive o cualquiera de los servicios de este sitio" width='300' height='200' />

          <address><strong>Tu Consultora SEO</strong>
          <br/>Carrera 15, entre 43 y 44<br/>Barquisimeto, Venezuela<br/><strong>Estela Silva </strong></address>

          <Link to="tel:+58-414-514-22-87" className='primary-color contact-link'>+58-414-514-22-87</Link>
          <Link to="mailto:info@tuconsultorase.com" className='primary-color contact-link'>info@tuconsultorase.com</Link>

          <Link to='/contact' title="Contactenos" className='primary-color contact-link'>Escribenos</Link>
          <Link to='https://support.google.com/accounts/' className='primary-color contact-link'>Visítenos en Google+</Link>
          <Link className='primary-color contact-link'>Agregar a favoritos</Link>
      </div>

      <div className="row">
        <h3>Consultoria SEO</h3>

        <img src="\images\seo.jpg" alt="Coloque su sitio en los primeros lugares en los resultados de los motores de busqueda"  width='400' height='200' />

        <p>Somos especialistas o consultores SEO, el posicionamiento en buscadores es el proceso de mejorar el volumen o la calidad del tráfico a un sitio web en los motores de búsqueda a través de posicionamiento "natural", no de pago. Sólo la parte superior de los primeros 10 resultados de búsqueda tienen la oportunidad de convertir un visitante en un nuevo cliente valioso. Para ofrecer servicios SEO de calidad utilizamos el <Link  to='https://seosmmpanel.com/' className='primary-color'>SEOSMMPanel</Link> y <Link to='https://www.semrush.com/' className='primary-color'>SemRush</Link>, dos de las mejores herramientas SEO.</p>

        <Link  to='/blog/seo'><button className="primary-btn">Leer mas</button></Link>
      </div>

      <div className="row">
        <h3>Tiendas online</h3>

          <img src="\images\comercio-e2.png" alt="Desarrollo de tiendas en linea y comercio electronico" width='400' height='200' />

          <p>Una tienda en línea puede ser un medio increíblemente eficaz para la venta de productos y servicios a clientes de todo el mundo que de otro modo nunca conocerían su empresa. En términos más básicos una tienda online o carrito de compras es un software que le permite mostrar los productos de su sitio web y recoge automáticamente el dinero cuando el cliente compra sus productos.</p>

          <Link  to='/servicios/tiendas-online'><button className="primary-btn">Leer mas</button></Link>
      </div>

      <FormacionJoomla />

      <div className="row">
        <h3>Limpieza sitio hackeado</h3>

          <img src="\images\limpieza sitio hackeado.jpg" alt="Servicios de limpieza de sitio hackeado" width='400' height='200' />

          <p>El equipo de expertos en seguridad de tu consultora SEO limpia su sitio hackeado. Usted puede confiar en nosotros para ayudarle con incidentes de hacking de su sitio, discretamente. Disponemos de dos métodos: revisión de los archivos por nuestro personal de forma exhaustiva y reposición de  los archivos de forma nueva y limpia. También incluimos gratis una licencia de 12 meses de <Link to='https://immunefi.com/' className="primary-color">Immunify</Link>.</p>

          <Link  to='https://immunefi.com/'><button className="primary-btn">Leer mas</button></Link>
      </div>
    </section>
  );
}

export default SecondMain
