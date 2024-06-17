import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContnet';
import { Links } from '../components/Links';
import Footer from '../components/Footer';

function Portafolio() {
    //   PAGE TITLE
    useEffect(() => {
        document.title = 'Portafolio de paginas web - Consultoria SEO';
    }, []);
  return (
    <>
      <section className='seo-imgne'>
        <BreadCrumb />
        <div className='main-section container seo-imgne-container'>
            
            <LeftContent />

            <div className="service-content">
                <div className='column'>
                    <div className="service-content-head">
                        <span title="Portafolio">Portafolio</span>
                    </div>

                    <div className="service-content-txt">

                        <img src="\images\1b-koinsurance-com-628x353.jpg" alt="koinsurance" width='628' height='353' />

                        <p>Kerrigan, Malley Bailey Insurance Agency, A home for affordable insurance coverage throughout Clinton West Boylston Shrewsbury Leominster Massachusetts.</p>

                        <Link to='http://www.koinsurance.com' target="_blank" title="koinsurance.com" className='primary-color center'>ver website</Link>

                        <img src="\images\8b-futurefit-co-uk-628x353.jpg" alt="futurefit" width='628' height='353' />

                        <Link to='http://www.futurefit.co.uk' target="_blank" title="futurefit.co.uk" className='primary-color center'>ver website</Link>

                        <p>Fitness – Accredited fitness courses from Future Fit Training. Specialising in personal trainer, nutrition &amp;pilates courses, With online Booking Options</p>

                        <img src="\images\4e-dressestime-com-628x353.jpg" alt="dressestime" width='628' height='353' />

                        <p>Online Shop For Cheap Homecoming Dresses, Prom Dresses. Dress for Prom different styles. Here, show as Dress For Sale.</p>

                        <Link to='http://www.dressestime.com' target="_blank" title="dressestime.com" className='primary-color center'>ver website</Link>

                        <img src="\images\affinitydentalclinics-co-628x353.jpg" alt="affinitydentalclinics" width='628' height='353' />

                        <p>Expert Dental Care at Affinity Dental Clinics Philippines. Dentists in Makati, Alabang, Cebu, Bacolod and Cavite.</p>

                        <Link to='http://www.affinitydentalclinics.com' target="_blank" title="affinitydentalclinics.com" className='primary-color center'>ver website</Link>

                        <div className="author-section">
                            <h1>Sobre la autora</h1>

                            <p>Author: <Link to="/contact" title='Estela Silva' className='primary-color'>Estela Silva</Link></p>

                            <p>Estela Silva es fundadora y desarrollador principal en Tu Consultora Seo, su función principal es el diseño y desarrollo de sitios web Joomla. Ella también es apasionada del posicionamiento en buscadores. Estela ha construido sitios web basados ​​en CMS Joomla desde el año 2000, así como tiendas en línea, cuando no está escribiendo PHP, Javascript o CSS.</p>
                        </div>

                        <ul>
                            <li className='pagination-li'>
                                <Link to="/portafolio" className='primary-color'>&lt;Anterior</Link>
                            </li>

                            <li className='pagination-li'>
                                <Link to="/portafolio" className='primary-color'>Siguiente&gt;</Link>
                            </li>
                        </ul>
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

export default Portafolio
