import {useState} from 'react';
import { Link } from 'react-router-dom';
import jumbotron5 from '../../public/images/jumbotron5.png';

const Hero = () => {
  // SEARCH BOX
  const [text, setText] = useState('');

  return (
    <section className='hero container'>
      <div className='hero-content' style={{
        backgroundImage: `url(${jumbotron5})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        padding: '65px 60px',
        marginBottom: '30px',
        fontSize: '21px',
        marginTop: '10px',
        
    }}>
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
    </section>
  );
}

export default Hero
