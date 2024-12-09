import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoProteger = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Como proteger su contenido - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Como proteger su contenido</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Si bien es cierto que el robo de contenido puede ser una medida de cuan exitoso ha resultado, (ya que de otro modo no lo copiar &iacute;an), desafortunadamente es muy com &uacute;n, y los editores de contenido invertimos mucho tiempo y esfuerzo investigando, probando y redactando un buen contenido y necesitamos protegerlo de los piratas de contenido.</p>

                        <p>El <strong>contenido duplicado no es penalizado</strong> por los motores de b &uacute;squeda como Google, significa simplemente que el contenido duplicado no se muestra a los usuarios en los resultados de b &uacute;squeda. Desmitificando la &quot;penalizaci &oacute;n por contenido duplicado &quot; El Contenido duplicado y los m &uacute;ltiples problemas del sitio</p>

                        <p>Copiar y pegar contenido es tan facil que se convierte en la principal raz &oacute;n por la que el robo de contenido es tan com &uacute;n. Usted puede desactivar el bot &oacute;n derecho del mouse para impedir copiar el contenido tambi &eacute;n puede impedir que se seleccione contenido de su sitio, aunque no siempre funciona impedir que se robe el contenido de este modo.</p>

                        <p>Si ver que nuestro contenido ha sido robado por otra persona, es ya molesto, el que no se muestre nuestro contenido duramente elaborado, empeora aun mas la situaci &oacute;n.</p>

                        <p>De todo esto podemos deducir la necesidad de proteger nuestro contenido.</p>

                        <p><strong>Algunas maneras de proteger el contenido:</strong></p>

                        <p>Las imagenes y videos: Podemos intentar proteger este tipo de contenido colocandoles marcas de agua, ello no las hace 100% seguras contra el robo, pero algunos ladrones de contenido se frenan ya que no les ser &aacute;facil usarlos en otros sitios.</p>

                        <strong>&iquest;Como detectar el contenido duplicado en su sitio?</strong>

                        <p>El m &eacute;todo m &aacute;s simple y m &aacute;s l &oacute;gico es copiar y pegar un fragmento de su contenido en el cuadro de b &uacute;squeda de Google y ver si alguna otra <strong>p &aacute;gina web</strong>
                        aparece con &nbsp;el mismo contenido.</p>

                        <p>Copyscape es una excelente herramienta para detectar el contenido duplicado en su sitio.</p>

                        <p>Si su contenido est &aacute;indexado en Google y tiene una fecha que es anterior a la fecha del contenido plagiado, puede utilizar esta como evidencia de que el contenido fue robado a usted y no al rev &eacute;s</p>

                        <p>El contenido duplicado puede ser visto en Metadescripciones duplicadas de herramientas para webmaster y Etiquetas de t &iacute;tulo duplicadas. Estos contenidos pueden ser f &aacute;cilmente detectados a trav &eacute;s de la herramienta para webmaster de Google, Aspectos de b &uacute;squeda &gt;Mejoras de HTML, como se muestra en la figura de arriba.</p>

                        <p>Usted, por &uacute;ltimo puede presentar una notificaci &oacute;n de presunta infracci &oacute;n de derechos de autor, al DMCA, (Digital Millenium Copyright Act) para solicitarles la retirada de contenido infractor de derechos de autor. Google suele ser r &aacute;pido en la eliminaci &oacute;n de contenido robado, por lo que usted puede esperar que poco tiempo despues de presentar la queja, el contenido sea eliminado de su &iacute;ndice. Lidiar con el robo de contenido es tedioso y consume tiempo, pero si quiere proteger sus derechos y su posicionamiento <strong>SEO</strong>, es necesario hacerlo, sin embargo; con las herramientas adecuadas, como se describe en este art &iacute;culo, las probabilidades de &eacute;xito son buenas.</p>

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

export default ComoProteger;