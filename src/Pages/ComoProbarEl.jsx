import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoProbarEl = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Como Probar el Archivo robots.txt - Consultoria SEO';
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
                        <span title="Como Probar el Archivo robots.txt">DComo Probar el Archivo robots.txt</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Las herramientas para webmaster de Google, conocidas ahora como la Consola de búsqueda de Google cuenta con una función que permite probar si el archivo robots.txt bloquea el acceso de los rastreadores web de Google a URL concretas del sitio debido a la<span className='primary-color'>
                            importancia del archivo robots.txt para la seguridad y el <strong>SEO.</strong></span></p>

                        <p>Puedes probar si el rastreador Googlebot-Video puede rastrear la url de un video que quieres bloquear en la búsqueda de videos de Google o si el rastreador Adsbot-Google puede rastrear la url de un anuncio que quieres bloquearle.</p>

                        <p>Estos son los <span className='primary-color'>rastreadores de Google</span>
                        :</p>

                        <p>Veamos el siguiente ejemplo: si quieres que todas tus páginas aparezcan en la Búsqueda de Google, pero no quieres que se rastreen imágenes de tu directorio images, puedes configurar el archivo robots.txt <span>del siguiente modo </span>
                        para evitar que el agente de usuario Googlebot-image rastree los archivos de tu directorio /images (pero permitir que Googlebot rastree todos los archivos):</p>

                        <pre>
                        User-agent: Googlebot <br />
                        Disallow: <br />
                        User-agent: Googlebot-Image <br />
                        Disallow: /images<br/>
                        Puedes enviar una URL al <span className="primary-color">Probador de robots.txt.</span>
                        </pre>

                        <p>Como Probar el Archivo robots.txt</p>
                        <p>1. Desde la <span className="primary-color">página de inicio de Search Console, elige el sitio cuyo archivo robots.txt quieras probar.</span></p>

                        <p>2. Despliega el título Rastreo que hay en el panel de la izquierda y selecciona la herramienta Probador de robots.txt.</p>

                        <p>3. Haz cambios en el archivo robots.txt publicado en el editor de texto.</p>

                        <p>4. Desplázate por el código del archivo <code>robots.txt</code>
                        para localizar las advertencias de sintaxis y los errores de lógica. El número de advertencias de sintaxis y de errores de lógica se muestra inmediatamente en la parte inferior del editor.</p>

                        <p>5. Escribe una extensión de la URL o la ruta en el cuadro de texto, en la parte inferior de la página.</p>

                        <p>6. Selecciona el agente de usuario que quieras simular en la lista desplegable que hay a la derecha del cuadro de texto</p>

                        <img src="\images\agentes de usuario de Google.jpg" alt="agentes de usuario de Google" title="agentes de usuario de Google" width="189" height="147" />

                        <p>7. Haz clic en el botón PROBAR que hay junto a la lista desplegable de agentes de usuario para ejecutar la simulación.</p>

                        <p>8. Comprueba si en el botón PROBAR ahora pone ACEPTADA o BLOQUEADA para averiguar si la URL que ha introducido es bloqueado y rastreadores web de Google.</p>

                        <p>Resulta muy útil probar el archivo robots.txt para todos los agentes de usuario. Muy aconsejable.</p>

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

export default ComoProbarEl;