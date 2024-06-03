import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'

const StyledIcon = styled(FontAwesomeIcon)
`color: #333;
font-size: 12px;
`

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#" className='nav-link' id='active'>Inicio</a></li>

          <li className='dropdown'>
            <a href="#" className='nav-link'>Blog <StyledIcon icon={faCaretDown} /></a>
            <ul  className='dropdown-menu'>
              <li><a href="#" className='nav-link'>SEO</a></li>
              <li><a href="#" className='nav-link'>Joomla</a></li>
              <li><a href="#" className='nav-link'>e-Commerce</a></li>
              <li><a href="#" className='nav-link'>Seguridad</a></li>
              <li><a href="#" className='nav-link'>Diseon</a></li>
            </ul>
          </li>

          <li className='dropdown'>
              <a href="#" className='nav-link'>Utilidades seo <StyledIcon icon={faCaretDown} /> </a>
            <ul className='dropdown-menu'>
              <li><a href="#" className='nav-link'>seo imagen</a></li>
              <li><a href="#" className='nav-link'>herramienta if-Modified</a></li>
              <li><a href="#" className='nav-link'>Compirobar redireccion</a></li>
              <li><a href="#" className='nav-link'>Analisis de pagina web</a></li>
              </ul>
          </li>

          <li><a href="#" className='nav-link'>Maoa del sitio</a></li>

          <li className='dropdown'>
            <a href="#" className='nav-link'>Plantilla joomla gratis y de pago <StyledIcon icon={faCaretDown} />  </a>
            <ul className='dropdown-menu'>
              <li><a href="#" className='nav-link'>Plantillas Joomla gratis</a></li>
              <li><a href="#" className='nav-link'>Demo plantilla Atomical</a></li>
            </ul>
          </li>
          
          <li className='dropdown'>
            <a href="#" className='nav-link'>Modulos <StyledIcon icon={faCaretDown} />  </a>
              <ul className='dropdown-menu'>
                <li><a href="#" className='nav-link'>Jumbotron</a></li>
                <li><a href="#" className='nav-link'>Deno Modulo Jumbotron</a></li>
                <li><a href="#" className='nav-link'>Bloque</a></li>
                <li><a href="#" className='nav-link'>Demo Modulo Bloque</a></li>
              </ul>
          </li>

          <li><a href="#" className='nav-link'>Portafolio</a></li>

          <li className='dropdown'>
            <a href="#" className='nav-link'>Servicios <StyledIcon icon={faCaretDown} />  </a>
            <ul className='dropdown-menu'>
              <li><a href="#" className='nav-link'>Diseno de Pagainas web</a></li>
              <li><a href="#" className='nav-link'>Acelerar Joomla!</a></li>
              <li><a href="#" className='nav-link'>Alta en buscadores</a></li>
              <li><a href="#" className='nav-link'>Alta en Directories</a></li>
              <li><a href="#" className='nav-link'>Auditoria de Seguridad joomla!</a></li>
              <li><a href="#" className='nav-link'>Cursos joomla!</a></li>
              <li><a href="#" className='nav-link'>Eliminacion de malware</a></li>
              <li><a href="#" className='nav-link'>Hosting joomla</a></li>
              <li><a href="#" className='nav-link'>Mejoras de software</a></li>
              <li><a href="#" className='nav-link'>Tiendas  online</a></li>
              <li><a href="#" className='nav-link'>Optimizacion Para Motores de busaueda</a></li>
              <li><a href="#" className='nav-link'>Publicidad pago por Clic</a></li>
              <li><a href="#" className='nav-link'>Soporte Joomla</a></li>
              <li><a href="#" className='nav-link'>Programadores PHP</a></li>
              <li><a href="#" className='nav-link'>Redaccion de Contenido</a></li>
              <li><a href="#" className='nav-link'>Consultoria seo</a></li>
              <li><a href="#" className='nav-link'>Limpieze Sitio hackeado</a></li>
            </ul>
          </li>

          <li><a href="#" className='nav-link'>Contactenos</a></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header
