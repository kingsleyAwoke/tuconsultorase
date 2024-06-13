import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const Herramienta = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'herramienta seo imagen - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Herramienta If-Modified</span>
                    </div>

                    <div className="service-content-txt">
                        <p className='success-color'>La directiva de Google dice: Asegúrate de que tu servidor web admita la cabecera HTTP "If-Modified-Since". Esta función permite que tu servidor web avise a Google si el contenido de tu sitio ha cambiado desde la última vez que lo rastreamos. El uso de esta función te permitirá ahorrar ancho de banda y reducir gastos generales</p>

                        <p>Herramienta en línea gratuita que permite verificar si su sitio web/página web apoya si modificado ( If-Modified ) desde la cabecera http. Es una herramienta            <strong>SEO</strong> que ayuda a acelerar la indexación google bot. Google buscará este tipo de encabezados y actualizará la pagina si se han realizado modificaciones desde el último rastreo. Muestra todos los detalles de la página web, como última fecha de modificación, tipo de contenido, longitud del contenido, control de caché, etc ...</p>

                        <p>El servidor responde con un <strong>200</strong> código (<em>Ok</em>) si la página se ha modificado o con un código <strong>304</strong> (<em>no modificado</em>) si la página no se ha modificado.</p>

                        <p>Además comprueba encabezados HTTP.</p>

                        <p><strong>Ingrese la URL que desea analizar</strong>:</p>

                        <form action="search">
                        <input type="search" size="60" maxlength="60" name="URL" value={text} onChange={ (e) => setText(e.target.value) }  />
<br />  <br />
                        <input type="submit" name="comprobar" value="¿apoya If-Modified?"/>
                    </form>

                    <div className="author-section">
                        <h1>Sobre la autora</h1>

                        <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                    </div>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="/utilidades/seo-imagen" className='primary-color'>&lt;Anterior</Link>
                        </li>

                        <li className='pagination-li'>
                            <Link to="/utilidades/compirobar" className='primary-color'>Anterior&gt;</Link>
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

export default Herramienta
