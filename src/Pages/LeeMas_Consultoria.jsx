import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const LeeMas_Consultoria = () => {
//   PAGE TITLE
    useEffect(() => {
        document.title = 'Posicionamiento en buscadores SEO Diseño Web Joomla - Consultora SEO';
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
                        <span title="Tips Consejos para sitios e-commerce">Como la <strong>Consultoria Seo</strong> Aumenta el <strong>Posicionamiento en buscadores</strong> y la Eficacia de su <strong>Diseño Web<span class="Apple-converted-space"></span></strong></span>
                    </div>

                    <p>from <strong><Link to="http://www.slideshare.net/tuconsultoraseo" target="_blank" className='primary-color'>Estela Silva</Link></strong></p>

                    <p><strong><Link to="https://web.archive.org/web/20160305140517/http://www.slideshare.net/tuconsultoraseo/seo-o-posicionamiento-en-buscadores-58624756" target="_blank" title="Seo o Posicionamiento en buscadores" className='primary-color'>Seo o Posicionamiento en buscadores</Link></strong> from <Link to='#' className='primary-color'>Estela Silva</Link></p>

                    <p>En Tu <strong>Consultora</strong> <strong>Seo</strong>, examinamos su sitio web, analizamos el tipo experiencia que su sitio ofrece a los usuarios, el <strong>diseño web </strong>teniendo en cuenta la usabilidad y la experiencia de búsqueda en general. Evaluamos las técnicas de conversión que utiliza, para asegurar un embudo de conversión efectivo.</p>

                    <p>Por último, nos aseguramos de que su sitio cumple con las directrices de los <strong>motores de búsqueda</strong> y técnicas de <strong>posicionamiento en buscadores</strong> (<strong>SEO</strong> ) recomendadas, mientras investigamos a fondo la competencia de su industria. La formulación de una estrategia integral de contenido, <strong>diseño web</strong> y la aplicación de nuestras probadas técnicas de marketing de contenidos para aumentar la visibilidad y la marca de su sitio web son una parte importante de este proceso.</p>

                    <p>Analizando todos estos aspectos juntos y le presentamos un plan de acción integral, diseñado para ayudarle a llevar su negocio al siguiente nivel - una alta clasificación para los términos de búsqueda preferidos y la conversión de visitantes en clientes.</p>

                    <Link to='#' className='primary-color'>Leer más: Como la Consultoria Seo Aumenta la Eficacia de su sitio Web</Link>

                </div>
            </div>

            <RightContent links={Links} />
        </div>

            <Footer />
        </section>
    </>
  );
}

export default LeeMas_Consultoria;
