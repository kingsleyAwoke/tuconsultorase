import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoCrearUn = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Cómo crear un mapa del sitio - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Paso 9: Sitemaps - ¿Cómo crear un mapa del sitio?</span>
                    </div>

                    <div className="service-content-txt">

                        <p><img src="\images\DANOS UN MAPA DEL SITIO.jpg" alt="¿quiere ayudar a los motores de bUqueda a encontrar su sitio y todas sus pAginas?" title="¿quiere ayudar a los motores de búqueda a encontrar su sitio y todas sus páginas?" width="340" height="255" />Es importante crear y mantener al día un mapa del sitio para las las mejores prácticas de <strong>SEO </strong>Los motores de búsqueda pueden rastrear e indexar su sitio web más completo si tienen un mapa del sitio XML. Esta lección imprescindible para este tutorial <strong>SEO </strong> explica cómo crear un Sitemap para que pueda recibir las arañas de los motores de búsqueda y ayudarles a rastrear e indexar todas las <strong>páginas web</strong>
                        de su sitio. </p>

                        <h2 className='primary-color'>¿Qué es un mapa del sitio?</h2>

                        <p>Un Sitemap es un archivo de texto que los webmasters crean para decirle a los motores de búsqueda como Google y Bing las <strong>páginas web</strong>
                        o url que un sitio web tiene. Se trata básicamente de una lista de todas las URL que se deben indizar - las URL de las <strong>páginas web</strong>
                        , imágenes, vídeos y otros archivos de contenido en el sitio - formateados con algunas etiquetas XML. Los Sitemaps XML no deben confundirse con <em>mapas de sitio HTML, que son <strong>páginas web </strong></em>normales creadas para ayudar a los visitantes humanos a encontrar el contenido de un sitio web. Sin embargo, <strong>cada uno tiene beneficios SEO, por lo que debe crear dos tipos XML y HTML para su sitio.</strong> Aquí están las diferencias:</p>

                        <table>
                            <tbody>
                                <tr>
                                    <td><trong>SitemapsXML</trong></td>
                                    <td>Mapas de Sitio HTML</td>
                                </tr>
                                <tr>
                                    <td>Rastreable por los buscadores</td>
                                    <td>Sí</td>
                                    <td>Sí</td>
                                </tr>
                                <tr>
                                    <td>Leer por los visitantes humanos</td>
                                    <td>No</td>
                                    <td>Sí</td>
                                </tr>
                                <tr>
                                    <td>Tamaño máximo</td>
                                    <td>50.000 URLs o 50 MB sin comprimir</td>
                                    <td>No se ha especificado, pero que sea fácil de usar</td>
                                </tr>
                                <tr>
                                    <td>Formato</td>
                                    <td>Archivo XML (texto LA La <strong>página web</strong>
                                        (puede ser bastante))</td>
                                </tr>
                                <tr>
                                    <td>Vinculado desde</td>
                                    <td>Archivo robots.txt</td>
                                    <td>Navegación del sitio</td>
                                </tr>
                                <tr>
                                    <td>Recomendado para <strong>SEO</strong></td>
                                    <td>Sí</td>
                                    <td>Sí</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className='primary-color'>¿Cuántos Sitemaps debo crear?</h3>

                        <p>A diferencia de la Presentación de su sitio en forma manual, lo cual es una tarea completamente opcional, <strong>cada sitio debe tener por lo menos un Sitemap XML. </strong>Los grandes sitios web pueden necesitar varios para asegurar que el número de direcciones por no exceda el límite. También se recomienda (para un sitio web de cualquier tamaño) que ciertos tipos de archivos se mostrarán en su propio sitio especializado: vídeos y noticias, para los dos ejemplos. Por lo tanto, si tienes vídeos en su sitio, cree un sitemap especializado de vídeo para asegurarse que los motores de búsqueda van encontrar sus archivos de vídeo.</p>

                        <p><em>En otro de sus muchos vídeos útiles para los webmasters, Matt Cutts de Google responde a la pregunta, <strong>"¿Qué es mejor: un mapa del sitio HTML o Mapa del sitio XML"</strong></em></p>

                        <p><em>Escucha como él explica que debido a que cumplen diferentes necesidades, ambos son importantes.</em></p>

                        <iframe width="560" height="315" src="https://web.archive.org/web/20160315032952if_/https://www.youtube.com/embed/hi5DGOu1uA0" frameborder="0" allowfullscreen></iframe>

                        <h2 className='primary-color'>Cómo crear un mapa del sitio XML</h2>

                        <p>Puede crear un sitemap de forma manual, pero utilizando un generador de mapa del sitio hace que el trabajo sea más fácil. Hay muchas buenas herramientas de terceros para crear Sitemaps XML automáticamente. Uno es una tecnología del lado del servidor de código libre de Microsoft Bing Plugin Bing Mapa del Sitio XML, que puede generar automáticamente dos tipos de Sitemaps XML que pueden ser leídos por cualquier motor de búsqueda:</p>

                        <ul className='unordered-list'>
                            <li><em>Integral del sitio, que incluye todos los archivos (excepto alguno que no permita en su archivo robots.txt)</em></li>
                            <li><em>Recién actualizados del sitio </em></li>
                        </ul>

                        <p>NOTA: Cualquier motor de búsqueda puede leer los archivos XML Sitemap porque cumplen con el protocolo Sitemaps.org.</p>

                        <h2 className='primary-color'>Cómo enviar su sitio a los motores de búsqueda</h2>

                        <p>Usted puede enviar sus Sitemaps XML a Google y Bing utilizando su cuenta dentro de sus herramientas para webmasters:</p>

                        <ul className='unordered-list'>
                            <li><strong>Google:</strong> Ingrese a su cuenta de Herramientas para webmasters de Google. En el menú de rastreo, seleccione Sitemaps. EL siguiente video, trata temas como:</li>
                            <li>Formatos de Sitemaps</li>
                            <li>Recursos para crear Sitemaps</li>
                            <li>Cómo enviarlo</li>
                        </ul>

                        <iframe width="420" height="315" src="https://web.archive.org/web/20160315032952if_/https://www.youtube.com/embed/vhdbm7Faew8" frameborder="0" allowfullscreen></iframe>

                        <ul className='unordered-list'>
                            <li><strong>Bing:</strong> Ingresar a Bing Webmaster Tools. Usted puede utilizar el widget del sitio en su panel o ir a la función de Sitemaps, ubicada en la sección Configuración de Mi sitio.</li>
                        </ul>

                        <p>Los métodos anteriores permiten proactivamente enviar su archivos de Mapa del sitio XML a los motores de búsqueda. En cualquier caso, asegúrese de <strong>especificar la ubicación de su sitemap XML en el archivo robots.txt</strong>, donde las arañas están seguras de encontrar la próxima vez que vienen a rastrear. (Un archivo <em>robots.txt es simplemente un archivo de texto guardado en la raíz de tu sitio web y que da instrucciones para la visita de los motores de búsqueda.) Su archivo robots.txt debe ser similar a las líneas siguientes (abajo), con una directiva por línea y una línea Sitemap para cada uno de sus diferentes Mapas del sitio XML:</em></p>

                        <blockquote>
                            <dl>
                                <dt>User-agent: *</dt>
                                <dt>Disallow: /tmp/</dt>
                                <dt>Disallow: /nombre-de-archivo.html</dt>
                                <dt>Sitemap: http://sitio-web.com/mi-sitemap1.xml</dt>
                                <dt>Sitemap: http://sitio-web.com/mi-sitemap2.xml</dt>
                            </dl>
                        </blockquote>
                        
                        <p>Eso es todo! Una vez que crea sus Sitemaps XML y le dice a los motores de búsqueda dónde encontrarlos usando el archivo robots.txt, las arañas de los motores de búsqueda deben hacer el resto. Si necesita más información sobre cómo crear un mapa del sitio, vea la Ayuda de Webmaster Tools de Google</p>

                        <p>Lea también Porque usar un sitemap y Cómo crear mapas del sitio para los usuarios.</p>

                        <p>En el siguiente paso del tutorial de <strong>SEO</strong>
                        , usted aprenderá <em>cómo utilizar medios enriquecidos adecuadamente para hacer su sitio más atractivo y más clasificable</em></p>
                        
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

export default ComoCrearUn;