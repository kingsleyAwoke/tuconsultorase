import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const Mejoras = () => {
  //   PAGE TITLE
  useEffect(() => {
    document.title = 'Mejoras de Software - Consultoria SEO';
  }, []);
  return (
    <>
      <section className='services'>
        <BreadCrumb />
        <div className='contact'>

          <div className="service-content">
            <div className='column'>
              <div className="service-content-head">
                <span>Mejoras de software</span>
              </div>

              <div className="service-content-txt">

                <p>Si su sitio web se basa en secuencias de comandos para los carros de compras, blogs, foros, sistemas de gesti &oacute;n de contenidos, galer &iacute;as de fotos, formularios de contacto, u otras secuencias de comandos de software, podemos <strong>asegurarle </strong>
                si est &aacute;ejecutando la &uacute;ltima versi &oacute;n.</p>

                <p>Si un script no funciona bien puede hacer sentir a los usuarios frustrados y perderlos para siempre. Ayudaremos a instituir un proceso de copia de <strong>seguridad </strong>
                fiable para su sitio web para mantener sus archivos importantes a salvo de fallas en el servidor o ataques de hacking.</p>

                <p>No nos cansaremos de recalcar que nuestros <strong>expertos en seo </strong>
                (<strong>posicionamiento en buscadores</strong>
                ) pueden optimizar sus metaetiquetas de titulo, metadescripciones, palabras clave de contenido y dem &aacute;s aspectos <strong>seo </strong>
                para que su sitio consiga ser encontrado por los usuarios interesados en sus productos y servicios.</p>

                <p className='services-tel'>Ll &aacute;menos 584145142287 o <a href='tel:584145142287' title="Contactenos" className='primary-color'>cont&aacute;ctenos</a></p>

                <div className="author-section ">
                  <h4>Sobre la autora</h4>

                  <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                  <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                </div>

                <ul className='pagination-ul'>
                  <li className='pagination-li'><Link to='/servicios/tiendas-online' className='primary-color'>&lt;Anterior</Link></li>

                  <li className='pagination-li'><Link to='/servicios/hosting-joomla' className='primary-color'>Siguiente&gt;</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mejoras