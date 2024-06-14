import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const MapaDelSitio = () => {
//   PAGE TITLE
    useEffect(() => {
        document.title = 'Mapa del sitio - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Mapa del sitio</span>
                    </div>

                    <ul className='pages-link'>
                        <li><NavLink to="/" className='primary-color'>Contactenos</NavLink></li>
                        <li><NavLink to="/blog" className='primary-color'>Blog</NavLink></li>

                        <ul  className='blog-pages'>
                            <li><NavLink to="/blog/seo" className='primary-color'>SEO</NavLink></li>
                            <li><NavLink to="/blog/joomla" className='primary-color'>Joomla</NavLink>!</li>
                            <li><NavLink to="/blog/e-commerce" className='primary-color'>e-Commerce</NavLink></li>
                            <li><NavLink to="/blog/seguridad" className='primary-color'>Seguridad</NavLink></li>
                        </ul>

                        <li><NavLink to="/utilidades" className='primary-color'>Utilidades seo</NavLink></li>

                        <li><NavLink to="/plantilla" className='primary-color'>Plantilla joomla gratis y de pago</NavLink></li>

                        <li><NavLink to="/modulos" className='primary-color'>Módulos para Joomla!</NavLink></li>

                        <li><NavLink to="/portafolio" className='primary-color'>Portafolio de Páginas Web</NavLink></li>

                        <li><NavLink to="/service" className='primary-color'>Servicios</NavLink></li>
                    </ul>

                    <div className="service-content-txt">
                        <div className="author-section">
                            <h1>Sobre la autora</h1>

                            <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                            <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                        </div>
                    </div>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="/paga-404" className='primary-color'>Siguient&gt;</Link>
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

export default MapaDelSitio
