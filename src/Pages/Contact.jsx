import { useEffect, useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';


const Contact = () => {
  // TEXT INPUTS
  const [text, setText] = useState('');
  const [text1, setText1] = useState('https//');
  const [text2, setText2] = useState('Ingrese el título y la URL');

  //   PAGE TITLE
    useEffect(() => {
        document.title = 'Formulario de contacto';
    }, []);
  return (
    <>
      <section className='seo-imgne'>
        <BreadCrumb />
        <div className='main-section contact'>

          <div className="service-content">
            <div className='column'>
              <div className="service-content-head">
                <span title="Demo modulo jumbotron">Formulario de contacto</span>
              </div>

              <div className="service-content-txt">
                  
                <img src="\images\contacto.png" alt="contactenos para evaluación seo gratuita y/o desarrollo de website" title="contactenos para evaluación seo gratuita y/o desarrollo de website" width='195' height=' 135' />

                <p>Por favor, pongase en contacto con nosotros en relación con CUALQUIERA de los servicios ofrecidos en este Sitio Web.</p>

                <img src="\images\evaluacion gratuita seo.png" alt="Solicite una evaluación gratuita seo" title="Solicite una evaluación gratuita seo" width="265" height="194" />

                <p>Ud. puede solicitar una evaluación SEO gratuita de su sitio web. Conozca que factores impiden que su pagina web no este posicionada en los primeros lugares en los resultados de búsqueda o simplemente solicite un presupuesto para su página web. Sus datos estarán seguros con nosotros, no serán vendidos o cedidos en ningún modo. Garantía de confidencialidad.</p>

                <p>Dejenos saber en que podemos ayudarle más allá de las cuestiones básicas de <strong>seo</strong>. Diseño y desarrollo de sitios web. Ofrecemos una perspectiva fresca a los dueños de negocios online, <strong>webmaster</strong>Analítica web, investigación de palabras clave.</p>
<br /><br />
                <form action="no action yet">
                  <div>
                    <img src="\images\alert.png" alt="Alert" width='16' height='16' />
                  </div>

                  <fieldset className='contact-form'>
                    <legend>Contactenos</legend>

                    <ul className='unordered-list'>
                      <li>
                        <label htmlFor="contact-form">
                          <strong>Nombre</strong>
                          <img src="\images\notempty.png" /></label>

                          <input type="text" />
                      </li>

                      <li>
                        <label htmlFor="contact-fom">
                          <strong>Email</strong>
                          <img src="\images\notempty.png" /></label>

                          <input type="email" />
                      </li>

                      <li>
                        <label htmlFor="contact-form">
                          <strong>Asunto</strong>
                          <img src="\images\notempty.png" /></label>

                          <input type="text" size="30" maxlength="255" />
                      </li>

                      <li>
                        <label htmlFor="contact-form">
                          <strong>Si desea una evaluación SEO gratuita ingrese el títutlo y la URL de su pagina web</strong>                        
                        </label>

                        <ul className='list-text'>
                            <li><input type="text" size="20" maxlength="255" placeholder="Etiqueta" value={text2} onChange={ (e) => setText2(e.target.value) } />

                            <input type="text" size="20" maxlength="255" placeholder="URL" value={text1} onChange={ (e) => setText1(e.target.value) } /></li>
                          </ul>
                      </li>

                      <li>
                        <label htmlFor="contact-form">
                          <strong>Mensaje</strong>
                          <img src="\images\notempty.png" />
                        </label>

                        <div>
                          <textarea name="contact-form" cols="50" rows="9"  value={text} onChange={ (e) => setText(e.target.value) }></textarea>
                        </div>
                      </li>
                    </ul>

                    <input type="button" value="Enviar mi mensaje" className='primary-btn' />
                  </fieldset>
                </form>

              </div>
            </div>
          </div>
        </div>

          <Footer />
        </section>
    </>
  );
}

export default Contact
