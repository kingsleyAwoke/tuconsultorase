import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const Cursos = () => {
  //   PAGE TITLE
  useEffect(() => {
    document.title = 'Cursos Joomla! - Consultoria SEO';
  }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='cursos-container contact'>

          <dir className="service-content">
            <div className='column'>
              <div className="service-content-head">
                <span>Formaci&oacute;n joomla</span>
              </div>

              <div className="service-content-txt">

                <p>Nuestro plan de formaci &oacute;n de este excelente CMS lo proporcionamos de la siguiente manera:</p>

                <ul>
                  <li>One to one de <strong>formacion joomla</strong>
                  - a trav &eacute;s de Skype.</li>
                  <li>Cursos presenciales de <strong>formacion Joomla</strong>
                  (en su lugar de trabajo)</li>
                  <li>Cursos de <strong>formacion Joomla </strong>fuera de sitio (hoteles, centros de conferencias).
                  </li>
                </ul>

                <h2 className='info-color'>Paquetes de Capacitaci &oacute;n CMS Corporativos</h2>

                <p>Hemos preparado una serie de materiales de informaci &oacute;n que explican m &aacute;s acerca de lo que debe buscar en un sistema de gesti &oacute;n de contenidos y por qu &eacute;se recomienda el sistema de gesti &oacute;n de contenidos Joomla para nuestros clientes.</p>

                <h2 className='info-color'>Cursos de formaci &oacute;n adaptables o Tailored CMS</h2>

                <p>Todos nuestros cursos de formaci &oacute;n de CMS son 100% personalizables - vamos a hablar sobre sus necesidades y dise &ntilde;ar un paquete para satisfacer las necesidades de formaci &oacute;n espec &iacute;ficas de su organizaci &oacute;n.</p>

                <p>Con la cada vez mayor importancia de Internet y de la web, en particular, tiene que tomar la decisi &oacute;n correcta a la hora de la pr &oacute;xima renovaci &oacute;n de su sitio web.Creemos que nuestros paquetes CMS integrados son el camino a seguir.</p>

                <p>&iquest;Por qu &eacute;necesita un sistema de gesti &oacute;n de contenidos?</p>

                <p>&iquest;Por qu &eacute;el CMS es ideal para usted y su organizaci &oacute;n?</p>

                <p>&iquest;Qu &eacute;tan f &aacute;cil es instalar Joomla.?</p>

                <p>&iquest;C &oacute;mo elegir entre Joomla y otros CMS competidores?</p>

                <p>&iquest;C &oacute;mo los usuarios no t &eacute;cnicos pueden crear y mantener p &aacute;ginas?</p>

                <p>&iquest;C &oacute;mo utilizar las funciones incorporadas de CMS?</p>

                <p>&iquest;C &oacute;mo extender su sitio mediante la instalaci &oacute;n de extensiones (componentes, m &oacute;dulos, plugins)?.</p>

                <p className='services-tel'>Ll &aacute;menos 584145142287 o <a href='tel:584145142287' title="Contactenos" className='primary-color'>cont&aacute;ctenos</a></p>

                <div className="author-section ">
                  <h4>Sobre la autora</h4>

                  <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                  <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                </div>

                <ul className='pagination-ul'>
                  <li className='pagination-li'><Link to='/servicios/auditoria-de-seguridad-joomla' className='primary-color'>&lt;Anterior</Link></li>

                  <li className='pagination-li'><Link to='/servicios/eliminacion-de-malware' className='primary-color'>Siguiente&gt;</Link></li>
                </ul>
              </div>
            </div>
          </dir>
        </div>
      </section>
    </>
  );
}

export default Cursos