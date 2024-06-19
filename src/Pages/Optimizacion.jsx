import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const Optimizacion = () => {
  //   PAGE TITLE
  useEffect(() => {
    document.title = 'Optimización para motores de búsqueda - Consultoria SEO';
  }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='optimizacion-container contact'>

          <dir className="service-content">
            <div className='column'>
              <iframe allowfullscreen frameborder="0" height="215" src="http://www.youtube.com/embed/El3IZFGERbM" width="360" className='center'></iframe>

              <div className="service-content-txt">

                <p>El <strong>posicionamiento en buscadores</strong> u <b>optimizaci&oacute;n en motores de b &uacute;squeda,</b> en ingl &eacute;s <strong> Search Engine Optimization</strong> (<strong>seo</strong>) es el proceso de mejorar el volumen o la calidad del tr &aacute;fico a un sitio web en los motores de b &uacute;squeda a trav &eacute;s de prosicionamiento &quot;natural &quot;o sin pagar (&quot;<strong>org&aacute;nico</strong>&quot; o &quot;algor&iacute;tmico &quot;) en lugar de Search Engine Marketing (SEM ) que se ocupa de la inclusi &oacute;n pagada.</p>

                <p>El &eacute;xito de su sitio o <strong>p &aacute;gina web</strong> no se mide por cuan bien y con estilo se ve, en cambio, se puede calcular por la popularidad de su sitio web. S &oacute;lo los primeros 10 SERPs (Search Engine P &aacute;ginas de Resultados) atraer &aacute;n al visitante. S &oacute;lo la parte superior de los primeros 10 resultados de b &uacute;squeda tienen la oportunidad de convertir un visitante en un nuevo cliente valioso.Conozca nuestras técnicas <strong>SEO</strong></p>

                <p>Nuestras t &aacute;cticas integradas de <strong>optimizaci &oacute;n de motores de b &uacute;squeda</strong> que cumplen con las directrices establecidas por cada uno de los principales motores de b &uacute;squeda aseguran la calidad, el destino del tr &aacute;fico relevante y las clasificaciones m &aacute;s altas.</p>

                <ul>
                  <li>An&aacute;lisis del sitio inicial</li>
                  <li>An&aacute;lisis de palabras clave</li>
                  <li><font>Creaci&oacute;n de los meta-tags relevantes y otras etiquetas HTML</font></li>
                  <li><font>An&aacute;lisis de popularidad de enlaces</font></li>
                  <li><font> An&aacute;lisis de conversi&oacute;n de <strong>p&aacute;gina web</strong></font></li>
                  <li><font>An&aacute;lisis de mejora de uso del sitio</font></li>
                  <li><font>Optimizaci&oacute;n en la p &aacute;gina de todas las p&aacute;ginas pertinentes</font></li>
                  <li><font>Validaci&oacute;n de densidad de palabras clave</font></li>
                  <li><font>T&iacute;tulo y optimizaci &oacute;n etiquetas meta</font></li>
                  <li><font>Optimizaci&oacute;n robot.txt</font></li>
                  <li><font>Creaci&oacute;n del sitio</font></li>
                  <li><font>Creaci&oacute;n mapa del sitio Google</font></li>
                  <li><font>Optimizaci&oacute;n de contenido de la <strong>p &aacute;gina web</strong></font></li>
                  <li><font>Optimizaci&oacute;n de Imagen texto ALT</font></li>
                  <li><font>Presentaciones en motores de b &uacute;squeda</font></li>
                  <li><font>Pre informe &Iacute;ndice <strong>SEO</strong></font></li>
                  <li><font>Optimizaci &oacute;n archivo .htaccess</font></li>
                  <li><font>Informe <strong>SEO</strong>
                  de p &aacute;ginas internas</font></li>
                  <li><font>Informe completo <strong>SEO. </strong></font></li>
                </ul>

                <p><font>Le recomendamos leer nuestra secci&oacute;n de <Link to="http://tuconsultoraseo.com/servicios" title="Preguntas frecuentes en Consultoría SEO" className='primary-color'>Preguntas frecuentes en <strong>Consultor &iacute;a SEO</strong></Link>
                </font></p>

                <p className='services-tel'>Ll &aacute;menos 584145142287 o <a href='tel:584145142287' title="Contactenos" className='primary-color'>cont&aacute;ctenos</a></p>

                <div className="author-section ">
                  <h4>Sobre la autora</h4>

                  <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                  <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                </div>

                <ul className='pagination-ul'>
                  <li className='pagination-li'><Link to='/servicios/publicidad-pago' className='primary-color'>&lt;Anterior</Link></li>

                  <li className='pagination-li'><Link to='/servicios/tiendas-online' className='primary-color'>Siguiente&gt;</Link></li>
                </ul>
              </div>
            </div>
          </dir>
        </div>
      </section>
    </>
  );
}

export default Optimizacion