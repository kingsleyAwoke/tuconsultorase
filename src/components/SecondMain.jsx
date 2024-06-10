import { Link } from 'react-router-dom';

const SecondMain = () => {
  return (
    <section className='second-main-section container'>
      <div className="row row1">
        <h3>
          <span className='primary-btn header-container'>Desarrollo de Plantillas</span>
        </h3>

        <div className="img-content">
          <Link to='/servicios/diseno-de-pagainas-web' title="Desarrollamos plantillas joomla personalizadas y adaptadas a sus requerimientos">
            <img src="\images\desarrollo-web.png" alt="desarrollo de plantillas joomla responsitive"  width='195' height='129' />
          </Link>
        </div>

        <div className="caption">
          <p>En el diseño de paginas web joomla la salida visual es controlada por las plantillas. Existen 2 formas de desarrollar las plantillas: Personalizada y una plantilla adaptada a sus requerimientos. Nuestra meta es alcanzar sus objetivos de negocio, el <strong>diseño de página páginas web </strong>es inútil si no cumple con sus objetivos.</p>

          <Link className="primary-btn readmore" to="/servicios/diseno-de-pagainas-web">Leer mas</Link>
        </div>        
      </div>

      <div className="row row2">
        <h3>
          <span className="primary-btn">Acelerar Joomla</span>
        </h3>

        <div className="img-content">
          <Link to='/servicios/acelerar-joomla' title="Servicio para acelerar joomla">
            <img src="\images\speed1.jpg" border="0" alt="Acelerar la carga de sitios joomla" width="195" height="129" />
          </Link>
        </div>

        <div className="caption">
          <p>¿Necesita ayuda para acelerar su sitio web? En Tu Consultora Seo tenemos una gran cantidad de experiencia que muestra cómo acelerar sitios web lentos, de hecho es uno de los servicios más solicitados que prestamos. Conozca como mejorar el rendimiento de su sitio, esto mejorará su posición en los buscadores como Google, Yahoo,etc.</p>

          <Link className="primary-btn readmore" to="/servicios/acelerar-joomla">Leer mas</Link>
        </div>
      </div>

      <div className="row row3">
        <h3>
          <span className="primary-btn">Seguridad Joomla</span>
        </h3>

        <div className="img-content">
          <Link to='/servicios/acelerar-joomla' title="Impida que los hackers tomen el control de su sitio e instalen software malicioso">
            <img src="\images\seguridad joomla2.jpg" border="0" alt="Seguridad joomla" width="129" height="129" />
          </Link>
        </div>

        <div className="caption">
          <p>La seguridad puede ser complicada. Desde el momento en que su sitio está en línea, los hackers comienzan a sondearlo en busca de vulnerabilidades de seguridad.  Hay sitios web hackeados todos los días - sitios como el suyo.</p>
          <p>Es un aspecto que los propietarios de sitios pasan por alto con frecuencia y debe ser un prioritario en cualquier organización.</p>

          <Link className="primary-btn readmore" to="/servicios/acelerar-joomla">Leer mas</Link>
        </div>
      </div>

      <div className="row row4">
        <h3>
          <span className="primary-btn">Contáctenos</span>
        </h3>

        <div className="img-content">
          <Link to='/contact' title="Contactenos para desarrollar sus paginas web, servicios seo, desarrollo de plantillas joomla responsitive o cualquiera de los servicios de este sitio. ¡Será un placer trabajar para usted!">
            <img src="\images\Estela1.jpg" border="0" alt="Contactenos paginas web, seo, plantillas joomla responsitive o cualquiera de los servicios de este sitio" width="129" height="129" />
          </Link>
        </div>

        <div className="caption">
          <address><strong>Tu Consultora SEO</strong>
          <br/>Carrera 15, entre 43 y 44<br/>Barquisimeto, Venezuela<br/><strong>Estela Silva </strong></address>

          <Link to="tel:+58-414-514-22-87" className='primary-color'>+58-414-514-22-87</Link>
          <Link to="mailto:info@tuconsultorase.com" className='primary-color'>info@tuconsultorase.com</Link>

          <Link to='/contact' title="Contactenos" className='primary-color'>Escribenos</Link>
          <Link to='https://support.google.com/accounts/' className='primary-color'>Visítenos en Google+</Link>
          <Link className='primary-color'>Agregar a favoritos</Link>
        </div>
      </div>

{/* SECOND ROW */}

      <div className="row row1">
        <h3>
          <span className='primary-btn header-container'>Consultoria SEO</span>
        </h3>

        <div className="img-content">
          <Link to='/servicios/diseno-de-pagainas-web' title="Coloque su sitio en los primeros lugares en los resultados de los motores de búsqueda">
            <img src="\images\seo.jpg" alt="Coloque su sitio en los primeros lugares en los resultados de los motores de busqueda"  width="195" height="129" />
          </Link>
        </div>

        <div className="caption">
          <p>Somos especialistas o <strong>consultores <abbr title="Search Engine Optimization, optimización para motores de búsqueda">SEO</abbr></strong>, el posicionamiento en buscadores es el proceso de mejorar el volumen o la calidad del tráfico a un sitio web en los motores de búsqueda a través de posicionamiento "natural", no de pago. Sólo la parte superior de los primeros 10 resultados de búsqueda tienen la oportunidad de convertir un visitante en un nuevo cliente valioso.</p>

          <Link className="primary-btn readmore" to="/servicios/seo">Leer mas</Link>
        </div>        
      </div>

      <div className="row row2">
        <h3>
          <span className="primary-btn">Tiendas online</span>
        </h3>

        <div className="img-content">
          <Link to='/servicios/tiendas-online' title="Tiendas en linea, carrito de compra o comercio electrónico, catálogo de productos, simplemente venda sus productos y servicios.">
            <img src="\images\comercio-e2.png" border="0" alt="Desarrollo de tiendas en linea y comercio electronico" width="195" height="129" />
          </Link>
        </div>

        <div className="caption">
          <p>Una tienda en línea puede ser un medio increíblemente eficaz para la venta de productos y servicios a clientes de todo el mundo que de otro modo nunca conocerían su empresa. En términos más básicos una tienda online o carrito de compras es un software que le permite mostrar los productos de su sitio web y recoge automáticamente el dinero cuando el cliente compra sus productos.</p>

          <Link className="primary-btn readmore" to="/servicios/tiendas-online">Leer mas</Link>
        </div>
      </div>

      <div className="row row3">
        <h3>
          <span className="primary-btn">Formación Joomla</span>
        </h3>

        <div className="img-content">
          <Link to='/servicios/cursos-joomla' title="Entrene a su personal en joomla y administre Ud. mismo su sitio, evite costos innecesarios y tome ventaja de la autogestión del mismo.">
            <img src="\images\formacion joomla1.jpg" border="0" alt="Cursos y formacion joomla" width="195" height="129" />
          </Link>
        </div>

        <div className="caption">
          <p>Tenemos 3 modalidades de cursos de este excelente gestor de contenidos. La formación abarca temas desde porqué se recomienda este gestor de contenidos, como instalarlo y otras preguntas esenciales. Todos nuestros cursos de formación de CMS son 100% personalizables.</p>

          <Link className="primary-btn readmore" to="/servicios/cursos-joomla">Leer mas</Link>
        </div>
      </div>

      <div className="row row3">
        <h3>
          <span className="primary-btn">Limpieza sitio hackeado</span>
        </h3>

        <div className="img-content">
          <Link to='/servicios/limpieze-sitio-hackead' title="¿su website ha sido hackeado? tuconsultoraseo le ayudará a limpiar y recuperar su sitio, visitas y clientes">
            <img src="\images\limpieza sitio hackeado.jpg" border="0" alt="Servicios de limpieza de sitio hackeado" width="195" height="129" />
          </Link>
        </div>

        <div className="caption">
          <p>El equipo de expertos en seguridad de tu consultora SEO limpia su sitio hackeado. Usted puede confiar en nosotros para ayudarle con incidentes de hacking de su sitio, discretamente. Disponemos de dos métodos: revisión de los archivos por nuestro personal de forma exhaustiva y reposición de  los archivos de forma nueva y limpia.</p>

          <Link className="primary-btn readmore" to="/servicios/limpieze-sitio-hackead">Leer mas</Link>
        </div>
      </div>
    </section>
  );
}

export default SecondMain
