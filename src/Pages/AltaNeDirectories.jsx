import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';


const AltaNeDirectories = () => {
    //   PAGE TITLE
    useEffect(() => {
        document.title = 'Alta en Directorios - Consultoria SEO';
    }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='alta-neDirectories-container contact'>

            <div className="service-content">
                <div className='column'>
                    <div className="service-content-head">
                        <span title="Alta en buscadores">Alta en Directorios</span>
                    </div>

                    <div className="service-content-txt">

                        <p>El<strong> Alta en Directorios</strong> ha demostrado ser un m &eacute;todo maravilloso para la obtenci &oacute;n de enlaces de calidad de un solo sentido. La calidad de los enlaces entrantes mejora su posicionamiento en los buscadores y su visibilidad en Internet. Ofrecemos un servicio de <strong>alta en directorios </strong>
                        para los sitios que cumplen con nuestra <Link to="/servicios/" title="política de sitios aceptables" className='primary-color'>pol &iacute;tica de sitios aceptados</Link>
                        .</p>
<br /><br />
                        <p>Ofrecemos dar de <strong>alta en directorios </strong>de calidad a su sitio de forma manual para comprobar que cada directorio es gestionado por personas y existe un control sobre los sitios y categorias. Esta alta de sitios web la realizamos para un notable n &uacute;mero de directorios de calidad, que ofrezcen enlaces no rec &iacute;procos de un solo sentido, para de este modo conseguir visitantes orientados a su nicho de mercado y mejorar su posicionamiento en buscadores. Mediante la utilizaci &oacute;n de los servicios de <strong>alta en directorios</strong>
                        , recibir &aacute;el tr &aacute;fico adicional a su sitio de esos directorios de calidad que mejoran el ranking en los motores de b &uacute;squeda.</p>

                        <p>Los paquetes de directorios incluyen lo siguiente:</p>

                        <ul>
                          <li>El uso de diferentes texto ancla para lograr una buena clasificaci &oacute;n.</li>
                          <li>Otra carater &iacute;stica del servicio de<strong> alta en directorios </strong>
                          es que se realiza en directorios gratuitos para evitar enlaces de pago que afectan negativamente la clasificaci &oacute;n.</li>
                          <li>Alta manual en la categor &iacute;a relacionada.</li>
                          <li>Informe de la presentaci &oacute;n que se hizo a los directorios de su sitio web.</li>
                        </ul>

                        <form action='no action yet'>
                            <label>Su Plan de alta enbuscadores</label>
                            <br />
                            <select>
                                <option value='20 Directorios $15,00 USD' >20 Directorios $15,00 USD</option>
                                <option value="40 Directorios $30,00 USD">40 Directorios $30,00 USD</option>
                            </select>
                            <br />
                            <Link to='https://www.paypalobjects.com' target='_blank'><img src="\images\btn_buynow_SM.gif" alt="Buy Button" /></Link>
                        </form>

                        <p><strong>Ventajas del alta en directorios</strong></p>

                        <ul>
                          <li>Mejora de la posici &oacute;n debido a que son una forma de enlaces (cualquiera que conozca la optimizaci &oacute;n del Search Engine, sabe lo importante que es tener enlaces que apunten a su sitio para mejorar el ranking de sitios web)</li>

                          <li>Nuestros servicios de <strong>alta en directorios</strong> le ahorrar &aacute;tiempo y esfuerzo que puede utilizar en otro tipo de comercializaci &oacute;n o &aacute;rea t &eacute;cnica del sitio web. Usted recibir &aacute;enlaces relevantes para apoyar sus estrategias de optimizaci &oacute;n de motores de b &uacute;squeda.</li>

                          <li>Ayuda en la r &aacute;pida indexaci &oacute;n de su sitio en los motores de b &uacute;squeda.</li>
                        </ul>

                        <div className="author-section ">
                            <h4>Sobre la autora</h4>

                            <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                            <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                        </div>

                        <ul className='pagination-ul'>
                            <li className='pagination-li'>
                                <Link to="/servicios/auditoria-de-seguridad-joomla" className='primary-color'>&lt;Anterior</Link>
                            </li>

                            <li className='pagination-li'>
                                <Link to="/servicios/alta-en-buscadores" className='primary-color'>Siguiente&gt;</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  );
}

export default AltaNeDirectories
