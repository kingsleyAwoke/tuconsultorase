import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const SeoImagne = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'herramienta seo imagen - Consultoria SEO';
    }, []);
  return (
    <>
      <section className='seo-imgne'>
        <BreadCrumb />
        <div className='main-section container seo-imgne-container'>
            
            <LeftContent />

            <div className="service-content">
                <div className='column'>
                    <div className="service-content-head"><span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">herramienta seo imagen</span></div>

                    <p>La directiva de Google dice:"</p>

                    <div className="service-content-txt">
                        <ul className="service-content-ul">
                            <li className="service-content-li"><blockquote cite="Intenta utilizar texto en lugar de imágenes para mostrar nombres, contenido o enlaces importantes. El rastreador de Google no reconoce el texto integrado en imágenes. Si debes utilizar imágenes para contenido textual, considera la posibilidad de utilizar el atributo &quot;ALT&quot; para incluir algunas palabras de texto descriptivo">&quot;Intenta utilizar texto en lugar de imágenes para mostrar nombres, contenido o enlaces importantes. El rastreador de Google no reconoce el texto integrado en imágenes. Si debes utilizar imágenes para contenido textual, considera la posibilidad de utilizar el atributo "ALT" para incluir algunas palabras de texto descriptivo&quot;</blockquote></li>
                            <br />
                            <li className="service-content-li"><blockquote cite="Asegúrate de que los elementos y los atributos &quot;alt&quot; de tu sitio sean descriptivos y precisos">Asegúrate de que los elementos &lt;title &gt;y los atributos "alt" de tu sitio sean descriptivos y precisos</blockquote></li>
                        </ul>
                    </div>
                </div>
<br />                
                <div className="service-content-txt">
                    <img src="\images\seoimagen.png" alt="Colocar las dimensiones correctas de la imagen y sus atributos" title="Colocar las dimensiones correctas de la imagen y sus atributos" width=' 150' height='87' />
                </div>
<br />

                <div className="service-content-txt">
                    <p>Esta herramienta analiza que tan optimizadas están las imágenes de una página web. Usted ingresa la<strong>url del dominio</strong>
                    a analizar y pulsa enter o el botón <strong>&quot;analizar imagenes&quot;</strong> y la herramienta le entregará información importante  acerca de las imágenes de su página web.</p>

                    <ul className='unordered-list'>
                        <li>nombre de la imagen</li>
                        <li>Atributo alt texto de la imagen  (o la advertencia de que no existe ningún texto alternativo)</li>
                        <li>dimensiones de la imagen (o la advertencia de que no existen las dimensiones de la imágen)</li>
                        <li>la propia imagen se mostrará si es posible a través de un enlace a la misma.</li>
                    </ul>

                    <p>Estas son las principales cosas que Google recomienda para las imágenes y esta herramienta permite al usuario saber qué tan bien lo está haciendo.</p>

                    <p><strong>Lo que esta herramienta puede ayudar a determinar</strong></p>

                    <p><small>Esta herramienta SEO </small>imagen puede ayudar a responder preguntas como :</p>

                    <ul className='unordered-list'>
                        <li>¿Pueden las personas con deficiencias visuales entender mis imágenes?</li>
                        <li>¿Puede Google entender mis imágenes?</li>
                        <li>¿Están mis imágenes causando problemas de velocidad de carga a mi página?</li>
                        <li>¿Estoy utilizando texto alternativo correctamente?</li>
                        <li>¿Estoy utilizando texto alternativo correctamente?</li>
                    </ul>

                    <p><small>Ud. puede leer</small> <Link to='/blog/seo' title="Como optimizar el contenido multimedia para SEO" className='primary-color'>Como optimizar el contenido multimedia para <strong>SEO</strong></Link> y <Link to='/blog/seo' title="Especificar dimensiones de imágen" className='primary-color'>Especificar dimensiones de imágen</Link>.</p>

                    <p>Acepta http y https.</p>

                    <p><strong>Escriba la URL del <span className='underline-span'><em>dominio</em></span>sin &#47; al final</strong>.&ndash;<strong><span>URL :</span></strong></p>

                    <form action="search">
                        <input type="search" size="60" maxlength="60" name="URL" value={text} onChange={ (e) => setText(e.target.value) }  />
<br />  <br />
                        <input type="submit" name="comprobar" value="comprobar imagenes"/>
                    </form>

                    <div className="author-section">
                        <h1>Sobre la autora</h1>

                        <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                    </div>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="/utilidades/herramienta" className='primary-color'>&lt;Anterior</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <RightContent links={Links} />
        </div>
        
        <Footer />
    </section>
    </>
  )
}

export default SeoImagne
