import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const LasDirectories = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Las directrices para webmaster de Google - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Las directrices para webmaster de Google</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Una directriz es una norma o instrucción sobre cómo realizar una actividad.</p>

                        <p>Google se ha tomado el trabajo de publicar una serie de directrices o prácticas para ayudar a su rastreador a encontrar, clasificar e indexar los sitios:</p>

                        <h2><Link to='https://support.google.com/webmasters/answer/35769?hl=es-419' target=" _blank " className='primary-color'>Directrices para webmaster</Link></h2>
                        
                        <p>Los sitios web que infrinjan estas normas pueden perder su ranking y ser penalizados por Google</p>

                        <p>Ellos dan especial atención a las "<em>Directrices de calidad</em>" en las que se refieren a prácticas ilícitas y que dan lugar a severas sanciones.</p>

                        <p>Si Google nos da una serie de normas para posicionar nuestros sitios ¿por qué algunos insisten en trucos, atajos, conocimientos "especiales" o prácticas engañosas?</p>

                        <h2 className='primary-color'>Existen 3 tipos de directrices:</h2>
                        <ul className='unordered-list'>
                            <li>Directrices de diseño y de contenido</li>
                            <li>Directrices técnicas</li>
                            <li>Directrices de calidad</li>
                        </ul>

                        <p>Indudablemente un sitio de  calidad no puede infringir directrices.</p>

                        <p>Los algoritmos de calidad del sitio de Google, están dirigidos a ayudar a las personas a encontrar los sitios "de alta calidad", estos algoritmos apoyan las directrices de Google.</p>

                        <p>Por ejemplo: actividades como repetición de palabras clave, la compra de enlaces que mejoran el PageRank o el uso de texto invisible; son actividades webspam, estas tácticas intentan que sus sitios aparezcan en los primeros resultados de búsqueda.</p>

                        <p>Esto es perjudicial para los sitios web relevantes porque quedan enterrados y se vuelven más difíciles de encontrar.</p>

                        <p>Afortunadamente los algoritmos de Google pueden detectar la gran mayoría del spam y rebajar su posición de forma automática. Para el resto, cuentan con equipos que revisan manualmente los sitios.</p>

                        <p>Si usted quiere revisar si su sitio se ve afectados por una acción manual de webspam, diríjase a Herramientas para webmasters de Google y haga clic en "Acciones Manuales" bajo "tráfico de búsqueda." Es probable que aparezca un mensaje que dice:</p>

                        <p>"No se encuentra ninguna acción contra spam web manual"</p>

                        <p>Si ve este mensaje, entonces su sitio no tiene una degradación directa por razones de spam web. Si su sitio está en la fracción muy pequeña (2%) de recibir una acción manual de spam, lo más probable es que le avisen en las Herramientas para webmasters.</p>

                        <p>Una acción de web spam manual puede aplicarse a todo el sitio o a una sección específica del sitio</p>

                        <p>Una vez que haya corregido cualquier violación de las directrices de calidad, el siguiente paso es solicitar una <Link to="https://support.google.com/webmasters/answer/35843" className='primary-color' target="_blank" rel="nofollow">reconsideración</Link>
                        .</p>

                        <h3 className='primary-color'>La lista de acciones manuales incluyen</h3>

                        <p>Enlaces no naturales a sus vínculos de sitio. (La compra de enlaces o participar en esquemas de enlaces para manipular PageRank es una violación de de Google Directrices para webmasters)</p>

                        <ul className='unordered-list'>
                            <li>Enlaces no naturales a su sitio.</li>
                            <li>Sitio hackeado</li>
                            <li>Contenido con poco o ningún valor añadido (<Link to="/blog" title="Contenido delgado" className='primary-color '>Contenido delgado</Link>
                            )</li>
                            <li>Correo no deseado</li>
                            <li><Link to="/blog" title="Paginas y dominios puerta" className='primary-color'>Paginas y dominios puerta</Link></li>
                            <li>Spam generado por el usuario</li>
                            <li>Encubrimiento y/o <Link to="/blog" title="redireccionamientos engañosos" className='primary-color'>redireccionamientos engañosos</Link>.</li>
                            <li><Link to="/blog" title="Texto oculto y/o relleno de palabras clave" className='primary-color'>Texto oculto y/o relleno de palabras clave</Link></li>
                            <li>Freehosts Spammy (“ <cite title="si una parte significativa de las páginas de los sitios alojados en un servidor son spam, podemos tomar acción manual sobre el servidor en su conjunto. Google" className='green'>si una parte significativa de las páginas de los sitios alojados en un servidor son spam, podemos tomar acción manual sobre el servidor en su conjunto. Google</cite>”.)</li>
                            <li><Link to="/blog" title="Discrepancia de imágenes" className='primary-color'>Discrepancia de imágenes</Link>
                            .</li>
                        </ul>

                        <p>Sin embargo; existen otras directrices que conviene respetar y acatar. Mi preferida es crear un sitio útil, rico en información.</p>

                        <p>El texto completo de esta directriz estable: "<cite title="Crear un sitio útil con mucha información, escribir páginas que describan con claridad y precisión el contenido" className='green'>Crear un sitio útil con mucha información, escribir páginas que describan con claridad y precisión el contenido</cite>".</p>

                        <h4>Otras directivas de Google:</h4>
                        <ul className='unordered-list'>
                            <li>Una <strong>página web</strong>debe contener un número razonable de enlaces. Lo que importa aquí, es no abrumar a los lectores del sitio con un número excesivo de enlaces. Si hay más de 100 enlaces <strong><em>probablemente </em>
                            </strong>no ésta siguiendo esta pauta.</li>
                            <li>"<cite title="Asegúrate de que tu servidor web admita la cabecera HTTP &quot;If-Modified-Since&quot;. Esta función permite que tu servidor web avise a Google si el contenido de tu sitio ha cambiado desde la última vez que lo rastreamos. El uso de esta función te permitirá ahorrar ancho de banda y reducir gastos generales" className='green'>Asegúrate de que tu servidor web admita la cabecera HTTP "If-Modified-Since". Esta función permite que tu servidor web avise a Google si el contenido de tu sitio ha cambiado desde la última vez que lo rastreamos. El uso de esta función te permitirá ahorrar ancho de banda y reducir gastos generales</cite>
                            ". Para asegurarte si tu servidor web admite la cabecera If-Modified-Since, utiliza nuestra <Link to="/utilidades" title="herramienta gratuita If Modified" className='primary-color'>herramienta gratuita If Modified</Link>
                            .</li>
                            <li><Link to="/blog" title="Crear un mapa del sitio para los usuarios" className='primary-color'>Crear un mapa del sitio para los usuarios</Link>
                            .</li>
                            <li>"<cite title="Hacer esfuerzos razonables para asegurar que la publicidad no afectan el posicionamiento en buscadores. Por ejemplo, los anuncios de AdSense de Google y DoubleClick enlaces deben estar bloqueados del rastreo de un archivo robots.txt" className='green'>Hacer esfuerzos razonables para asegurar que la publicidad no afectan el posicionamiento en buscadores. Por ejemplo, los anuncios de AdSense de Google y DoubleClick enlaces deben estar bloqueados del rastreo de un </cite><Link to="/blog" title="archivo robots.txt" className='primary-color'>
                            <cite title="Hacer esfuerzos razonables para asegurar que la publicidad no afectan el posicionamiento en buscadores. Por ejemplo, los anuncios de AdSense de Google y DoubleClick enlaces deben estar bloqueados del rastreo de un archivo robots.txt">archivo robots.txt</cite>". </Link>
                            <span>Muchos sitios web y páginas web han perdido su clasificación en Google o se han eliminado de Google por completo porque no siguieron esta pauta. </span>
                            Aprender más sobre <Link to="/blog" title="enlaces de pago y publicidad" className='primary-color'>enlaces de pago y publicidad</Link></li>
                            <li>Piense en las palabras que podrían introducir los usuarios para localizar tus páginas y asegúrate de que esas palabras están incluidas en tu sitio.</li>

                            <li>"<cite title="Intenta utilizar texto en lugar de imágenes para mostrar nombres, contenido o enlaces importantes. El rastreador de Google no reconoce el texto integrado en imágenes. Si debes utilizar imágenes para contenido textual, considera la posibilidad de utilizar el atributo &quot;ALT&quot; para incluir algunas palabras de texto descriptivo" className='green'>Intenta utilizar texto en lugar de imágenes para mostrar nombres, contenido o enlaces importantes. El rastreador de Google no reconoce el texto integrado en imágenes. Si debes utilizar imágenes para contenido textual, considera la posibilidad de utilizar el atributo "ALT" para incluir algunas palabras de texto descriptivo</cite>
                            ". Para averiguar si sus imágenes respetan esta pauta utilice nuestra <Link to="/utilidades" title="herramienta gratuita seo imagen" className='primary-color'>herramienta gratuita seo imagen</Link>
                            .</li>

                            <li>"<cite title="Asegúrate de que los elementos &lt;title&gt; y los atributos &quot;alt&quot; de tu sitio sean descriptivos y precisos" className='green'>Asegúrate de que los elementos &lt;title &gt;y los atributos "alt" de tu sitio sean descriptivos y precisos</cite>".</li>

                            <li>Busca los enlaces dañados y corrige el código HTML. </li>

                            <li>Les invito a conocer y respetar las directrices de Google y entre todos construiremos un internet rico y valioso, al tiempo que nuestros sitios estarán bien indexados y posicionados.</li>
                        </ul>

                    <p>Sobre la autora</p>

                        <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="/optimizacion-interna" className='primary-color'>&lt;Anterior</Link>
                        </li>

                        <li className='pagination-li'>
                            <Link to="/causesa" className='primary-color'>Siguiente&gt;</Link>
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

export default LasDirectories;