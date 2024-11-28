import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const Donde = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Dónde se inserta el código de Google Analytics en Joomla! 2.5 - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Dónde se inserta el código de Google Analytics en Joomla! 2.5</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Generalmente, en cada <strong>plantilla</strong> hay un espacio reservado para incrustar c&oacute;digo especial, incluso en algunas hay espacio para Google Analytics. Haga clic en extensiones --&gt; gestor de <strong>plantilla</strong>s, y una vez all&iacute;, seleccionar su <strong>plantilla</strong> predeterminada. Entre sus par&aacute;metros suele haber una casilla para incrustar all&iacute; el c&oacute;digo que debemos colocar de Google analitycs.</p>

                        <br />
                        <br />
                        <br />  

                        <p>Otras veces, las <strong>plantillas</strong> no son profesionales, no poseen esta casilla para insertar el c&oacute;digo de Google Analytics, por lo que debermos hacerlo a mano en el archivo index.php de Joomla! en la secci&oacute;n head, justo antes de la etiqueta &lt;/head&gt;. Esto, adem&aacute;s de ser delicado, puede generar un error 500, debemos tener en cuenta que en cuanto actualicemos el software de Joomla!, es muy probable que debamos volver, nuevamente, a ingresar el c&oacute;digo en el index.php.&nbsp;</p>

                        <p><strong>Esta soluci&oacute;n no es recomendable. </strong>Implica recordar constantemente que debemos ingresarlo para cada actualizaci&oacute;n y corremos el riesgo de equivocarnos, borrando parte del c&oacute;digo de la <strong>plantilla</strong> o introducirlo en la secci&oacute;n equivocada. En tuconsultoraseo.com recomendamos, si la <strong>plantilla</strong> no permite la opci&oacute;n de incrustar este c&oacute;digo, usar alg&uacute;n plugin o extensi&oacute;n que permita a&ntilde;adir el c&oacute;digo de Google Analytics.-</p>

                        <Link to='/' className='primary-color'>Inicio</Link>

                        <span>Sobre la autora</span>
                        <span>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></span>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>

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

export default Donde;