import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import { FaCaretRight} from 'react-icons/fa';
import Footer from '../components/Footer';


const Compirobar = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Comprobar-redireccion';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Herramienta comprobar redirección</span>
                    </div>

                    <div className="service-content-txt">
                        <p><img src="\images\301-Redirect.jpg" alt="Herramienta para comprobar redirecciones" width='200' height='200' className='service-content-img' />Cuando solicitamos una URL desde el navegador el servidor al que hemos dirigido la solicitud responde con un grupo de cabeceras HTTP que nosotros no visualizamos y luego, si todo esta correcto, lanza el contenido solicitado que es el que finalmente podemos ver en forma de pagina Web en nuestro navegador.</p>

                        <div className="h3-section">
                            <div className='paper-icon'>
                                <img src="\images\page_white_text.gif" width='16' height='16' />
                                <h3>Explicación de los códigos de respuesta</h3>
                            </div>

                            <ul>
                                <li><FaCaretRight /> <strong>200</strong> - Una página válida se ha encontrado en la URL especificada </li>

                                <li><FaCaretRight /> <strong>404</strong> - No se encontró la página de la URL especificada
                                </li>

                                <li><FaCaretRight /> <Link to="/blog/seo" title="redireccionamiento 301" className='primary-color'><strong>301</strong>
                                </Link> - La dirección URL especificada redirige permanentemente a otra página</li>
                                <li><FaCaretRight /> <strong>302</strong> - La dirección URL especificada redirige temporalmente a otra página</li>

                                <li><FaCaretRight /> <strong>otra</strong> - Sería inusual recibir una respuesta distinta de las mencionadas anteriormente.</li>
                            </ul>
                        </div>

                        <p>Las personas utilizan esta herramienta para comprobar si su sitio web tiene contenido duplicado. Una de las causas de contenido duplicado es tener la misma página disponible en más de una URL.</p>

                        <p>El propósito de esta herramienta es ver rápidamente las respuestas generadas a partir de una gama de direcciones URL. Generalmente, sólo una de ellas debe devolver una respuesta 200, por lo general www.sitio.com o sitio.com.</p>
                        
                        <p>Si alguno de los index.htm, index.php, index.asp está devolviendo una respuesta 200, usted tiene un problema de contenido duplicado. Todas las páginas deben devolver un 404 o 301 como respuesta. Si alguna devuelve una respuesta 302 &nbsp;probablemente sería mejor cambiarla &nbsp;a una <Link to="/blog/seo" title="redirección 301" className='primary-color'>redirección 301</Link>
                        .</p>

                        <form action="search" id='search-compirabar'>
                        <p><strong>Ingrese la URL de la pagina a comprobar redirección</strong>:</p>
                        <br />
                        <input type="search" size="90" maxlength="90" name="URL" value={text} onChange={ (e) => setText(e.target.value) }  />
<br />  <br />
                        <input type="submit" name="comprobar" value="comprobar redireccion" />
                    </form>

                    <div className="author-section">
                        <h1>Sobre la autora</h1>

                        <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                    </div>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="/utilidades/herramienta" className='primary-color'>&lt;Anterior</Link>
                        </li>

                        <li className='pagination-li'>
                            <Link to="/utilidades/analisis" className='primary-color'>Siguiente&gt;</Link>
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

export default Compirobar
