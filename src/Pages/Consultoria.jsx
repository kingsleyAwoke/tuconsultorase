import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const Consultoria = () => {
  //   PAGE TITLE
  useEffect(() => {
    document.title = 'Consultoria Seo - Consultoria SEO';
  }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='consultoria-container contact'>

          <div className="service-content">
            <div className='column'>
              <div className="service-content-head">
                <span>Como la Consultoria Seo Aumenta la Eficacia de su sitio Web</span>
              </div>

              <div className="service-content-txt">

                <p>En TuConsultora <strong>Seo</strong>
                , examinamos su sitio web, analizamos el tipo experiencia que su sitio ofrece a los usuarios, teniendo en cuenta la usabilidad y la experiencia de búsqueda en general. Evaluamos las técnicas de conversión que utiliza, para asegurar un embudo de conversión efectivo.</p>

                <p>Por último, nos aseguramos de que su sitio cumple con las directrices de los motores de búsqueda y técnicas de optimización recomendadas, mientras investigamos a fondo la competencia de su industria. La formulación de una estrategia integral de contenido y la aplicación de nuestras probadas técnicas de marketing de contenidos para aumentar la visibilidad y la marca de su sitio web son una parte importante de este proceso.</p>

                <p>Analizando todos estos aspectos juntos y le presentamos un plan de acción integral, diseñado para ayudarle a llevar su negocio al siguiente nivel - una alta clasificación para los términos de búsqueda preferidos y la conversión de visitantes en clientes.</p>

                <div className='sub-header'>
                  <h4>Mejorar la visibilidad del Search Engine y las tasas de conversión</h4>
                </div>

                <p>Todo el trabajo duro que has puesto en tratar de mejorar sus rankings en los motores de búsqueda y su tasa de conversión ¿ha dado los resultados que usted esperaba?</p>

                <ul>
                  <li><img src="\images\arrow.gif" width='7' height='6' /> ¿Están los clientes potenciales encontrando su sitio web o tienda de comercio electrónico con facilidad?</li>
                  <li><img src="\images\arrow.gif" width='7' height='6' /> ¿Podría ser que los clientes potenciales no pueden siquiera saben que existe su sitio?</li>
                  <li><img src="\images\arrow.gif" width='7' height='6' /> ¿Están los términos de búsqueda específicos altamente posicionados en los resultados de búsqueda?</li>
                  <li><img src="\images\arrow.gif" width='7' height='6' /> ¿Atrae su sitio web actualmente a un gran número de visitantes diarios y mantener una alta tasa de conversión?</li>
                </ul>

                <p>Graduaciones más altas son importantes para generar tráfico de búsqueda orgánica, pero no son suficientes para mejorar sus ingresos de ventas en línea.</p>

                <div className='sub-header'>
                  <h4>Alto Ranking y Conversiones</h4>
                </div>

                <p>Tener un hermoso sitio web y lograr una excelente clasificación en los motor de búsqueda puede aumentar el tráfico dirigido a su sitio web, pero con el fin de proporcionar algún beneficio en el balance final, su tasa de conversión debe ser optimizado. ¿Su sitio web pertenecen a esta categoría?</p>

                <p> Algunos webmasters e incluso algunos <strong>SEO</strong>
                s (especialistas optimizadores de motores de búsqueda) creen que su trabajo se realiza una vez que han logrado altas graduaciones para las palabras clave específicas. A partir de ese momento en adelante, ellos pueden sentir que el rendimiento general del sitio es responsabilidad de otra persona.</p>

                <p>Los consultores o especialistas <strong>SEO</strong>, no estamos satisfechos hasta que nuestros clientes están alineando así, con un tráfico muy dirigido y un proceso de conversión efectivo para maximizar los ingresos de su sitio. Alto tráfico de visitantes que buscan precisamente lo que su sitio ofrece es la única manera de lograr esto.</p>

                <p>Nuestro trabajo es comprender tanto cómo los usuarios interactúan con los sitios web y motores de búsqueda como lo que se requiere para indexar y clasificar su sitio web con eficacia. Como una <strong> <Link to="http://translate.googleusercontent.com/translate_c?depth=1&amp;hl=es&amp;prev=search&amp;rurl=translate.google.co.ve&amp;sl=en&amp;u=http://www.seoworkers.com/ethical-practices.html&amp;usg=ALkJrhi-faf-eYwsax3AEZxvKMTlGr9zdw" className='primary-color'>compañía de SEO ético</Link></strong>, sentimos que es nuestra responsabilidad.</p>

                <div className='translation-p'>
                  <p><Link className='translation-link'>Estela Silva</Link> hoy para una propuesta que describe todas las opciones disponibles para mejorar el rendimiento de su sitio y conseguir las primeras posiciones del motor de búsqueda por delante de su competencia, y aumentar su tasa de conversión!</p>
                </div>

                <div className="author-section ">
                  <h4>Sobre la autora</h4>

                  <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                  <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                </div>

                <ul className='pagination-ul'>
                  <li className='pagination-li'><Link to='/servicios/limpieze-sitio-hackeado' className='primary-color'>&lt;Anterior</Link></li>

                  <li className='pagination-li'><Link to='/servicios/redaccion-de-contenido' className='primary-color'>Siguiente&gt;</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Consultoria