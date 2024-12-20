import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoQuitar = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

  //   INPUT FORM
  const [input, setInput] = useState('');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Como quitar la advertencia de malware por parte de Google - Consultoria SEO';
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
                        <span title="Como quitar la advertencia de malware por parte de Google">Como quitar la advertencia de malware por parte de Google</span>
                    </div>

                    <div className="service-content-txt">

                        <img src="\images\malware.jpg" alt="Como quitar la advertencia de malware por parte de Google" title="Como quitar la advertencia de malware por parte de Google" width='300' height='168' />

                        <p>Google ahora advierte a los usuarios cuando detecta malware en un sitio  o <strong>pagina web</strong>
                        con el ominoso mensaje "Este sitio puede dañar tu equipo". Muy pocas personas se atreven a ir a un sitio luego de esta advertencia. Por lo tanto, si su sitio ha sido <strong>señalado </strong>
                        con este mensaje de advertencia, usted lo debe considerar como prueba convincente de que su sitio ha sido hackeado y es necesario tomar medidas inmediatas.</p>

                        <p>Como digo, pocos usuarios visitan un sitio que se caracteriza por ser peligroso, por lo que no pueden simplemente esperar que el problema va a desaparecer por sí solo. ¡No creo que ningún problema desaparezca solo! Para quitar la advertencia, primero tiene que limpiar su sitio. Esto es de hecho, una exigencia, no un consejo seo, es por su <strong>seguridad </strong>
                        y la de sus visitantes, si su sitio se encuentra en esta situación, ninguno de sus esfuerzos de optimización de motores de búsqueda le ayudará a recuperar su tráfico. Este artículo contiene mis recomendaciones para recuperar un sitio hackeado.</p>

                        <p><strong>Eliminación de malware</strong>: ¿Qué hacer cuando se ha hackeado tu sitio?</p>

                        <p>Como ya he dicho, si Google ha marcado su sitio, es una certeza de que su sitio ha sido hackeado. Es decir, hay archivos de su Web que han sido modificados para incluir software malicioso llamado "malware". Sin embargo, muchos webmasters tienen poca experiencia en tratar con este nivel de problemas de <strong>seguridad</strong>
                        , por lo que esta información está destinada únicamente a ser una guía útil, orientadora, para los webmasters inexpertos y diseñadores de sitiosweb para hacer frente a malware y hackers.</p>

                        <p>Comience por hacer un análisis de virus completo de la computadora que utiliza para crear su sitio web. Es muy importante asegurarse de que usted ha eliminado los virus en el computador y que el cyberdelincuente pudiera utilizar para alterar los archivos de su sitio web o para robar su cuenta FTP nombre de usuario y contraseña. Estoy asegura que su equipo no sólo no puede volver a infectar a su sitio web una vez que lo haya limpiado. La mayoría de la gente utiliza el software anti-virus como una cuestión de rutina, por lo que es importante complementar esta protección con un software que no se utiliza de forma regular para asegurarse de que no haya infecciones que  hayan logrado superar su software anti-virus que utiliza rutinariamente.</p>

                        <p>Hay varios buenos programas gratuitos anti-virus o de escaneo de malware disponibles en línea. Recomiendo Spybot: Search &amp;Destroy o Malwarebytes Anti-Malware. Cualquiera de los dos va a hacer un escaneo de su computador y se eliminarán todos los archivos sospechosos.</p>

                        <p><strong>Cambie las contraseñas de todas las cuentas de FTP para el sitio we</strong>
                        b. Los hackers están consiguiendo cada vez más acceso a la información de las cuenta FTP - nombre de usuario y contraseña - para difundir sus infecciones. La modificación de la contraseña de manera frecuente es también una buena práctica de <strong>seguridad</strong>
                        en cualquier caso. Las credenciales de acceso robadas se están convirtiendo en los métodos más comunes para acceder a otros sitios web, por lo que necesita asegurarse de que sólo los usuarios autorizados tienen acceso FTP a su sitio web.</p>

                        <p>La manera más común de los cyberdelincuentes hacerse con los datos de accesso es utilizando robots automatizados que rastrean la web en busca de la carpeta administrador en cibersitios joomla y la carpeta wp-admin para websites Wordpress. Una vez ubicados van a presentar datos de acceso una y otra vez. Estos programas se ejecutan constantemente, en automático, de día y de noche. Cuando se produce un inicio de sesión satisfactorio, el hacker recibira una notificación y su sitio está en peligro. Este método recibe el nombre de <strong>ataques de fuerza bruta</strong>
                        .</p>

                        <p>Usted puede hace la siguiente prueba:</p>

                        <ol className="ordered-list">
                            <li>Abra su cliente FTP y acceda a su sitio.</li>
                            <li>Navegue hasta /public_html/logs</li>
                            <li>Descargue el archivo error.php</li>
                            <li>Abralo con un editor de texto.</li>
                        </ol>

                        <p>¿Qué ves? ?Ve miles de líneas de este tipo?</p>

                        <p>2013-11-24T12:51:32+00:00  INFO  joomlafailure  Usuario no existe</p>
                        <p>2013-10-20T14:49:50+00:00  INFO  joomlafailure  Usuario no existe</p>

                        <p>De lo anterior se desprende la importancia de usar un nombre de suario y contraseña fuerte.</p>

                        <p><strong>Elimine todos los archivos del servidor.</strong> La mejor manera de eliminar una infección es limpiar el servidor, porque los hackers suelen añadir archivos a un sitio para re-infectar a las páginas o abren una puerta trasera en el sitio para que ellos puedan recuperar el acceso. Los únicos archivos que puede dejar con relativa <strong>seguridad </strong>
                        son los archivos de base de datos MySQL, ya que estan casi siempre en un servidor independiente y rara vez son una fuente de malware. Pero si usted tiene las últimas copias de <strong>seguridad </strong>
                        de sus archivos de datos de MySQL, usted debe considerar seriamente la posibilidad de restaurar también los archivos de base de datos en el servidor de copias de respaldo. Si no ha guardado copias de <strong>seguridad </strong>
                        de sus archivos, a menudo se pueden encontrar copias recientes disponibles en línea a través de websites de archivado como Wayback Machine. Usted no podrá encontrar la totalidad de su contenido original, pero usted debería ser capaz de encontrar una buena parte de él.</p>

                        <p>Usted puede <strong>restaurar </strong>
                        los archivos de su sitio web desde sus <strong>copias de seguridad locales</strong>
                        . Compruebe la advertencia de malware de Google para ver qué páginas han marcado como sospechoso, y manualmente compruebe que los archivos de sus copias locales están limpios. Es también una buena práctica comprobar la fecha de última modificación de los archivos locales. Si todo está bien, usted puede seguir adelante y restaurar el sitio y subir los archivos.</p>

                        <p>Debe actualizar todo; blog, foro, galería, CMS, plug-ins, y el resto de los scripts que se utilizan en su sitio web a la última versión. La mayoría de los hackers accedan a websites mediante los llamados "huecos" o vulnerabilidades conocidas en las versiones anteriores de software. Usted debe mantenerse atento las nuevas actualizaciones disponibles e instalar lo antes posible, ya que en ellas suelen corregirse dichas vulnerabilidades. Una vez que haya actualizado los scripts en su sitio web, asegúrese de actualizar su copia local.</p>

                        <p>Es muy recomendable presentar una solicitud de revisión de malware a través de las Herramientas para webmasters de Google. Google periódicamente vuelve a analizar un sitio para ver si el problema ha sido reparado, por supuesto, pero eso puede tardar bastante tiempo. La presentación de una solicitud de revisión le permitiría el examen del sitio mucho antes y por lo general obtener la eliminación de advertencia de malware  dentro de unos pocos días (a menudo antes, pero no hay garantías).</p>

                        <p>También es recomendable solicitar una revisión a StopBadware.</p>

                        <p>Es decir Ud. puede solicitar una revisión a traves de herramientas para webmaster de Google si su sitio se encuentra en su lista negra o a traves de StopBadware.</p>

                        <p>En resumen,<strong>los pasos clave para la eliminación de la advertencia de malware  de Google </strong>
                        son los siguientes:</p>

                        <ol className="ordered-list">
                            <li>Quitar el malware de tu sitio web,</li>
                            <li>Cierre o resuelva todos los agujeros en la <strong>seguridad</strong>
                            de su sitio, y</li>
                            <li>Presente una Solicitud de Revisión. Si usted sigue estos pasos y todavía tiene problemas, puede obtener más ayuda visitando el foro de ayuda para webmasters de Google donde hay personas que examinarán su sitio y le sugerirán recomendaciones.</li>
                        </ol>

                        <p>Siempre puede comprobar si su sitio está marcado con advertencias de malware por Google, verifiquelo en este formulario:</p>

                        <form action="">
                            <input type="text" placeholder='http://' size='80' value={input} onChange={ (e) => setInput(e.target.value) } /> <br />
                            <input type="submit" value="Examinar esta url" />
                        </form>

                        <p><strong>Lista de prevención de Malware  de su sitio web</strong>
                        :</p>

                        <p>Usted también debe efectuar las siguientes tareas como parte de su programa de mantenimiento para garantizar la <strong>seguridad</strong>
                        continua de su sitio web:</p>

                        <ul className="unordered-list">
                            <li>Haga copias de <strong>seguridad </strong>
                            completas de los archivos del sitio web y los archivos de base de datos al menos una vez al mes.</li>
                            <li>Busque actualizaciones para todos los scripts que su sitio web utiliza, al menos cada dos semanas.</li>
                            <li>Ejecutar análisis antivirus completo de su equipo con al menos dos programas antivirus diferentes una vez al mes.</li>
                            <li>Compruebe la herramienta de diagnóstico de navegación segura de Google por lo menos una vez al mes y siempre que el tráfico de su sitio toma un giro inusual.</li>
                            <li>Cambiar la contraseña de su cuenta FTP al menos dos veces al año. Y no use la misma contraseña que utiliza en cualquier otro lugar.</li>
                            <li>Analice los archivos de registro del servidor con frecuencia, inusuales errores 404 que pueden indicar que alguien está sondeando su sitio en busca de fallos de <strong>seguridad</strong>
                            . Entonces prohiba las direcciones IP de todos los usuarios sospechosos en su archivo htaccess. Si desea puede leer el artículo .htaccess en joomla.</li>
                        </ul>

                        <p>Estos pasos le ayudarán a reducir el riesgo de que su sitio web sea hackeado, y también reducirá el riesgo de perder información importante si su sitio ha sido hackeado a pesar de sus esfuerzos. Es también una buena idea inscribirse en el reenvío de mensajes de las Herramientas para webmasters de Google para que las advertencias de malware se envían automáticamente a una dirección de correo electrónico que usted especifique. De esta forma, se le notificará inmediatamente si Google detecta algún problema con su sitio web.</p>

                        <p>Si necesita ayuda más allá de esta información, no dude y v</p>

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

export default ComoQuitar;