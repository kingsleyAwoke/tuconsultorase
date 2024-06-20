import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const Programadores = () => {
  //   PAGE TITLE
  useEffect(() => {
    document.title = 'Programadores PHP - Consultoria SEO';
  }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='programadores-container contact'>

          <div className="service-content">
            <div className='column'>
              <div className="service-content-head">
                <span>&iquest;Necesita Programadores php?</span>
              </div>

              <div className="service-content-txt">

                <p>Encuentre experimentados <strong>programadores php </strong>
                en tuconsultoraseo.com.</p>

                <p>PHP es un lenguaje de scripting de c &oacute;digo abierto que est &aacute;dise&ntilde;ado para producir p&aacute;ginas web din &aacute;micas. <strong>Desarrollamos </strong>
                su requerimiento de aplicaciones en PHP.</p>

                <p>Ofrecemos dise&ntilde;o y servicios personalizados de soporte y programaci&oacute;n para sistemas de bases de datos MySQL, as&iacute; como la instalaci&oacute;n y optimizaci&oacute;n de blogs, foros, galerias de fotos y sistemas de carritos de compra, como osCommerrce y Zen Cart. <Link to="/contact" title="comuniquese con nosotros" className='primary-color'>Comuniquese con nosotros</Link>.-</p>

                <p>PHP ofrece muchas caracter&iacute;sticas avanzadas para los <strong>programadores de PHP</strong> y desarrolladores profesionales. PHP puede ser usado en los principales sistemas operativos, incluyendo Linux, muchas variantes Unix (incluyendo HP-UX, Solaris y OpenBSD), Microsoft Windows, Mac OS X y otros. Es apoyado por la mayor &iacute;a de los servidores web, as &iacute;, como Apache y Microsoft Internet Information Server. <Link to="/contact" title="Solicite un presupuesto para su aplicación php" className='primary-color'>Solicite un presupuesto para su aplicaci&oacute;n php</Link>.</p>

                <p><strong>Habilidad de base de datos: </strong>
                Mysql 5.x</p>

                <p><strong>Procesos y Metodolog&iacute;as:</strong></p>

                <p>Desarrollo Web, E-Commerce, Gesti&oacute;n de Contenido.</p>

                <p><strong>Sistemas operativos:</strong></p>

                <p>Linux, Windows Server</p>

                <p className='services-tel'>Ll &aacute;menos 584145142287 o <a href='tel:584145142287' title="Contactenos" className='primary-color'>cont&aacute;ctenos</a></p>

                <div className="author-section ">
                  <h4>Sobre la autora</h4>

                  <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                  <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                </div>

                <ul className='pagination-ul'>
                  <li className='pagination-li'><Link to='/servicios/redaccion-de-contenido' className='primary-color'>&lt;Anterior</Link></li>

                  <li className='pagination-li'><Link to='/servicios/soporte-joolmla' className='primary-color'>Siguiente&gt;</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Programadores