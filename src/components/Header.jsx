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
            <span className={linkClass}>Blog <FaCaretDown className='caretDown' /></span>
            <ul  className='dropdown-menu'>
              <li><NavLink to="/seo" className={linkClass}>SEO</NavLink></li>
              <li><NavLink to="/joomla" className={linkClass}>Joomla</NavLink></li>
              <li><NavLink to="/e-commerce" className={linkClass}>e-Commerce</NavLink></li>
              <li><NavLink to="/seguridad" className={linkClass}>Seguridad</NavLink></li>
              <li><NavLink to="/diseon" className={linkClass}>Diseon</NavLink></li>
            </ul>
          </li>

          <li className='dropdown'>
              <span className={linkClass}>Utilidades seo <FaCaretDown className='caretDown' /></span>
            <ul className='dropdown-menu'>
              <li><NavLink to="/seo-imagen" className={linkClass}>seo imagen</NavLink></li>
              <li><NavLink to="/herramienta" className={linkClass}>herramienta if-Modified</NavLink></li>
              <li><NavLink to="/compirobar" className={linkClass}>Compirobar redireccion</NavLink></li>
              <li><NavLink to="/analisis" className={linkClass}>Analisis de pagina web</NavLink></li>
              </ul>
          </li>

          <li><NavLink to="/mapa-del-sitio" className={linkClass}>Mapa del sitio</NavLink></li>

          <li className='dropdown'>
            <span className={linkClass}>Plantilla joomla gratis y de pago <FaCaretDown className='caretDown' /></span>
            <ul className='dropdown-menu'>
              <li><NavLink to="/plantillas-joomla" className={linkClass}>Plantillas Joomla gratis</NavLink></li>
              <li><NavLink to="/demo-plantilla" className={linkClass}>Demo planNavtilla Atomical</NavLink></li>
            </ul>
          </li>
          
          <li className='dropdown'>
            <span className={linkClass}>Modulos <FaCaretDown className='caretDown' /> </span>
              <ul className='dropdown-menu'>
                <li><NavLink to="/jumbotron" className={linkClass}>Jumbotron</NavLink></li>
                <li><NavLink to="/demo-modulo" className={linkClass}>Demo Modulo Jumbotron</NavLink></li>
                <li><NavLink to="/bloque" className={linkClass}>Bloque</NavLink></li>
                <li><NavLink to="/demo-modulo-bloque" className={linkClass}>Demo Modulo Bloque</NavLink></li>
              </ul>
          </li>

          <li><NavLink to="/portafolio" className={linkClass}>Portafolio</NavLink></li>

          <li className='dropdown'>
            <span className={linkClass}>Servicios <FaCaretDown className='caretDown' />  </span>
            <ul className='dropdown-menu'>
              <li><NavLink to="/diseno-de-pagainas-web" className={linkClass}>Diseno de Pagainas web</NavLink></li>
              <li><NavLink to="/acelerar-joomla" className={linkClass}>Acelerar Joomla!</NavLink></li>
              <li><NavLink to="/alta-en-buscadores" className={linkClass}>Alta en buscadores</NavLink></li>
              <li><NavLink to="/alta-en-directories" className={linkClass}>Alta en Directories</NavLink></li>
              <li><NavLink to="/auditoria-de-seguridad-joomla" className={linkClass}>Auditoria de Seguridad joomla!</NavLink></li>
              <li><NavLink to="/cursos-joomla" className={linkClass}>Cursos joomla!</NavLink></li>
              <li><NavLink to="/eliminacion-de-malware" className={linkClass}>Eliminacion de malware</NavLink></li>
              <li><NavLink to="/hosting-joomla" className={linkClass}>Hosting joomla</NavLink></li>
              <li><NavLink to="/mejoras-de-software" className={linkClass}>Mejoras de software</NavLink></li>
              <li><NavLink to="/tiendas-online" className={linkClass}>Tiendas  online</NavLink></li>
              <li><NavLink to="/optimizacion-para-motores" className={linkClass}>Optimizacion Para Motores de busaueda</NavLink></li>
              <li><NavLink to="/publicidad-pago" className={linkClass}>Publicidad pago por Clic</NavLink></li>
              <li><NavLink to="/soporte-joolmla" className={linkClass}>Soporte Joomla</NavLink></li>
              <li><NavLink to="/programadores-PHP" className={linkClass}>Programadores PHP</NavLink></li>
              <li><NavLink to="/redaccion-de-contenido" className={linkClass}>Redaccion de Contenido</NavLink></li>
              <li><NavLink to="/consultoria-seo" className={linkClass}>Consultoria seo</NavLink></li>
              <li><NavLink to="/limpieze-sitio-hackeado" className={linkClass}>Limpieze Sitio hackeado</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/contact" className={linkClass}>Contactenos</NavLink></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header
