import { Link, NavLink } from 'react-router-dom';

const Main = () => {
  return (
    <section className='main-section container'>
        <div className="subscribe-window">
            <form action="chill" className="subscribe-form">
                <p><strong>suscripción por email</strong></p>
                <br />
                <p>Ingrese su email</p>
                <br />
                <input type="text" name="email" className='no-focus' />
                <br />
                <br />
                <input type="submit" value="Subscribirme" className='submit-btn'/>
            </form>

            <div className="tutor-window">
                <h3>Tutorial SEO optimizacion para motores de busqueda</h3>

                <div className="tutor-img">
                    <Link to='/blog/seo'>
                    <img src="\images\tutorial seo gratuito.jpg" alt="A s.e.o tutor" width='450' height='131' />
                    </Link>
                </div>
            </div>

            <div className='tutor-window-txt'>
                <p>Tutorial SEO paso a paso con herramientas SEO gratuitas. Con metodología &quot;sombrero blanco &quot;que se    apega a las directrices de los motores de búsqueda, altamente ético.</p>

                <Link to='/blog/seo' className='primary-btn  tutor-window-link'>Leer mas sobre el tutorial SEO</Link>
            </div>
        </div>

        <div className="service-content">
            <div className="service-content-head">
                <span title="Diseño de Paginas web y seo. Acelerar sitio Joomla">Diseño de Paginas web y seo. Acelerar sitio Joomla</span> 
            </div>

            <div className="service-content-txt">
                <p><span>Al tener un sitio web con nuestros </span><strong>especialistas Joomla</strong><span>usted añadirá una segunda puerta principal de acceso a su empresa. Nuestra imagen en internet puede cerrar o abrir puertas a futuros clientes. La comunicación con sus clientes es fundamental, el sitio web pierde interés si no está actualizado.&ndash;</span></p>

                <p className="service-content-head-first">Servicios</p>

                <p>Construimosy<strong>diseñamos</strong>su sitio web en Joomla.<strong>Aceleraramos sitio Joomla</strong>Asesoramiento sobre el nombre de dominio más adecuado para su negocio. Realizamos un estudio para ofrecer a nuestros clientes la solución más adecuada a sus necesidades. Damos de alta su sitio web en los principales buscadores. Podemos llevar tu campaña <strong>SEO</strong>o SEM, <strong>posicionando tu sitio web en Google</strong>. Ofrecemos un hosting &#40;alojamiento&#41;profesional a un precio sin competencia. Desarrollamos su tienda online. <strong>Seo</strong>&#40;<strong>posicionamiento en buscadore</strong>s&#41;.</p>

                <p className='service-content-head-second'>Joomla Diseño de Paginas Web</p>
                <p>Especialistas Joomla en <strong>diseño de paginas web</strong>, desarrollo de sitios web específicos a medida, para las necesidades de nuestros clientes. Nuestros <strong>especialistas </strong><strong>Joomla</strong>en diseño web, se encargarán de abrir un segundo canal de marketing a su negocio, vea nuestro portafolio de <strong>diseño web</strong>. Totalmente compatible con todos los estándares de <strong>diseño web</strong>, nuestros sitios web diseñados a medida funcionan exactamente como sea necesario debido a nuestros estándares de desarrollo y plataforma extensible de Joomla.</p>

                <Link to='/servicios/diseno-de-pagainas-web' className='primary-color nowrap'>Leer más: Diseño de paginas web y seo. Acelerar sitio Joomla</Link>
            </div>
        </div>

        <div className="quick-access">
            
            <div className="quick-link">
            <p className='primary-btn quick-access-header'>LosmásPopulares</p>
                <ul>
                    <li><NavLink to='/blog/seguridad' className='primary-color'>Importancia del archivo robots.txt para la seguridad y el seo</NavLink></li>
                    <li><NavLink to='/blog/seo' className='primary-color'>Optimización interna de una pagina web</NavLink></li>
                    <li><NavLink to='/blog/joomla' className='primary-color'>Dónde se inserta el código de Google Analytics en Joomla! 2.5</NavLink></li>
                    <li><NavLink to='/blog/joomla' className='primary-color'>htaccess en joomla!</NavLink></li>
                    <li><NavLink to='/blog/seo' className='primary-color'>Las directrices para webmaster de Google</NavLink></li>
                    <li><NavLink to='/blog/seo' className='primary-color'>Las directrices para webmaster de Google</NavLink></li>
                    <li><NavLink to='/blog/joomla' className='primary-color'>Como construir un cotizador, calculadora o formula en joomla</NavLink></li>
                    <li><NavLink to='/blog/joomla' className='primary-color'>Como encontrar HTTP Error 500 en joomla!</NavLink></li>
                    <li><NavLink to='/blog/seo'className='primary-color'>Inline small CSS</NavLink></li>
                    <li><NavLink to='/blog/seo'className='primary-color'>Causas de disminucion de visitas o trafico web</NavLink></li>
                    <li><NavLink to='/blog/e-commerce'className='primary-color'>Que aspectos considerar en e-commerce para garantizar su exito</NavLink></li>
                    <li><NavLink to='/blog/seguridad'className='primary-color'>Como quitar la advertencia de malware por parte de Google</NavLink></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Main
