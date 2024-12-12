import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const Recursos = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Recursos bloqueados Herramientas Para Webmaster de Google - Consultoria SEO';
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
                        <span title="Recursos bloqueados Herramientas Para Webmaster de Google. Mejora tu <strong>SEO </strong>">Recursos bloqueados Herramientas Para Webmaster de Google. Mejora tu <strong>SEO </strong></span>
                    </div>

                    <div className="service-content-txt">

                        <h2>Herramientas para Webmaster de Google agrega hoy 11/03/2015, el Informe Recursos Bloqueados y actualizaciones en Obtener y Procesar de la Herramienta Explorar como Google.</h2>

                        <p>Google ha anunciado esta mañana que han puesto en marcha un nuevo informe en Herramientas para webmasters de Google llamado Informe de Recursos Bloqueados. Si las imágenes vinculadas, CSS y los archivos JavaScript en páginas web están bloqueadas, es decir; les impide ser rastreados por el robot, no podrá ver la página. En otras palabras; Googlebot no puede acceder a los archivos css y js.</p>

                        <p>Para más detalles sobre el nuevo informe de recursos bloqueados, haga clic aquí.</p>

                        <p>El informe muestra inicialmente las páginas con recursos bloqueados. A continuación, haga clic en las filas, se le dará la lista de los recursos bloqueados dentro de ese host. Al hacer clic le mostrará las páginas específicas que incluyen dichos recursos bloqueados, en última instancia un último clic le llevará a través de "los pasos para diagnosticar y resolver", dice John Mueller de Google .</p>

                        <p>Aquí está una foto del informe, tenga en mente, usted puede ir más profundo haciendo clic en el nombre del host.</p>

                        <img src="\images\recursos bloqueados en la pagina.jpg" alt="recursos bloqueados" title="recursos bloqueadoS" width="448" height="213" />

                        <p>Si el archivo robots.txt de un sitio no permite el rastreo de estos recursos, puede afectar la forma en que Google rastrea, ve e indexa la página, lo que puede afectar el ranking de la página de búsqueda de Google. Ahora mostrará como Google ve la página frente a como un usuario ve la página, uno al lado del otro.</p>

                        <p>Google ha dicho:</p>

                        <cite>Cuando usted solicita una URL debe ser obtenida y procesada, ahora muestra tanto como la ve Googlebot, como también, como la ve un usuario típico. Esto hace que sea más fácil reconocer las cuestiones que influyen significativamente en qué páginas se ven de manera diferente por Googlebot.</cite>

                        <p>Aquí está una foto de este sitio que muestran los dos al lado del otro:</p>

                        <img src="\images\obtener y procesar visto por google y usuarios.jpg" alt="obtener y procesar visto por google y usuarios.jpg" title="obtener y procesar visto por google y usuarios.jpg" width="713" height="221" />

                        <p>Artículos estrechamente relacionados para resolver el problema "<strong>Googlebot no puede acceder a los archivos CSS y JS</strong>" o recursos bloqueados:</p>

                        <p>Como probar el archivo robots.txt</p>

                        <p>Cual es la importancia del archivo robots.txt para la seguridad y el SEO</p>

                        <p>Como procesar páginas como Explorar cómo Google</p>

                        <p>Como configurar Herramientas para webmaster</p>

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

export default Recursos;