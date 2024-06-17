import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';

const DemoModulo = () => {
    useEffect(() => {
        document.title = 'Demo modulo jombotron para joomla - Consultora SEO';
    }, []);
  return (
    <>
      <section className='jombotron-container'>
        <BreadCrumb />
        <div className='content-container'>

            <div className="service-content ">
                <div className='column'>
                    <h1 className="service-content-head">Demo modulo jumbotron</h1>

                <div className="content-txt">
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

                <div className='demopage-pagination'>
                    <span>
                        <Link to="/modulos/demo-modulo" className='primary-color'>&lt;Anterior</Link>
                    </span>

                    <span>
                        <Link to="/modulos/demo-modulo" className='primary-color'>Siguiente&gt;</Link>
                    </span>
                </div>
            </div>
        </div>        
        </div>        
      </section>
      <Footer />
    </>
  );
}

export default DemoModulo
