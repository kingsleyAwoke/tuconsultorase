import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';


const DisenoDePagainas = () => {
    //   PAGE TITLE
    useEffect(() => {
        document.title = 'Diseño de Páginas web - Consultoria SEO';
    }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='service-container'>

            <div className="service-content">
                <div className='column'>
                    <div className="service-content-head">
                        <span title="Dise&ntilde;o de paginas web Joomla">Dise&ntilde;o de paginas web Joomla</span>
                    </div>

                    <div className="service-content-txt">

                        <p>En el <strong>dise &ntilde;o de paginas web joomla</strong> la salida visual es controlada por las <strong>plantillas</strong>, &eacute;stas se pueden hacer seg &uacute;n sus requerimientos. Tenemos dos formas de hacer el dise &ntilde;o que desee :</p>

                        <p>Plantilla joomla personalizada y una nueva <strong>plantilla </strong>
                        joomla adaptada a sus necesidades espec &iacute;ficas.</p>

                        <p>Plantilla Joomla Personalizada,<br />Hay miles de <strong>plantillas</strong> disponibles en varios sitios web a trav &eacute;s de la web, algunas de estas <strong>plantillas </strong>
                        son gratuitas y algunas tienen un cargo. La forma moderna de los negocios para los dise &ntilde;adores de <strong> plantilla </strong>
                        web es poner en marcha un club de plantilla. Los club de plantilla cobran una cantidad por un a &ntilde;o, el acceso a cientos de <strong>plantillas</strong>
                        . Pero usted debe saber, que cientos, si no miles de personas la est &aacute;n utilizando, nosotros personalizamos las <strong>plantillas</strong>
                        , nuestra manera preferida de dise &ntilde;o de un nuevo sitio web es tener una <strong>plantilla </strong>
                        extraordinaria, fuera de lo com &uacute;n y transformarla, en exactamente lo que quiere usted para el dise &ntilde;o de su presencia/sitio web en l &iacute;nea.</p>

                        <p>Tuconsultoraseo puede dise &ntilde;ar y construir una nueva plantilla Joomla desde cero. Todo lo que necesitamos es el esquema de su empresa corporativa: color, su logotipo, una idea b &aacute;sica del tipo de men &uacute;(desplegable, men &uacute;superior de una sola planta, men &uacute;lateral de varios niveles, etc) y la estructura de su dise &ntilde;o preferido. A partir de esta informaci &oacute;n b &aacute;sica, utilizando nuestra amplia experiencia de creaci &oacute;n de <strong>plantillas </strong>
                        Joomla, nuestro equipo de expertos crear &aacute;una plantilla a medida que ofrece, el estilo, la innovaci &oacute;n y lo m &aacute;s importante de todo, la satisfacci &oacute;n del visitante.</p>

                        <p>Joomla Est &aacute;ndares de <strong>Dise &ntilde;o Web</strong><br />Todos nuestros <strong>dise &ntilde;os de paginas web/plantillas </strong>
                        son XHTML y CSS compatibles, nunca ponemos en marcha una p &aacute;gina web con errores de javascript o cualquier mala codificaci &oacute;n. Desarrollado para ser accesible a los que utilizan lectores de pantalla y otras tecnolog &iacute;as asistida.</p>

                        <p>Compatibilidad del navegador con nuestros <strong>dise &ntilde;os Web</strong></p>

                        <p>compatibles en todos los navegadores principales: Google Chrome, Mozilla Firefox, Opera, Safari e IE9 +.</p>

                        <p>Desarrollamos para la &uacute;ltima versi &oacute;n de Internet Explorer (IE), si una nueva versi &oacute;n se ha publicado recientemente, vamos a desarrollar &nbsp;sin costo adicional para las dos &uacute;ltimas versiones de IE.</p>

                        <p>Nuestros servicios de <strong>dise &ntilde;o paginas web Joomla</strong><br />son utilizados por los principales medios de comunicaci &oacute;n creativos y empresas de medios digitales. Ellos reconocen que somos m &aacute;s especializados de lo que pueden manejar, o simplemente le resulte m &aacute;s rentable contratar a verdaderos expertos Joomla para obtener el trabajo de manera r &aacute;pida y profesional.</p>

                        <p>Nuestro objetivo es alcanzar sus objetivos de negocio, el &nbsp;<strong>dise &ntilde;o de p &aacute;ginas web </strong>es in &uacute;til si no est &aacute;cumpliendo con sus objetivos:</p>

                        <p>Si usted quiere un nuevo sitio web o una importante revisi &oacute;n de su sitio web existente, somos la empresa de <strong>dise &ntilde;o</strong> web para usted. Consulte nuestra p &aacute;gina de Joomla Web Design Portfolio y navegue por el resto del sitio para ver nuestra gama completa de servicios de <strong>dise &ntilde;o web </strong>
                        Joomla.</p>

                        <p className='services-tel'>Ll &aacute;menos 584145142287 o <a href='tel:584145142287' title="Contactenos" className='primary-color'>cont&aacute;ctenos</a></p>

                        <div className="author-section ">
                            <h4>Sobre la autora</h4>

                            <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                            <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                        </div>

                        <ul className='pagination-ul'>
                            <li className='pagination-li'>
                                <Link to="/servicios/acelerar-joomla" className='primary-color'>&lt;Anterior</Link>
                            </li>

                            <li className='pagination-li'>
                                <Link to="servicios/limpieze-sitio-hackeado" className='primary-color'>Siguiente&gt;</Link>
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

export default DisenoDePagainas
