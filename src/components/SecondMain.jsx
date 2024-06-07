import { Link } from 'react-router-dom';

const SecondMain = () => {
  return (
    <section className='second-main-section container'>
      <div className="row row1">
        <h3>
          <span className='primary-btn header-container'>Desarrollo de Plantillas</span>
        </h3>

        <div className="content">
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

        <div className="content">
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

        <div className="content">
          <Link to='/servicios/acelerar-joomla' title="Impida que los hackers tomen el control de su sitio e instalen software malicioso">
            <img src="\images\seguridad joomla2.jpg" border="0" alt="Seguridad joomla" width="129" height="129" />
          </Link>
        </div>

        <div className="caption">
          <p>La seguridad puede ser complicada. Desde el momento en que su sitio está en línea, los hackers comienzan a sondearlo en busca de vulnerabilidades de seguridad.  Hay sitios web hackeados todos los días - sitios como el suyo.</p>
          <p>Es un aspecto que los propietarios de sitios pasan por alto con frecuencia y debe ser un prioritario en cualquier organización.</p>

          <Link className="primary-btn readmore3" to="/servicios/acelerar-joomla">Leer mas</Link>
        </div>
      </div>

      <div className="row row4">
        <h3>
          <span className="primary-btn">Contáctenos</span>
        </h3>

        <div className="content">
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
    </section>
  );
}

export default SecondMain
