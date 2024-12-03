import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const Causesa = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Causas de disminucion de visitas o trafico web - Consultoria SEO';
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
                        <span title="Tips Consejos para sitios e-commerce">Causas de disminucion de visitas o trafico web</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Es de vital importancia que antes de comprobar las causas de disminución de visitas Usted. sepa <Link to="http://tuconsultoraseo.com/blog/seo/142-como-recuperarse-del-efecto-google-panda " title="como recuperarse del efecto Google Panda " className='primary-color'>como recuperarse del efecto Google Panda</Link> ya que esta es una razón de pérdidas de visitas.</p>
                        
                        <p>Existen diversas causas o razones <strong> seo</strong> por las que un sitio o <strong>pagina web</strong>  puede perder visitas, conozca cuales son:</p>

                        <div>
                            <img src="\images\image.jpg" alt="Causas de disminucion de visitas o trafico web " title="Causas de disminucion de visitas o trafico web " />
                        </div>

                    <p>Sobre la autora</p>

                        <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="/las-directories" className='primary-color'>&lt;Anterior</Link>
                        </li>

                        <li className='pagination-li'>
                            <Link to="/htaccess" className='primary-color'>Siguiente&gt;</Link>
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

export default Causesa;