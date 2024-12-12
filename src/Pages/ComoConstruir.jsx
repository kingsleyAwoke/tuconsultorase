import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoConstruir = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Como construir un cotizador, calculadora o formula en joomla - Consultoria SEO';
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
                        <span title="Como construir un cotizador, calculadora o formula en joomla">DComo construir un cotizador, calculadora o formula en joomla</span>
                    </div>

                    <div className="service-content-txt">

                        <p> En la siguiente página usted podrá construir su propio  modulo calculadora para su sitio joomla: http://andrewart.net/jcg/.  Ud. podrá crear calculadoras o cotizadores en línea sin tener conocimientos en PHP. CSS o HTML.</p>

                        <p>Es importante que entienda que usted sólo deberá generar su propio módulo personalizado que incluya los calculos que necesita con los parámetros adecuados, una vez haya creado el módulo, solo deberá probarlo, descargarlo e instalarlo en su sitio joomla.</p>

                        <p>Para generar su módulo personalizado, solo deberá ingresar en la página http://andrewart.net/jcg y efectuar 3 sencillos pasos:</p>

                        <p>Paso1:</p>
                        <img src="\images\Paso 1 del generador de mdulo de calculadora para joomla.png" alt="Paso 1 del generador de módulo de calculadora para joomla" title="Paso 1 del generador de módulo de calculadora para joomla" width="480" height="114" />

                        <p>Paso 2:</p>
                        <img src="\images\Paso 2del generador de mdulo de calculadora para joomla.png" alt="Paso 2 del generador de módulo de calculadora para joomla" title="Paso 2del generador de módulo de calculadora para joomla" width="473" height="149" />

                        <p>Paso 3:</p>

                        <img src="\images\Paso 3 del generador de mdulo de calculadora para joomla .png" alt="Paso 3 del generador de módulo de calculadora para joomla" title="Paso 3 del generador de módulo de calculadora para joomla" width="463" height="102" />

                        <p>Finalmente Ud. podrá probar el funcionamiento de su módulo, incluir un botón reset para limpiar los campos, darle un nombre a su módulo y si está satisfecho con el comportamiento del mismo lo podrá descargar.</p>

                        <img src="\images\permisos correctos en archivos y carpetas joomla.jpg" alt="Probando y dando un nombre al módulo de calculadora para descargarlo" title="Probando y dando un nombre al módulo de calculadora para descargarlo" width="466" height="77" />

                        <p>Puede crear largas y complejas calculadoras, fórmulas o cotizadores en línea con muy pocos clics. También puede ver los módulos de demostración.</p>

                        <p>El siguiente es un cotizador de tiendas on line utilizado el módulo generado con este magnífico modulo de calculadora:</p>

                        <form action="">
                                <ul className="unordered-list">
                                    <li>
                                        <label>Seleccione su solución de e-commerce</label>
                                        <select>
                                            <option value="1">Magento</option>
                                            <option value="2">OpenCart</option>
                                            <option value="3">PrestaShop</option>
                                        </select>
                                    </li>
                                    <div>
                                        <label>Este Cotizador de aplicaciones de e-commerce es para efectos de prueba.</label>
                                    </div>
                                </ul>
                            <input type="submit" id="calc-button" name="submit_cotizacin_tienda_online" value="Obtener precio!"/>
                        </form>

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

export default ComoConstruir;