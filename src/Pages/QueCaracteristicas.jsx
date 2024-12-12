import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const QueCaracteristicas = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Que características debe tener una contraseña para que sea segura en Joomla - Consultoria SEO';
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
                        <span title="Que caracter &iacute;sticas debe tener una contrase &ntilde;a para que sea segura en Joomla">Que caracter &iacute;sticas debe tener una contrase &ntilde;a para que sea segura en Joomla</span>
                    </div>

                    <div className="service-content-txt">

                        <ul className="unordered-list">
                            <li>debe ser de, al menos, 8 caracteres, siendo a partir de 12 lo correcto,</li>
                            <li>debe estar compuesta por letras (combinaci &oacute;n de may &uacute;sculas y min &uacute;sculas),</li>
                            <li>debe contener n &uacute;meros,</li>
                            <li>debe contener caracteres especiales permitidos, esto es $ &amp;/?</li>
                            <li>no deben ser palabras de diccionario,</li>
                            <li>no deben ser palabras que relacionen tu dominio,</li>
                            <li>no debe haber palabras que pertenezcan al nombre del dominio.</li>
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

export default QueCaracteristicas;