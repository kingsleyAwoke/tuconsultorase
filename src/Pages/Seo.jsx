import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';




const Seo = () => {
    useEffect(() => {
        document.title = 'SEO - Consultoria SEO';
    }, []);
  return (
    <section className='seo'>
        <BreadCrumb />
        <div className='main-section container'>
            <LeftContent />

            <div className="service-content">
                <div className='column'>
                    <div className="service-content-head"><span title=" Páginas con Texto Autogenerado ">Páginas con Texto Autogenerado</span></div>

                    <div className="service-content-txt">
                        <p>¿Google toma medidas sobre páginas generadas automáticamente que no proporcionan valor añadido?&nbsp;La respuesta es sí.&nbsp;Sin embargo; Google no es perfecto y si ves ejemplos de contenido autogenerado que se encuentra en los resultados de búsqueda que no agregan valor, como las páginas de resultados, Google quiere que envíe un informe de spam.</p>
                        
                    </div>
                </div>
<br />
                <div className='column'>
                    <div className="service-content-head"><span title="Como identificar y diagnosticar un sitio pirateado">Como identificar y diagnosticar un sitio pirateado</span></div>

                    <div className="service-content-txt">
                        <p>La importancia de <strong>identificar y diagnosticar un sitio pirateado</strong> se traduce en pérdida de visitas, clientes y violación de directrices específicas de calidad de los motores de búsqueda, siendo éste motivo para que Google emprenda acciones manuales para resolver esta infracción, perjudicando nuestro <strong>SEO</strong> o <strong>posicionamiento en los resultados de los motores de búsqueda</strong>. Una vez solucionado el problema, puedes enviar tu sitio para que se vuelva a revisar.</p>                        
                    </div>
                </div>
<br />                
                <div className='column'>
                    <div className="service-content-head"><span title="Mejoras de HTML Search Console para SEO">Mejoras de HTML Search Console para SEO</span></div>

                    <h3>Para acceder a la página Mejoras de HTML, de<strong> Search Console</strong>sigue estos pasos:</h3>

                    <ol className='ordered-list'>
                        <li>En la página principal de Search Console, haz clic en un sitio.</li>
                        <li>En el menú de la parte izquierda, haz clic en Aspecto de la búsqueda y, a continuación, en Mejoras de HTML.</li>
                    </ol>

                    <p>A continuación se indican los datos que se pueden incluir en esta página.</p>

                    <ul className='unordered-list'>
                        <li>Errores del título: posibles errores en la etiqueta del título en tus páginas, como la falta de título en la página o títulos repetidos.</li>
                        <li>Errores de metadescripciones: posibles errores generados por la falta o duplicación de metadescripciones, o por otras metadescripciones problemáticas.</li>
                        <li>Contenido no indexable: páginas cuyo contenido no es indexable, como algunos archivos multimedia, vídeos o imágenes.</li>
                    </ul>
                    <div className="service-content-txt">
                        <p>Estos errores se refieren a contenido duplicado. El contenido duplicado es perjudicial para el <strong>SEO</strong> o para la <strong>optimización para motores de búsqueda</strong>.</p>
                    </div>
                </div>
<br />
                <div className='column'>
                    <div className="service-content-head"><span title="Googlebot no puede acceder a los archivos CSS y JS">Googlebot no puede acceder a los archivos CSS y JS</span></div>

                    <div className="service-content-txt">
                        <p>Ud. Llegó a este útil artículo porque seguramente recibió este mensaje "<strong>Googlebot no puede acceder a los archivos CSS y JS</strong>" en su cónsola de herramientas para webmaster de Google.</p>
                    </div>
                </div>
<br />
                <div className='column'>
                    <div className="service-content-head"><span title="Googlebot no puede acceder a los archivos CSS y JS">Como Probar el Archivo robots.txt</span></div>

                    <div className="service-content-txt">
                        <p>Las herramientas para webmaster de Google cuenta con una función que permite probar si el archivo robots.txt bloquea el acceso de los rastreadores web de Google a URL concretas del sitio debido a la</p>

                        importancia del archivo robots.txt para la seguridad y el <strong>SEO.</strong>

                        <p>Puedes probar si el rastreador Googlebot-Video puede rastrear la url de un video que quieres bloquear en la búsqueda de videos de Google o si el rastreador Adsbot-Google puede rastrear la url de un anuncio que quieres bloquearle.</p>

                        
                    </div>
                </div>
<br />
                <div className='column'>
                    <div className="service-content-head"><span title="Porque Actualizar el Contenido Web">Porque Actualizar el Contenido Web</span></div>

                    <div className="service-content-txt">
                        <p>Bueno, según la forma en que lo veo, si no actualiza su sitio web todos los días con contenido nuevo y único, usted puede estar muerto para los motores de búsqueda, o perder una gran cantidad de visitantes diarios a su sitio. Yo no soy la única que piensa así. Este es sin duda el consenso entre los principales webmaster y sobre todo seos, ellos saben que uno de los factores más importantes para convertir un site en un site de éxito está en la constante actualización del contenido, bien sea un cibersitio, blog, canal de vídeo, podcast, etc., con nuevo contenido tan a menudo como sea posible. Por lo menos todos los días y aún más si es posible.</p>
                    </div>
                </div>
<br />
                <div className='column'>
                    <div className="service-content-head"><span title="Los Mejores Lugares en mi Página Web Para Insertar Palabras Clave">Los Mejores Lugares en mi Página Web Para Insertar Palabras Clave</span></div>

                    <div className="service-content-txt">
                        <p>¡Muy Bien! iremos directamente al punto. Esta es una lista de <strong>los mejores lugares en mi página web para insertar palabras clave</strong> y por tanto, mejorar mi <strong>SEO</strong>.</p>

                    </div>
                </div>
<br />
                <div className='column'>
                    <div className="service-content-head"><span title="Como Construir Enlaces de Manera Correcta">Como Construir Enlaces de Manera Correcta</span></div>

                    <div className="service-content-txt">
                        <p>Con las constantes actualizaciones de Google Penguin, Panda y la introducción de Colibrí, el <strong>SEO</strong> es más complejo que nunca. L as sanciones a algunos de los sitios web más populares del mundo, y la disminución constante de la prominencia de PageRank, los métodos tradicionales de <strong>SEO</strong> ya no tienen la misma importancia. Mientras que muchas técnicas ya son obsoletas, otras son temidas por su posible resultado negativo. La construcción de links es una de estas técnicas que se encuentra bajo la estricta vigilancia del pingüino. Sin embargo, esto debe ser visto como una oportunidad y no una amenaza, debido a que sigue siendo una de las formas más importantes y eficaces para clasificar su sitio web mejor. Si se realiza correctamente, puede ser una excelente manera de obtener una ventaja competitiva sobre los demás sitios web. Aquí hay algunas consejos para webmasters y expertos de <strong>SEO:</strong></p>

                    </div>
                </div>
<br />
                <div className='column'>
                    <div className="service-content-head"><span title="Herramienta Libre Investigación de Palabras Clave de SEO">Herramienta Libre Investigación de Palabras Clave de SEO</span></div>

                    <div className="service-content-txt">
                        <p>¿Alguna vez has escrito algo para publicarlo en línea y quiere que la gente sea capaz de encontrarlo?</p>

                    </div>
                </div>
<br />
                <div className='column'>
                    <div className="ordered-list-head">
                        <h3>Más artículos...</h3>
                    </div>
                </div>
            </div>

            <RightContent links={Links} />
        </div>

    </section>
  );
}

export default Seo
