import {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa';

const Hero = () => {

  const [text, setText] = useState('');
  return (
    <section className='hero container'>
      <div className="hero-content">
        <h1>Diseño Paginas Web SEO Acelerar Plantillas Joomla &ndash; Consultoria SEO</h1>
        <div>
          <p>Somos expertos en diseño de sitios web, seo, desarrollo de plantillas joomla, acelerar sitios joomla, seguridad web y formación joomla!.</p>
        </div>
      </div>

      <form action="http://google.com" method="get">
        <div>
          <b><label htmlFor='search-bar'>Buscar</label></b>
          <br/>
          <input type="search" placeholder='busca aquí..' className="search-box" size="25" value={text} onChange={ (e) => setText(e.target.value) } />
          <button type="submit" className='submit-btn'>Ir</button>
          <br/>
          <Link to="http://google.com" className='primary-color'>Búsqueda avanzada</Link>
        </div>
      </form>

      <div className="breadcrumbs">
        <span>Está aquí: </span>
        <Link to="/" className='primary-color'>Inicio</Link>
        <FaCaretRight className='warn-color' />
        <Link to="/servicios" className='primary-color'>front</Link>
        <FaCaretRight className='warn-color' />
        <span>Eliminación de Malware</span>
      </div>
    </section>
  );
}

export default Hero
