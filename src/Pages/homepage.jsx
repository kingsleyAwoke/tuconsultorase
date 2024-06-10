import {useEffect} from 'react';
import Hero from '../components/Hero';
import Main from '../components/Main';
import SecondMain from '../components/SecondMain';

const Homepage = () => {
  useEffect(() => {
    document.title = 'Diseño Paginas Web SEO Acelerar Plantillas Joomla - Consultoria SEO';
  }, []);
  return (
    <>
        <Hero />
        <Main />
        <SecondMain />
    </>
  )
}

export default Homepage
