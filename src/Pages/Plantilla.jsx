import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const Plantilla = () => {
//   PAGE TITLE
    useEffect(() => {
        document.title = 'Plantillas para Joomla gratis - Consultoria SEO';
    }, []);
  return (
    <>
      <section className='seo-imgne plantilla'>
        <BreadCrumb />
        <div className='main-section container seo-imgne-container'>
            
            <LeftContent />

            <div className="service-content">

                <img src="\images\5_.jpg" width='400' height='200' className='plantilla-img' />

                <div className="service-content-txt">
                    <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean"</p>
                </div>

                <div className='column'>
                    <div className="service-content-head">
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Plantilla Bootstrap Atomicai</span>
                    </div>

                    <div className="service-content-txt">
                        <p>La <strong>plantilla bootstrap Atomicai </strong> est &aacute;basada en el Framework Bootstrap para joomla 2.5 y 3.X. <strong>Atomicai</strong> esta construida sobre <strong>Bootstrap</strong> <Link to="http://getbootstrap.com" target="_blank" title="http://getbootstrap.com/" className='primary-color'>http://getbootstrap.com</Link></p>

                        <p>Twitter <strong>Bootstrap</strong> es un framework o conjunto de herramientas de software libre para dise &ntilde;o de sitios y aplicaciones web, contiene plantillas de dise &ntilde;o con tipograf &iacute;a, formularios, botones, cuadros, men &uacute;s de navegaci &oacute;n y otros elementos de dise &ntilde;o basado en HTML y CSS, as &iacute;como, extensiones de JavaScript opcionales adicionales.</p>

                        <p>La<strong> plantilla bootstrap Atomicai </strong>es una plantilla de negocio, personal o adaptable basada en el sistema de grillas de <strong>Bootstrap</strong> que es muy f &aacute;cil de utilizar, permitiendo agilizar el proceso de maquetaci &oacute;n. La <strong>plantilla bootstrap </strong>es una plantilla ligera, permite incluir en c &oacute;digo de Google analytics y usa la fuente tipogr &aacute;fica <strong>Font Awesome</strong>, que es una fuente de iconos que permite insertar iconos sociales y s &iacute;mbolos en lugar de im &aacute;genes, haciendo la plantilla a &uacute;n m &aacute;s ligera.</p>

                        <br /><br />
                        <p><strong>Atomi</strong><strong>ca</strong>i cuenta con dise &ntilde;o adaptable (responsitive) a diversos dispositivos como tables, laptops, mobiles (es joomla mobil amigable) y permite modificar el c &oacute;digo basandose en Bootstrap y/o agregar m &oacute;dulos de joomla. Dise &ntilde;o simple, limpio y elegante que es f &aacute;cil de editar. El dise &ntilde;o es flexible y se puede adaptar a otros temas de negocios o individuales.</p>

                        <p className='template-txt'>&iexcl;&iexcl;La<strong>&nbsp;</strong><strong>plantilla bootstrap Atomicai </strong>viene con 14 posiciones!!. <img alt="plantilla bootstrap atomicai gratuita" src="\images\template_preview.png" title="plantilla bootstrap atomicai gratuita" width='200' height='200' className='template-img'/></p>

                        <Link to='/plantilla/plantillas-joomla' title="Demo Plantilla AtomicaI" className='primary-color center'>Ver demo plantilla AtomicaI</Link>

                        <p><strong>Posiciones de la Plantilla Boostrap Atomicai</strong> :</p>

                        <img src="\images\posiciones plantilla boostrap atomicai.jpg" alt="posiciones plantilla boostrap atomicai" />

                        <p>Atomicai cuenta con 14 posiciones de m&oacute;dulo. Para ver todas las posiciones:</p>

                        <ol className='ordered-list'>
                            <li>Haga clic en Extensiones &gt;Gestor de plantillas</li>
                            <li>Haga clic en Opciones</li>
                            <li>Habilitar vista previa del m &oacute;dulo Posiciones</li>
                            <li>Escriba el siguiente URL en su navegador para ver todas las posiciones de m &oacute;dulo: su-sitio.com/?tp=1</li>
                        </ol>

                        <p><strong>Instalaci &oacute;n Atomicai:</strong></p>
                        
                        <p>Despu &eacute;s de descargar Atomicai</p>

                        <ol className='ordered-list'>
                            <li>Vaya al Administrador de Joomla (www.su-sitio.com/administrator) -&gt;Extensiones -&gt;Instalar/Desinstalar</li>
                            <li>En el &quot;Gestor de Extensiones &quot;elija la primera opci &oacute;n &quot;Subir paquete &#39;.</li>
                            <li>Haga clic en el bot &oacute;n &quot;Examinar ...&quot;para seleccionar el archivo zip desde el computador.</li>
                            <li>Haga clic en el bot &oacute;n &quot;Subir e Instalar &quot;.</li>
                        </ol>

                        <p>Instale el m &oacute;dulo bootstap Jumboron y coloquelo en la posici &oacute;n atomicai-jumbotron, lea la <Link to="/modulos/jumbotron" title="Documentación del modulo bootstrap Jumbotron" className='primary-color'>documentaci &oacute;n del modulo boostrap jumbotron</Link></p>

                        <p>Instale el m &oacute;dulo bootstrap Bloque y coloquelos en las posiciones atomicai-topa-1, atomicai-topb1, atomicai-topc-1 hasta atomicai-topc-3. ( 9 modulos bloque). Lea la <Link to="/modulos/bloque" title="Documentación del módulo boostrap Bloque" className='primary-color'>documentaci &oacute;n del m &oacute;dulo bloque</Link></p>

                        <Link to='http://tuconsultoraseo.com//descargas/Plantilla Boostrap Atomicai.zip' className='primary-color center' title="Descargar plantilla AtomicaI">Descargar plantilla Boostrap AtomicaI</Link>
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

export default Plantilla
