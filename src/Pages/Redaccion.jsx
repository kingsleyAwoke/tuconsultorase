import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const Redaccion = () => {
  //   PAGE TITLE
  useEffect(() => {
    document.title = 'Redacción de contenido - Consultoria SEO';
  }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='redaccion-container contact'>

          <div className="service-content">
            <div className='column'>
              <div className="service-content-head">
                <span>Servicio de redacci &oacute;n de contenido</span>
              </div>

              <div className="service-content-txt">

                <p><font><font>Tener contenido adecuado, relevante, pertinente y de calidad para un sitio web se ha convertido en una muy importante herramienta de marketing.</font> <font> Un contenido de calidad establece una marca como ninguna otra manera al tiempo que otorga reconocimiento en su&aacute;rea de marketing.</font> <font> Un buen contenido es la mejor oportunidad que su sitio web tiene de estar en el codiciado primer puesto en los resultados naturales de b&uacute;squeda de Google u otro importante motor de b&uacute;squeda.</font> <font>Usted tiene que escribir el texto que apele a su p&uacute;blico objetivo inmediato.</font> <font> Se ve a menudo que los redactores independientes han fracasado al momento de estar a la altura de las expectativas de muchos marketing y gerentes de empresas.</font> <font> Despu&eacute;s de todo su sitio web tiene un contenido potente que llevar&aacute;a sus clientes a su sitio web al instante y los persuadir&aacute;a comprar.</font></font></p>

                <p><font>Si usted necesita contenido de alta calidad, art&iacute;culos originales para promover su sitio web, entonces usted est&aacute;en el lugar correcto para comprar art&iacute;culos!</font> <font>Aqu&iacute;creamos s&oacute;lo los mejores art &iacute;culos para ayudar a dirigir el tr&aacute;fico, conseguir backlinks y promover sus productos y servicios en l&iacute;nea.</font></p>

                <p><font>Ud. recibir&aacute;contenido optimizado para atraer tr&aacute;fico de motores de b&uacute;squeda.</font><font> Nuestro</font>Personal de <strong>servicio de redacci &oacute;n de contenido </strong>
                se especializa en Redacci&oacute;n <strong>SEO</strong> de contenidos, Escritura de contenido Web, Redacci&oacute;n de Comunicados de Prensa, Escritura de Blog, Escritura de bolet&iacute;n, Escritura Folleto de Ventas, Escritura de Cartas de Venta, Comentarios sobre productos y Servicios de Reescritura.</p>

                <p>La importancia de contar con un excelente <strong>servicio de redacci&oacute;n de contenido</strong> se traducir&aacute;en m&aacute;s visitas y m&aacute;s conversiones.</p>

                <form action='no action yet'>
                <label>Su Plan de Redacci&oacute;n de art&iacute;culos</label>
                <br />
                <select>
                    <option value="400 palabras">400 palabras $15,00 USD</option>
                    <option value="1000 palabras">1000 palabras $30,00 USD</option>
                </select>
                <br />
                <Link to='https://www.paypalobjects.com' target='_blank'><img src="\images\btn_buynow_SM.gif" alt="Purchase button" /></Link>
                </form>

                <div className="author-section ">
                  <h4>Sobre la autora</h4>

                  <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                  <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                </div>

                <ul className='pagination-ul'>
                  <li className='pagination-li'><Link to='/servicios/consultoria-seo' className='primary-color'>&lt;Anterior</Link></li>

                  <li className='pagination-li'><Link to='/servicios/programadores-PHP' className='primary-color'>Siguiente&gt;</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Redaccion