import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const Procedimientos = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Procedimientos de Seguridad Recomendados - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Procedimientos de Seguridad Recomendados</span>
                    </div>

                    <div className="service-content-txt">

                        <img src="\images\security.jpg" alt="Procedimientos de seguridad recomendados por tuconsultoraseo" height='255' width= '255' title="Procedimientos de seguridad recomendados" />

                        <p>Un atacante puede falsificar una solicitud para entrar a la <strong>pagina web</strong>
                            destino de la victima, utilizando las credenciales del atacante; esto se conoce como inicio de sesi &oacute;n <strong>CSRF </strong>
                            (Cross Site Request Forgery) o <strong>Falsificaci &oacute;n por &nbsp;</strong> Petici &oacute;n en sitios cruzados. M &aacute;s tarde el atacante puede iniciar sesi &oacute;n en el sitio con leg &iacute;timas credenciales y ver informaci &oacute;n privada o modificarla. Otra forma de entender CSRF es un ataque que obliga a un usuario a ejecutar acciones no deseadas en una aplicaci &oacute;n web en la que est &aacute;autenticado actualmente.</p>

                            <p>Si bien los siguientes m &eacute;todos le ayudan a prevenir ataques a su sitio, es importante darse cuenta que a medida que un administrador del sistema realice buenas pr &aacute;cticas de <strong>seguridad</strong>
                            , impidir &aacute;que la <strong>seguridad</strong>
                            del sitio se vea comprometida.</p>

                            <p>Medidas de administradores de sitios:</p>

                            <ol className='ordered-list'>
                                <li>No navegue por otros sitios en el mismo navegador, mientras est &aacute;conectado a su sitio.</li>
                                <li>Evite el uso de la caracter &iacute;stica &quot;recuerdame &quot;o &quot;rememberme &quot;en sitios de terceros puede mitigar el riesgo SCRF.</li>
                                <li>No hacer clic en enlaces de spam o de correos electr &oacute;nicos.</li>
                                <li>Cierre la sesi &oacute;n en su sitio despu &eacute;s de haber terminado.</li>
                                <li>No permanezca conectado a su sitio, mientras no est &aacute;haciendo nada.</li>
                                <li>Aseg &uacute;rese de que la direcci &oacute;n en la barra del navegador coincide con la direcci &oacute;n de su sitio.</li>
                            </ol>

                            <p>Existen varias extensiones para navegadores para prevenir SCRF, aunque pueden interferir significativamente en el funcionamiento de muchos sitios.</p>

                            <p>Los sitios web pueden establecer varias contramedidas CSRF, aqu &iacute;algunas:</p>

                            <ul className="unordered-list">
                                <li>Limitar el tiempo de vida de las cookies de sesi &oacute;n.</li>
                                <li>La exigencia de un elemento secreto, espec &iacute;fico del usuario en todos los env &iacute;os de formularios y URLs &nbsp;impide CSRF</li>
                            </ul>

                            <p>Mediante la pr &aacute;ctica de estos h &aacute;bitos de navegaci &oacute;n segura eliminar &aacute;la mayor &iacute;a de las amenazas a su sitio web.</p>

                    <div className="author-section">
                        <h4>Sobre la autora</h4>

                        <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                    </div>

                        <Link to='/' className='primary-color'>Inicio</Link>
                        
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

export default Procedimientos;