import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const InlineSmall = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Inline small CSS - Consultoria SEO';
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
                        <span title="Inline small CSS">Inline small CSS</span>
                    </div>

                    <div className="service-content-txt">

                        <p> Los <strong>peque &ntilde;os archivos CSS en l &iacute;nea</strong>
                        &nbsp;(<strong>Inline small CSS</strong>
                        ) significan simplemente que usted debe embeber el contenido de su archivo css en el HTML en lugar de guardarlo en un archivo externo CSS. Esto reduce la cantidad de archivos que el navegador tiene que descargar antes de mostrar la p&aacute;gina web, por tanto contribuyen a <strong>acelerar </strong>
                        la carga de la <strong>p&aacute;gina web</strong>.</p>

                    <p>Si usted est &aacute;usando un archivo CSS externo, el navegador primero debe cargar el archivo HTML, y luego descargar el archivo CSS. Una vez en el c&oacute;digo del html el CSS, el navegador s&oacute;lo tiene que descargar su archivo HTML. La descarga de un archivo es m&aacute;s r&aacute;pido que la descarga de dos.</p>

                    
                    <h2>C&oacute;mo colocar CSS en l&iacute;nea</h2>
                    
                    <p>Usted copia el contenido de su archivo CSS externo y lo pega entre las etiquetas de estilo en la secci&oacute;n de&lt;head &gt;de su archivo HTML.</p>
                    
                    <p>
                        <div>&lt;style type=&quot;text/css &quot;&gt;</div>
                        <div>&lt;/style &gt;</div>
                    </p>
                    
                    <p>Lo importante es recordar que este c&oacute;digo debe colocarse en la secci&oacute;n head del HTML. Tambi&eacute;n debe utilizar las etiquetas de estilo apropiadas HTML. Copie y pege el contenido de su archivo CSS externo entre las etiquetas de estilo:</p>
                    
                    <pre>&lt;HEAD &gt;<br />&lt;STYLE type=&quot;text/css &quot;&gt;<br />H1 
                        &#123;border-width: 1; border: solid; text-align: center7&#125;<br />
                    &lt;/STYLE &gt;<br />&lt;/HEAD &gt;</pre>

                    <p><b>&iquest;Que gana con esto?</b>
                    </p>
                    
                    <p>
                        Poner su CSS en la secci&oacute;n head del HTML de su <strong>pagina web</strong>
                        evitar&aacute;que el navegador tenga que realizar dos descargas, ya que el navegador no est &aacute;solicitando un archivo externo para cargar el CSS. Es decir; el navegador ahorrar&aacute;una solicitud http adicional por cada hoja de estilo externa.
                    </p>

                    <h3>Ventajas y desventajas</h3>

                    <p>Si bien esto ahorra que el navegador tenga que ir y volver al servidor una vez m &aacute;s (ventaja) tambi&eacute;n significa que el archivo CSS ya no se almacenan en cach &eacute;(desventaja).</p>
                    
                    <p>Los c&oacute;digos JavaScript y CSS que est &aacute;n embebidos en el documento HTML son descargados cada vez que el documento HTML es llamado. Esto reduce el n&uacute;mero de peticiones HTTP, pero incrementa el tama&ntilde;o del documento HTML.</p>

                    <p>Si el c&oacute;digo JavaScript y CSS est &aacute;n en archivos externos cacheados por el navegador, el tama&ntilde;o de el documento HTML se reduce sin incrementar el n&uacute;mero de peticiones HTTP.</p>
                    
                    <p>Si su CSS es peque&ntilde;o y simple no importa que sea descargado cada vez que la p&aacute;gina es cargada. Si el CSS es grande y complejo, lo que a menudo tienden a ser, entonces es posible que desee considerar la posibilidad de almacenar en cach&eacute;el archivo CSS como una mejor opci&oacute;n.</p>

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

export default InlineSmall;