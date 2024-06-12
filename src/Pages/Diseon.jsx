import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';


const Diseon = () => {
    useEffect(() => {
        document.title = 'Diseño - Consultoria SEO';
    }, []);
  return (
    <>
      <section className='diseon seo'>
        <BreadCrumb />
        <div className='main-section container'>
            
            <LeftContent />

            <div className="service-content">
                <div className='column'>
                    <div className="service-content-head"><span title="Problemas de Diseño de Paginas Flash">Problemas de Diseño de Paginas Flash</span></div>

                    <div className="service-content-txt">
                        <p>A pesar de que los sitios web desarrollados y diseñados en flash son hermosos, desafortunadamente <strong>la tecnología Flash es una mala elección</strong> para la mayoría de los websites comerciales. Esta tecnología rompe estándares y convenciones web. L os sitiosweb flash son generalmente agradables a la vista, pero no cumplen con una serie de criterios mínimos para los sitios web orientados a negocios.</p>

                        <Link to='/' className='primary-color'>Leer más: Problemas de Diseño de Paginas Flash</Link>
                    </div>
                </div>
<br />                
                <div className='column'>
                    <div className="service-content-head"><span title="Centrarse en el Diseño o en la Optimizacion para Motores de Busqueda">Centrarse en el Diseño o en la Optimizacion para Motores de Busqueda</span></div>

                    <h2 className='column-h2'><em>"¿Debería centrarse en una fantástica experiencia de diseño y el usuario o en la optimización de motores de búsqueda?"</em></h2>

                    <div className="service-content-txt">
                        <p>Existe un montón de casos en los que el diseño alucinante ha afectado negativamente el<strong> SEO</strong> de un sitio web. Si bien es razonable esperar que un sitio web bien diseñado, resulte en un aumento y retención de los visitantes, debe ser lo suficientemente objetivo para darse cuenta de que un buen aspecto del website no es la meta del mismo.</p>
                        
                        <p>La mayoría de los diseñadores web intencionalmente ignoran el SEO, ya que <em>"limita sus posibilidades artísticas "</em>. Pero el punto es que no hay necesidad de obviar todas las características de diseño por el bien de la optimización Los diseñadores deben trabajar en conjunto con especialistas en SEO y desarrolladores para encontrar una fórmula que satisfaga tanto las preferencias de los usuarios y los requisitos de los motores de búsqueda.</p>

                        <p>El diseño o el rediseño de un cibersitio requiere una vigilancia cuidadosa, ya que el diseño puede hacer daño inminente al SEO del mismo. El diseño tiene un gran impacto en el SEO efectivo de su site</p>

                        <h3>¿Cuáles son esos errores de diseño?</h3>

                        <p>Aquí están los errores más comunes que los diseñadores web cometen:</p>

                        <Link to='/' className='primary-color'>Leer más: Centrarse en el Diseño o en la Optimizacion para Motores de Busqueda</Link>
                    </div>
                </div>
<br />
                <div className='column'>
                    <div className="service-content-head"><span title="Fundamentos de un Buen Diseñador Web">Fundamentos de un Buen Diseñador Web</span></div>

                    <div className="service-content-txt">
                        <p><img src="\images\fundamentos de diseo web.jpg" alt="fundamentos de un buen diseñador web" width=' 408' height='124' className='service-content-img' /> El diseño web es tanto una ciencia, como una forma de arte. Mientras la mitad del trabajo se basa en cómo hacerlo y la codificación; la otra mitad se basa en tener un sentido intuitivo de lo que parece bueno y lo que no. Cualquier <strong>diseñador</strong> de <strong>páginas web</strong> que se precie va a desarrollar un fuerte núcleo de los fundamentos para hacerse destacar entre el resto de la manada.</p>

                        <p>Así que, ¿cómo desarrollar estos fundamentos? No hay sustituto para la experiencia, pero una educación sólida - ya sea formal o no - también ayuda enormemente. También es muy recomendable seguir desafiándose a si mismo e ir más allá de los límites de su zona de confort. Eso significará la diferencia entre luchar por encontrar y mantener a los clientes y la otra cara: los clientes son los que te encuentran.</p>

                        <p>Aquí están los fundamentos absolutos que todos los buenos <strong>diseñadores</strong> web deben poseer si quieren llegar a niveles sublimes. No todo implica técnica, es saber hacer.</p>

                        <Link to='/' className='primary-color'>Leer más: Fundamentos de un Buen Diseñador Web</Link>
                    </div>
                </div>                
            </div>

            <RightContent links={Links} />
        </div>

    </section>
    </>
  )
}

export default Diseon
