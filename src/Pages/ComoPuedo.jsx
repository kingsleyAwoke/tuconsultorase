import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoPuedo = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = '¿Cómo puedo saber si mi sitio está infectado? - Consultoria SEO';
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
                        <span title="¿Cómo puedo saber si mi sitio está infectado?">¿Cómo puedo saber si mi sitio está infectado?</span>
                    </div>

                    <div className="service-content-txt">

                        <img src="\images\infeccion.jpg" alt="¿Como puedo saber si mi sitio esta infectado?" title="¿Cómo puedo saber si mi sitio está infectado?" width='259' height='194' />

                        <p>Una se &ntilde;al de que su sitio o <strong>pagina web </strong>
                        puede haber sido infectado con software maligno es si su sitio muestra una advertencia en el navegador, como &quot;Este sitio puede da &ntilde;ar tu equipo &quot;o algo parecido. Una advertencia como esto significa que Google ha detectado algo sospechoso en su sitio, y puede haber sido infectado sin su conocimiento.</p>

                        <p>Google y otras compa &ntilde;&iacute;as emiten advertencias sobre sitios web comprometidos con el fin de proteger a los visitantes de su sitio. TuConsultoraSeo puede ayudarle a averiguar qu &eacute;hacer a continuaci &oacute;n y c &oacute;mo sacar su sitio de la lista negra.</p>

                        <p><strong>Otras se &ntilde;ales de que su sitio puede estar infectado</strong>
                        :</p>

                        <ul className="unordered-list">
                            <li>Usted ve extra &ntilde;os resultados de los motores de b &uacute;squeda para su sitio, como publicidad de productos farmac &eacute;uticos, ejemplo; viagra.</li>
                            <li>En herramientas para webmaster de Google puede consultar las palabras clave de contenido que no tienen que ver con el contenido de su sitio.</li>
                            <li>Los visitantes ven una advertencia de su software antivirus cuando visitan su sitio</li>
                            <li>Su sitio redirige a un dominio desconocido cuando ingresa al mismo desde su navegador, o cuando intenta acceder a &eacute;l desde los motores de b &uacute;squeda</li>
                            <li>Te das cuenta de que los permisos o archivos han sido modificados.</li>
                            <li>Usted recibe notificaciones de correo electr &oacute;nico de Google o su proveedor de alojamiento web acerca de posible malware en su sitio</li>
                            <li>Se da cuenta de que nuevos y extra &ntilde;os usuarios han sido a &ntilde;adidos.</li>
                        </ul>

                        <p><strong>&iquest;C &oacute;mo se pudo infectar mi sitio?</strong></p>

                        <p>Existen varias formas por las que la <strong>seguridad </strong>
                        de sitios se ven comprometidas, algunas son:</p>

                        <ul className="unordered-list">
                            <li>Anuncios publicitarios proporcionados por redes publicitarias. Muchas redes de anuncios de publicidad &nbsp;toman medidas oara protegerse de los anuncios infecciosos, sin embargo; este sistema no es totalmente infalible.</li>
                            <li>Los sitios tienen software obsoleto, tales coomo plugins o contrase &ntilde;as robadas o permisos inseguros.</li>
                            <li>Utilizar computadores infectados para actualizar si sitio web tambi &eacute;n puede infectar el sitio.</li>
                        </ul>

                        <p><b>Si su sitio ha sido infectado, es importante que lo coloque fuera de l &iacute;nea hasta que haya identificado y eliminado el software maligno. Si sus visitantes acceden a su sitio, mientras todav &iacute;a est &aacute;infectado, sus computadores pueden estar en peligro!</b></p>

                        <p>Usted no querr &aacute;que sus visitantes sean infectados y lo culpen a usted; asi como la reputaci &oacute;n de su sitio se vea afectada por esta causa.</p>

                        <p>Su primer paso en la limpieza es aprender a identificar y eliminar software maligno.</p>

                        <p>En TuConsultoraSeo podemos ayudarle identificar y eliminar el software maligno.</p>

                        <p>&iquest;Que te pareci &oacute;el art &iacute;culo?</p>

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

export default ComoPuedo;