import { useEffect, useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';


const Analisis = () => {
    // SEARCH BOX
  const [text, setText] = useState('http://');

//   PAGE TITLE
    useEffect(() => {
        document.title = 'Analisis de página web';
    }, []);
  return (
    <>
      <section className='seo-imgne analisis'>
        <BreadCrumb />
        <div className='main-section container seo-imgne-container'>
            
            <LeftContent />

            <div className="service-content">
                <div className='column'>
                    <div className="service-content-head">
                        <span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Análisis de Página Web</span>
                    </div>
                    <h3>Por favor, ingrese la url a analizar. Por ejemplo: "http://tuconsultoraseo.com"</h3>
                    <div className="service-content-txt">
                        <form action="search" className='search-analisis'>
                        <input type="search" size="40" maxlength="255" name="URL" value={text} onChange={ (e) => setText(e.target.value) } id='search-box' />
                        
                        <input type="submit" id='search-btn' name="comprobar" value="Analisis URL" />
                        </form>
                    </div>
                </div>
            </div>

            <RightContent links={Links} />
        </div>

            <Footer />
        </section>
    </>
  );
}

export default Analisis
