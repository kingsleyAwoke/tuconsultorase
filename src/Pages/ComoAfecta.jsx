import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoAfecta = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Como afecta el número de página indexadas la clasificación de su sitio - Consultoria SEO';
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
                        <span title="Como afecta el número de página indexadas la clasificación de su sitio">Como afecta el número de página indexadas la clasificación de su sitio</span>
                    </div>

                    <div className="service-content-txt">

                        <img src="\images\paginas indexadas.png" alt="Como afecta el número de página indexadas la clasificación de su sitio" title="Como afecta el número de página indexadas la clasificación de su sitio" width='300' height='168' />

                        <p>Cuantas más páginas de su sitio indexen los motores de búsqueda; mejor, ya que esto ofrece más oportunidades de que su sitio web se encuentre.</p>

                        <p>Un número bajo (en relación al número total de <strong>páginas web</strong>
                            o URL de su web) probablemente indica que es necesario mejorar la arquitectura de los enlaces internos ya que esto está impidiendo que los motores de búsqueda rastreen todas las páginas de su sitio web. Quizás desee crear el mapa del sitio en formato XML de su sitio web y enviarlo a Google™. También podría construir enlaces a páginas internas de su sitio para ayudar a los bots de Google™ a rastrear e indexar sus páginas.</p>

                            <p>Entre las consecuencias de páginas no encontradas y no indexadas están:</p>

                            <ul className="unordered-list">
                                <li>Falta de visitas a páginas no indexadas</li>
                                <li>Si no es posible encontrar la página, no es posible clasificarla en los SERPs, (<strong>posicionarla</strong>
                                ) o resultados de búsqueda.</li>
                                <li>No es posible asignarle PageRank</li>
                            </ul>

                            <p>¿Por que es necesario el proceso de rastreo y la indexación?</p>

                            <p> <strong><em>¿Qué es elrastreo</em></strong>
                            </p>
                            
                            <p> El rastreo de los motores de búsqueda se refiere a los robots navegan por las <strong>páginas</strong>
                        en la <strong>web</strong>
                        . Si usted tiene un sitio recién lanzado, el robot de Google tendrá que encontrar (crawl) las <strong>páginas web</strong>
                        de su sitio para saber de su existencia en la web. Dicho esto, el trabajo del bot (robot) no termina con el rastreo. Se debe indexar las páginas también.</p> 

                        <p>
                        <strong>
                            <em>¿Qué es la indexación?</em>
                        </strong>
                        </p>

                        <p>Una vez que el bot ha encontrado una página mediante el rastreo, entonces tiene que añadir la página a la lista de otras páginas rastreadas que pertenecen a la misma categoría. Este proceso se conoce como la indexación.</p>

                        <p>No todas las direcciones URL rastreadas se indexan, y es posible que Google detecte algunas URL por otros medios, como, por ejemplo, los enlaces de entrada de otros sitios, (los llamados backlinks), de allí la importancia de enlazar sus páginas internas desde sitios de terceros.</p>
                        <p>Hay muchas maneras de saber si su sitio web ha sido rastreado e indexado por los robots de Google.</p>

                        <p>En la consola de búsqueda de Google, de ahora en adelante CBG usted puede consultar varias páginas que le ayudarán a determinar problemas de rastreo.</p>

                        <ul className="unordered-list">
                            <li>La página de estadísticas de rastreo, en la sección rastreo; proporciona información sobre la actividad de Googlebot en tu sitio durante los últimos 90 días.</li>
                            <li>En la página de estado de indexación, en la sección índice de Google; se proporcionan estadísticas sobre cuántas de tus direcciones URL Google ha podido rastrear o indexar.</li>
                            <li>Explorar como Google. La CBG<span></span>
                            permite ver una página tal como lo hace Google. Esto resulta de especial utilidad si estás solucionando problemas relacionados con el bajo rendimiento de una página en los resultados de la búsqueda, su <strong>posicionamiento</strong>
                            . Si se ha pirateado tu sitio, la herramienta Explorar como Google puede ayudarte a identificar como Google está viendo su sitio.</li>
                        </ul>

                        <p>Esta herramienta permite comprobar si el sitio se puede rastrear, permite explorar un máximo de 500 URL a la semana por cada cuenta de la CBG o  la URL y todas las páginas directamente enlazadas a ella con un límite de 10 al mes por cuenta de CBG.</p>

                        <p>
                        <strong>Consulta la página de estado de indexación:</strong>
                        </p>

                        <ol className="ordered-list">
                            <li> En la página principal de la CBG, haz clic en el sitio que quieras.</li>
                            <li>En el Panel de control, haz clic en Índice de Google y, a continuación, en <strong>Estado de indexación</strong>
                            .</li>
                        </ol>

                        <p>Esta página tiene 2 pestañas:</p>

                        <p><strong>Opción Básica: </strong>
                        que muestra el Total de páginas indexadas: el número total de URL que se encuentran actualmente en el índice de Google.</p>

                        <p>
                        <strong>Pestaña Avanzadas</strong>
                        :
                        </p>

                        <p>Nos da además de las páginas indexadas, las páginas bloqueadas por robots y las páginas eliminadas. Esta información depende de marcar o desmarcar las casillas correspondientes y clicando el botón “actualización”</p>

                        <ul className="unordered-list">
                            <li><strong>Bloqueadas por robots</strong>
                            : el total de direcciones URL que Google no puede rastrear porque no se lo permite tu archivo robots.txt.</li>
                            <li>Un aumento sustancial en el número de páginas rastreadas e indexadas indica que Google puede acceder regularmente a tu contenido y que el sitio se está indexando.</li>
                            <li>Un descenso repentino en el número de <strong>páginas web</strong>
                            indexadas, ello puede indicar que el servidor no funciona, que está sobrecargado o que Google tiene problemas para acceder al contenido.</li>
                            <li>Un gran número de páginas duplicadas puede significar que tu sitio tiene problemas con la canonización, el contenido duplicado o las páginas generadas automáticamente, o que alguien lo ha pirateado. En muchos casos, Google te mandará un mensaje cuando detecte problemas con tu sitio, así que asegúrate de definir las preferencias de notificación</li>
                        </ul>

                        <p>Toda esta información puede encontrar en la ayuda de la Consola de búsqueda de Google (CBG).</p>

                        <p>Espero que este artículo haya sido no solo de tu interés sino de utilidad para ti. ¡¡Espero lo compartas!!</p>

                        <Link to='/' className='primary-color'>Inicio</Link>

                        <div className="author-section">
                            <h4>Sobre la autora</h4>

                            <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                            <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                        </div>
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

export default ComoAfecta;