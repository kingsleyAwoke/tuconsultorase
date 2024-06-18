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
