import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';


const Header = () => {

  const linkClass = ({ isActive }) => isActive ? 'active-link' : 'inactive-link';
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" className={linkClass}>Inicio</NavLink></li>

          <li className='dropdown'>
            <NavLink to="/blog" className={linkClass}>Blog <FaCaretDown className='caretDown' /></NavLink>
            <ul  className='dropdown-menu'>
              <li><NavLink to="/blog/seo" className={linkClass}>SEO</NavLink></li>
              <li><NavLink to="/blog/joomla" className={linkClass}>Joomla</NavLink></li>
              <li><NavLink to="/blog/e-commerce" className={linkClass}>e-Commerce</NavLink></li>
              <li><NavLink to="/blog/seguridad" className={linkClass}>Seguridad</NavLink></li>
              <li><NavLink to="/blog/diseon" className={linkClass}>Diseon</NavLink></li>
            </ul>
          </li>

          <li className='dropdown'>
              <NavLink to="/utilidades" className={linkClass}>Utilidades seo <FaCaretDown className='caretDown' /></NavLink>
            <ul className='dropdown-menu'>
              <li><NavLink to="/utilidades/seo-imagen" className={linkClass}>seo imagen</NavLink></li>
              <li><NavLink to="/utilidades/herramienta" className={linkClass}>herramienta if-Modified</NavLink></li>
              <li><NavLink to="/utilidades/compirobar" className={linkClass}>Compirobar redireccion</NavLink></li>
              <li><NavLink to="/utilidades/analisis" className={linkClass}>Analisis de pagina web</NavLink></li>
              </ul>
          </li>

          <li><NavLink to="/mapa-del-sitio" className={linkClass}>Mapa del sitio</NavLink></li>

          <li className='dropdown'>
            <NavLink to="/plantilla" className={linkClass}>Plantilla joomla gratis y de pago <FaCaretDown className='caretDown' /></NavLink>
            <ul className='dropdown-menu'>
              <li><NavLink to="/plantilla/plantillas-joomla" className={linkClass}>Plantillas Joomla gratis</NavLink></li>
              <li><NavLink to="/plantilla/demo-plantilla" className={linkClass}>Demo planNavtilla Atomical</NavLink></li>
            </ul>
          </li>
          
          <li className='dropdown'>
            <NavLink to="/modulos" className={linkClass}>Modulos <FaCaretDown className='caretDown' /> </NavLink>
              <ul className='dropdown-menu'>
                <li><NavLink to="/modulos/jumbotron" className={linkClass}>Jumbotron</NavLink></li>
                <li><NavLink to="/modulos/demo-modulo" className={linkClass}>Demo Modulo Jumbotron</NavLink></li>
                <li><NavLink to="/modulos/bloque" className={linkClass}>Bloque</NavLink></li>
                <li><NavLink to="/modulos/demo-modulo-bloque" className={linkClass}>Demo Modulo Bloque</NavLink></li>
              </ul>
          </li>

          <li><NavLink to="/portafolio" className={linkClass}>Portafolio</NavLink></li>

          <li className='dropdown'>
            <NavLink to="/servicios" className={linkClass}>Servicios <FaCaretDown className='caretDown' />  </NavLink>
            <ul className='dropdown-menu'>
              <li><NavLink to="/servicios/diseno-de-pagainas-web" className={linkClass}>Diseno de Pagainas web</NavLink></li>
              <li><NavLink to="/servicios/acelerar-joomla" className={linkClass}>Acelerar Joomla!</NavLink></li>
              <li><NavLink to="/servicios/alta-en-buscadores" className={linkClass}>Alta en buscadores</NavLink></li>
              <li><NavLink to="/servicios/alta-en-directories" className={linkClass}>Alta en Directories</NavLink></li>
              <li><NavLink to="/servicios/auditoria-de-seguridad-joomla" className={linkClass}>Auditoria de Seguridad joomla!</NavLink></li>
              <li><NavLink to="/servicios/cursos-joomla" className={linkClass}>Cursos joomla!</NavLink></li>
              <li><NavLink to="/servicios/eliminacion-de-malware" className={linkClass}>Eliminacion de malware</NavLink></li>
              <li><NavLink to="/servicios/hosting-joomla" className={linkClass}>Hosting joomla</NavLink></li>
              <li><NavLink to="/servicios/mejoras-de-software" className={linkClass}>Mejoras de software</NavLink></li>
              <li><NavLink to="/servicios/tiendas-online" className={linkClass}>Tiendas  online</NavLink></li>
              <li><NavLink to="/servicios/optimizacion-para-motores" className={linkClass}>Optimizacion Para Motores de busaueda</NavLink></li>
              <li><NavLink to="/servicios/publicidad-pago" className={linkClass}>Publicidad pago por Clic</NavLink></li>
              <li><NavLink to="/servicios/soporte-joolmla" className={linkClass}>Soporte Joomla</NavLink></li>
              <li><NavLink to="/servicios/programadores-PHP" className={linkClass}>Programadores PHP</NavLink></li>
              <li><NavLink to="/servicios/redaccion-de-contenido" className={linkClass}>Redaccion de Contenido</NavLink></li>
              <li><NavLink to="/servicios/consultoria-seo" className={linkClass}>Consultoria seo</NavLink></li>
              <li><NavLink to="/servicios/limpieze-sitio-hackeado" className={linkClass}>Limpieze Sitio hackeado</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/contact" className={linkClass}>Contactenos</NavLink></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header
