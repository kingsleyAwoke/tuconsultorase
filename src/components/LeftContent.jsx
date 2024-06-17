import { Link } from "react-router-dom";

const LeftContent = () => {
  return (
    <div className="subscribe-window">
        <form action="no action yet" className="subscribe-form">
            <p><strong>suscripción por email</strong></p>
            <br />
            <p>Ingrese su email</p>
            <br />
            <input type="text" name="email" className='no-focus' />
            <br />
            <br />
            <input type="submit" value="Subscribirme" className='submit-btn'/>
        </form>

        <h3>Tutorial SEO optimizacion para motores de busqueda</h3>

        <img src="\images\tutorial seo gratuito.jpg" alt="A s.e.o tutor" width='450' height='131' />

        <p>Tutorial SEO paso a paso con herramientas SEO gratuitas. Con metodología &quot;sombrero blanco &quot;que se    apega a las directrices de los motores de búsqueda, altamente ético.</p>

        <div>
            <button to='/blog/seo' className='primary-btn  tutor-window-link'>Leer mas sobre el tutorial SEO</button>
        </div>
    </div>
  );
}

export default LeftContent
