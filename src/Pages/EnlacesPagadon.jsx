import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const EnlacesPagadon = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Enlaces pagados y publicidad - Consultoria SEO';
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
                        <span title="Enlaces pagados y publicidad">Enlaces pagados y publicidad</span>
                    </div>

                    <div className="service-content-txt">

                        <p>La compra y venta de enlaces que pasan pagrank es una violación de las directrices de Google. Esto se debe a que al pasar pagerank estan tratando de tener un impacto en los motores de búsqueda, se está manipulando los resultados de los motores de búsqueda.  Asi puede observar el siguiente video donde Matt Cutts responde porque los enlaces de pago violan las directrices de Google.</p>

                        <iframe width="560" height="315" src="https://web.archive.org/web/20160314235511if_/https://www.youtube.com/embed/12PP7bHnQ9o" frameborder="0" allowfullscreen></iframe>

                        <p>Lo que está en contra de las directrices de Google es mostrar anuncios que manipulen o afecten la clasificación  del comprador del anuncio ya que viola sus directrices. Lo importante es conocer que anuncios con enlaces de pago afectan la clasificación, lo cual es malo y cuales no afectan la clasificación, esto es bueno.</p>

                        <p>Si su <strong>pagina web</strong>
                        ya tiene enlaces de pago que pasan pagerank, elimínelos lo más pronto posible, no espere una penalización, no importa si ha venido adquiriendolos en los últimos 2 o 5 años, porque esperar una reconsideranción posiblemente puede llevar mucho tiempo.</p>

                        <p>Cualquier anuncio que pasa pagerank está en contra de las directrices de Google.</p>

                        <h2>¿Cómo puedo saber si mis anuncios y enlaces pagados no están afectando a las clasificaciones?</h2>
                        <p>Cualquier vínculo con el atributo rel  = "nofollow" no se utilizará para calcular el PageRank o para determinar la relevancia de sus páginas para una consulta del usuario.</p>

                        <h3> <strong>Si usted está vendiendo enlaces con fines publicitarios, usted debe manejar esto de la siguiente forma:</strong></h3>

                        <ul className="unordered-list">
                            <li>Agregando rel = "nofollow" a la etiqueta &lt;a href &gt;</li>
                            <li>Redirigir los enlaces a una página intermedia que está bloqueada a los motores de búsqueda en un archivo robots.txt.</li>
                        </ul>

                        <p>Es su responsabilidad como propietario de un sitio o <strong>pagina web</strong>
                        , dejar claro a los anunciantes que la publicidad que se publique en su sitio no afectará sus clasificaciones.</p>

                        <h4>Lo que debe saber si está publicando anuncios o piensa hacerlo:</h4>
                        <p>Si está anunciando con Google Adsense:</p>

                        <p>Los anuncios de Google Adsense no afectan ranking. Si la única publicidad en sus <strong>páginas web</strong>
                        es Adsense no es necesario hacer ningún cambio en su código para asegurarse de que está siguiendo esta directriz.</p>

                        <p>Si está anunciando con doubleclick:</p>
                        <p>Los anuncios de DoubleClick no afectan ranking. Si la única publicidad en sus páginas web es DoubleClick no es necesario realizar ningún cambio en su código para asegurarse de que usted está siguiendo esta directriz.</p>

                        <p>Si está anunciando en la red Bing/Yahoo:</p>

                        <p>Los anuncios de Bing no afectan ranking. Si la única publicidad en sus <strong>páginas web</strong>
                        es de la red de Bing/Yahoo no es necesario realizar ningún cambio en su código para asegurarse de que usted está siguiendo esta directriz.</p>

                        <p>Es su responsabilidad averiguar si la publicidad por usted elegida afectará o no el ranking y si debe o no realizar cambios en el código para asegurarse que no está infringiendo las directrices de Google.</p>

                        <p><strong>Si usted está vendiendo enlaces de pago o está mostrando anuncios de empresas o sitios web particulares es probable que necesite tomar medidas.</strong></p>

                        <p>Ud puede colocar un enlace al sitio web sin afectar la clasificación, es decir; el enlace no debe pasar pagerank, de este modo usted estará respetando ésta directiva.</p>

                        <p><strong>Para enlaces de afiliados en su sitio web, usted probablemente tendrá que tomar medidas.</strong></p>

                        <p>Los anuncios de afiliados son anuncios, y no deben afectar la clasificación. Esto significa que estos vínculos deben ser nofollow o redirigidos y bloqueadas por robots.txt, si no lo son, entonces no están respetando esta pauta de Google.</p>

                        <p>Si usted está <strong>comprando o vendiendo notas de prensa</strong>
                        que contienen enlaces a sus <strong>páginas web</strong>
                        , entonces usted probablemente tendrá que tomar medidas</p>

                        <p>Si va a pagar o recibir dinero para colocar enlaces en otro sitio web, usted está anunciando. Esto significa que estos vínculos deben ser nofollow o redirigidos y bloqueadas por robots.txt, si no lo son, entonces no están siguiendo esta directriz de Google y su <strong>seo</strong>
                        no estará bien construido.</p>

                        <p>Como debe usted  manejar los enlaces pagados.</p>

                        <p><strong>¿Como respetar la directriz mediante el atributo rel="nofollow"?</strong></p>

                        <p>El enlace al anuncio:</p>
                        <div>&lt;a href="http://www.anuncio.com"&gt;anuncio &lt;/ a &gt;</div>
                    <div></div>
                    <div>Para  agregar el atributo nofollow, coloque el siguiente código en el vínculo</div>
                    <div></div>
                    <div>rel = "nofollow"</div>
                    <div></div>
                    <div>El atributo nofollow en el enlace tendrá el siguiente aspecto ...</div>
                    <div></div>
                    <div>&lt;a href="http://www.anuncio.com" rel="nofollow"&gt;anuncio &lt;/a &gt;</div>
                    <div></div>
                    <div>
                        <strong>¿Como respetar la directriz mediante Redireccionar y robot.txt?</strong>
                    </div>
                    <div></div>
                    <div>El enlace anunciante es redirigido a una página en su sitio web que está bloqueada por el archivo robots.txt. Este método permite a los visitantes ir a través del enlace, pero no pasa pagerank, por lo que no afecta a las clasificaciones web.</div>
                    <div></div>
                    <div>Utilice los métodos descritos anteriormente para garantizar que sus anuncios no afectarán las clasificaciones, obviamente el primer método es mucho más sencillo y con él estamos indicando que el enlace es de pago pero no se está transfiriendo pagerank por lo que se respeta la directriz.</div>
                    <div></div>
                    <div>
                        Puede comprobar la información en este vínculo de Google
                    </div>
                    <div></div>
                    <div>
                        Adicionalmente, Ud puede indicarle a Google mediante un formulario sobre enlaces de pago.
                    </div>
                    <div></div>
                    <div>El hecho de que Google necesite que se le indique quien está comprando y vendiendo enlaces es una señal de que los algoritmos de Google no estan optimizados para detectar este tipo de enlaces.</div>
                    <div></div>
                    <div>Si te ha gustado el artículo ¡Compartelo!</div>

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

export default EnlacesPagadon;