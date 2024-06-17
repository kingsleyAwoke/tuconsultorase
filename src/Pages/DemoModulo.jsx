import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const DemoModulo = () => {
    //   PAGE TITLE
    useEffect(() => {
        document.title = 'Demo modulo jombotron para joomla - Consultora SEO';
    }, []);
  return (
    <>
      <section className='seo-imgne'>
        <BreadCrumb />
        <div className='main-section container seo-imgne-container'>
            
            <LeftContent />

            <div className="service-content">
                <div className='column'>
                    <div className="service-content-head">
                        <span title="Demo modulo jumbotron">Demo modulo jumbotron</span>
                    </div>

                    <div className="service-content-txt">
                        
                        <div className='content-txt'>
                            <h1>Portal Jumbotron</h1>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla sit amet enim ut hendrerit. Praesent rutrum dui a turpis porttitor mollis. In eu scelerisque ipsum</p>
                        </div>


                        <Link to='/modulos/demo-modulo' title='Demo Modulo Jumbotron Bootstrap para joomla' className='center primary-color'>Demo Modulo Jumbotron Bootstrap para joomla</Link>

                        

                        <Link to='/modulos/demo-modulo' title="Descargar Mod_jumbotron_1.6 " className='primary-color center'>Descargar Mod_jumbotron</Link>

                    <div className="author-section">
                        <h1>Sobre la autora</h1>

                        <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                    </div>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="/modulos/jumbotron" className='primary-color'>&lt;Anterior</Link>
                        </li>

                        <li className='pagination-li'>
                            <Link to="/modulos/bloque" className='primary-color'>Siguiente&gt;</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

            <RightContent links={Links} />
        </div>

            <Footer />
        </section>
    </>
  );
}

export default DemoModulo
