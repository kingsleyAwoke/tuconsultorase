import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const JoomlaContenido = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Joomla contenido duplicado - Consultoria SEO';
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
                        <span title="Joomla contenido duplicado">Joomla contenido duplicado</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Al instalar el sistema Joomla los iconos de PDF y de impresi &oacute;n se muestran en la esquina superior de las p &aacute;ginas de los art &iacute;culos. Los motores de b &uacute;squeda siguen sus v &iacute;nculos, desde el contenido de la <strong>p &aacute;gina web </strong>
                            de &nbsp;&nbsp;cada uno de estos enlaces y es evaluado de diferentes maneras por el motor de b &uacute;squeda;&nbsp;&iquest;C &oacute;mo funciona? el texto ancla, el &nbsp;t &iacute;tulo de la p &aacute;gina destino, los metadatos de la p &aacute;gina destino, el contenido de la <strong>p &aacute;gina </strong>
                            de destino.&nbsp;Todos estos se comparan con la p &aacute;gina de origen y su propio t &iacute;tulo, metadatos, el contenido. A los motores de b &uacute;squeda no les gusta el contenido duplicado.</p>

                            <p>Las <strong>p &aacute;ginas web </strong>
                            con t &iacute;tulo id &eacute;ntico y descripciones meta id &eacute;nticas se consideran contenido id &eacute;ntico, el contenido duplicado a Google y otros motores de b &uacute;squeda, no les gusta esto y estas p &aacute;ginas ser &aacute;n relegados al &iacute;ndice complementario.&nbsp;El &iacute;ndice complementario es la segunda base de datos de &nbsp;google - y ocupan lugares m &aacute;s bajo que la base de datos principal.&nbsp;Entonces, &iquest;c &oacute;mo puedo comprobar si alguna de mis p &aacute;ginas se enumeran en este &iacute;ndice complementario?&nbsp;Ir a google y &quot;site: sudominio &quot;.&nbsp;Mira hacia abajo en la lista y que est &aacute;n etiquetados con &quot;Resultado Suplementario &quot;.</p>

                            <h4 className='primary-color'>En este punto Ud. me dice: Muy bien, &iquest;qu &eacute;debo hacer para remediar esto en Joomla?</h4>

                            <p>No muestre los iconos de impresi &oacute;n ni PDF.&nbsp;Este es el buen comienzo, pero no es completo porque podr &iacute;a haber otras razones para que sus <strong>p &aacute;ginas web </strong>
                        est &aacute;n atrapados en el &iacute;ndice suplementario.&nbsp;En pocos d &iacute;as cubro otras t &aacute;cticas para <strong>p &aacute;ginas web </strong>
                        de Joomla que figuran en el &iacute;ndice de resultados suplementarios cuando no est &aacute;n all &iacute;porque muestran iconos de PDF y de impresi &oacute;n.</p>

                        <p>Si quiere saber m &aacute;s sobre contenido duplicado puede leer &nbsp;&nbsp;<span className='primary-color'>Como proteger su contenido</span>
                        .</p>

                        <p>Si quiere saber m &aacute;s sobre <span className='primary-color'>el indice suplementario</span>
                        .</p>

                        <p>&iquest;Que opinan? &iexcl;compartan!</p>

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

export default JoomlaContenido;