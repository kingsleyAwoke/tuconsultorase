import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const ComoRecperarse = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://tuconsultoraseo.com');

//   INPUT FORM
    const [input, setInput] = useState('');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Cómo optimizar el contenido multimedia para SEO - Consultoria SEO';
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
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Paso 11: Cómo optimizar el contenido multimedia para SEO</span>
                    </div>

                    <div className="service-content-txt">

                        <p>En la lección anterior del tutorial <strong>SEO</strong> ha aprendido porque tener ricos objetos multimedia, en sus <strong>páginas web</strong>para mejorar el <strong>posicionamiento</strong> en los <strong>motores</strong> de <strong>búsqueda</strong>. Y seamos sinceros - sin ellos, nadie querría leer su contenido! Ya que es crucial para los lectores, así como para los motores de búsqueda, aquí aprenderá cómo optimizar el contenido multimedia para el SEO. En realidad, esta lección tutorial <strong>SEO</strong>
                        es la parte divertida, donde se llega a ser creativo y a mejorar su sitio.</p>

                        <p>Aquí vamos a discutir los elementos <strong>SEO</strong>
                        para los objetos multimedia ricos- y significativos de uso más frecuente - imágenes, vídeo y audio. Echemos un vistazo a algunas de las mejores prácticas para la optimización de estos objetos de compromiso.</p>

                        <p>Como un pequeño repaso, los objetos multimedia mejoran sensiblemente el compromiso de los visitantes, son elementos no textuales, como imágenes, vídeos, audio y otros tipos de medios enriquecidos que ayudan a comprometer y retener el interés del visitante y elevar la calidad de su <strong>página web</strong>. Los motores de búsqueda son cada vez más adeptos a la lectura de estos elementos no textuales, pero es el trabajo de <strong>posicionamiento SEO</strong> el que permite comunicar lo que trata su contenido.</p>

                        <h2 className='primary-color'>Optimización de imagenes. Las mejores prácticas para SEO</h2>

                        <p>Es un hecho ampliamente conocido que el contenido con imágenes se comporta mejor que el contenido de texto sin formato. Sin embargo, también es un área de <strong>optimización</strong> que los propietarios de sitios con frecuencia ignoran. Aquí hay algunos consejos que le ayudarán a <strong>optimizar imágenes</strong> para la búsqueda:</p>

                        <p><strong>Atributos de imágen como Titulo, Caption Texto Alt deben ser rellenados correctamente. Los atributos de imagen son fáciles de instalar enJoomla!</strong></p>

                        <ul className="unordered-list">
                            <li>Elige una imagen que se relacione con la materia de su contenido. Más allá de ser relevante, una imagen original tiene más valor desde una perspectiva <strong>SEO</strong>
                            y la marca, ya que será única.</li>
                            <li><strong>Honra a los derechos de autor: </strong>Si usted hace uso de fotos de stock, asegúrese de pagar los derechos de licencia requeridas y darle la debida atribución. <em>(Sugerencia SEO:</em> Puede buscar imágenes libres de derechos o "creative commons", pero tenga cuidado ya que cada imagen individual puede tener sus propios requisitos de uso). Las imágenes con marcas o logos también pueden ser complicadas; debe comprobar los requisitos legales de los propietarios para asegurarse de que su usuario la usa de la manera permitida.</li>
                            <li><strong>Formato de archivo:</strong> Guarda la imagen en un formato que los motores de búsqueda puedan indexar. Con la mayoría de los editores de imágenes, puede guardar el archivo como un archivo JPEG o GIF.</li>
                            <li><strong>Nombre:</strong> Describir la imagen con la palabra clave correspondiente en el nombre del archivo.</li>
                            <li><strong>Texto ALT: Incluya un texto breve que describa la imagen en el atributo ALT (en la etiqueta de imagen HTML).</strong> Este texto puede ser leído por los motores de búsqueda y las personas (especialmente los discapacitados visuales, que utilizan el software de lectura de pantalla para "leer" una página).</li>
                            <img src="\images\optimizacion de imagenes.jpg" alt="Utilice el texto en la imagen con el atributo ALT" title="Utilice el texto en la imagen con el atributo ALT" width="400" height="400" />
                            <li><strong>Soporte de texto:</strong> Dé a la imagen un poco de contexto al describirla en un título y en el texto circundante, incluyendo las palabras clave que utilizó en el nombre del archivo y el atributo ALT.</li>
                            <li><strong>Tamaño:</strong> El tamaño importa en los archivos de la web. Es fundamental mantener los tamaños de archivo pequeños ya que esto significa que sus páginas se cargan rápidamente, lo que es de vital importancia sobre todo para una buena carga de la página, es sabido que esta velocidad de carga  influye de manera determinante en su <strong>posicionamiento</strong>
                            . porqué especificar dimensiones de imágen Consejo <strong>SEO</strong>
                            : Haga el trabajo del navegador de mostrar sus imágenes más fácil.Cambie el tamaño de cada imagen antes de subirla a su sitio web, y especifique los atributos de altura y anchura de la etiqueta de la imagen.</li>
                            <li><strong>Mapa del sitio:</strong> (Opcional) Crear un mapa del sitio XML de imagen que indique todas sus imágenes y, a continuación, lo presentará a los motores de búsqueda para una mayor visibilidad dentro de la búsqueda de imágenes. (Consulte el paso 9 para más información sobre la creación de Sitemaps XML.)</li>
                        </ul>

                        <h3>Tipos de imágenes: la elección es suya</h3>

                        <p>Hay muchos tipos de imágenes para elegir. Una <strong>foto</strong>
                        capta la atención del lector y, sobre todo si contiene los rostros de las personas. Más allá de las fotografías, considere <strong>diagramas,</strong> dibujos, <strong>ilustraciones, cuadros, gráficos, logotipos, imágenes, memes</strong>- básicamente, cualquier elemento multimedia visual que comunica su tema y está dirigido a su usuario.</p>

                        <p>Otro tipo de imagen que es muy popular (y a menudo se comparten mucho) es la <strong>infografía.</strong> La Infografías son relativamente fáciles de construir - se pueden encontrar datos a través de la investigación (citando sus fuentes, por supuesto), y luego ponerlos juntos utilizando una de las muchas herramientas infográficas gratuitas disponibles en línea. He aquí un ejemplo infografía que hicimos utilizando Piktochart:</p>

                        <img src="\images\image.jpg" alt="¿Por qué utilizar video Infografía" title="Las Infografías son relativamente fáciles de construir" width="500" height="619" />

                        <p>No olvide que la discrepancia de imágenes puede ocasionar una penalización de acción manual.</p>

                        <h2 className="primary-color">Optimización de Videos. Las mejores prácticas para SEO</h2>

                        <p>El uso de video es sin duda un factor clave en <strong>SEO</strong>
                        .</p>

                        <p>En Tu Consultora <strong>SEO</strong> consideramos que es <em>el elemento más importante</em>a tener en su arsenal de contenido multimedia.De hecho, Google tiene interés especial en el vídeo ya que posee YouTube, que se ha convertido en el segundo motor de búsqueda más popular de la web.</p>

                        <p>Hacer videos no requiere una gran inversión en equipos y software, tampoco una gran cantidad de expertos en tecnología. Algunas opciones simples, de gama baja de teléfonos inteligentes incluyen videos de captura de pantalla y Google+ <strong> Hangouts en directo</strong>
                        (es decir, conferencias de video en vivo con hasta 10 participantes para hablar desde lugares remotos, donde se filma con micrófonos portátiles y cámaras, y se convirten automáticamente en un video de YouTube).</p>

                        <p>Ya sea que sus vídeos se graban con su webcam o producciones de alta gama, tendrá que seguir algunos consejos <strong>SEO</strong>
                        para optimizar este contenido multimedia y ayudar a sus vídeos a clasificar bien cuando de busquen:</p>

                        <ul className="unordered-list">
                            <li><strong>Formato:</strong> Guarde el vídeo en un formato aceptado por los motores de búsqueda como MPG, MPEG, MOV, M4V y WMV, entre varios otros.</li>

                            <li><strong>Hosting:</strong> El uso de YouTube (o un sitio de alojamiento de vídeo similar, como Vimeo) para alojar su video y poder insertarlos en su sitio. Esto permite que el video se encuentre en las búsquedas de YouTube, así como web y video búsquedas en Google, Bing, etc.</li>
                            <li><strong>Branding:</strong> Haga su marca o sitio web visible alojando el vídeo en un sitio de terceros como YouTube. Por ejemplo, subalo al canal de YouTube de su marca, y mostre su nombre de marca en el video (una sutil referencia cerca del final funciona bien).</li>
                            <li><strong>Etiquetas:</strong> Coloque las palabras clave en el nombre de archivo del video, descripción y etiquetas de palabras clave.</li>
                            <li><strong>Texto circundante:</strong> Optimice el video con texto alrededor con palabras clave relevantes. Describa lo que el video está a punto de reproducir para que los lectores sepan qué esperar y los motores de búsqueda pueden dar sentido a su vídeo.</li>
                            <li><strong>Transcripción:</strong> Puede crear y subir una transcripción, o utilizar subtítulos y los subtítulos de YouTube como una alternativa de transcripción. <em>(Nota <strong>SEO</strong>
                                : Sus objetivos clave deberían haber sido mencionados en el video, por lo que, naturalmente, va a aparecer en la transcripción.)</em></li>
                                <li><strong>Mapa del sitio: </strong>Cree y envie un sitemap XML de vídeo para que sea más fácil para los motores de búsqueda encontrar e indexar el contenido de vídeo. (Consulte el paso 9 para más información sobre la creación de Sitemaps XML.)</li>
                        </ul>

                        <h2 className="primary-color">Optimización de Audio y Podcast para SEO</h2>

                        <p>El audio es una gran manera de añadir valor a su contenido existente al tiempo que mejora la experiencia del usuario. Los sitios de música no son los únicos que pueden ofrecer los archivos de audio de calidad, incluso los sitios que no son de música pueden encontrar maneras de enriquecer la experiencia del visitante a través del uso de audio. (Nota: Se sugiere dejar que los visitantes controlen la reproduce el audio, en lugar de comenzar el sonido de forma automática.)</p>

                        <p>El acceso generalizado a Internet en los automóviles y los teléfonos ha permitido el resurgir de los podcasts como una forma popular de consumir contenidos. Un <strong>podcast</strong>
                        es un archivo de audio digital que se puede descargar o streaming desde la web.</p>

                        <p>Millones de personas escuchan podcasts cada día para aprender nuevas habilidades, recibir noticias y actualizaciones de la industria, o escuchar un audio libro - entre muchas otras razones para escuchar podcasts. Considere la posibilidad de acoger un podcast de su sitio si usted tiene lecciones, resúmenes de noticias, entrevistas, o algún otro tipo de contenido de audio que sería interesante y útil para su público para consumir de forma regular.</p>

                        <p>Aquí hay algunos consejos para incorporar <strong>archivos de audio</strong>
                        (podcasts u otros tipos) en tu sitio multimedia:</p>

                        <ul className="unordered-list">
                            <li><strong>La Calidad:</strong> Seleccione los archivos de audio con buena calidad de sonido.</li>
                            <li><strong>Nombre del archivo:</strong> Optimice los nombres de archivo de audio con palabras clave relevantes tal como lo haría para los archivos de imagen o vídeo.</li>
                            <li><strong>Texto pertinente:</strong> Similar a los vídeos, puede crear y proporcionar una transcripción que incluya las menciones de las palabras clave. Utilice también el texto que rodea el archivo de podcast/audio para describir su contenido e incorporar palabras clave.</li>
                            <li><strong>Título, Descripción:</strong> Asegúrese de que cada episodio de su podcast tiene su propio título y descripción única.</li>
                        </ul>

                        <p>El siguiente paso en el tutorial de <strong>SEO</strong>
                        , usted aprenderá cómo organizar su sitio web utilizando la técnica silo. Esta es una técnica clave, y hemos ayudado a muchas marcas, ellas han visto mejoras rápidas y medibles en los buscadores. Usted puede comprobar que tan optimizadas estan sus imágenes utilizando nuestra gratuita <strong>herramienta seo imagen</strong>
                        . Le sugerimos que revise las imágenes de su dominio a través de ella, en forma mensual o rutinaria.</p>
                        
                        <p><strong>
                            Escriba la URL del <em>dominio</em>
                            sin / al final
                        </strong>
                        .-<strong>URL :</strong></p>
                        <form action="#">
                            <input type="text" name="URL" placeholder="http://tuconsultoraseo.com" size="60" maxlength="60" data-cke-saved-name="URL" data-cke-editable="1" value={input} onChange={ (e) => setInput(e.target.value) } />
                            <br />
                            <input type="submit" name="comprobar" value="comprobar imagenes" data-cke-saved-name="comprobar" data-cke-editable="1"/>
                        </form>

                        <p>¿Tiene problemas para <strong>optimizar</strong> el contenido multimedia de su site? llámenos +58414 357.61.81 o contactenos</p>

                        <div className="author-section">
                        <h1>Sobre la autora</h1>

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

export default ComoRecperarse;