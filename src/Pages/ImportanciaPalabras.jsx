import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ImportanciaPalabras = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Importancia Palabras Clave de Contenido para Seo - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Importancia de Palabras Clave de Contenido para Seo</span>
                    </div>

                    <div className="service-content-txt">
                        
                        <p>Al hacer clic en palabras clave de contenido en la Consola de búsqueda, anteriormente llamada Herramientas para webmaster de Google, en la sección índice podemos ver la cantidad de apariciones de <strong>palabras clave</strong>
                        en las <strong>paginas web</strong>
                        de nuestro sitio.</p>

                        <p>Si deseamos <strong>posicionar</strong>
                        de forma natural para una determinada <strong>palabra clave</strong>
                        entonces necesitamos más contenido para esa palabra clave en particular.</p>

                        <p>Cuanto más contenido de calidad se encuentre en las paginas de tu sitio con las palabras clave que deseas <strong>posicionar</strong>
                        , más alta será la clasificación en los resultados de búsqueda, esto es lo que llamamos <strong>Palabras Clave de Contenido para Seo.</strong></p>

                        <p>No existe ningún "truco" que hará que su sitio salte a la primera posición para <strong>palabras clave</strong>
                        específicas, es el contenido de valor con <strong>palabras clave</strong>
                        incluidas en él y su frecuencia lo que le dirá a Google de que trata su sitio cuando lo rastrea.</p>

                        <p>La importancia de cada palabra clave refleja la frecuencia con la que se encuentra en las paginas de su sitio.</p>

                        <p>Ud. puede saber donde están esas palabras clave haciendoles clic, entonces la Cónsola de búsqueda le mostrará las <strong>páginas web</strong>
                        donde se encuentra, es decir; páginas de su blog por ejemplo.</p>

                        <p>Es una excelente herramienta ya que para cada palabra clave que muestra nos dice su importancia en términos porcentuales de modo que sólo debemos crear contenido rico, útil, relevante para la palabra clave a <strong>posicionar</strong>
                        .</p>

                        <p>Si queremos <strong>posicionar</strong>
                        la palabra clave <strong>seo </strong>
                        y ésta tiene una importancia del 31% entonces procederemos a crear ese íncreíble contenido que incluira la palabra <strong>seo.</strong></p>

                        <p>Por lo tanto no podemos dispersarnos escribiendo contenido sobre los patitos blancos en el lago azul, a menos que usted desee <strong>posicionar</strong>
                        esas palabras clave.</p>

                        <p>Pero esta herramienta también puede informanos sobre palabras clave sospechosas, palabras que usted no ha escrito y que podrían indicar que su sitio ha sido hacheado, como propietario del mismo debe estar atento a esto, como webmaster también, como desarrollador de <strong>paginas web.</strong></p>

                        <p>Si ve palabras clave de contenido como "viagra", "prescripción", "cialis" y nota que al pulsar sobre la palabra clave, Google ha encontrado esas palabras en la lista de url que muestra pero usted no las escribió, puede que su sitio haya sido hackeado.</p>

                        <p>Para ampliar más la  información lea Cómo seleccionar palabras clave
                        , Como mejorar el posicionamiento seo y aumentar el tráfico, El valor de una buena palabras clave y Palabras clave de contenido
                        .</p>

                        <Link to='/' className='primary-color'>Inicio</Link>

                    <div className="author-section">
                        <h1>Sobre la autora</h1>

                        <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                    </div>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="importancia" className='primary-color'>&lt;Anterior</Link>
                        </li>

                        <li className='pagination-li'>
                            <Link to="optimizacion-interna" className='primary-color'>Siguiente&gt;</Link>
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

export default ImportanciaPalabras;