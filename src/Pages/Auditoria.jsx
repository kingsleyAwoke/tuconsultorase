import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const Auditoria = () => {
  //   PAGE TITLE
  useEffect(() => {
    document.title = 'Auditoria de Seguridad Joomla! - Consultoria SEO';
  }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='auditoria-container contact'>

          <dir className="service-content">
            <div className='column'>
              <div className="service-content-head">
                <span>Auditoria de seguridad joomla-joomla expertos</span>
              </div>

              <div className="service-content-txt">

                <p>Entendemos la <strong>seguridad </strong>
                web.&nbsp;Como expertos en Joomla puede confiar en nosotros para ayudarle con la <strong>seguridad </strong>
                de su sitio web Joomla.&nbsp;Podemos ayudarle a endurecer la seguridad de su sitio web Joomla.</p>

                <p>Nuestros servicios de auditor &iacute;a de <strong>seguridad </strong>
                de Joomla reducir &aacute;n las posibilidades de que su sitio Joomla sea hackeado, podemos ayudar a garantizar que en caso de sufrir un incidente de hacking usted este preparado con copias de seguridad y contar con un plan contra desastres.</p>

                <p>Podemos endurecer la <strong>seguridad</strong> de su sitio web Joomla existente, ofrecer consejos sobre la configuraci &oacute;n del  servidor y las mejores pr &aacute;cticas para los administradores de sitios web.</p>

                <p><strong>Auditor &iacute;as de </strong>
                Seguridad <strong>de Joomla</strong></p>

                <p>Una auditor &iacute;a de <strong>seguridad </strong> Joomla puede ayudar a prevenir que su sitio web de sea hackeado.</p>

                <p>&iquest;Qu &eacute;haremos?</p>

                <p>Analizar la configuraci &oacute;n de su p &aacute;gina web, versiones de la lista de componentes, m &oacute;dulos y la versi &oacute;n de plugins, recomendar mejoras donde m &aacute;s se necesitan. Analizar la configuraci &oacute;n de <strong>seguridad </strong>
                de su servidor.</p>

                <p> La entrega final de este proceso ser &aacute;un informe de <strong>seguridad </strong>
                por escrito, con la formulaci &oacute;n de recomendaciones de cambios urgentes y consejos.</p>

                <div className="author-section ">
                  <h4>Sobre la autora</h4>

                  <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                  <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                </div>

                <ul className='pagination-ul'>
                  <li className='pagination-li'><Link to='' className='primary-color'>&lt;Anterior</Link></li>

                  <li className='pagination-li'><Link to='' className='primary-color'>Siguiente&gt;</Link></li>
                </ul>
              </div>
            </div>
          </dir>
        </div>
      </section>
    </>
  );
}

export default Auditoria
