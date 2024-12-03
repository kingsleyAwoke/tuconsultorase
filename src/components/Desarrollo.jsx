import { Link } from "react-router-dom";

const Desarrollo = () => {
  return (
    <div className="row">
        <h3>Desarrollo de Plantillas</h3>
        <img src="\images\desarrollo-web.png" alt="desarrollo de plantillas joomla responsitive" width='400' height='200' />
        <p>En el diseño de paginas web joomla la salida visual es controlada por las plantillas. Existen 2 formas de desarrollar las plantillas: Personalizada y una plantilla adaptada a sus requerimientos. Nuestra meta es alcanzar sus objetivos de negocio, el <strong>diseño de página páginas web </strong>es inútil si no cumple con sus objetivos.</p>
        <Link to='/leemas_desarrollo'><button className="primary-btn">Leer mas</button></Link>
      </div> 
  );
}

export default Desarrollo
