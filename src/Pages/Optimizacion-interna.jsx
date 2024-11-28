import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const OptimizacionInterna = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Optimización interna de una pagina web - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Optimizaci&oacute;n interna de una pagina web</span>
                    </div>

                    <div className="service-content-txt">

                        <p><strong>La optimizaci&oacute;n interna de una p&aacute;gina web</strong> se refiere a todas las t&eacute;cnicas que se realizan en el interior de la p&aacute;gina y que contribuyen a mejorar la posici&oacute;n que &eacute;sta ocupa en los resultados de los&nbsp; motores de b&uacute;squeda.</p>

                        <p>Las siguientes son algunas de las t&eacute;cnicas <strong>SEO</strong> en el interior de las p&aacute;ginas web:</p>
                        
                        <p>A&ntilde;adir contenido &uacute;til, fresco a los visitantes y que les ayude a resolver un problema. Informaci&oacute;n de calidad y centrarse en el usuario.</p>

                        <p>Cuidar la navegabilidad del sitio. Una <Link to="http://tuconsultoraseo.com/blog/seo/138-importancia-de-la-estructura-de-navegacion" title="buena estructura de navegación" className='primary-color'>buena estructura de navegaci&oacute;n</Link> es importante tanto para los usuarios como para la r&aacute;pida indexaci&oacute;n de su sitio.</p>

                        <p>Un buen consejo: utilice la ruta de navegaci&oacute;n</p>

                        <p>La estructura de los enlaces internos. Ud. debe asegurarse que todas las p&aacute;ginas de su sitio web est&aacute;n interrelacionadas unas con otras. Si la p&aacute;gina principal ha sido indexada, cerci&oacute;rese que el resto est&aacute;n enlazadas a ella para que se indexen tambi&eacute;n, pero aseg&uacute;rese que no hay m&aacute;s de 200 enlaces en una p&aacute;gina determinada.</p>

                        <p>Los sitios r&aacute;pidos en cargar, tambi&eacute;n se indexan m&aacute;s r&aacute;pido por Google.</p>

                        <p>Cree un perfil en Google+ y a&ntilde;ada un enlace a su sitio. Dado que Google+ es un producto de Google, su robot le prestar&aacute; atenci&oacute;n a estos enlaces.</p>

                        <p>Cree una cuenta en Google herramientas para webmaster y&nbsp;<Link className="primary-color" to="https://www.google.com/webmasters/tools/submit-url?pli=1" rel="nofollow" title="Enviar sitio a Google">env&iacute;e su sitio</Link></p>

                        <p>Compruebe si su c&oacute;digo HTML es v&aacute;lido, quite cualquier c&oacute;digo innecesario.</p>

                        <p>Evite las tablas.</p>

                        <p>Revise la relaci&oacute;n entre el texto y el c&oacute;digo HTML. Una buena relaci&oacute;n texto-HTML se situa entre un 25 y 70%. Puede usar la herramienta <Link className="primary-color" to="http://www.seochat.com/seo-tools/code-to-text-ratio/" rel="nofollow" target="_blank" title="SeoChat"><strong>SEO</strong>Chat</Link> para verificar esta relaci&oacute;n en su sitio web.</p>
                        
                        <p> Quite las im&aacute;genes innecesarias que enlentecen la carga del sitio</p>

                        <p>Compruebe sus url, ellas deben ser descriptivas, cortas y con las palabras clave colocadas al principio.</p>

                        <p>Est&eacute; seguro de evitar url duplicadas:</p>

                        <p>Su sitio web puede tener versiones www y no www apuntando al mismo contenido y en consecuencia tambi&eacute;n tendr&aacute; el problema de contenido duplicado, muchas veces el contenido duplicado se crea accidentalmente por el Id de sesi&oacute;n, c&oacute;digos de afiliados.</p>

                        <p>Puede lidiar con este problema de dos maneras:</p>

                        <p>Ud debe escoger la url de su preferencia y a&ntilde;adir una etiqueta rel can&oacute;nica a la otra URL duplicada</p>

                        <p>La otra forma es a&ntilde;adir redirecciones 301, permanentes, a la p&aacute;gina de su versi&oacute;n preferida.</p>

                        <p>Utilice&nbsp; &uacute;nicamente javascript y flash si es necesario.</p>

                        <p>Mantenga el tama&ntilde;o de la p&aacute;gina por debajo de 300K</p>

                        <p>Elimine cualquier texto oculto que no es visible a los usuarios.</p>

                        <p>La p&aacute;gina debe tener siempre una cierta calidad de texto sin formato.</p>

                        <p>Estos son algunos de los elementos b&aacute;sicos para facilitar el rastreo y la indexaci&oacute;n por parte de&nbsp; los robots de Google.</p>

                        <p>Si su p&aacute;gina no se indexa, le conviene saber los problemas potenciales a los que podr&iacute;a enfrentarse:</p>

                        <p>Es imprescindible que su sitio tenga un archivo robot.txt, pero es vital chequear qu&eacute; p&aacute;ginas&nbsp; no tienen el acceso permitido a Google bot. Esta es una de las principales razones por las que un contenido no se indexa.</p>

                        <p>Si ha adquirido un dominio de segunda mano, es posible que Google lo haya penalizado (probablemente por alguna historia de spam) y deba solicitar a Google una reconsideraci&oacute;n.</p>

                        <p>Problemas con el servidor. A veces &eacute;ste no permite que el robot de Google acceda a su sitio. Puede ser que el servidor se encuentra en mantenimientos o los DNS est&aacute;n obstaculizando la accesibilidad.</p>

                        <p> Meta Robos:&nbsp; La siguiente etiqueta se utiliza para asegurar que el sitio no es indexado por los motores de b&uacute;squeda.</p>

                        <p>&lt;meta name=&rdquo;robots&rdquo; content=&rdquo;NOINDEX, nofollow&rdquo;&gt;</p>

                        <p>El archive .htaccess que se encuentra en la carpeta ra&iacute;z se utiliza generalmente para corregir los errores que se arrastran y redirecciones. Una incorrecta configuraci&oacute;n puede conducir a la formaci&oacute;n de bucles infinitos que dificultan la carga y la indexaci&oacute;n. Si desea conocer m&aacute;s sobre el archivo .htaccess lea &quot;<Link to="http://tuconsultoraseo.com/blog/joomla/37-htaccess-en-joomla" title="htaccess en joomla!" className='primary-color'><strong>.htacces en joomla</strong></Link>&quot;</p>

                        <p>Use un archivo sitemap, puede generar uno en&nbsp;<Link className="primary-color" href="http://www.web-site-map.com/" rel="nofollow" target="_blank" title="web-site-map">web-site-map</Link></p>

                        <p>Puede enviar el sitemap utilizando la herramienta para webmaster de google en la secci&oacute;n Rastreo &gt; Sitemap.</p>

                        <p>Otros <Link to="http://tuconsultoraseo.com/blog/seo/191-errores-seo" title="errores SEO" className='primary-color'><strong> errores SEO</strong>:</Link> v&iacute;nculos rotos, errores 404, redireccionamientos incorrectos a p&aacute;ginas que puedan&nbsp; estar bloquedas por el bot de Google.</p>

                        <p>Use etiquetas de encabezado, ellas vas de h1 a h6. Ellas se utilizan para diferenciar el t&iacute;tulo de una p&aacute;gina del resto del contenido, la etiqueta m&aacute;s importante es la etiqueta h1 y la menos importante h6. Las etiquetas de cabecera tienen una jerarqu&iacute;a, usted no puede saltarse ninguna, por ejemplo de la 1 a la 3, ya que quebrar&aacute; la jerarqu&iacute;a y no es bueno para el <strong>SEO</strong>.</p>

                    <p>Sobre la autora</p>

                        <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="/importancia" className='primary-color'>&lt;Anterior</Link>
                        </li>

                        <li className='pagination-li'>
                            <Link to="/las-directories" className='primary-color'>Siguiente&gt;</Link>
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

export default OptimizacionInterna;