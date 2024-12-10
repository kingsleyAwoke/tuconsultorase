import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const PorQue = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Por que son malos los enlaces rotos - Consultoria SEO';
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
                        <span title="Por que son malos los enlaces rotos">Por que son malos los enlaces rotos</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Ellos no solo brindan una mala experiencia de navegaci &oacute;n al usuario sino que &nbsp;impiden a las ara &ntilde;as el rastreo de todo el sitio, por lo que afectan el <strong>seo</strong>
                        . Si su sitio tiene enlaces rotos, las ara &ntilde;as se abstendr &aacute;n de rastrear el sitio.</p>

                        <p>Tienen un impacto negativo en los motores de b &uacute;squeda como Yahoo, Google, Altavista etc.</p>

                        <p>Los sitios que tienen enlaces rotos, las ara &ntilde;as lo consideran sitios de spam. Un sitio de spam tiene mala navegaci &oacute;n. Los visitantes no quieren regresar a un &nbsp;sitio con mala navegaci &oacute;n.</p>

                        <p>Los enlaces rotos influyen en su reputaci &oacute;n.</p>

                        <p>Tendr &aacute;problemas para conseguir nuevos clientes ya que los enlaces rotos no funcionan para la informaci &oacute;n que est &aacute;n buscando.</p>

                        <h2>Naturaleza de los enlaces rotos</h2>

                        <p>Con el tiempo muchos sitios web cambian, se eliminan p &aacute;ginas, desaparecen dominios, estas situaciones generan que muchos enlaces se conviertan en obsoletos, ya que no llevan a p &aacute;ginas v &aacute;lidas y generan un c &oacute;digo http 404, la conocida p &aacute;gina no encontrada.</p>

                        <p>Esto ocurre con mucha frecuencia en enlaces internos de sitios. Con los enlaces externos la situaci &oacute;n es peor ya que la p &aacute;gina destino puede cambiar de ubicaci &oacute;n o nombre sin previo aviso. Los servidores externos pueden reducirse o extinguirse para siempre o sus dominios expirar o venderse.</p>

                        <p>Frente a todo esto se hace vital contar con herramientas que permitan hacer un seguimiento a los enlaces para constatar su estado. Existen infinidad de &uacute;tiles herramientas en l &iacute;nea que le facilitan este trabajo, si coloca en los motores de b &uacute;squeda &ldquo;comprobar enlaces rotos &rdquo;, &ldquo;herramienta para comprobar enlaces rotos &rdquo;, &ldquo;validar enlaces rotos &rdquo;, los podr &aacute;encontrar y utilizar.</p>

                        <p>Este proceso de comprobaci &oacute;n debe hacer regularmente y los resultados negativos deben corregirse a la brevedad posible.</p>

                        <p>No olvides compartir este art &iacute;culo.</p>

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

export default PorQue;