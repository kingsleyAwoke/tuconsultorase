import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const LasVunerabilidad = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Las Vulnerabilidades Lógicas - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Las Vulnerabilidades L &oacute;gicas</span>
                    </div>

                    <div className="service-content-txt">
                        <img src="\images\vulnerabilidades logicas.jpg" alt="vulnerabilidades logicas" width='199' height='200' />

                        <p><strong>Las vulnerabilidades l&oacute;gicas</strong> son problemas en la l &oacute;gica de la aplicaci &oacute;n web en lugar de un problema en el c &oacute;digo fuente. <strong>Las vulnerabilidades</strong> l&oacute;gicas pueden ser devastadores para una aplicaci &oacute;n web.&nbsp;Para demostrar una vulnerabilidad l&oacute;gica, voy a comprar 2 entradas para el concierto de un sistema de tickets en l&iacute;nea.&nbsp;Despu &eacute;s elijo mi banda favorita, la ubicaci &oacute;n y el n&uacute;mero de entradas, antes de entrar en los detalles de la tarjeta de cr &eacute;dito de la URL en el navegador muestra lo siguiente:</p>

                        <strong><em>http://concerts/final.asp?concertID=5 &amp;quantity=2 &amp;price=200.00</em></strong>

                        <p>Lo anterior significa que final.asp acepta tres par &aacute;metros de entrada, y proceder &aacute;a tratar de inyectar los tres, se har &aacute;a mano de forma autom &aacute;tica una lista de ataques de Internet para comprobar si final.asp es seguro.</p>

                        <p>Solo los seres humanos ser &iacute;an capaz de determinar que el verdadero significado de los par &aacute;metros que se pasa en la URL, que en este caso se refiere al n &uacute;mero de identificaci &oacute;n de conciertos, el n &uacute;mero de entradas que se compra y el precio de la transacci &oacute;n.&nbsp;&iquest;Y si se altera manualmente la direcci &oacute;n URL a la siguiente:</p>

                        <strong><em>http://concerts/final.asp?concertID=5 &amp;quantity=2 &amp;price=1.00</em></strong>

                        <p>&iquest;La aplicaci &oacute;n web aceptar &aacute;la petici &oacute;n con el nuevo precio?&nbsp;&iquest;Enviar &aacute;los boletos y s &oacute;lo cargar &aacute;a mi tarjeta de cr &eacute;dito 1$ o va a negar la solicitud?&nbsp;Es decir; esto es un problema de l&oacute;gica y un ser humano ser &aacute;capaz de determinar si hay un problema con la l&oacute;gica de la aplicaci&oacute;n web; &iquest;el usuario es capaz de obtener el producto a un precio mucho m &aacute;s bajo?.</p>

                        <p>Uno puede tener la presunci &oacute;n err &oacute;nea de que tales <strong>vulnerabilidades l&oacute;gicas </strong>
                            en una <strong>pagina web</strong>
                            no son una ocurrencia com &uacute;n. No hace mucho tiempo, una empresa de publicidad en l&iacute;nea ofreci &oacute;50$ de anuncios gratuitos a los nuevos subscriptores que compraran 50$ o m &aacute;s en publicidad.</p>

                            <p>El sistema ten &iacute;a un defecto en su dise &ntilde;o.&nbsp;Cuando un nuevo suscriptor se registraba, incluso si el abonado no compra cualquier cosa, &eacute; o ella todav &iacute;a conseguia los 50$ de publicidad gratuita.</p>

                            <font>As &iacute;, la aplicaci &oacute;n web ten &iacute;a un gran defecto y el negocio estaba perdiendo un mont &oacute;n de dinero.</font>

                            <p>&iquest;Que te pareci &oacute;este tipo de vulnerabilidades?</p>

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

export default LasVunerabilidad;