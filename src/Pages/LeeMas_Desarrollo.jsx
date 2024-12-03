import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const LeeMas_Desarrollo = () => {
//   PAGE TITLE
    useEffect(() => {
        document.title = 'Diseño de Páginas web - Consultoria SEO';
    }, []);
  return (
    <>
      <section className='seo-imgne analisis'>
        <BreadCrumb />
        <div className='main-section container seo-imgne-container'>
            
            <LeftContent />

            <div className="service-content">
                <div className='column'>
                    <div className="service-content-head">
                        <span title="Diseño de paginas web Joomla">Diseño de paginas web Joomla</span>
                    </div>

                    <p>En el <strong>diseño de paginas web joomla</strong> la salida visual es controlada por las <strong>plantillas</strong>, éstas se pueden hacer según sus requerimientos. Tenemos dos formas de hacer el diseño que desee :</p>

                    <p>Plantilla joomla personalizada y una nueva <strong>plantilla </strong>
                    joomla adaptada a sus necesidades específicas.</p>

                    <p>Plantilla joomla personalizada y una nueva <strong>plantilla </strong>joomla adaptada a sus necesidades específicas.</p>

                    <p>Plantilla Joomla Personalizada, Hay miles de<strong>plantillas</strong> disponibles en varios sitios web a través de la web, algunas de estas <strong>plantillas</strong> son gratuitas y algunas tienen un cargo. La forma moderna de los negocios para los diseñadores de <strong>plantilla</strong> web es poner en marcha un club de plantilla. Los club de plantilla cobran una cantidad por un año, el acceso a cientos de <strong>plantillas</strong>. Pero usted debe saber, que cientos, si no miles de personas la están utilizando, nosotros personalizamos las <strong>plantillas</strong>, nuestra manera preferida de diseño de un nuevo sitio web es tener una <strong>plantilla</strong> extraordinaria, fuera de lo común y transformarla, en exactamente lo que quiere usted para el diseño de su presencia/sitio web en línea.</p>

                    <p>Tuconsultoraseo puede diseñar y construir una nueva plantilla Joomla desde cero. Todo lo que necesitamos es el esquema de su empresa corporativa: color, su logotipo, una idea básica del tipo de menú (desplegable, menú superior de una sola planta, menú lateral de varios niveles, etc) y la estructura de su diseño preferido. A partir de esta información básica, utilizando nuestra amplia experiencia de creación de <strong>plantillas</strong> Joomla, nuestro equipo de expertos creará una plantilla a medida que ofrece, el estilo, la innovación y lo más importante de todo, la satisfacción del visitante.</p>

                    <p>Joomla Estándares de <strong>Diseño Web</strong></p>

                    <p>Todos nuestros <strong>diseños de paginas web/plantillas</strong>
                    son XHTML y CSS compatibles, nunca ponemos en marcha una página web con errores de javascript o cualquier mala codificación. Desarrollado para ser accesible a los que utilizan lectores de pantalla y otras tecnologías asistida.</p>

                    <p>Compatibilidad del navegador con nuestros <strong>diseños Web</strong><br />compatibles en todos los navegadores principales: Google Chrome, Mozilla Firefox, Opera, Safari e IE9 +.</p>

                    <p>Desarrollamos para la última versión de Internet Explorer (IE), si una nueva versión se ha publicado recientemente, vamos a desarrollar  sin costo adicional para las dos últimas versiones de IE.</p>

                    <p>Nuestros servicios de <strong>diseño paginas web Joomla</strong>
                    son utilizados por los principales medios de comunicación creativos y empresas de medios digitales. Ellos reconocen que somos más especializados de lo que pueden manejar, o simplemente le resulte más rentable contratar a verdaderos expertos Joomla para obtener el trabajo de manera rápida y profesional.</p>

                    <p>Nuestro objetivo es alcanzar sus objetivos de negocio, el <strong>diseño de páginas web </strong>
                    es inútil si no está cumpliendo con sus objetivos:</p>

                    <p>Si usted quiere un nuevo sitio web o una importante revisión de su sitio web existente, somos la empresa de <strong>diseño</strong> web para usted. Consulte nuestra página de Joomla Web Design Portfolio y navegue por el resto del sitio para ver nuestra gama completa de servicios de <strong>diseño web</strong> Joomla.</p>

                    <p className='services-tel'>Ll &aacute;menos 584145142287 o <a href='tel:584145142287' title="Contactenos" className='primary-color'>cont&aacute;ctenos</a></p>

                    <div className="service-content-txt">
                        <div className="author-section">
                            <h1>Sobre la autora</h1>

                            <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                            <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                        </div>
                    </div>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="/leemas_tiendas" className='primary-color'>&lt;Anterior</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <RightContent links={Links} />
        </div>

            <Footer />
        </section>
    </>
  );
}

export default LeeMas_Desarrollo;
