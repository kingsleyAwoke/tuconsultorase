import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const Redireccionaminetos = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Redireccionamientos engañosos - Consultoria SEO';
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
                        <span title="Redireccionamientos engañosos">Redireccionamientos engañosos</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Redireccionamientos engañosos: El auto-redireccionamiento es la técnica de enviar automáticamente a un visitante del sitio a otra página distinta de la que &nbsp;aterrizó inicialmente. La otra <strong>página web</strong>
                        está a menudo en el mismo sitio web, pero puede estar en un sitio diferente. De hecho, la auto-redirección se utiliza cuando un sitio web se ha creado con el único propósito de clasificar en los motores de búsqueda. Cuando los visitantes llegan a una página, a partir de una lista de los resultados de los motores de búsqueda, es redirigido automáticamente a la página principal.</p>

                        <p>Esto es común cuando una página dentro del sitio ha sido creada específicamente para clasificar en los primeros lugares en los motores de búsqueda, pero ha sido tan altamente optimizada que la gente no la ve en realidad. La auto-reorientación lleva a los visitantes a la página "adecuada" en el sitio.</p>

                        <p>Esto no es bien visto por los motores de búsqueda, que a veces sancionan una <strong>página web</strong>
                        o un sitio por hacerlo. Los motores de búsqueda no son capaces de detectar automáticamente la mayoría de los métodos de auto-redireccionamiento.</p>

                        <p><strong>Esta práctica es engañosa porque intenta mostrar contenido diferente a los usuarios y al robot de Google.</strong></p>

                        <h2>Métodos Auto-redireccionamiento</h2>

                        <p><strong>El método "Refresh Meta Tag"&nbsp;</strong></p>
                        <p>Este es el método de auto-redireccionamiento que los motores pueden detectar automáticamente, o al menos eso se cree. También es el método que los motores aceptan como un plazo de tiempo razonable entre la &nbsp;página de aterrizaje y su redireccionamiento. Se recomiendan al menos 5 segundos.</p>
                        <p>El código debe estar en la sección head de la página, y se parece a esto:&nbsp;</p>
                        <p>&lt;head &gt;&nbsp;&lt;meta http-equiv="refresh" content="5;url=pagename.html"&gt;&lt;/ head &gt;&nbsp;</p>
                        <p>El parámetro "content" consta de dos partes, separadas por un punto y coma. La primera parte es el retardo, en segundos, antes de que ocurra la redirección. La segunda parte es la URL a cual se redirigirá, como cualquier hipervínculo, puede ser una dirección URL relativa o una URL absoluta. &nbsp;</p>
                        <p>
                        <strong>El método redirecciones &nbsp;</strong>
                        <strong>automáticos</strong>
                        <strong>&nbsp;javascript &nbsp;</strong>
                        </p>
                        <p>
                        Las redirecciones &nbsp;<strong>&nbsp;</strong>
                        automáticos &nbsp;Javascript &nbsp;no pueden ser detectados automáticamente por los motores de búsqueda, ya que aún no analizan Javascript. El script se puede colocar en cualquier lugar de la página, pero lo mejor es colocarlo en la sección head para que se ejecute tan pronto como la página empieza a cargarse. Este es un ejemplo típico:&nbsp;&nbsp;
                        </p>
                        <p>&lt;head &gt;</p>
                        <p>&lt;script language="JavaScript"&gt;&nbsp;</p>
                        <p>function replaceLocation()&#123; &nbsp;&nbsp;location.replace('nuevapagina.html');&nbsp;&nbsp;&#125;&nbsp;</p>
                        <p>&lt;/script &gt;</p>
                        <p>&lt;/head &gt;&nbsp;</p>
                        <p>"nuevapagina.html" puede ser cualquier URL relativa o absoluta, al igual que un hipervínculo URL. &nbsp;</p>
                        <p>El uso de la función "reemplazar" de Javascript elimina la dirección URL del documento actual en el historial del documento, lo que significa que no es posible usar el botón "atrás" para navegar de vuelta al documento original. &nbsp;</p>
                        <p>Esta práctica constituye a todas luces un engaño al usuario. &nbsp;</p>
                        <p>Muchos usan este redireccionamiento en la sección action de la declaración de un formulario: &nbsp;</p>
                        <p>&lt;form name="myform" action="nuevapagina.html" method="get"&gt;&lt;/form &gt;&nbsp;</p>
                        <p>En la documentación de ayuda de Google dice esto acerca de redirecciones engañosas: &nbsp;</p>
                        <p>"JavaScript: coloca el mismo contenido JavaScript en una etiqueta &lt;noscript &gt;. Si utilizas este método, asegúrate de que el contenido sea exactamente igual al de JavaScript y que se muestre a los usuarios que no tengan JavaScript habilitado en el navegador."</p>
                        <h3>Motivaciones para redirecciones</h3>
                        <p>Existen redireccionamiento lícitos y engañosos, en todo caso piense acerca de la motivación para hacerlo. Pregúntese porque necesita ese redireccionamiento. ¿mejora la experiencia del usuario? ¿el usuario se sentirá satisfecho con la página donde le está redirigiendo? &nbsp;</p>
                        <p>
                            <strong>Lo importante sobre redirecciones:</strong>
                        </p>
                        <p>Siempre envie a los usuarios y motores de búsqueda al mismo lugar.</p>
                        <p>Si utiliza redireccionamientos engañosos tendrá que enfrentar las penalizaciones de Google.</p>
                        <p>La redirección es "engañosa" si envia al usuario a un sitio diferente del que esperaba. &nbsp;</p>
                        <p>
                            <strong>¿Como podemos detectar redireccionamientos engañosos?</strong>
                        </p>

                        <img src="\images\detectar redireccionamientos engaosos.jpg" height='142' width='356px' title="Observar la url del enlace es una técnica para saber el destino real del link" alt=" detectar redireccionamientos engañosos" />

                        <p>
                        Tambien es muy útil la extensión de Chrome link-revealer que mostrará la URL del enlace al que vas a hacer clic.
                        </p>

                        <p>Lea: Porque minimizar redirecciones</p>

                        <div className="author-section">
                            <h4>Sobre la autora</h4>

                            <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                            <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                        </div>
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

export default Redireccionaminetos;