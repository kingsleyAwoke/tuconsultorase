import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ModuleBloque = () => {
    //   PAGE TITLE
    useEffect(() => {
        document.title = 'Demo del Modulo Bloque Boostrap para joomla - Consultoria SEO';
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
                        <span title="Demo modulo jumbotron">Demo Modulo Bloque Boostrap</span>
                    </div>

                    <div className="service-content-txt">
                        
                        <h3 className='module-bloque-h3'>Bloque Bootstrap</h3>

                        <img src="\images\comercio-e2.png" alt="Bloque Bootstrap" width='300' height='200' className='module-bloque-img' />

                        <p className='colored-paragraph'>Coloque un bloque Bootstrap con contenido personalizado en cualquier posición de modulo. Imagen en miniatura (thumbnails) con enlace a articulo, botón con enlace a articulo e iconos Font Awesome en botón boostrap, titulo y párrafo con selector de colores, selector de clase de botón Bootstrap. Recuerde: su plantilla debe trabajar con bootstrap y Font Awesome. Programación limpia y eficiente.. Recuerde su web debe trabajar con bootstrap y font awesome.License free
                        <div>
                        <button className='readmore-btn'>Leer documentación del Modulo</button>
                        </div></p>

                        
                        <Link to='/modulos/demo-modulo' title='Demo Modulo Jumbotron Bootstrap para joomla' className='center primary-color'>Demo Modulo Jumbotron Bootstrap para joomla</Link>

                        

                        <Link to='/modulos/demo-modulo' title="Descargar Mod_jumbotron_1.6 " className='primary-color center'>Descargar Mod_jumbotron</Link>

                    <div className="author-section">
                        <h1>Sobre la autora</h1>

                        <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                    </div>

                    <ul>
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

export default ModuleBloque
