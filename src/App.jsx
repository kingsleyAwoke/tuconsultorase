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
import * as Articulos from './Pages/index';

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
        <Route path='/donde' element={<Articulos.Donde />} />
        <Route path='/importancia' element={<Articulos.Importancia />} />
        <Route path='/optimizacion-interna' element={<Articulos.OptimizacionInterna />} />
        <Route path='/las-directories' element={<Articulos.LasDirectories />} />
        <Route path='/como-construir' element={<Articulos.ComoConstruir />} />
        <Route path='/htaccess' element={<Articulos.Htaccess />} />
        <Route path='/como-encontrar' element={<Articulos.ComoEncontrar />} />
        <Route path='/inline-small' element={<Articulos.InlineSmall />} />
        <Route path='/causesa' element={<Articulos.Causesa />} />
        <Route path='/que-aspectos' element={<Articulos.QueAspectos />} />
        <Route path='/como-quitra' element={<Articulos.ComoQuitar />} />
        <Route path='/Enlaces' element={<Articulos.Enlaces />} />
        <Route path='/tutorial-seo' element={<Articulos.TutorialSEO />} />
        <Route path='/como-agregar' element={<Articulos.ComoAgregar />} />
        <Route path='/que-significa' element={<Articulos.QueSignifica />} />
        <Route path='/como-las' element={<Articulos.ComoLas />} />
        <Route path='/Como-especifcar' element={<Articulos.ComoEspecifcar />} />
        <Route path='/que-características' element={<Articulos.QueCaracteristicas />} />
        <Route path='/que-hacer' element={<Articulos.QueHacer />} />
        <Route path='/configuracion' element={<Articulos.Configuracion />} />
        <Route path='/enlaces-pagados' element={<Articulos.EnlacesPagadon />} />
        <Route path='/recursos' element={<Articulos.Recursos />} />
        <Route path='/resireccionamientos' element={<Articulos.Redireccionamientos />} />
        <Route path='/como-usar' element={<Articulos.ComoUsar />} />
        <Route path='/tutorial-permisos' element={<Articulos.TutorialPermisos />} />
        <Route path='/porque-minimizer' element={<Articulos.PorqueMinimizer />} />
        <Route path='/importancia' element={<Articulos.Importancia />} />
        <Route path='/Como-crear' element={<Articulos.ComoCrear />} />
        <Route path='/importancia-de-usar' element={<Articulos.ImportanciaDeusar />} />
        <Route path='/como-afecta' element={<Articulos.ComoAfecta />} />
        <Route path='/Como-configurar' element={<Articulos.ComoConfigurar />} />
        <Route path='/por-que' element={<Articulos.PorQue />} />
        <Route path='/como-quitar' element={<Articulos.ComoQuitar />} />
        <Route path='/problemas' element={<Articulos.Problemas />} />
        <Route path='/como-puedo' element={<Articulos.ComoPuedo />} />
        <Route path='/joomla-contenido' element={<Articulos.JoomlaContenido />} />
        <Route path='/Como-probar-el' element={<Articulos.ComoProbarEl />} />
        <Route path='/tutorial-como-crear' element={<Articulos.TutorialComoCrear />} />
        <Route path='/porque-mi-sitio' element={<Articulos.PorqueMiSitio />} />
        <Route path='/procedimientos' element={<Articulos.Procedimientos />} />
        {/* <Route path='/procesar-paginas' element={<Articulos.pr />} /> */}
        <Route path='/como-recperarse' element={<Articulos.ComoRecperarse />} />
        <Route path='/importancia-palabras' element={<Articulos.ImportanciaPalabras />} />
        <Route path='/como-recuperarse-del' element={<Articulos.ComoRecuperarseDel />} />
        <Route path='/proteja-su-sitio' element={<Articulos.ProtejaSuSition />} />
        <Route path='/como-proteger' element={<Articulos.ComoProteger />} />
        <Route path='/las-vulnerabilidades' element={<Articulos.LasVulnerabilidades />} />
        <Route path='/como-crear-un' element={<Articulos.ComoCrearUn />} />
        <Route path='/por-que-disminuya' element={<Articulos.PorQueDisminuya />} />




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
