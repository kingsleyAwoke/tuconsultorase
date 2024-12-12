import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoAgregar = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Como agregar encabezados Expires - Consultora SEO';
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
                        <span title="Como agregar encabezados Expires">Como agregar encabezados Expires</span>
                    </div>

                    <div className="service-content-txt">

                        <p><strong>C&oacute;mo agregar encabezados expires</strong>
                        &nbsp;a su archivo htaccess. Esto ayudar&aacute;a mejorar el rendimiento de su sitio web, basado en las pautas recomendadas por Google y Yahoo.</p>

                        <p>Usar el almacenamiento en cach&eacute;del navegador y los encabezados de caducidad reducen el n&uacute;mero de peticiones HTTP, lo que mejora el rendimiento de su sitio a sus visitantes.</p>

                        <p>La primera vez que alguien visita su <strong>pagina web</strong>
                        , su navegador obtendr&aacute;todas sus im&aacute;genes, archivos CSS, archivos JavaScript, etc Normalmente, esto sucede cada vez que el mismo visitante vuelve a su sitio.</p>

                        <p>Con los encabezados expire se le dice al navegador web del visitante que los archivos que especifique no cambian por un cierto tiempo, por ejemplo, un mes.</p>

                        <p>Esto significa que el navegador no tiene que volver a recuperar im&aacute;genes, CSS, JavaScript, etc cada vez que el visitante llega a su sitio.</p>

                        <p><u>Importante</u>
                        : Para utilizar encabezados expires, el servidor debe ser Apache (y requiere el m&oacute;dulo mod_expires) y debe tener acceso a su archivo htaccess. Si usted no sabe lo que significa esto, hable con su empresa de alojamiento primero y pregunte si el servidor es apache y si tiene habilitado el modulo Expires.</p>

                        <p><em>&quot;Si aprovecha el almacenamiento en cach&eacute;, el documento puede ser recuperado de la memoria cach&eacute;y no desde la fuente hasta que haya transcurrido este tiempo. Despu&eacute;s de eso, se considera la copia cach&eacute;ha&quot;expirado&quot;y no es v&aacute;lida, y una nueva copia se debe obtener de la fuente.&quot;</em></p>

                        <p>Fuente: Apache</p>
                        <h2>Comience por comprobar el rendimiento de su sitio</h2>
                        <p>Compruebe con​​&nbsp;Yahoo Yslow PageSpeed.</p>

                        <p>Tambi&eacute;n puede usar&nbsp;GTmetrix &nbsp;porque muestra tanto las herramientas de velocidad Google como &nbsp;de Yahoo. Los resultados se actualizan al instante, para que pueda obtener un resultado actualizado inmediatamente despu&eacute;s de que usted haya implementado los cambios.</p>

                        <p>Si utiliza GTmetrix, ingrese la url de la p&aacute;gina a analizar, haga clic en la pesta&ntilde;a PageSpeed y observe la memoria cach&eacute;del navegador (Leverage browser caching).</p>

                        <p><em>&quot;Los siguientes recursos cacheables tienen un tiempo de vida corto frescura. Especifique un vencimiento m&iacute;nimo de una semana en el futuro por los siguientes recursos:&quot;</em></p>

                        <p>En la ficha Yslow, ves A&ntilde;adir Expira encabezados (Add Expires headers):</p>

                        <p><em>&quot;Hay X componentes est &aacute;ticos sin futuro lejano fecha de caducidad.&quot;&nbsp;</em></p>

                        <h3>&iquest;Qu&eacute;tipo de archivos (extensiones) ha enumerado para aprovechar la cach&eacute;del navegador con encabezados Expire?</h3>

                        <p>En este caso archivos de imagenes, css, javascript</p>

                        <p>Pueden existir otro tipo de archivos...</p>

                        <p> <strong>&iquest;Con que frecuencia modifica estos archivos?</strong>
                        , decida por cu &aacute;nto tiempo pueden almacenarse en la cach &eacute;del navegador del visitante. Las opciones son:</p>

                        <p>segundos, minutos, horas, d&iacute;as, semanas, meses y a&ntilde;os</p>

                        <p>&iquest;Que debe a &ntilde;adir a su archivo .htaccess?</p>

                        <p>Podr&iacute;a ser&uacute;til a&ntilde;adir una&quot;directiva por defecto&quot;para una fecha de caducidad por defecto, luego de activar el modulo Mod_expires por lo que son las 2 filas va a a&ntilde;adir a .htaccess son:</p>

                        <ol className="ordered-list">
                            <li>&lt;IfModule mod_expires.c &gt;</li>
                            <li># Enable expirations</li>
                            <li>ExpiresActive On</li>
                            <li># Default directive</li>
                            <li>ExpiresDefault &quot;access plus 1 month &quot;</li>
                            <li>&lt;/IfModule &gt;</li>
                        </ol>

                        <p>Esas son las l&iacute;neas b&aacute;sicas. Agregue todas las l&iacute;neas para cada uno de los tipos de archivos (ya sabe, los que cre&oacute;anteriormente para su favicon, javascript, im&aacute;genes y css). Usted debe tener un fragmento de c &oacute;digo parecido a esto:</p>

                        <ol className="ordered-list">
                            <li>&lt;IfModule mod_expires.c &gt;</li>
                            <li># Enable expirations</li>
                            <li>ExpiresActive On &nbsp;</li>
                            <li># Default directive</li>
                            <li>ExpiresDefault &quot;access plus 1 month &quot;</li>
                            <li># My favicon</li>
                            <li>ExpiresByType image/x-icon &quot;access plus 1 year &rdquo;</li>
                            <li>ExpiresByType image/jpg &quot;access plus 1 year &quot;</li>
                            <li>ExpiresByType image/jpeg &quot;accessplus &nbsp;1 year &quot;</li>
                            <li>ExpiresByType image/gif &quot;access plus 1 year &quot;</li>
                            <li>ExpiresByType image/png &quot;access plus 1 year &quot;</li>
                            <li>ExpiresByType text/css &quot;access 1 month &quot;</li>
                            <li>ExpiresByType application/pdf &quot;access 1 month &quot;</li>
                            <li>ExpiresByType text/x-javascript &quot;access 1 month &quot;</li>
                            <li>ExpiresByType application/x-shockwave-flash &quot;access 1 month &quot;</li>
                            <li>ExpiresByType image/x-icon &quot;access 1 year &quot;</li>
                            <li>ExpiresByType application/javascript &quot;access plus 1 year &quot;</li>
                            <li>ExpiresDefault &quot;access 2 days &quot;</li>
                            <li>&lt;/IfModule &gt;</li>
                        </ol>

                        <p>Realice otra prueba con GTmetrix y compare los resultados.</p>

                        <Link to='/' className='primary-color'>Inicio</Link>

                        <span>Sobre la autora</span>
                        <span>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></span>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
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

export default ComoAgregar;