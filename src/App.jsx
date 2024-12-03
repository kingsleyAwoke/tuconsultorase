import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Homepage from './Pages/Homepage';
import Contact from './Pages/Contact';
import Seo from './Pages/Seo';
import Joomla from './Pages/Joomla';
import Ecommerce from './Pages/Ecommerce';
import Seguridad from './Pages/Seguridad';
import Diseon from './Pages/Diseon';
import SeoImagne from './Pages/SeoImagne';
import Herramienta from './Pages/Herramienta';
import Compirobar from './Pages/Compirobar';
import Analisis from './Pages/Analisis';
import MapaDelSitio from './Pages/MapaDelSitio';
import Plantilla from './Pages/Plantilla';
import DemoPlanNavtilla from './Pages/DemoPlanNavtilla';
import Jumbotron from './Pages/Jumbotron';
import DemoModulo from './Pages/DemoModulo';
import Bloque from './Pages/Bloque';
import ModuleBloque from './Pages/ModuleBloque';
import Portafolio from './Pages/Portafolio';
import DisenoDePagainas from './Pages/DisenoDePagainas';
import Acelerar from './Pages/Acelerar';
import AltaNeBuscadores from './Pages/AltaNeBuscadores';
import AltaNeDirectories from './Pages/AltaNeDirectories';
import Auditoria from './Pages/Auditoria';
import Cursos from './Pages/Cursos';
import Eliminacion from './Pages/Eliminacion';
import Host from './Pages/Host';
import Mejoras from './Pages/Mejoras';
import Tiendas from './Pages/Tiendas';
import Optimizacion from './Pages/Optimizacion';
import PublicidadPago from './Pages/PublicidadPago';
import Soporte from './Pages/Soporte';
import Programadores from './Pages/Programadores';
import Redaccion from './Pages/Redaccion';
import Consultoria from './Pages/Consultoria';
import Limpieze from './Pages/Limpieze';

// HOME PAGE LINKS
import { Donde, Importancia, OptimizacionInterna, LasDirectories, Causesa, Htaccess } from './Pages/index';

// READMORE LINKS
import { LeeMas_Seguridad, LeeMas_Consultoria, LeeMas_Tiendas, LeeMas_Desarrollo } from './Pages/index';
import NotFoundPage from './Pages/NotFoundPage';


// APP CONTENT
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // MAINLAYOUT ROUTER
      <Route path='/' element={<MainLayout />}>

        {/* INDEX PAGE */}
        <Route index element={<Homepage />} />

        {/* BLOG PAGES */}
        <Route path='/seo' element={<Seo />} />
        <Route path='/joomla' element={<Joomla />} />
        <Route path='/e-commerce' element={<Ecommerce />} />
        <Route path='/seguridad' element={<Seguridad />} />
        <Route path='/diseon' element={<Diseon />} />

        {/* UTILIDADES PAGES */}
        <Route path='/seo-imagen' element={<SeoImagne />} />
        <Route path='/herramienta' element={<Herramienta />} />
        <Route path='/compirobar' element={<Compirobar />} />
        <Route path='/analisis' element={<Analisis />} />

        {/* MAPA DEL SITIO */}
        <Route path='/mapa-del-sitio' element={<MapaDelSitio />} />

        {/* PLANTILLA JOOMLA PAGES */}
        <Route path='/plantillas-joomla' element={<Plantilla />} />
        <Route path='/demo-plantilla' element={<DemoPlanNavtilla />} />

        {/* MODULOS PAGES */}
        <Route path='/jumbotron' element={<Jumbotron />} />
        <Route path='/demo-modulo' element={<DemoModulo />} />
        <Route path='/bloque' element={<Bloque />} />
        <Route path='/demo-modulo-bloque' element={<ModuleBloque />} />        

        {/* PORTAFOLIO */}
        <Route path='/portafolio' element={<Portafolio />} />

        {/* SERVICE PAGES */}
        <Route path='/diseno-de-pagainas-web' element={<DisenoDePagainas />} />
        <Route path='/acelerar-joomla' element={<Acelerar />} />
        <Route path='/alta-en-buscadores' element={<AltaNeBuscadores />} />
        <Route path='/alta-en-directories' element={<AltaNeDirectories />} />
        <Route path='/auditoria-de-seguridad-joomla' element={<Auditoria />} />
        <Route path='/cursos-joomla' element={<Cursos />} />
        <Route path='/eliminacion-de-malware' element={<Eliminacion />} />
        <Route path='/hosting-joomla' element={<Host />} />
        <Route path='/mejoras-de-software' element={<Mejoras />} />
        <Route path='/tiendas-online' element={<Tiendas />} />
        <Route path='/optimizacion-para-motores' element={<Optimizacion />} />
        <Route path='/publicidad-pago' element={<PublicidadPago />} />
        <Route path='/soporte-joolmla' element={<Soporte />} />
        <Route path='/programadores-PHP' element={<Programadores />} />
        <Route path='/redaccion-de-contenido' element={<Redaccion />} />
        <Route path='/consultoria-seo' element={<Consultoria />} />
        <Route path='/limpieze-sitio-hackeado' element={<Limpieze />} />

        {/* CONTACT PAGE */}
        <Route path='/contact' element={<Contact />} />

        {/* ARTICULOS */}
        <Route path='/donde' element={<Donde />} />
        <Route path='/importancia' element={<Importancia />} />
        <Route path='/optimizacion-interna' element={<OptimizacionInterna />} />
        <Route path='/las-directories' element={<LasDirectories />} />
        <Route path='/causesa' element={<Causesa />} />
        <Route path='/htaccess' element={<Htaccess />} />

        {/* READMORE LINKS */}
        <Route path='/leemas_seguridad' element={<LeeMas_Seguridad /> } />
        <Route path='/leemas_consultoria' element={<LeeMas_Consultoria /> } />
        
        <Route path='/leemas_desarrollo' element={<LeeMas_Desarrollo /> } />

        <Route path='/leemas_tiendas' element={<LeeMas_Tiendas /> } />

        {/* NOT FOUND REOUTER */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={ router } />
}

export default App;
