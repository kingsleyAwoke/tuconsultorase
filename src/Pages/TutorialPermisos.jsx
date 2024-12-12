import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const TutorialPermisos = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Tutorial permisos correctos de archivos y carpetas joomla - Consultoria SEO';
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
                        <span title="Tutorial permisos correctos de archivos y carpetas joomla">Tutorial permisos correctos de archivos y carpetas joomla</span>
                    </div>

                    <div className="service-content-txt">

                        <p>Los sistemas operativos como Unix y Linux utilizan <strong>permisos de acceso</strong>
                                , esto significa que saben cómo hacer frente a las solicitudes de acceso a los<strong> archivos y carpetas</strong>
                                . Hay tres tipos de acceso:</p>

                        <ul className="unordered-list">
                            <li>Ejecución: Se denotan con X, los archivos con accesso de ejecución pueden ser ejecutados como programas por parte del usuario.</li>
                            <li>Lectura: Se denotan con r (de read), los arcivos con accesso de lectura se pueden mostrar al usuario.</li>
                            <li>Escritura:  Se denotan con W (de write), los archivos con accesso de escritura pueden ser modificados por el usuario.</li>
                        </ul>

                        <p>Los permisos se dividen en 3:</p>

                        <ul className="unordered-list">
                            <li>Usuario. Es el propietario del archivo</li>
                            <li>Grupo. Son otros archivos que están en la misma carpeta o grupo.</li>
                            <li>Otros. Todos los demás.</li>
                        </ul>

                        <p>El servidor web debe ser capaz de leer sus páginas web con el fin de ser capaz de mostrarlas en el navegador. Los siguientes permisos se deben configurar para que su sitio web funcione correctamente:</p>

                        <ul className="unordered-list">
                            <li>Todas las carpetas necesitan ser ejecutables por otros. El valor de los permisos es 755, legibles por usuario, grupo y otros.Se ajusta automáticamente cuando se crea la carpeta.</li>
                            <li>Todos los archivos, bien sea imágenes, archivos HTML, PHP, log, ico deben ser leídos por otras personas. El valor del permiso es 644. Se ajustan automáticamente al cargar el archivo.</li>
                            <li>Todos los archivos CGI, los que se encuentran en la carpeta cgi-bin, necesitan ser ejecutables por otros. El valor es 755 (legible por usuario, grupo y otros, modificable por el usuario, ejecutable por el usuario, grupo y otros. No se ajusta automáticamente al cargar archivos. Es necesario cambiar los permisos de archivos manualmente.</li>
                        </ul>


                        <ol className="ordered-list">
                            <li><strong>permisos correctos de archivos y carpetas joomla</strong>
                            : Ingrese a su cuenta de Cpanel.</li>
                            <li><strong>permisos correctos de archivos y carpetas joomla</strong>
                            : Abra el administrador de archivos y navegue hasta el archivo o carpeta que desea cambiar.</li>
                            <li><strong>permisos correctos de archivos y carpetas joomla</strong>
                            : Haga clic en el archivo o carpeta.</li>
                            <li><strong>permisos correctos de archivos y carpetas joomla</strong>
                            : Haga clic en Cambiar permisos en el menú superior.</li>
                            <li> <strong>permisos correctos de archivos y carpetas joomla</strong>
                            : Haga clic en tantas casillas como sea necesario para crear los permisos adecuados. Los números de permisos debajo de las casillas de verificación se actualizarán automáticamente.</li>
                            <li><strong>permisos correctos de archivos y carpetas joomla</strong>
                            : Por último haga clic en el botón cambiar permisos cuando esté listo. El nuevo nivel de permisos se guarda y la pantalla se actualiza para mostrar el archivo o carpeta modificado.</li>
                        </ol>

                        <img src="\images\permisos correctos en archivos y carpetas joomla.jpg" alt="permisos correctos en archivos y carpetas joomla.jpg" title="permisos correctos en archivos y carpetas joomla.jpg" width="593" height="363" />

                        <p>Una parte parte importante de tener un sitio web Joomla <strong>seguro</strong>
                        es establecer los permisos correctos para los archivos de Joomla y carpetas. Le recomendamos que siga estas sugerencias para sus permisos:</p>

                        <ul className="unordered-list">
                            <li>* Establezca los permisos para las carpetas de Joomla a <strong>755</strong></li>
                            <li>* Establezca los permisos para los archivos de Joomla a <strong>644</strong></li>
                            <li>* Establezca los permisos para el archivo configuration.php a <strong>444</strong></li>
                            <li>* Nunca use 777 (acceso completo) permisos!</li>
                            <li>¡Si te gusto el artículo por favor comparte!</li>
                        </ul>

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

export default TutorialPermisos;