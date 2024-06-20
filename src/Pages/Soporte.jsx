import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const Soporte = () => {
  //   PAGE TITLE
  useEffect(() => {
    document.title = 'Soporte Joomla - Consultoria SEO';
  }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='soporte-container contact'>

          <dir className="service-content">
            <div className='column'>
              <div className="service-content-head">
                <span>Soporte Joomla</span>
              </div>

              <div className="service-content-txt">

                <p>Nuestra ayuda y servicios de apoyo est&aacute;n disponibles en dos formas:</p>

                <p><strong>Soporte Joomla 1</strong>
                : Servicios de apoyo contratado: est&aacute;n dise&ntilde;ados para permanentes relaciones con los clientes a largo plazo. No somos una &quot;entrada y salida r&aacute;pida&quot; de la empresa, preferimos estar con usted para el largo plazo, y para reflejar esto, nuestros servicios contratados se ofrece con un masivo 33% de descuento.</p>

                <p><strong>Soporte Joomla 2: </strong>
                Ayuda bajo demanda:estos servicios son generalmente m&aacute;s&uacute;tiles para los nuevos clientes que tienen un problema grave que requiere asistencia de localizaci&oacute;n de fallas inmediata.</p>

                <p className='services-tel'>Ll &aacute;menos 584145142287 o <a href='tel:584145142287' title="Contactenos" className='primary-color'>cont&aacute;ctenos</a></p>

                <div className="author-section ">
                  <h4>Sobre la autora</h4>

                  <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                  <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                </div>

                <ul className='pagination-ul'>
                  <li className='pagination-li'><Link to='/servicios/programadores-PHP' className='primary-color'>&lt;Anterior</Link></li>

                  <li className='pagination-li'><Link to='/servicios/publicidad-pago' className='primary-color'>Siguiente&gt;</Link></li>
                </ul>
              </div>
            </div>
          </dir>
        </div>
      </section>
    </>
  );
}

export default Soporte