import { Link } from "react-router-dom";

const FormacionJoomla = () => {
  return (
    <div className="row">
        <h3>Formación Joomla</h3>

          <img src="\images\formacion joomla1.jpg" alt="Cursos y formacion joomla" width='400' height='200' />

          <p>Tenemos 3 modalidades de cursos de este excelente gestor de contenidos. La formación abarca temas desde porqué se recomienda este gestor de contenidos, como instalarlo y otras preguntas esenciales. Todos nuestros cursos de formación de CMS son 100% personalizables. Nuestros cursos también están disponibles en <Link to='https://www.udemy.com/course/joomla-for-beginners-build-a-website-with-joomla-cms/' className="primary-color">Udemy</Link> de forma gratuita.</p>

          <Link to='https://www.udemy.com/course/joomla-for-beginners-build-a-website-with-joomla-cms/'><button className="primary-btn">Leer mas</button></Link>
      </div>
  );
}

export default FormacionJoomla
