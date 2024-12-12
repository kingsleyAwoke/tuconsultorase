import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const PorqueMinimizer = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Porque minimizar redirecciones - Consultoria SEO';
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
                        <span title="Porque minimizar redirecciones">Porque minimizar redirecciones</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Porque minimizar redirecciones: Hay muchas buenas razones para tener redirecciones, pero hay que tener en cuenta que estropean la experiencia del usuario y causan problemas de velocidad. La utilización de un redireccionamiento obliga al navegador a buscar nuevamente la página web perdiendo un tiempo, a veces, notable.</p>
                        <p>Las redirecciones web se consiguen utilizando los códigos de estado 301 y 302. He aquí un ejemplo de las cabeceras HTTP 301 en una respuesta:</p>
                        <p>HTTP/1.1 301 Moved Permanently</p>
                        <p>Location: http://ejemplo.com/nuevauri</p>
                        <p>Content-Type: text/html</p>

                        <p>Un redireccionamiento 301 es permanente y una redirección 302 es temporal.</p>

                        <p>Tal vez una de las redirecciones más usadas ​​en la web es la redirección 301 permitiendo redirigir todo el sitio de la no-www a la versión www de una página web.</p>

                        <p>El navegador automáticamente lleva al usuario a la página especificada en el campo Location. Toda la información necesaria para el redireccionamiento está en el encabezado. Ni un archivo con 301 ni uno con 302 es cacheado en la práctica a menos que tenga otras cabeceras, como Expires o Cache-Control.</p>

                        <p> La etiqueta meta refresh y JavaScript son otras formas de dirigir a los usuarios a una URL diferente, pero si usted tiene que hacer un redireccionamiento. Conozca otros tipos de redirecciones.</p>

                        <p>¿Cómo afectan las redirecciones la velocidad de la <strong>pagina web</strong>
                        ?</p>

                        <p>Hacen que sus páginas se cargan más lentamente, ya que se pierde tiempo para ir a un lugar sólo para ser redirigido a otro.</p>

                        <p>Google sugiere eliminar redirecciones que no sean absolutamente necesarios. Google sugiere la eliminación de ellas port:</p>

                        <ul className="unordered-list">
                            <li>Nunca enlace a una página que sabes que tiene una redirección en ella. Esto sucede cuando se ha creado manualmente la redirección, pero no se actualizo el vínculo en el código HTML para que apunte a la nueva ubicación.</li>
                            <li>No requieren más de una redirección para llegar a cualquiera de sus destinos.</li>
                        </ul>

                        <h2><em>No olvide que su <strong>página web </strong>
                        no carga solo HTML</em></h2>

                        <p>Prácticamente todas las <strong>páginas web </strong>
                        requieren otras cosas para cargar. Usted puede pensar que no vuelve a dirigir en el código HTML, pero ¿qué pasa con los archivos CSS, imágenes o secuencias de comandos externos?</p>

                        <p>Por otra parte, asegúrese de que todos los enlaces internos a su <strong>página  web </strong>
                        utilizan sistemáticamente la URL canónica.</p>

                        <p>Quiza le interese leer Redireccionamientos engañosos</p>

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

export default PorqueMinimizer;