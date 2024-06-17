import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const Jumbotron = () => {
    useEffect(() => {
        document.title = 'Modulo jumbotron boostrap para joomla - Consultora SEO';
    }, []);
  return (
    <>
      <section className='jombotron-container'>
        <BreadCrumb />
        <div className='content-container'>

            <div className="service-content ">
                <div className='column'>
                    <h1 className="service-content-head">Modulo Jumbotron Bootstrap para joomla</h1>

                <div className="service-content-txt">
                    <ul>
                        <li>M&oacute;dulo para joomla 2.5 y joomla 3.X</li>
                    </ul>
<br /><br />
                    <p>Modulo para mostrar el &nbsp;componente Jumbotron de bootstrap que permite exhibir contenidos de forma destacada. F&aacute;cil de instalar y usar.</p>

                    <p>Una vez que el m&oacute;dulo est&aacute; instalado:</p>

                    <ol>
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

                    <p>Apoyo: <Link to='/contact' title="Contactenos" className='primary-color'>comuniquese con nosotros.</Link></p>

                    <p>Configuraci&oacute;n de opciones avanzadas:</p>
                </div>

                <img src="\images\opciones avanzadas del modulo jumbotron.png" alt="opciones avanzadas del modulo jumbotron" width='481' height='601' />

                <h2><strong>Caracter&iacute;sticas&nbsp;Modulo Bootstrap Jumbotron para joomla</strong></h2>

                <ul className='list-txt'>
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

                <div>
                    <span className='pagination-li'>
                        <Link to="/modulos/demo-modulo" className='primary-color'>&lt;Anterior</Link>
                    </span>
                </div>
            </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Jumbotron
