import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const QueSignifica = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Que significa Minify CSS - Consultoria SEO';
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
                        <span title="Que significa Minify CSS">Que significa Minify CSS</span>
                    </div>

                    <div className="service-content-txt">

                        <p>&iexcl;Sencillo! simplemente que debe comprimir el CSS para que la carga sea m &aacute;s r &aacute;pida.</p>

                        <p>Minificaci&oacute;n &nbsp;o compresi&oacute;n de c&oacute;digo css es la pr&aacute;ctica de eliminar caracteres innecesarios para reducir su tama&ntilde;o, la eliminaci&oacute;n de espacios innecesarios, y la optimizaci&oacute;n del c&oacute;digo CSS; mejorando de este modo los tiempos de carga.</p>

                        <p>Cuando los archivos Javascript y CSS se comprimen, todos los comentarios son retirados, as&iacute;como &quot;espacios en blanco&quot;innecesarios, como tambi&eacute;n los enter (nueva l&iacute;nea) y tabuladores. Adem&aacute;s el c&oacute;digo puede ser formateado a &uacute;n m&aacute;s en una sola l&iacute;nea en lugar de varias.</p>

                        <p>En el caso de CSS, esto mejora el rendimiento del tiempo de carga debido a que el tama&ntilde;o del archivo descargado se reduce significativamente. Existen dos herramientas populares para minifying, reducir o comprimir el c&oacute;digo CSS son&nbsp;CSS Compressor Google Minify. Muchas herramientas tambi&eacute;n permiten minify/comprimir c&oacute;digo Javascript, aprende m&aacute;s en MinifyJS.com.</p>

                        <p>El c&oacute;digo CSS correctamente minimizado (comprimido) mejora la velocidad de la <strong>p&aacute;gina web </strong>
                            y ya sabemos que la velocidad de carga es uno de los m&aacute;s de 200 factores de <strong>seo o posicionamiento en buscadores</strong>
                            .</p>

                        <p>No importa c&oacute;mo usted utiliza su CSS (<Link to='/inline-small' className='primary-color'>inline small css</Link>, archivos externos, archivo externo combinado) mientras m&aacute;s peque&ntilde;o, mejor y contribuir&aacute;a que sus <strong>p&aacute;ginas web </strong>
                        se cargan m&aacute;s r&aacute;pido.</p>

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

export default QueSignifica;