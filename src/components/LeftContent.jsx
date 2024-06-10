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

        <div className="tutor-window">
            <h3>Tutorial SEO optimizacion para motores de busqueda</h3>

            <div className="tutor-img">
                <Link to='/blog/seo'>
                <img src="\images\tutorial seo gratuito.jpg" alt="A s.e.o tutor" width='450' height='131' />
                </Link>
            </div>
        </div>

        <div className='tutor-window-txt'>
            <p>Tutorial SEO paso a paso con herramientas SEO gratuitas. Con metodología &quot;sombrero blanco &quot;que se    apega a las directrices de los motores de búsqueda, altamente ético.</p>

            <Link to='/blog/seo' className='primary-btn  tutor-window-link'>Leer mas sobre el tutorial SEO</Link>
        </div>
    </div>
  );
}

export default LeftContent
