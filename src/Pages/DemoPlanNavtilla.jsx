import { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { FaCcMastercard } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { FaJoomla } from 'react-icons/fa';

const DemoPlanNavtilla = () => {
    //   PAGE TITLE
    useEffect(() => {
        document.title = 'Demo Plantilla Boostrap Atomicai - Consultoria SEO';
    }, []);
  return (
    <>
      <section className='seo-imgne demo-plant'>
        <BreadCrumb />

        <h1 className='demo-head'>Demo Plantilla Boostrap AtomicaI</h1>

        <div className='demo-container'>
          <div className="item">

            <h3>Articulo A1</h3>

            <img src="\images\topc-2.jpg" alt="Articulo A1" width='400' height='200' />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <button className='readmore-btn'><FaCcMastercard />Leer mas</button>
          </div>

          <div className="item">
            <h3>Articulo B1</h3>
            <img src="\images\Articulo B1.jpg" alt="Articulo B1" width='400' height='200' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='readmore-btn'><FaEnvelope />Leer mas</button>
          </div>

          <div className="item">
            <h3>Articulo C1</h3>
            <img src="\images\topc-1.jpg" alt="Articulo C1" width='400' height='200' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='readmore-btn'><FaLaptop />Leer mas</button>
          </div>

          <div className="item">
            <h3>Articulo A2</h3>
            <img src='\images\topa-2.jpg' width='600' height='200' alt='Articulo A2' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='readmore-btn'><FaTwitter />Leer mas</button>
          </div>

          <div className="item">
            <h3>Articulo B2</h3>
            <img src="\images\topb-2.jpg" alt="Articulo B2" width='600' height='200' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='readmore-btn'><FaStar />Leer mas</button>
          </div>

          <div className="item">
            <h3>Articulo C2</h3>
            <img src="\images\topa-1.jpg" alt="Articulo C2" width='600' height='200' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='readmore-btn'><FaMusic />Leer mas</button>
          </div>

          <div className="item">
            <h3>Articulo A3</h3>
            <img src="\images\topa-3.jpg" alt="Articulo A3" width='400' height='200' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='readmore-btn'><FaGoogle />Leer mas</button>
          </div>

          <div className="item">
            <h3>Articulo B3</h3>
            <img src="\images\topb3.jpg" alt="Articulo B3" width='400' height='200' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='readmore-btn'><FaRocket />Leer mas</button>
          </div>

          <div className="item">
            <h3>Articulo C3</h3>
            <img src="\images\topc-3.jpg" alt="Articulo C3" width='400' height='200' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='readmore-btn'><FaJoomla />Leer mas</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DemoPlanNavtilla
