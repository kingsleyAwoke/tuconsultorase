import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const PorqueMiSitio = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Porque Mi Sitio No Aparece en los Resultados de Búsqueda - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Porque Mi Sitio No Aparece en los Resultados de Búsqueda</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Los principales buscadores a los que me voy a referir en el presente artículo son Google, Yahoo y Bing, cada uno de ellos tiene sus propias directrices, las cuales comparten en su mayoría ya que todos ellos persiguen el mismo objetivo: devolver resultados altamente pertinentes para cada consulta que realizan los usuarios, lo que cambia entre ellos es lo optimizados que están sus algoritmos de clasificación. Para la mayoría de estos buscadores, los resultados de búsqueda son devueltos de su  índice de búsqueda. El índice de los buscadores está en constante evolución, ellos añaden nuevo y actualizado contenido de la web. El contenido cambiante, así como las actualizaciones de sus algoritmos de clasificación, pueden causar que las URLs cambien de posición en los resultados de búsqueda, y posiblemente, aunque menos probable, sea eliminado.</p>

                        <p>Si Ud. no ha dado de alta su sitioweb en estos buscadores, ellos pueden haberlo indexado a través de enlaces desde otros cibersitios, bien porque Ud. mismo los creó allí o porque el contenido de sus artículos o <strong>páginas web</strong> son lo suficientemente atractivos, útiles y ricos que fueron enlazados por los propietarios de esos sitioswebs, ahora; si no existen enlaces desde webs de terceros al suyo y Ud. no dió de alta su website en ellos es probable que no esté indexado en estos buscadores, de allí la importancia de dar de alta su cibersitio en los principales buscadores y así obtener visitas de cada uno de ellos lo que es una manera de mejorar el volumen de visitas al website.</p>

                        <p>El primer paso sería entonces dar de alta su website en ellos:</p>

                        <p>Es importante destacar que al momento de escribir el presente artículo los resultados de búsqueda de Yahoo Search son gestionados por Bing. Si quieres que se incluya tu sitioweb, Envía tu web a Yahoo Search, luego de enviar la URL de tu sitioweb podrás registrarte en las Herramientas para administradores de web de Bing.</p>

                        <p>Enviar una URL al índice de Google</p>

                        <p>Para utilizar Herramientas para Webmaster de Google solo debes tener un cuenta gmail e iniciar sesion con ella.</p>

                        <p>Si su sitio no aparece en los resultados de búsqueda o se está desempeñando mal; Ud. debería verificar si ha sido indexado por los distintos buscadores.</p>

                        <h2>Métodos para comprobar que su website ha sido indexado por buscadores</h2>

                        <p>En el caso de Yahoo puedes comprobarlo visitando Yahoo Search;"Yahoo Search, allí empieza por escribir una oración que coincida con el título o descripción de la página. Lo mismo puede hacer con Google y Bing.</p>

                        <h3>Compruebe su website realizando una consulta en el buscador</h3>

                        <p>Haga una búsqueda en Google 
                        con [sudominio].com. Si su cibersitio no aparece en los resultados, o si ocupa una mala posición en los resultados, esto es una señal de que su website puede tener una acción manual contra spam por violaciónes de las directrices para webmasters. Si ellos encuentran algunos problemas con su site pueden hacérselo saber saber a través de Mensajes del Sitio o Problemas de Seguridad de su Herramientas para Webmaster de Google.También debe revisar si su sitioweb cumple las directrices para webmasters.  Una vez que esté seguro de que todos los problemas se han abordado, presentar una solicitud de reconsideración.</p>

                        <p>En el caso de Yahoo si buscas a través de la dirección URL del sitioweb, no siempre sabrás si el sitio se ha indexado.</p>

                        <h3>Operador Site</h3>

                        <p>No importa el buscador, si se trata de Google o Bing, introduce una búsqueda que contenga la palabra "site:" (sin comillas) delante del sitioweb sin espacio en blanco despúes de site. Por ejemplo: site:tuconsultoraseo.com. Si su site se muestra como resultado al realizar una búsqueda para su URL, entonces está incluido en sus respectivos índices Sin embargo, si su cibersitio anteriormente era mostrado utilizando este operador y ya no aparece, seguramente no está indexado, puede que haya sido retirado por violaciones a sus respectivas directrices para webmasters o que haya sido objeto de ataques de malware. Lea por favor <span className='primary-color'>Como Quitar la Advertencia de Malware por parte de Google </span>
                            o quizá su sebsite sufrió la acción de malos enlaces, al respecto de éste último lea ¿Se Deben Monitorear los Backlinks?Enlaces Negativos: Como Afectan su Sitio y su Marca. Revise las pautas de cada buscador y luego, una vez que haya solucionado cualquier problema, envíe una solicitud de reconsideración a cada buscador en el que desea que su sitio- web aparezca.</p>

                            <p className="primary-color">Solicitud de desautorización de enlaces de Google</p>

                            <p className="primary-color">Desvincular vínculos de Bing</p>

                            <p>Para ayudarles a indexar su web Ud. debería enviarles un sitemap. Para enviar un sitemap a estos buscadores Ud. deberia previamente crear una cuenta en cada uno de ellos. En Herramientas para webmaster de Google, tiene la opción de envio de sitemap, igualmente en la Herramienta de Webmaster de Bing.</p>

                            <p>El siguiente enlace le permitirá crear una cuenta en <span className="primary-color">Bing Webmaster Tools.</span></p>

                            <p>En el caso de Herramientas para Webmaster de Google puede leer <span className='primary-color'>Como Configurar Herramientas para Webmaster de Google</span>
                            .</p>

                            <p>Otro método para a indexar su sitio-web consiste en solicitar a los buscadores el rastreo de URLs de su sitio para luego ser indexado:</p>

                            <p>En el caso de Bing puede utilizar la opción de Recuperar como Bingbot en herramienta para webmaster de Bing y en el caso de Google puede usar Explorar como Google en Herramienta para Webmaster de Google, Lea <span className='primary-color'>Procesar Páginas con Explorar como Google</span>
                            , recuerde que Ud. debe previamente tener una cuenta para cada herramienta y haber incluido su sitioweb.</p>

                            <p>Si su site está bien enlazado con los otros en la web, lo más probable es que sea añadido durante el próximo rastreo. Los buscadores no se pueden garantizar que todas las páginas aparezcan constantemente en sus índices o que aparezcan con un rango o clasificación concreta, las directrices para webmasters de cada buscador dan consejos muy útiles para mantener un cibersitio fácil de rastrear por ellos. Siguiendo estas recomendaciones debería aumentar la probabilidad de que su sitioweb se muestre constantemente en los resultados de búsqueda.</p>

                            <h4>Otros aspectos para comprobar y corregir las posibles causas del problema:</h4>

                            <ul className="unordered-list">
                                <li><b>Avisele a Google sobre nuevo contenido</b></li>
                            </ul>

                            <h3>Si su sitio es muy nuevo, es posible que no sabemos de ella todavía. <span className="primary-color">Dile a Google sobre su sitioweb.</span></h3>

                            <ul className="primary-color">
                                <li><b>Asegúrese de que Google puede encontrar y rastrear su sitioweb</b></li>
                            </ul>

                            <p>El rastreo es cómo Googlebot descubre páginas nuevas y actualizadas que se añadirán al índice de Google. Su proceso de rastreo comienza con una lista de direcciones URL de páginas web, generadas a partir de los procesos de rastreo anterior, y aumentada con los datos de sitemaps del sitioweb proporcionadas por los webmasters. Como visita Googlebot cada uno de estos cibersitios, detecta enlaces en cada página y los agrega a su lista de páginas para rastrear. Los nuevos sitios, los cambios en los sitiosweb existentes y enlaces muertos se observan y se utilizan para actualizar el índice de Google.</p>

                            <ul className="unordered-list">
                                <li>Compruebe si hay <span className="primary-color">errores de rastreo</span></li>
                                <li>La página <strong>Errores de rastreo</strong>
                                en las Herramientas para webmasters de Google proporciona detalles sobre las URL de su sitioweb que intentan rastrear y no podían acceder. Revise estos errores, y corregir cualquier puedas. La próxima vez que Googlebot rastrea su site, se dará cuenta de los cambios y los utilizan para actualizar el índice de Google.</li>
                                <li>Revise su archivo robots.txt. La <span className="primary-color">herramienta de prueba de robots.txt</span> permite analizar el archivo robots.txt para ver si está bloqueando Googlebot cualquier URL o directorios en su web.</li>
                                <li>Asegúrese de que las URLs no han sido <span className="primary-color">bloqueados con etiquetas meta</span>.</li>

                                <li>Revise la estructura del sitioweb y <span className='primary-color'>asegúrese de que es de fácil acceso</span>
                                . La mayoría de los motores de búsqueda están basadas en texto. Si utiliza JavaScript, DHTML, imágenes o multimedia como Silverlight para crear la navegación y enlaces, el robot de Google y otras arañas pueden tener problemas para rastrearlo.</li>
                                <li>Si ha reestructurado recientemente su site o trasladado a un nuevo dominio, las páginas que previamente tuvieron un buen desempeño pueden ahora clasificar mal. Para evitar esto, utilice 301 redirecciones ("RedirectPermanent") en su archivo .htaccess para redireccionar elegantemente usuarios, Googlebot y otras arañas. (En Apache, puede hacer esto con un archivo .htaccess;. En IIS, puede hacerlo a través de la consola administrativa) Para obtener más información acerca de 301 redirecciones HTTP, consulte <span className="primary-color">http://www.ietf.org/rfc/rfc2616 .txt.</span></li>
                            </ul>

                            <h3>Asegúrese de Google índexa su sitioweb</h3>

                            <ul className="unordered-list">
                                <li>Compruebe su cibersitio en <span className="primary-color">las estadísticas de índicelas estadísticas de índice. Estas estadísticas muestran cómo está representado en el índice de Google.</span></li>
                                <li>Revise la estructura de su website. Lea <span className="primary-color">Importancia de la Estructura de Navegación Asegurarse de que su contenido está basado en texto legible y.</span>ayuda a que sea más accesible a los seres humanos y para el robot de Google ayuda a que sea más accesible a los seres humanos y para el robot de Google.</li>
                            </ul>
                            
                            <h3>Asegúrese de que su contenido es relevante y útil</h3>

                            <ul className="unordered-list">
                                <li>Entender cómo los usuarios están llegando a su sitioweb mediante la revisión de la página de <span className='primary-color'>consultas de búsqueda Evite el relleno de palabras clave</span>, sin embargo, porque esto puede hacer que su ranking pueda sufrir una sanción, además de degradar la experiencia de usuario para sus lectores.</li>
                                <li>Comprender cómo Google ve su website. La página de <span className="primary-color">Contenido Palabras clave</span> muestra las palabras clave y frases que utilizan otros cibersitios cuando se enlazan con el suyo. La comprensión de cómo otras personas ven su web puede ayudar a determinar la mejor forma de llegar a su audiencia.</li>
                                <li>Los enlaces entrantes a su sitio de Google ayudan a determinar la relevancia y pertinencia de su website para la consulta del usuario. Los enlaces naturales a su sitio se desarrollan como parte de la naturaleza dinámica de la web y se crean cuando otros sitios encontran su contenido valioso y piensan que sería útil para sus visitantes.</li>
                                <li>Lea Diagnostique la <span className="primary-color">Calidad de su Contenido en Línea</span></li>
                            </ul>

                        <Link to='/' className='primary-color'>Inicio</Link>

                        <div className="author-section">
                            <h4>Sobre la autora</h4>

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

export default PorqueMiSitio;