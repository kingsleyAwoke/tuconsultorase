import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const PorQueDisminuya = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Por que Disminuyen las Paginas Indexadas en Mi Sitemap.xml - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Por que Disminuyen las Paginas Indexadas en Mi Sitemap.xml</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Últimamente se nos han presentado un número de clientes que nos escriben preguntando <strong>Por que Disminuyen las Paginas Indexadas en Mi Sitemap.xml. </strong>
                            Sabemos que los motores de búsqueda recomiendan crear un sitemap.xml y enviarselos para ayudarlos a rastrear las páginas del sitio. Ud. rapídamente creó un sitemap.xml o le solicitó a un webmaster o consultor <strong>SEO</strong>
                            que lo creara y lo envió a los buscadores en herramientas para webmaster en el caso de Google o en Bing Webmaster Tool en el caso de Bing. A los días Ud. comprobó en esas útiles herramientas como sus páginas se habían indexado satisfactoriamente pero luego del paso de unos dìas se ha conseguido con algo como esto:</p>

                        <img src="\images\disminucion de paginas indexadas en sitemap.jpg" border="0" alt="disminucion de paginas indexadas en sitemap" title="disminucion de paginas indexadas en sitemap" width="354" height="361" />

                        <p>Ud. exclama ¡¡Sólo 120!!.  ¿Por qué Google me odia? ¿<strong>Por que Disminuyen las Paginas Indexadas en Mi Sitemap.xml</strong>
                        ? Las páginas indexadas en su sitemap.xml habían disminuido.</p>

                        <p>El número de URLs indexadas es casi siempre considerablemente inferior al número de URL rastreadas.</p>

                        <p>Existen varias  razones por las que  Ud. puede ver una disminución de páginas indexadas en su mapa del sitio en herramientas para webmaster de Google o en Bing Webmaster Tool:</p>

                        <img src="\images\Cuando Googlebot podra rastrear una URL o pagina web1.jpg" border="0" alt="Cuando Googlebot podría rastrear una URL o pagina web" title="Cuando Googlebot podría rastrear una URL o pagina web" width="500" height="1000" />

                        <h2>Errores o problemas por los que disminuyen las páginas indexadas en mi sitemap.xml</h2>

                        <ul className='unordered-list'>
                            <li>Por errores 404</li>
                            <li>Paginas no canónicas</li>
                            <li>Páginas poco utiles</li>
                            <li>Páginas que contienen metaetiquetas noindex</li>
                            <li>El uso de la directiva Disallow en su archivo robots.txt, es decir; bloquedas por el archivo robots.</li>
                            <li>Por el uso de redirecciones.</li>
                        </ul>

                        <p>Cuando las páginas no existen como es el caso de errores 404, la página no será indexada.</p>

                        <p>Cuando Ud, niega el acceso a la página en su archivo robots.txt, la pagina no será indexada.</p>
                        <p>El algoritmo Panda es aplicado en el proceso de indexación y si determina que su contenido no es de calidad no será indexado.</p>
                        <p>Los motores de búsqueda indexan paginas cuya respuesta HTTP sea 200 pero es importante destacar que no todas las páginas son indexadas aún y cuando puedan devolver el código de estado 200.</p>
                        <p>Si Ud. tuvo que hacer una redirección 301 o 302 de una página web que existía anteriormente (pero ahora no) a otra que ahora si existe y que habia sido indexada por los motores de búsqueda, ya el código de respuesta para la primera no será 200 OK. Si el código de respuesta es 302, redireccionamiento temporal, la página no será indexada y muy probablemente según nuestra experiencia la página que fue indexada en el pasado pero que ahora no existe será eliminada del índice.</p>
                        <p>Si una pagina web sufre un redireccionamiento 301 y la envia en Explorar como Google y su código de respuesta es 301, Ud. podrá enviarla al índice.</p>
                        <p>¿Como determinar que código de respuesta HTTP devuelve una página web?</p>
                        <p>Aqui tiene la respuesta: En herramientas para webmaster de Google, en Explorar como Google, una vez que ha colocado la URL para recuperarla, haga uso de la función Obtener y Procesar. Si en la ficha obtención la <strong>Respuesta HTTP descargada: es</strong>  HTTP/1.1 200 OK o 301 Moved Permanently, Ud. podrá enviarla al índice</p>

                        <p>¿Como determinar que código de respuesta HTTP devuelve una página web? n la ficha Procesamiento puede ver una representación correcta de la página y el estado del procesamiento es Completo, Ud. podrá enviar la URL al índice</p>

                        <p>Tambien podrá determinar el código de respuesta de una URL o página web utilizando nuestra herramienta If modified, una vez que ingrese la URL, puede obviar para el presente análisis si la pagina apoya o no If modify, lo que importa aqui son los códigos de respuesta HTTP, pruebe si desea, ingresar la siguiente URL: http://tuconsultoraseo.com/consultor-seo/obtener-cabeceras-de-una-peticion-http.html, verá que el código de respuesta es 301, o redireccionamiento permanente. Esta URL fue enviada al índice utilizando la función</p>
                        <p>Explorar como Google de herramientas para webmaster.</p>

                        <p>También puede ver si la pagina sufre un redireccionamiento permanente en nuestra herramienta comprobar redirección
                        y ver el código de respuesta HTTP.</p>

                        <p>Allí también podrá comprobar que la respuesta no sea 404.</p>

                        <p>Es altamenente recomendable que Ud. lea: </p>

                        <p>Procesar Páginas con Explorar como Google</p>

                        <p>Como Recuperarse del Efecto Google Panda</p>

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

export default PorQueDisminuya;