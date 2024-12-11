import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ImportanciaDeusar = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Importancia de usar un nombre de usuario y contraseña fuerte - Consultoria SEO';
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
                        <span title="Importancia de usar un nombre de usuario y contrase &ntilde;a fuerte">Importancia de usar un nombre de usuario y contrase &ntilde;a fuerte</span>
                    </div>

                    <div className="service-content-txt">

                        <p>En Joomla utilizamos nombres de usuario y contrase &ntilde;as. En general usamos nombres de usuario y contrase &ntilde;as en multitud de circunstancias en la vida diaria.</p>

                        <p>Es crucial crear un <strong>nombre de usuario fuerte</strong> contrase &ntilde;a segura para proteger su sitio web Joomla al crear una cuenta de usuario en su sitio. Cualquier sitio web Joomla que emplea nombres de usuario y contrase &ntilde;as se debe crear con la atenci &oacute;n dedicada a asegurar que las buenas pr &aacute;cticas de <strong>seguridad</strong>
                        son seguidos por todos los usuarios. Si usted, como administrador del sitio o sus usuarios es descuidado acerca de c &oacute;mo se eligen los nombres de usuario y contrase &ntilde;as o credenciales del administraci &oacute;n, m &aacute;s tarde o mas temprano, un &quot;hacker &quot;o un &quot;botnet &quot;pueden descubrir que es relativamente f &aacute;cil romper la <strong>seguridad</strong>
                        de su sitio.</p>

                        <p>Usted debe desarrollar m &eacute;todos y proporcionar informaci &oacute;n a los potenciales usuarios de su sitio para que la selecci &oacute;n de nombres de usuario y contrase &ntilde;as seguras no resulten &nbsp;f &aacute;cilmente averiguables.</p>

                        <p>&iquest;Pueden creer que la contrase &ntilde;a m &aacute;s utilizada en el mundo (y en Facebook) es en realidad &quot;password &quot;&quot;123456 &quot;, &quot;12345678 &quot;, &quot;abc123 &quot;y &quot;QWERTY &quot; &nbsp;&iquest;es &nbsp; hilarante?&nbsp; Uhhhh ...&nbsp; &iquest;Cu &aacute;ntos de ustedes &nbsp; sigue utilizando el nombre del superadministrador &#39;admin &#39;o &#39;admin123 &#39;?&nbsp; Ouch ... Usted sabe que la mayor &iacute;a de los robots est &aacute;n en busca de un sitio Joomla donde el s &uacute;per administrador comienza con algo de &#39;admin &#39;y cuando encuentra uno comienza el bombardeo de acceso al administrador con cientos de miles de contrase &ntilde;as?&nbsp; El resultado en el 99% de los casos: sitio hackeado, por lo tanto &nbsp;es esencial que se cree un buen nombre de usuario.&nbsp;</p>

                        <p><strong>C&oacute;mo crear un buen nombre de usuario?</strong></p>

                        <p>Use al menos 6 caracteres alfanum &eacute;ricos (esto significa letras del alfabeto con n &uacute;meros) combinados con may &uacute;sculas y s &iacute;mbolos</p>

                        <ul className="unordered-list">
                            <li>Use solamente &nbsp; <strong>(punto). - (gui &oacute;n) _ (gui &oacute;n bajo) &nbsp;</strong> al usar s &iacute;mbolos</li>
                            <li>el nombre de usuario puede ser f &aacute;cil de recordar, pero muy dif &iacute;cil de adivinar</li>
                        </ul>

                        <p>D&eacute;jeme darle un ejemplo:&nbsp;Elija nombres de usuario y contrase &ntilde;as que utilizan letras may &uacute;sculas, n &uacute;meros y letras min &uacute;sculas y s &iacute;mbolos. Si mi nombre, por ejemplo, es Leonardo.&nbsp;Obvio que &nbsp;es malo de usar ya que los hackers utilizar el nombre y/o combinaciones de nombre para descubrir el nombre de usuario.&nbsp;Entonces elijo el nombre de Le &oacute;n, que es f &aacute;cil de recordar, pero a &uacute;n as &iacute;es f &aacute;cil de descubrir, ya que es simple y s &oacute;lo 5 caracteres.&nbsp;As &iacute;que lo modificamos y ahora va a ser f &aacute;cil de recordar: &#39;&nbsp;<strong>l3_.0n</strong> &nbsp;&#39;, que es una buena reproducci &oacute;n y f &aacute;cil de recordar nombre de usuario.&nbsp;(E = 3 o = 0, a &ntilde;adir 2 s &iacute;mbolos y hemos terminado!)&nbsp;Ahora lo m &aacute;s importante es la contrase &ntilde;a!&nbsp;</p>

                        <p>&iquest;Como crear buena contrase &ntilde;a?&nbsp;Regla 1 - La longitud de la contrase &ntilde;a&nbsp;: al &nbsp;<strong>menos 15 caracteres</strong>&nbsp;de longitud. Mientras &nbsp;m &aacute;s caracteres mejor, ya que es m &aacute;s dif &iacute;cil de descifrar.&nbsp;(20 d &iacute;gitos son el m &aacute;ximo en cPanel, por ejemplo, por cierto).&nbsp;</p>

                        <p><strong>Regla 2 - &nbsp;La complejidad de la contrase &ntilde;a</strong>&nbsp;: Use una combinaci &oacute;n de:</p>

                        <ul className="unordered-list">
                            <li>Letras min &uacute;sculas</li>
                            <li>Letras may &uacute;sculas</li>
                            <li>N&uacute;meros</li>
                            <li>S&iacute;mbolos</li>
                        </ul>

                        <p>Un muy buen &nbsp;generador de contrase &ntilde;as &nbsp;le ayudar &aacute;a crear una buena contrase &ntilde;a.&nbsp;Sin embargo, es dif &iacute;cil de recordar, por lo que otra forma de generar una contrase &ntilde;a que usted recuerde f &aacute;cilmente es utilizar una frase familiar y traducir eso en su propio sistema &nbsp;de contrase &ntilde;as &nbsp;f &aacute;cil de recordar, a qu &iacute;est &aacute;el ejemplo de mi frase de texto:&nbsp;&quot; <strong>Estoy divorciado y tengo dos hijas de catorce y veintidos a &ntilde;os</strong>&quot;.&nbsp;Ahora puedo mantener s &oacute;lo el primer d &iacute;gito de cada palabra y tengo una posible contrase &ntilde;a: &quot;&nbsp;<strong>Edytdhdcyva</strong>&quot;. &nbsp;Ahora debemos hacerla fuerte; incluimos n &uacute;meros y s &iacute;mbolos: &quot;Edyt2+hdcyva &quot;.</p>

                        <p>Ahora es &nbsp;<strong>s &uacute;per fuerte! e incluso ahora podemos pasar alg &uacute;n tiempo practicando una buena combinaci &oacute;n de <strong>segurida</strong>
                        d</strong> en la vida diaria:</p>

                        <p>El acceso a nuestras cuentas bancarias v &iacute;a internet, inicio de sessi &oacute;n en windows, etc por ejemplo.</p>

                        <p>Nunca guarde los nombres de usuario y contrase &ntilde;as en papel o en un archivo no cifrado, como el popular cliente FTP llamado Filezilla!&nbsp;Filezilla almacena las contrase &ntilde;as en texto planoUtilice un programa de c &oacute;digo abierto, como &nbsp;keypass &nbsp;para guardar sus nombres de usuario y contrase &ntilde;as encriptadas y tambi &eacute;n crean contrase &ntilde;as irrompibles (a menos que tenga una supercomputadora Cray!).&nbsp;KeePass es un administrador de contrase &ntilde;as de c &oacute;digo abierto, lo que le ayuda a administrar sus contrase &ntilde;as de manera segura.&nbsp;Usted puede poner todas tus contrase &ntilde;as en una base de datos, cerrada con una llave principal o un archivo de clave.&nbsp;Por lo que s &oacute;lo tiene que recordar una &uacute;nica contrase &ntilde;a maestra o seleccionar el archivo llave para abrir toda la base de datos.&nbsp;Las bases de datos son encriptadas usando los mejores y m &aacute;s seguros algoritmos de cifrado actualmente conocidos (AES y Twofish).</p>

                        <p><em>
                            <strong>Consejos</strong>
                        </em>
                        :</p>

                        <ul className="unordered-list">
                            <li>Nunca revele los nombres de usuario y contrase &ntilde;as a otra persona.&nbsp;</li>
                            <li>No utilice contrase &ntilde;as que se han utilizado en el pasado.</li>
                            <li>No use la misma contrase &ntilde;a para otros sitios o programas (correo electr &oacute;nico, por ejemplo, el acceso al seguro social, las oficinas de impuestos en l &iacute;nea, cuentas bancarias, etc.)&nbsp;Si se tiene acceso a uno, puedan tener acceso a todos ellos!</li>
                            <li>Nunca proporcione credenciales cuando se le solicite a trav &eacute;s de correo electr &oacute;nico.&nbsp;Empresas de confianza como Fedex, PayPal, DHL, bancos nunca le pedir &aacute;n sus credenciales por correo electr &oacute;nico</li>
                            <li>Mantener el n &uacute;mero de super administradores &nbsp;que pueden acceder a los archivos del sistema en el backend al m &iacute;nimo y no comparta su contrase &ntilde;a</li>
                            <li>Mantener el n &uacute;mero de super administradores &nbsp;que pueden acceder a los archivos del sistema en el backend al m &iacute;nimo y no comparta su contrase &ntilde;a</li>
                            <li>Cuando haya dado acceso a (desconocidas) tercera partes con sus propias contrase &ntilde;as creadas espec &iacute;ficas, eliminelos una vez que han terminado su trabajo.</li>
                            <li>Escanear virus en su dispositivo USB al insertarlo en tu computador o utilizar un programa como USB an &aacute;lisis de Panda que es &nbsp;libre para descargar: Muy recomendable ya que los robots de phishing se ocultan a menudo en el USB que sus hijos traen a casa de la escuela o de la biblioteca, etc!</li>
                        </ul>

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

export default ImportanciaDeusar;