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
        <Route path='/blog/seo' element={<Seo />} />
        <Route path='/blog/joomla' element={<Joomla />} />
        <Route path='/blog/e-commerce' element={<Ecommerce />} />
        <Route path='/blog/seguridad' element={<Seguridad />} />
        <Route path='/blog/diseon' element={<Diseon />} />

        {/* UTILIDADES PAGES */}
        <Route path='/utilidades/seo-imagen' element={<SeoImagne />} />
        <Route path='/utilidades/herramienta' element={<Herramienta />} />
        <Route path='/utilidades/compirobar' element={<Compirobar />} />
        <Route path='/utilidades/analisis' element={<Analisis />} />

        {/* MAPA DEL SITIO */}
        <Route path='/mapa-del-sitio' element={<MapaDelSitio />} />

        {/* PLANTILLA JOOMLA PAGES */}
        <Route path='/plantilla/plantillas-joomla' element={<Plantilla />} />
        <Route path='/plantilla/demo-plantilla' element={<DemoPlanNavtilla />} />

        {/* MODULOS PAGES */}
        <Route path='/modulos/jumbotron' element={<Jumbotron />} />
        <Route path='/modulos/demo-modulo' element={<DemoModulo />} />
        <Route path='/modulos/bloque' element={<Bloque />} />
        <Route path='/modulos/demo-modulo-bloque' element={<ModuleBloque />} />        

        {/* PORTAFOLIO */}
        <Route path='/portafolio' element={<Portafolio />} />

        {/* SERVICE PAGES */}
        <Route path='/servicios/diseno-de-pagainas-web' element={<DisenoDePagainas />} />
        <Route path='/servicios/acelerar-joomla' element={<Acelerar />} />
        <Route path='/servicios/alta-en-buscadores' element={<AltaNeBuscadores />} />
        <Route path='/servicios/alta-en-directories' element={<AltaNeDirectories />} />
        <Route path='/servicios/auditoria-de-seguridad-joomla' element={<Auditoria />} />
        <Route path='/servicios/cursos-joomla' element={<Cursos />} />
        <Route path='/servicios/eliminacion-de-malware' element={<Eliminacion />} />
        <Route path='/servicios/hosting-joomla' element={<Host />} />
        <Route path='/servicios/mejoras-de-software' element={<Mejoras />} />
        <Route path='/servicios/tiendas-online' element={<Tiendas />} />
        <Route path='/servicios/optimizacion-para-motores' element={<Optimizacion />} />
        <Route path='/servicios/publicidad-pago' element={<PublicidadPago />} />
        <Route path='/servicios/soporte-joolmla' element={<Soporte />} />
        <Route path='/servicios/programadores-PHP' element={<Programadores />} />
        <Route path='/servicios/redaccion-de-contenido' element={<Redaccion />} />
        <Route path='/servicios/consultoria-seo' element={<Consultoria />} />
        <Route path='/servicios/limpieze-sitio-hackeado' element={<Limpieze />} />

        {/* CONTACT PAGE */}
        <Route path='/contact' element={<Contact />} />

        {/* NOT FOUND REOUTER */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={ router } />
}

export default App;
