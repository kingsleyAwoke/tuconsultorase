import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';


const Ecommerce = () => {
    useEffect(() => {
        document.title = 'e-commerce - Consultoria SEO';
    }, []);
  return (
    <>
      <section className='e-commerce seo'>
        <BreadCrumb />
        <div className='main-section container'>
            
            <LeftContent />

            <div className="service-content">
                <div className='column'>
                    <div className="service-content-head"><span title="Tips Consejos <strong>SEO</strong> para sitios e-commerce">Tips Consejos <strong>SEO</strong> para sitios e-commerce</span></div>

                    <div className="service-content-txt">
                        <h2>Los siguientes son ideas y consejos relacionadas con <strong>SEO</strong> que pueden resultar útiles para su sitio de comercio electrónico (e-commerce).</h2>

                        <p><strong>1. Cosas que harán que los compradores potenciales lo piensen antes de ir más allá en el proceso de compra en su tienda online.</strong></p>

                        <Link to='#' className='primary-color'>Leer más: Tips Consejos SEO para sitios e-commerce</Link>
                    </div>
                </div>
<br />                
                <div className='column'>
                    <div className="service-content-head"><span title="Principios de dise&ntilde;o de paginas web">Principios de dise&ntilde;o de paginas web</span></div>

                    <div className="service-content-txt">
                        <p>Entre los <strong>principios</strong> para un buen <strong>dise&ntilde;o de paginas web</strong> o sitios es importante tener en cuenta la experiencia del usuario; factores como la usabilidad, navegaci&oacute;n, b&uacute;squedas, formularios, de all&iacute; que tenemos que tomar en cuenta las siguientes secciones:</p>

                        <Link to='#' className='primary-color'>Leer más: Principios de diseño de paginas web</Link>
                    </div>
                </div>
<br />
                <div className='column'>
                    <div className="service-content-head"><span title="Que aspectos considerar en e-commerce para garantizar su exito">Que aspectos considerar en e-commerce para garantizar su exito</span></div>

                    <div className="service-content-txt">
                        <p><strong>He encontrado&nbsp;empresas de comercio electrónico</strong><strong>&nbsp;qu</strong>e eligen su tecnología basada principalmente en la estética y en segundo lugar en la funcionalidad.&nbsp;Los aspectos del negocio en cuanto a tecnología de comercio electrónico a menudo se pasan por alto.</p>

                        <Link to='#' className='primary-color'>Leer más: Que aspectos considerar en e-commerce para garantizar su exito</Link>
                    </div>
                </div>                
            </div>

            <RightContent links={Links} />
        </div>

    </section>
    </>
  )
}

export default Ecommerce
