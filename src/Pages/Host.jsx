import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const Host = () => {
  //   PAGE TITLE
  useEffect(() => {
    document.title = 'Hosting Joomla - Consultoria SEO';
  }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='hosting-container contact'>

          <div className="service-content">
            <div className='column'>
              <div className="service-content-head">
                <span>Hosting Joomla</span>
              </div>

              <div className="service-content-txt">

                <img src="\images\hosting.png" alt="hosting joomla - tuconsultoraseo.com" height="69" title="hosting joomla - tuconsultoraseo.com" width="68" />

                <p>Nuestro objetivo es proporcionar a todas la personas y negocios lo que necesiten para expresarse en internet a trav &eacute;s de la venta de bienes y servicios. Hacer una correcta elecci &oacute;n de alojamiento para su sitio joomla o cualquier otro tipo es esencial y determina el &eacute;xito o fracaso de su sitio web. La ventaja de alojar su sitio web con nosotros no solo es nuestro competitivo precio en el mercado sino que nuestro servidores est &aacute;n optimamente configurados para hospedar su sitio y ya tiene ganado un 50% del &eacute;xito del mismo. El resto depende de usted.</p>

                <p>Si Ud. encarga su p &aacute;gina web con nosotros, el <strong>hosting </strong>
                ser &aacute;gratuito por un a &ntilde;o.</p>

                <p className='services-tel'>Ll &aacute;menos 584145142287 o <a href='tel:584145142287' title="Contactenos" className='primary-color'>cont&aacute;ctenos</a></p>

                <div className="author-section ">
                  <h4>Sobre la autora</h4>

                  <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                  <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                </div>

                <ul className='pagination-ul'>
                  <li className='pagination-li'><Link to='/servicios/mejoras-de-software' className='primary-color'>&lt;Anterior</Link></li>

                  <li className='pagination-li'><Link to='/servicios/eliminacion-de-malware' className='primary-color'>Siguiente&gt;</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Host