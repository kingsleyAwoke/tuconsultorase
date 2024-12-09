import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ProtejaSuSition = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Proteja su sitio contra ataques de fuerza bruta - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Proteja su sitio contra ataques de fuerza bruta</span>
                    </div>

                    <div className="service-content-txt">

                        <img src="\images\ataques de fuerza bruta.jpg" alt="proteja su sitio contra ataques de fuerza bruta" width='275' height='183' />

                        <p>En el art &iacute;culo &quot;Importancia de usar un nombre de usuario y contrase &ntilde;a fuerte
                        &quot;&nbsp;refimos su relevancia en funci &oacute;n de la seguridad del sitio.</p>

                        <p><font>Su &aacute;rea de inicio de sesi &oacute;n podr &iacute;a ser atacada en este mismo momento por los robots sistem &aacute;ticamente bombardeando con miles de combinaciones de nombre de usuario y contrase &ntilde;a.&nbsp;</font>
                        He aqu &iacute;un ejercicio de 2 minutos para ver si su sitio est &aacute;experimentando ataques de &quot;Fuerza Bruta &quot;.</p>

                        <ul className='ordered-list'>
                            <li>Abra su cliente FTP y acceda a su sitio.</li>
                            <li>Navegue hasta la carpeta public_html/logs.</li>
                            <li>Descargue el archivo error.php a su escritorio</li>
                            <li>Abralo con un editor de texto</li>
                        </ul>

                        <p>&iquest;Qu &eacute;ves?&nbsp;&iquest;Ve miles de l &iacute;neas de este tipo?</p>

                        <p>26/07/2013 19:18:23 INFO 123.456.78.90 Joomla FALLA: nombre de usuario y la contrase &ntilde;a no coinciden o usted no tiene una cuenta todav &iacute;a.</p>

                        <p>Cada l &iacute;nea representa un intento fallido de acceder a su sitio.&nbsp;Usualmente vemos entre 10.000 y 40.000 intentos de conexi &oacute;n fallidos en funci &oacute;n de la popularidad y la edad del sitio.&nbsp;El sitio m &aacute;s popular confirmamos un registro de &nbsp;m &aacute;s de 100.000 entradas fallidas cada mes hasta que instalamos una extensi &oacute;n para detectar y contrarrestar los ataques de fuerza bruta. Por favor, h &aacute;ganos saber en los comentarios c &oacute;mo muchos de estos mensajes fueron encontrados en sus registros.</p>

                        <h3>&iquest;Qu &eacute;es un ataque de fuerza bruta?</h3>

                        <p>Un ataque de fuerza bruta es un m &eacute;todo de atacar un sitio web mediante el bombardeo sistem &aacute;tico de la p &aacute;gina de inicio de sesi &oacute;n con diferentes combinaciones nombre de usuario y contrase &ntilde;a.</p>

                        <p>Este m &eacute;todo de ataque de fuerza bruta a un sitio es muy com &uacute;n.&nbsp;La mayor &iacute;a de los administradores de Joomla utilizan el password predeterminado de Super Usuario de &#39;admin &#39;.&nbsp;Y, &iquest;puede usted creer que la contrase &ntilde;a m &aacute;s popular en el mundo es &#39;password &#39;?&nbsp;Seguido de combinaciones de &#39;123123 &#39;, &#39;123456 &#39;, &#39;qwerty o palabras comunes como &#39;b &eacute;isbol &#39;y &#39;mono &#39;.</p>

                        <p>Los hackers utilizan robots automatizados que est &aacute;n programados para rastrear la web en busca de la carpeta &nbsp;administrador de sitios Joomla y la carpeta &nbsp;para sitios de Wordpress.&nbsp;Una vez localizado van a trabajar presentando datos de acceso una y otra y otra vez.&nbsp;Estos scripts se ejecutan constantemente, completamente automatizado, d &iacute;a y noche.&nbsp;Cuando se produce un inicio de sesi &oacute;n exitoso el hacker recibir &aacute;una notificaci &oacute;n y es all &iacute;cuando su sitio est &aacute;en peligro.</p>

                        <p>El hecho es que, si se utiliza una conexi &oacute;n sencilla y una contrase &ntilde;a para acceder a su sitio, hay una alta probabilidad de los hackers finalmente la descubran.</p>

                        <h3>&iquest;C &oacute;mo contrarrestar los ataques de fuerza bruta en mi sitio Joomla?</h3>

                        <p>Usted puede contrarrestar esto en su sitio Joomla mediante la configuraci &oacute;n de un componente de seguridad.&nbsp;Utilice una combinaci &oacute;n de nombre de usuario y contrase &ntilde;a fuerte y cambielas regularmente y utilice una combinaci &oacute;n de min &uacute;sculas, may &uacute;sculas, n &uacute;meros, letras y s &iacute;mbolos. Esto lo explicamos en &quot;Importancia de usar un nombre de usuario y contrase &ntilde;a fuerte
                        &quot;&nbsp;as &iacute;como tambi &eacute;n explicamos en dicho art &iacute;culo que es posible crear nombres de usuarios y contrase &ntilde;as extrafuertes y f &aacute;ciles de recordar.</p>

                        <p>Si necesita ayuda para asegurar su sitio, cont &aacute;ctenos.</p>

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

export default ProtejaSuSition;