import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const Htaccess = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'htaccess en joomla! - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Consejos y trucos para mejorar Joomla! la seguridad. Htaccess en Joomla!</span>
                    </div>

                    <div className="service-content-txt">
                        <h3 className='primary-color'>&iquest;Qu&eacute; es el .htaccess</h3>

                        <p>.Htaccess es un archivo de configuraci&oacute;n para usar en servidores web que ejecutan el software de Apache Web Server. Los archivos .htaccess se pueden utilizar para alterar la configuraci&oacute;n del software de Apache Web Server para habilitar/deshabilitar la funcionalidad y caracter&iacute;sticas adicionales que el software Apache Web Server ofrece.</p>

                        <h3 className='primary-color'>Creaci&oacute;n de un archivo .htaccess</h3>
                        
                        <p><strong><em>.Htaccess</em></strong> es el nombre del archivo en su totalidad, no es una extensi&oacute;n Joomla! Por ejemplo, usted no tiene que crear un archivo llamado,  <strong><em>nombre.htaccess</em></strong> <strong><em>.htaccess.txt</em></strong>, simplemente se llama <strong><em>.htaccess</em></strong></p>

                        <p>Usted puede crear un nuevo archivo .htaccess utilizando cualquier buen editor de texto como&nbsp; UltraEdit, bloc de notas y similar.</p>

                        <p>La creaci&oacute;n de un archivo .htaccess puede causar algunos problemas. Escribir el archivo es f&aacute;cil, s&oacute;lo necesitas ingresar el c&oacute;digo adecuado en un editor de texto (como el Bloc de notas). Usted puede tener problemas al guardar el archivo porque .htaccess es un nombre de archivo extra&ntilde;o y no es aceptado en ciertos sistemas.</p>

                        <p>Con la mayor&iacute;a de los sistemas operativos, sin embargo, todo lo que tiene que hacer es guardar el archivo introduciendo el nombre como &quot;.htaccess&quot; (incluyendo las comillas). Si esto no funciona, tendr&aacute; que darle un nombre y una extensi&oacute;n (por ejemplo htaccess.txt) y luego subirlo al servidor. Una vez que haya cargado al servidor, puede cambiarle el nombre usando un programa FTP (por ejemplo FileZilla).</p>

                        <h3 className='primary-color'>Modo de empleo .Htaccess en Joomla!</h3>
                        <p>Joomla! ya tiene un archivo llamado <strong><em>htaccess.txt</em></strong> ubicado en el directorio ra&iacute;z. Una vez que desee utilizar este archivo debe cambiarle el nombre a <strong><em>.htaccess</em></strong></p>

                        <p>Por defecto, este archivo se ha preconfigurado para trabajar bien con Joomla!, como SEF.</p>

                        <h3 className='primary-color'>Tutorial .htaccess</h3>
                        <p>En esta parte te mostrar&eacute; c&oacute;mo utilizar el archivo htaccess.</p>

                        <h4>Archivos de &iacute;ndice de directorio personalizada</h4>
                        <p>El archivo <strong><em>index.php</em></strong> es el esqueleto de la <strong><em>p&aacute;gina web.</em></strong> Cada <strong>p&aacute;gina web</strong> que Joomla! entrega en el archivo  <strong><em>index.php</em></strong> una selecci&oacute;n de contenido insertado desde la base de datos. Por defecto, el archivo <em>index.html </em> se ejecutar&aacute; con prioridad, por lo que si usted tieneeste archivo en el directorio ra&iacute;z obtendr&aacute; una <strong>p&aacute;gina</strong> en blanco. Para solucionar este problema, agregue a htaccess las siguientes l&iacute;neas:</p>

                        <ol className='ordered-list gray-bg'>
                            <li>DirectoryIndex index.php index.html</li>
                        </ol>
                        
                        <h4>Ocultar y negar archivos</h4>
                        <p>A veces se desea ocultar o impedir el acceso a cualquier archivo en su carpeta Joomla! (por ejemplo, archivos xml)</p>

                        <ol className='ordered-list gray-bg'>
                            <li>&lt;FIles ~ &quot;\.xml$&quot;&gt;</li>
                            <li>Order allow deny,</li>
                            <li>Deny ffrom all</li>
                            <li>Satify all</li>                           
                            <li>&lt;/Files&gt;</li>
                        </ol>
                        
                        <h4>Permitir el acceso a un determinado archivo</h4>
                        <p>Si usted desea permitir el acceso a algunos archivos (por ejemplo, permitir que los motores de b&uacute;squeda accedan a su sitemap.xml)</p>

                        <ol className='ordered-list gray-bg'>
                            <li>&lt;Files&gt; sitemap.xml</li>
                            <li>Allow from all</li>
                            <li>&lt;/Files&gt;</li>
                        </ol>

                        <h4>Redireccionar www a sin www</h4>
                        <ol className='ordered-list gray-bg'>
                            <li>RewriteCond &#37;&#123;HTTP_HOST&#125; &#94;www.tuconsultoraseo.com &#91;NC&#93;</li>
                            <li>RewriteRule &#94;&#40;&#183;&#42;&#41;&#36; http://<span className='green'>tuconsultoraseo.com/&#36;1 &#91;L, R&#61;301&#93;</span></li>
                        </ol>

                        <h4>Redireccionar sin www a www</h4>
                        <ol className='ordered-list gray-bg'>
                            <li>RewriteCond &#37;&#123;HTTP_HOST&#125; &#94;www.tuconsultoraseo.com &#91;NC&#93;</li>
                            <li>RewriteRule &#94;&#40;&#183;&#42;&#41;&#36; http://<span className='green'>tuconsultoraseo.com/&#36;1 &#91;L, R&#61;301&#93;</span></li>
                        </ol>

                        <h4>Redirigir dominio viejo a nuevo dominio</h4>
                        <ol className="ordered-list gray-bg">
                            <li>RewriteRule &#94;&#40;&#183;&#42;&#41;&#36; http://<span className='green'>tuconsultoraseo.com/&#36;1 &#91;L, R&#61;301&#93;</span></li>
                        </ol>

                        <h4>Redireccionar a una URL diferente</h4>
                        <ol className="ordered-list gray-bg">
                            <li>redircet/categoria/articulo-viejo.html. http://www.tuconsultoraseo.com/categoria</li>
                        </ol>

                        <h4>Redireccionar antigua categoria a nueva categoria</h4>
                        <ol className="ordered-list gray-bg">
                            <li>redirect /categoria-viega/articulo.html http://www.tuconsultoraseo.com/nuevo-categoria/articulo.html</li>
                        </ol>


                        <p><em><strong>Las especificaciones del archivo tendran efecto en el directorio en que se coloca y en todos los archivos y
                        subdirectorios.</strong></em></p>

                    <p>Sobre la autora</p>

                        <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="/las-directries" className='primary-color'>&lt;Anterior</Link>
                        </li>

                        <li className='pagination-li'>
                            <Link to="/inline-small" className='primary-color'>Siguiente&gt;</Link>
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

export default Htaccess;