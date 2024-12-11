import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoEspecifcar = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Como especificar dimensiones de imagen. - Consultoria SEO';
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
                        <span title="Como especificar dimensiones de imagen.">Como especificar dimensiones de imagen.</span>
                    </div>

                    <div className="service-content-txt">

                        <h2>¿Por qué declarar el alto y ancho de las imágenes? Porque esto es necesario.</h2>

                        <p>
                        <strong>Cómo especificar dimensiones de imagen: </strong>
                        Cuando un navegador Web muestra su <strong>página web</strong>
                        tiene que averiguar muchas cosas antes de que pueda ver su contenido. Una de las cosas más simples e importantes que debe hacer es insertar sus imagenes con suficiente información en torno a ellas. Usted sólo puede hacer esto si sabe de qué tamaño son sus imágenes.
                        </p>

                        <p>
                        Si usted no le dice al navegador el tamaño de las imágenes, éste debe "construir" la página no una vez, sino dos veces (o más veces dependiendo de la cantidad de imágenes que tenga en la página). Se construirá una vez para mostrar todo el texto, y luego se va a esperar hasta que cada imagen se haya descargado. Cuando una imagen se descarga, el navegador puede determinar el tamaño de la imagen y reconstruirá la <strong>página web</strong>
                        para ajustar el texto alrededor de esa imagen. Este proceso va a suceder para cada imagen en su página.
                        </p>

                        <p>Si especifica las dimensiones de la imagen, ya se sabe el tamaño de las imágenes y se puede utilizar esa información para dar forma a la página. No tendrá que reconstruir la página tantas veces como imagenes tenga.</p>
                    <p>
                        <strong>Cómo especificar dimensiones de imagen</strong>
                    </p>
                    <p>Para especificar las dimensiones de la imágen, se inserta un pequeño trozo de código en las etiquetas de imagen.</p>
                    <p>Aquí está un ejemplo etiqueta de imagen sin dimensiones de la imagen ...</p>
                    <p>&lt;img src="/image.jpg"/&gt;</p>
                    <p>El siguiente es un ejemplo etiqueta de imagen con dimensiones de imagen incluidos (alto y ancho) ...</p>
                    <p>&lt;IMG SRC="imagen.jpg" WIDTH=178 HEIGHT=180 &gt;</p>
                    <p>
                        La adición de la altura y la anchura de las imágenes puede realmente ayudar a sus <strong>páginas web</strong>
                        para que se carguen más rápido y se ven mejor.
                    </p>

                    <p>Para saber más sobre como diseñar una <strong>pagina web</strong>  para seo lea Diseño de páginas web para seo</p>

                        <Link to='/' className='primary-color'>Inicio</Link>

                        <div className="author-section">
                            <h4>Sobre la autora</h4>

                            <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                            <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                        </div>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="importancia" className='primary-color'>&lt;Anterior</Link>
                        </li>

                        <li className='pagination-li'>
                            <Link to="optimizacion-interna" className='primary-color'>Siguiente&gt;</Link>
                        </li>
                    </ul>
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

export default ComoEspecifcar;