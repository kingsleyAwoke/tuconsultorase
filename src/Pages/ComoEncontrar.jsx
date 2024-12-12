import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoEncontrar = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Como encontrar HTTP Error 500 en joomla! - Consultoria SEO';
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
                        <span title="Como encontrar HTTP Error 500 en joomla!">Como encontrar HTTP Error 500 en joomla!</span>
                    </div>

                    <div className="service-content-txt">

                        <p>A veces, después de instalar una extensión para Joomla, usted recibe un error HTTP 500 (Error interno del servidor) en su sitio. La mejor manera de encontrar la razón de ello es comprobar el informe de errores, verá una lista de los mensajes de error generados por su sitio web</p>

                        <h3 className='primary-color'>Cómo visualizar el informe de errores en Joomla!</h3>

                        <ul className="unordered-list">
                            <li>Entra al <em>Administrador de</em> back-end de Joomla! y vaya a <em>Configuración global.</em></li>
                            <li>Seleccione la pestaña <em>Servidor</em>.</li>
                        </ul>

                        <ol className="ordered-list">
                            <li>Vaya a <em>Reporte de Errores</em>.</li>
                            <li>Cambie al <em>máximo</em> en la lista desplegable.</li>
                        </ol>

                        <img src="\images\joomla-error-reporting.jpg" border="0" alt="Cómo visualizar el informe de errores en Joomla!" title="Cómo visualizar el informe de errores en Joomla!" width="617" height="529" />

                        <p>Cuando haya terminado, haga clic en <em>Guardar.-</em></p>

                        <ul className="unordered-list">
                            <li>Ahora, vaya a su sitio web (Inicio) y pulse <em>F5</em> (en el teclado) para actualizar su navegador web. Verá una lista de los últimos mensajes de error generados por su sitio web.</li>
                            <li>En este listado podrá encontrar información útil y detallada acerca de cada error que incluye: parte de la información sobre el cliente que recibe el error, descripción del error y la información acerca de qué carpeta o archivo genera el error.</li>
                        </ul>

                        <Link to='/' className='primary-color'>Inicio</Link>

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

export default ComoEncontrar;