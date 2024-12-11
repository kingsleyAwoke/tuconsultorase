import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoCrear = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Cómo crear un mapa del sitio - Consultoria SEO';
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
                        <span title="Como crear pagina personalizada 404 en joomla">Como crear pagina personalizada 404 en joomla</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Crear una pagina personalizada en joomla involucra 4 pasos:</p>

                        <ol className="ordered-list">
                            <li><strong>Como crear una pagina personalizada 404 en joomla. </strong>Crear un articulo descategorizado que sirve como su pagina &quot;404 &quot;. En la sessi &oacute;n robots colocamos &quot;no seguir, no indexar &quot;.</li>
                            <li><strong>Como crear una pagina personalizada 404 en joomla</strong>. Cree un item de men &uacute;asociado al art &iacute;culo creado en el paso 1. El tipo de elemento de men &uacute;es &quot;Mostrar un solo art &iacute;culo &quot;y copiamos su alias. Por ejemplo si el t &igrave;tulo del art &iacute;culo es &quot;pagina 404 &quot;, copiamos su alias &quot;pagina-404 &quot;</li>
                            <li><strong>Como crear una pagina personalizada 404 en joomla</strong>
                            .Ubicamos el archivo error.php de la <strong>plantilla </strong>
                            que est &aacute;usando en el sitio. Por ejemplo si la plantilla que esta usando es &quot;clean &quot;la ubicaci&oacute;n del archivo es templates/clean. Si no existe el archivo error. php solo copiamos el archivo error. phpdesde el directorio template/system de <strong>joomla</strong>
                            , al directorio de la plantilla que est &aacute;usando.</li>
                            <li><strong>Como crear una pagina personalizada 404 en joomla. </strong>Modificamos el archivo error.php, a&ntilde;adiendo el siguiente c&oacute;digo inmediatamente debajo de la l&iacute;nea de&quot; restricted access &quot;: (&quot;acceso restringido &quot;):</li>
                        </ol>

                        <code>if (($this-&gt;error-&lt;code) === '404') &#123; 
                            header('Location: /index.php?option=com_content&view=article&id=75');  exit;
                            &#125;
                        </code>

                        <p>Donde debe sustituir el id=75 por el id del arculo personalizado del error 404 creado en el paso 1.</p>

                        <p>Esta soluci &oacute;n no es la mejor ya que no es tan personalizada y la url no es amigable.</p>

                        <p>La mejor soluci &oacute;n es la siguiente:</p>

                        <code>if (($this-&gt;error-&lt;code) === '404') &#123; 
                            header('Location: /pagina=404');  exit;
                            &#125;
                        </code>

                        <p>No olvide agregar a su archivo robots.txt las siguientes l&iacute;neas en caso de que haya optado por la primera soluci&oacute;n :</p>

                        <p>User-agent: *</p>
                        <p>Disallow: /index.php?option=com_content &amp;view=article &amp;id=75</p>
                        <p>En caso de haber optado por la segunda soluci &oacute;n deber &aacute;agregar a su archivo robos.txt las siguientes l&iacute;neas:</p>
                        <p>User-agent: *</p>
                        <p>Disallow:/pagina-404</p>
                        <p>Esto&uacute;ltimo con el fin de bloquear todos los robots de los buscadores para visitar la <strong>pagina web </strong>
                        en su sitio, no puedan indexarla y aparecer en los resultados de b &uacute;squeda:</p>
                        <p>http://su-sitio.com/pagina-404</p>

                        <p>Quiza le interese leer sobre &quot;Importancia del archivo robots.txt para la seguridad y el seo &quot;.</p>

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

export default ComoCrear;