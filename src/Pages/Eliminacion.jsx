import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const Eliminacion = () => {
  // SEARCH BOX
  const [text, setText] = useState('http://');

  //   PAGE TITLE
  useEffect(() => {
    document.title = 'Eliminación de Malware - Consultoria SEO';
  }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='eliminacion-container contact'>

          <div className="service-content">
            <div className='column'>
              <div className="service-content-head">
                <span>Eliminación de Malware</span>
              </div>

              <div className="service-content-txt">

                <p>Pocas cosas son más desesperantes para un propietario de un sitio que el mismo haya sido hackeado o infectado con malware. Esto significa que alguien ha secuestrado su sitio web y a Ud. le cuesta tiempo, dinero y clientes.</p>

                <p>Podemos eliminar el malware para lograr que su sitio funcione correctamente de nuevo, y le ayudamos  a <strong>asegurar </strong>
                que el intruso no pueda recuperar el accesso a su sitio. Podemos desinfectar su sitio y asegurar que su computadora también esté segura. Eliminamos el malware a un precio razonable en función del tamaño y complejidad del sitio web.-</p>

                <p>Cuando su sitio se ve afectado por malware y ha sido hackeado ahuyenta a los visitantes, potenciales clientes y daña la reputación de su empresa. Se cobra $50.00 por una inspección inicial y diagnóstico. El costo final dependerá de la naturaleza y el alcance de la infección.</p>

                <p>Si desea realizar una comprobación rápida de malware en su sitio o cualquier otro sitio web, puede utilizar la herramienta de navegación segura de Google. Sólo tienes que escribir la url del sitio:</p>

                <form action="http://www.google.com/safebrowsing/diagnostic" method="get" target="_blank">
                  <input type="text" name="site" value={text} onChange={ (e) => setText(e.target.value) } size="60"/><br />
                  <input type="submit" value="Examinar esta url"/>
                </form>

                <p>La herramienta le dirá si Google ha detectado malware en el sitio web, el número de <strong>páginas web </strong>
                que se han probado en los últimos 90 días, y el número de redes (servidores) donde se aloja el sitio.</p>

                <p className='services-tel'>Ll &aacute;menos 584145142287 o <a href='tel:584145142287' title="Contactenos" className='primary-color'>cont&aacute;ctenos</a></p>

                <div className="author-section ">
                  <h4>Sobre la autora</h4>

                  <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                  <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                </div>

                <ul className='pagination-ul'>
                  <li className='pagination-li'><Link to='/servicios/hosting-joomla' className='primary-color'>&lt;Anterior</Link></li>

                  <li className='pagination-li'><Link to='/servicios/cursos-joomla' className='primary-color'>Siguiente&gt;</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Eliminacion