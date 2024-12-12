import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoUsar = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Como usar el atributo alias en joomla - Consultoria SEO';
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
                        <span title="Como usar el atributo alias en Joomla">Como usar el atributo alias en Joomla</span>
                    </div>

                    <div className="service-content-txt">

                        <p>El atributo alias se usa en elementos de menú, categorías y artículos. El alias es el nombre interno de estos elementos. Joomla utiliza los alias para crear URLs amigables a los buscadores cuando SEF está activado. Existen limitaciones técnicas en relación al tipo de caracteres que pueden incluirse en las URLs. El alias debe estar formado por letras minúsculas y guiones altos (-).</p>

                        <p>Puede dejar el alias en blanco y joomla lo llenará con un valor predeterminado, el cual es el título. También puede ingresar el alias manualmente, de esta manera usted tendrá mayor control sobre la url generada:</p>

                        <p>Podrá controlar &nbsp;la longitud de la url generada.</p>

                        <p>Hace más fácil para los motores de búsqueda como google mostrar toda la URL en los resultados de busqueda sin tener que acortarla.</p>

                        <p>Los usuarios pueden comprender más sobre el contenido de la página. Cuando los motores de búsqueda indexan una página también pueden utilizar la URL como fuente de información acerca del contenido de la página.</p>

                        <p>Los caracteres no latinos son aquellos que forman parte del alfabeto hebreo, cirílico, chino, árabe etc. Estos caracteres son permitidos en el alias si se establece la opción unicode en Sí en la configuración global.Ejemplo. Si la opción unicode está establecida en No y el título incluye caracteres no latinos, el alías será por defecto la fecha y la hora actual, por ejemplo "2014-09-31-15-45-30".</p>

                        <p>Si usted deja espacios en blanco en el alias y/o guiones bajos en el alias, Joomla eliminará el espacio en blanco y el guión bajo (_) lo reemplazará con el guión alto (-).</p>

                        <p>Si modifica el título de un artículo, categoría o elemento de menú pero no modifica su viejo alias, el alias y la url que se crea a partir del alias no cambiará. En este caso cambie el título y deje en blanco su alias para generar uno nuevo de manera automática después de guardar el artículo. También puede modificar el alias manualmente.</p>

                        <p>Es recomendable incluir palabras clave en el alias y en el título para generar url con palabras clave y títulos con palabras clave.</p>

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

export default ComoUsar;