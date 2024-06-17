import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const Bloque = () => {
    //   PAGE TITLE
    useEffect(() => {
        document.title = 'Modulo Bloque Boostrap para joomla - Consultoria SEO';
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
                        <span title="Modulo Bloque Bootstrap para joomla">Modulo Bloque Bootstrap para joomla</span>
                    </div>

                    <div className="service-content-txt">
                        <ul className='unordered-list'>
                            <li>M&oacute;dulo para joomla 2.5 y joomla 3.X</li>
                        </ul>
<br /><br />
                        <p>Coloque un bloque Bootstrap con contenido personalizado en cualquier posici &oacute;n de modulo. Imagen en miniatura (thumbnails) con enlace a articulo, bot &oacute;n con enlace a articulo e iconos Font Awesome en bot &oacute;n boostrap, titulo y p &aacute;rrafo con selector de colores, selector de clase de bot &oacute;n Bootstrap. Recuerde: su plantilla debe trabajar con bootstrap y Font Awesome. Programaci &oacute;n limpia y eficiente.</p>

                        <p>Una vez que el m&oacute;dulo est&aacute; instalado:</p>

                        <ol className='ordered-list'>
                            <li>Asegurate que el m&oacute;dulo se publica.</li>
                            <li>A&ntilde;ade una posici&oacute;n al m&oacute;dulo.</li>
                            <li>Asigne el men&uacute;:</li>
                        </ol>

                        <div className='list-txt'>
                            <p>En todas las p&aacute;ginas</p>
                            <p>En todas menos la seleccionada.</p>
                            <p>En todas menos la seleccionada.</p>
                        </div>

                        <p>Recuerde: su plantilla debe trabajar con Bootstrap.</p>

                        <p><strong>Apoyo</strong>: <Link to='/contact' title="Contactenos" className='primary-color'>comuniquese con nosotros.</Link></p>

                        <p><strong>Configuraci&oacute;n de opciones avanzadas:</strong></p>

                        <img src="\images\Modulo Bloque boostrap para joomla.jpg" alt="Modulo Bloque boostrap para joomla" width='481' height='569' />

                        <span><strong>Caracter&iacute;sticas Modulo Bootstrap Jumbotron para joomla</strong></span>

                        <ul className='unordered-list'>
                            <li>Puede escribir y dar color al texto del header del jumbotron</li>
                            <li>Escribir y dar color al texto de parrafo</li>
                            <li>Definir si el p&aacute;rrafo ira o no centrado</li>
                            <li>Determinar si se mostrar&aacute; o no un bot&oacute;n boostrap</li>
                            <li>Escribir el texto del bot&oacute;n</li>
                            <li>Ingresar un link al bot&oacute;n</li>
                            <li>Elegir una clase de bot&oacute;n</li>
                            <li>Seleccionar una imagen de primer plano y su ancho</li>
                            <li>Seleccionar una imagen de segundo plano</li>
                            <li>Selecciona las posiciones X y Y de la imagen</li>
                            <li>Para joomla 2.5 y 3.X</li>
                        </ul>

                        <Link to='/modulos/demo-modulo' title='Demo Modulo Jumbotron Bootstrap para joomla' className='center primary-color'>Demo Modulo Jumbotron Bootstrap para joomla</Link>

                        <Link to='/modulos/demo-modulo' title="Descargar Mod_jumbotron_1.6 " className='primary-color center'>Descargar Mod_jumbotron</Link>

                    <div className="author-section">
                        <h1>Sobre la autora</h1>

                        <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                        <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                    </div>

                    <ul>
                        <li className='pagination-li'>
                            <Link to="/modulos/demo-modulo" className='primary-color'>&lt;Anterior</Link>
                        </li>

                        <li className='pagination-li'>
                            <Link to="/modulos/demo-modulo-bloque" className='primary-color'>Siguiente&gt;</Link>
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

export default Bloque
