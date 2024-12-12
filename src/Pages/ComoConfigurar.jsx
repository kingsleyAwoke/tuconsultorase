import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoConfigurar = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Como Configurar Herramientas para Webmasters de Google - Consultoria SEO';
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
                        <span title="Como Configurar Herramientas para Webmasters de Google">Como Configurar Herramientas para Webmasters de Google</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Los propietarios de websites deben pensar en como mejorar el <strong>SEO </strong>
                        y una de las primeras acciones que deben tomar es presentar el sitio a la <strong>Consola de búsqueda de Google </strong>
                        anteriormente conocida como herramientas para webmasters de Google. La razón de esto es que Google tiene sólo dos formas de encontrar su sito en línea: 1. mediante un vínculo de otro cibersitio al suyo y 2. presentarlo a Google directamente. Esto ayuda activamente a mejorar el <strong>SEO </strong>
                        del website.</p>

                        <p>Como la primera opción no siempre es viable o directamente alcanzable, es importante que presente su sitio a las herramientas para webmasters de Google, de ahora en adelante HWG. Lo que sigue es una explicación detallada de como configurar la <strong>Consola de búsqueda de Google</strong>
                        . Conoce la <strong>Consola de búsqueda de Google</strong>
                        y las formas de verificar tu página web a través de ellas. Activa la opción "ver con alta calidad" justo debajo del video para una mejor visualización</p>

                        <iframe src="https://web.archive.org/web/20160315090715if_/https://www.youtube.com/embed/IA_QY9KmjnE" frameborder="0" width="450" height="335"></iframe>

                        <ol className='ordered-list'>
                            <li>Inicie sesión en HWG https://www.google.com/webmasters/tools
                                . Usted necesita una cuenta de Google para realizar esta acción. Si no la tiene proceda a crearla.
                            </li>
                            <li>Cuando hayas iniciado sesión, haz clic en "Añadir un sitio".</li>
                            <li>
                            Utiliza una de las siguientes opciones para verificar que eres el propietario del website:
                                <ol className="ordered-list" type='a'>
                                    <li>Sube un archivo al servidor</li>
                                    <li>Añade una metaetiqueta al código HTML del sitioweb.</li>
                                    <li>Anade unnuevo registro de DNS</li>
                                    <li>Usa tu cuenta de Google Analytics o de Administrador de etiquetas de Google</li>
                                </ol>
                            </li>
                        </ol>

                        <p>La verificación del sitio es la manera de demostrar que usted está autorizado para accesar Google y editar el website en cuestión. La manera más fácil es subiendo un archivo al servidor o añadiendo una metaetiqueta al código HTML de su sitioweb.</p>

                        <h2>Cómo elegir un método de verificación.</h2>

                        <p>En el siguiente video, Maile Ohye de Google, nos explica cómo hacerlo. Recuerde que puede traducir los subtítulos.</p>

                        <iframe src="https://web.archive.org/web/20160315090715if_/https://www.youtube.com/embed/wBAccFPnoeg" frameborder="0" width="560" height="315"></iframe>

                        <p>Debido a la importancia que tiene la privacidad para Google, y para los propietarios de webs, ellos deben asegurarse de que seas el propietario de un cibersitio antes de mostrarte cierta información sobre el mismo o dejar que uses sus herramientas. El hecho de verificar que eres el propietario de un website no afecta su rendimiento en los resultados de búsqueda de Google.</p>

                        <h3>Cómo verificar la propiedad del sitioweb</h3>

                        <p>Tienes varias opciones para verificar que eres el propietario de un website:</p>

                        <ul className="unordered-list">
                            <li>Añadir una metaetiqueta a la página principal (que demuestre que tienes acceso a los archivos originales). Para utilizar este método, debes poder editar el código HTML de las páginas de tu sitio-web.</li>
                            <li>Subir un archivo HTML con el nombre que hayas especificado para tu servidor. Para utilizar este método, debes poder subir archivos nuevos al servidor.</li>
                            <li>Verificar mediante el proveedor de nombres de dominio. Para utilizar este método, debes poder acceder al proveedor de alojamiento o del nombre de tu dominio (como GoDaddy.com o networksolutions.com) y añadir un nuevo registro de DNS.</li>
                            <li>Añadir el código de Google Analytics</li>
                            <li>que utilizas para realizar un seguimiento de tu sitio-web. Para utilizar esta opción, debes ser administrador de la cuenta de Google Analytics, y el código de seguimiento debe utilizar el nuevo fragmento asincrónico.</li>
                        </ul>

                        <p>HWG comprueba que la etiqueta, el archivo, el registro o el código especificados estén presentes. Si lo están, te consideran propietario del sitio y te mostrarán información detallada sobre el mismo.</p>

                        <p>Puede leer más acerca de Cómo elegir un método de verificación.</p>

                        <p>Una vez que el website está verificado puedes ver mucha información:</p>

                        <ul className="unordered-list">
                            <li>Consultas de búsqueda: Muestran las consultas de búsqueda web de Google que han ofrecido como resultado <strong>páginas web</strong>
                            de tu cibersitio. Estas son las palabras clave con las cuales se han impreso URLs de su web, los clics que han generado visitas al sitio-web y su CTR. El CTR es el porcentaje de clics. El cálculo de CTR son los clics X 100 dividido entre las impresiones. Lea Cómo Aumentar la Tasa de CTR
                            . En páginas principales puede ver las páginas que se han visto con mayor frecuencia en los resultados de búsqueda. De forma predeterminada, se muestran los datos de los últimos 30 días, pero puedes definir el intervalo de fechas del informe con los selectores de fecha que se encuentran sobre el gráfico.</li>
                            <li>En el siguiente video, Alexi explica las consultas de búsqueda:</li>
                        </ul>

                        <iframe src="https://web.archive.org/web/20160315090715if_/https://www.youtube.com/embed/Vmb_gO3Q_HM" frameborder="0" width="560" height="315"></iframe>

                        <p>Una vez que ha verificado la propiedad del website en la Consola de búsqueda de Google, el siguiente paso es definir la versión preferida del dominio, en ocasiones se hace referencia a él como el "dominio canónico". Esto evita que Google considere ambas versiones como contenido duplicado. El dominio preferido es la versión que quieres que se use para tu web en los resultados de búsqueda. Si desea que los visitantes vean o no la www. en la dirección. Eres libre de elegir la versión que quieras.</p>

                        <p>Para definir la versión preferida del sitioweb en la Consola de búsqueda de Google, debes hacer clic en el icono de rueda dentada, a la derecha y seleccionar configuración del sitio, tal como se muestra en la siguiente imagen:</p>

                        <img src="\images\versin preferida del sitio en herramientas para webmaster de Google.jpg" alt="Como establecer la version preferida del sitioweb en herramientas para webmaster de Google" title="Como establecer la version preferida del sitioweb en herramientas para webmaster de Google" width='600' height='123' />

                        <p>Luego se debe hacer la redirección 301 para dirigir a los usuarios a la versión preferida.</p>

                        <p>Google prefiere el direccionamiento 301 porque es un redireccionamiento permanente, por lo que señala a aplicaciones como motores de búsqueda, para transferir todas las propiedades de indexación de la página origen a la destino.</p>

                        <p>Este redireccionamiento a la versión de dominio preferida puede configurarlo en el archivo .htaccess ubicado en la raíz de su sitio-web, del siguiente modo:</p>

                        <h4>Redireccionar www a sin www</h4>
                        <ol className="ordered-list">
                            <li>RewriteCond %&#123;HTTP_HOST&#125; www.tuconsultoraseo.com [NC]</li>
                            <li>RewriteRule ^(.*)$ http://tuconsultoraseo.com/$1 [L,R=301]</li>
                        </ol>

                        <h4>Redireccionar www a sin www</h4>
                        <ol className="ordered-list">
                            <li>RewriteCond %&#123;HTTP_HOST&#125; www.tuconsultoraseo.com [NC]</li>
                            <li>RewriteRule ^(.*)$ http://tuconsultoraseo.com/$1 [L,R=301]</li>
                        </ol>

                        <p>Tenemos una herramienta <strong>SEO</strong>
                        muy útil para comprobar el redireccionamiento
                        de su website.</p>

                        <p>No es recomendable modificar la frecuencia de rastreo. Google cuenta con algoritmos sofisticados para determinar con qué frecuencia debe rastrear cada sitioweb. La frecuencia de rastreo se refiere a el tiempo que el robot de Google usa para rastrear el sitio. Si quieres que Google rastree el contenido nuevo o actualizado de tu web, usa Explorar como Google</p>

                        <p>También es aconsejable que realices una comprobación en segundo plano de tu dominio, por ejemplo; si antes era propiedad de spammers, no tendrás una posición muy alta en los resultados de las consultas de búsqueda. Una excelente manera de comprobarlo es consultar las palabras clave de tu sitioweb en la Consola de búsqueda de Google y ver si aparecen palabras no deseadas. También puedes comprobar si estás indexado realizando una búsqueda "site:tudominio". Si ves cualquier problema las directrices para webmaster pueden ayudarte a determinarlo.</p>

                        <p>Una funcionalidad muy útil y que merece destacarse es Explorar como Google, ya que tu le proporcionas una URL y ella realiza el rastreo como Googlebot, de éste modo se puede saber si se ha redireccionado correctamente y que contenido se descarga. No sólo le dice a Google que URL debe rastrear, sino también que debe indexar de la URL que se le proporciona. De este modo cada vez que se actualice una página o se cree una completamente nueva, puedes hacer que Google inicie todo el proceso y que ese contenido esté a disposición de los usuarios que lo buscan más rápido. Puede conocer más acerca de esta funcionalidad leyendo Procesar páginas con explorar como Google</p>

                        <p>Un consejo que deberías tomar en cuenta es incluir el código de Google Analytics o de otro proveedor, para que empieces a recopilar datos sobre las visitas que se producen en su cibersitio, aunque no lo entiendas bien ya, que en un futuro si contratas a alguien podrá contar con información histórica del mismo.</p>

                        <p>El siguiente paso es activar el reenvio de correos electrónicos que permite a Google avisarte cuando tiene un mensaje para ti, por ejemplo cuando ellos piensan que han pirateado tu sitioweb o que hay software malicioso alojado en él o cuando han encontrado muchas URLs no accesibles o cuando tienen problemas para rastrear tu sitioweb. Estos mensajes pueden reeviarse a HWG, por lo que debes tener activado el reenvio de correos para que puedan enviarse directamente a tu bandeja de entrada.</p>

                        <p>Esta activación del correo electrónico se hace en el mismo icono de rueda dentada y seleccionando Preferencias de Herramientas para Webmasters de Google. Solo deberás habilitar las notificaciones por correo electrónico (normalmente no recibirás más de un mensaje al día) y seleccionar el correo electrónico de tu preferencia.</p>

                        <p>Es importante Enviar un sitemap para que los motores de búsqueda rastreen y categoricen mejor tu sitioweb. Te recomiendo el artículo Porque usar Sitemap.</p>

                        <p>Configura la segmentación por país:</p>

                        <p>Si tu site tiene un dominio de nivel superior con un código de país, como .ve, ya estará asociado a una región geográfica (en este caso, Venezuela).</p>

                        <ol className='ordered-list'>
                            <li>En la sección de segmentación internacional, selecciona la pestaña <strong>País.</strong></li>
                            <li>Marca la casilla <strong>Segmentación geográfica</strong> y selecciona el país de segmentación. Si quieres asegurarte de que tu sitio no se asocie a un país o región concretas, selecciona <strong>Ninguno </strong>
                            en la lista desplegable.</li>
                        </ol>

                        <p>Espero que el contenido te haya resultado útil y te agredezco tus comentarios. ¡Gracias!</p>

                        <p>Recuerda incluir palabras clave en el contenido de tu website. Es fundamental para que comprendas este punto que leas cual es la Importancia de Palabas Clave de Contenido para SEO.</p>

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

export default ComoConfigurar;